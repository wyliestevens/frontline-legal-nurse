/**
 * Daily Blog Post Generator for Frontline Legal Nurse Consulting
 *
 * This script calls the Anthropic API to generate a new SEO-optimized blog post
 * and appends it to the blog-data.ts file.
 *
 * Requirements:
 * - Set ANTHROPIC_API_KEY as a GitHub secret
 * - Runs via GitHub Actions on a schedule (M-F)
 *
 * To run manually: ANTHROPIC_API_KEY=your-key node scripts/generate-blog-post.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const BLOG_DATA_PATH = path.join(__dirname, '..', 'src', 'lib', 'blog-data.ts');

const TOPICS = [
  "How legal nurse consultants help attorneys prepare for depositions",
  "The difference between a legal nurse consultant and a medical expert witness",
  "Why medical malpractice cases need clinical expertise on the legal team",
  "How to evaluate the strength of a personal injury case using medical records",
  "Common mistakes attorneys make when reviewing medical records without clinical help",
  "What attorneys need to know about standard of care in medical malpractice",
  "How a case chronology strengthens your demand package",
  "The role of medical causation in personal injury settlements",
  "Why early medical record review saves time and money in litigation",
  "How legal nurse consultants identify gaps in medical treatment timelines",
  "What to look for in opposing expert medical opinions",
  "How medical record disorganization weakens your case strategy",
  "The value of a fact summary report in settlement negotiations",
  "Why product liability cases need specialized medical review",
  "How toxic tort cases benefit from legal nurse consulting",
  "Building a stronger wrongful death case with medical expertise",
  "How to use medical chronologies to prepare clients for depositions",
  "The hidden costs of not using a legal nurse consultant",
  "What nursing home abuse cases reveal during medical record review",
  "How to spot medical record alterations and inconsistencies",
  "Why workers compensation cases need clinical expertise",
  "The connection between medical record quality and settlement value",
  "How legal nurse consultants support class action medical litigation",
  "What attorneys should ask when hiring a legal nurse consultant",
  "How to maximize case value with comprehensive medical analysis",
];

function getRandomTopic() {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
  );
  return TOPICS[dayOfYear % TOPICS.length];
}

function makeSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 80);
}

async function callAnthropic(prompt) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY environment variable is not set');
  }

  const body = JSON.stringify({
    model: 'claude-sonnet-4-5-20250929',
    max_tokens: 2000,
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
  });

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'api.anthropic.com',
        path: '/v1/messages',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            const parsed = JSON.parse(data);
            if (parsed.content && parsed.content[0]) {
              resolve(parsed.content[0].text);
            } else {
              reject(new Error('Unexpected API response: ' + data));
            }
          } catch (e) {
            reject(e);
          }
        });
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function generateBlogPost() {
  const topic = getRandomTopic();
  const today = new Date().toISOString().split('T')[0];

  const prompt = `You are writing a blog post for Frontline Legal Nurse Consulting, a legal nurse consulting firm run by Wylie Stevens, BSN, RN. The firm helps attorneys with medical record review, case chronologies, fact summary reports, and case merit reviews for personal injury, medical malpractice, toxic tort, and product liability cases.

Write a blog post about: "${topic}"

Requirements:
- Write in a direct, professional tone. No fluff. No filler.
- Use active voice and short sentences.
- Target audience: attorneys handling medical-legal cases.
- Focus on practical value and outcomes.
- Do not use the words: can, may, just, that, actually, probably, basically, could, however, remarkable.
- Do not use emojis, ellipses, em dashes, or semicolons.
- Include a clear title (different from the topic if you have a better angle).
- Include 4-6 paragraphs with bold subheadings marked as **Subheading**.
- End with a brief call to action mentioning Frontline Legal Nurse Consulting.

Return the response in this exact JSON format (no markdown code blocks, raw JSON only):
{
  "title": "The blog post title",
  "excerpt": "A 1-2 sentence summary for the blog listing page",
  "content": "The full blog post content with **bold subheadings** separated by double newlines",
  "category": "One of: Legal Nurse Consulting, Case Strategy, Services, Medical Records, Attorney Tips",
  "readTime": "X min read",
  "metaDescription": "SEO meta description under 160 characters",
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"]
}`;

  console.log(`Generating blog post about: ${topic}`);
  const response = await callAnthropic(prompt);

  let postData;
  try {
    postData = JSON.parse(response);
  } catch {
    // Try extracting JSON from response
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      postData = JSON.parse(jsonMatch[0]);
    } else {
      throw new Error('Failed to parse AI response as JSON');
    }
  }

  const slug = makeSlug(postData.title);

  // Read existing blog data
  let blogData = fs.readFileSync(BLOG_DATA_PATH, 'utf8');

  // Create the new post entry
  const newPost = `  {
    slug: "${slug}",
    title: ${JSON.stringify(postData.title)},
    excerpt: ${JSON.stringify(postData.excerpt)},
    content: ${JSON.stringify(postData.content)},
    date: "${today}",
    author: "Wylie Stevens, BSN, RN",
    category: ${JSON.stringify(postData.category)},
    readTime: ${JSON.stringify(postData.readTime)},
    metaDescription: ${JSON.stringify(postData.metaDescription)},
    keywords: ${JSON.stringify(postData.keywords)},
  }`;

  // Insert the new post at the beginning of the blogPosts array
  blogData = blogData.replace(
    'export const blogPosts: BlogPost[] = [\n',
    `export const blogPosts: BlogPost[] = [\n${newPost},\n`
  );

  fs.writeFileSync(BLOG_DATA_PATH, blogData);
  console.log(`Blog post generated: "${postData.title}" (${slug})`);
  console.log(`Date: ${today}`);
}

generateBlogPost().catch((err) => {
  console.error('Error generating blog post:', err);
  process.exit(1);
});
