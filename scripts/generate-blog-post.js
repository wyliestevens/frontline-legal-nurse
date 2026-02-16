/**
 * Daily Blog Post Generator for Frontline Legal Nurse Consulting
 *
 * Generates expert-level legal nurse consulting content 5 days per week.
 * Written from the perspective of a 20-year healthcare veteran who has
 * reviewed thousands of medical records and worked hundreds of cases.
 *
 * Requirements:
 * - ANTHROPIC_API_KEY as a GitHub secret
 * - Runs via GitHub Actions M-F at 7 AM UTC
 *
 * Manual run: ANTHROPIC_API_KEY=your-key node scripts/generate-blog-post.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const BLOG_DATA_PATH = path.join(__dirname, '..', 'src', 'lib', 'blog-data.ts');

// 260 unique topics covering a full year of weekday posts without repeating.
// Organized by category so the blog covers every angle an attorney needs.
const TOPICS = [
  // MEDICAL RECORD DEEP DIVES (52 topics)
  "How to read a nursing assessment and why it matters more than the physician note",
  "What medication administration records reveal about nursing home neglect",
  "How to spot altered or late entries in electronic health records",
  "The difference between medical records from a trauma center vs a community hospital and why it matters to your case",
  "What vital sign trends tell you about whether a patient was properly monitored",
  "How to interpret radiology reports when the imaging tells a different story than the treating physician",
  "Why operative reports are the most underused evidence in surgical malpractice cases",
  "What discharge summaries hide and how to find the real story in the chart",
  "How lab values prove or disprove causation in toxic exposure cases",
  "Reading between the lines of nursing notes to find deviations from the standard of care",
  "What intake and triage records reveal about emergency room malpractice",
  "How pharmacy records expose dangerous drug interactions missed by prescribers",
  "Why physical therapy records are critical evidence in personal injury cases",
  "What billing records reveal about treatments that were or were not performed",
  "How to identify missing pages and incomplete records before they become a problem at trial",
  "What respiratory therapy records prove in cases involving ventilator mismanagement",
  "How wound care documentation supports or destroys a pressure ulcer case",
  "What fetal monitoring strips really show in birth injury litigation",
  "How surgical count sheets and time-out documentation prove retained foreign body cases",
  "Why informed consent documents rarely prove what the defense claims they prove",
  "What ambulance run reports reveal about prehospital care failures",
  "How to analyze a medication reconciliation for evidence of prescribing errors",
  "What fall risk assessments tell you about whether a facility met the standard of care",
  "How pain management records support claims of delayed diagnosis",
  "What nutritional assessments reveal in nursing home malnutrition cases",
  "How telemetry records prove cardiac monitoring failures",
  "What psychiatric records show about involuntary hold violations",
  "How blood bank records prove or disprove transfusion reaction claims",
  "What anesthesia records reveal about intraoperative complications",
  "How rehabilitation records prove the true extent of a plaintiff's injuries",
  "What home health records reveal about post-discharge care failures",
  "How infection control logs prove hospital-acquired infection claims",
  "What shift change reports reveal about communication breakdowns in nursing care",
  "How hospice records are used and misused in wrongful death cases",
  "What patient safety event reports reveal when obtained through discovery",
  "How dialysis treatment records prove negligent monitoring",
  "What occupational therapy records reveal about functional limitations after injury",
  "How speech therapy records support traumatic brain injury claims",
  "What neonatal intensive care records prove in birth injury litigation",
  "How dental records are used as evidence in identification and assault cases",
  "What chiropractic records prove about pre-existing conditions in personal injury cases",
  "How optometry and ophthalmology records support delayed diagnosis claims",
  "What dermatology records reveal in failure-to-diagnose skin cancer cases",
  "How oncology treatment records prove deviation from established treatment protocols",
  "What orthopedic records show about unnecessary or premature surgical intervention",
  "How cardiology records prove delayed intervention in heart attack cases",
  "What endocrinology records reveal in diabetes mismanagement claims",
  "How gastroenterology records support failure-to-diagnose colorectal cancer",
  "What urology records prove about catheter-associated complications",
  "How pulmonology records support occupational lung disease claims",
  "What neurology records reveal in delayed stroke diagnosis cases",
  "How records from multiple providers expose fragmented care that harmed the patient",

  // CASE STRATEGY AND LITIGATION SUPPORT (52 topics)
  "How a well-built medical chronology increases the value of your demand package by six figures",
  "The three questions every attorney should ask before accepting a medical malpractice case",
  "Why the first 48 hours of medical records determine the strength of your entire case",
  "How to use medical records to prepare your client for a defense medical exam",
  "What your opposing expert is looking for in the medical records and how to get ahead of it",
  "How to identify the right defendants in a multi-provider medical malpractice case",
  "Why a brief summary of causation is the most powerful tool in settlement negotiations",
  "How to use medical record gaps to your advantage in deposition",
  "The difference between a medical expert witness and a legal nurse consultant and when you need each",
  "How legal nurse consultants help attorneys identify spoliation of medical evidence",
  "Why reviewing records before the expert witness saves thousands in expert fees",
  "How to handle conflicting medical opinions in your case file",
  "What to do when the medical records support the defense more than your client",
  "How a case merit review prevents you from investing six months in an unwinnable case",
  "Why discovery requests for medical records need clinical input to be comprehensive",
  "How legal nurse consultants strengthen your cross-examination of defense medical experts",
  "The role of medical literature in proving deviation from the standard of care",
  "How to use a case chronology to expose inconsistencies in a defendant physician's testimony",
  "Why your medical malpractice case needs a damages analysis beyond the economic report",
  "How to build a compelling medical narrative for mediation",
  "What to do when records from a key provider are conveniently unavailable",
  "How to use clinical practice guidelines as evidence in malpractice litigation",
  "Why most attorneys miss the nursing standard of care entirely",
  "How to prepare interrogatories that extract the most useful clinical information",
  "The role of a legal nurse consultant in Daubert challenge preparation",
  "Why timing matters in medical record requests and what happens when you wait too long",
  "How to use hospital policy and procedure manuals in your case strategy",
  "What peer review protection means and how to work around it in discovery",
  "How to handle HIPAA objections that obstruct your medical record discovery",
  "Why your demand package needs a medical narrative and not a records dump",
  "How legal nurse consultants identify the moment the standard of care was breached",
  "What makes a medical malpractice screening certificate strong versus weak",
  "How to use medical records to prove a pattern of negligent care at a facility",
  "Why surgical complication cases require a step-by-step operative timeline",
  "How to link pre-existing conditions to new injuries without weakening your case",
  "What defense counsel looks for in medical records to discredit your client",
  "How to use medical records to prove pain and suffering beyond subjective complaints",
  "Why your personal injury case needs a functional capacity evaluation and what it proves",
  "How to build a life care plan case with input from a legal nurse consultant",
  "What medical record evidence supports punitive damages in healthcare negligence",
  "How to address the empty chair defense when a settling defendant leaves the case",
  "Why your case chronology needs to include the patient's own statements from the chart",
  "How to use pharmacy benefit manager records in opioid litigation",
  "What quality improvement records reveal and how to get access to them",
  "How to prove a hospital's understaffing contributed to patient harm",
  "Why nurse-to-patient ratios matter in negligence cases and how to prove the ratio was unsafe",
  "How to use Centers for Medicare and Medicaid Services survey data in nursing home cases",
  "What The Joint Commission standards mean for your hospital negligence case",
  "How to challenge a defense expert who ignores evidence in the medical record",
  "Why early case screening with a legal nurse consultant reduces litigation costs",
  "How to use a medical literature search to strengthen your causation argument",
  "What sentinel event data reveals about systemic failures in hospital care",

  // PRACTICE AREA SPOTLIGHTS (52 topics)
  "Birth injury cases: what the fetal heart rate tracings prove about when intervention was needed",
  "Surgical malpractice: how to prove the wrong procedure was performed",
  "Nursing home abuse: the medical evidence that proves neglect versus aging",
  "Emergency room malpractice: proving the triage nurse missed the signs",
  "Delayed cancer diagnosis: how treatment records prove the window was missed",
  "Medication error cases: tracing the failure from prescriber to pharmacist to nurse",
  "Falls in hospitals: what the chart proves about whether prevention protocols were followed",
  "Pressure ulcer litigation: the staging system and why documentation timing matters",
  "Anesthesia malpractice: what the anesthesia record must contain and what goes wrong",
  "Sepsis cases: proving the hospital failed to follow the sepsis protocol bundle",
  "Spinal cord injury from medical negligence: proving the mechanism of injury",
  "Failure to rescue: how to prove a hospital ignored deteriorating vital signs",
  "Retained surgical instruments: the documentation trail from pre-op to post-op",
  "Wrong-site surgery: how the medical record proves the timeout process failed",
  "Cerebral palsy birth injury: connecting oxygen deprivation to long-term outcomes",
  "Robotic surgery complications: what the operative log reveals about equipment and technique",
  "Cosmetic surgery malpractice: proving deviation from informed consent and standard technique",
  "Dental malpractice: how treatment records prove nerve damage from routine procedures",
  "Misdiagnosis of heart attack: what the EKG and troponin timeline reveal",
  "Pediatric malpractice: the unique standard of care issues in treating children",
  "Psychiatric malpractice: proving a facility failed to prevent patient self-harm",
  "Ophthalmology malpractice: how surgical and post-op records prove vision loss from negligence",
  "Kidney failure from medication: proving the prescriber ignored lab values",
  "Blood clot cases: proving the hospital failed to provide DVT prophylaxis",
  "Gastric bypass complications: what the surgical and post-op records must show",
  "Mismanaged diabetes leading to amputation: the medical record timeline that proves it",
  "Prostate cancer misdiagnosis: how urology records prove delayed screening",
  "Breast cancer delayed diagnosis: proving the mammogram was misread or the follow-up was missed",
  "Lung cancer delayed diagnosis: how radiology reports prove the lesion was visible months earlier",
  "Stroke misdiagnosis: proving the ER failed to follow acute stroke protocols",
  "Meningitis misdiagnosis: how the records prove the lumbar puncture should have been done sooner",
  "Appendicitis misdiagnosis: proving delayed surgery caused a ruptured appendix",
  "Toxic tort cases: how occupational health records link exposure to disease",
  "Product liability medical cases: connecting a defective device to documented injuries",
  "Workers compensation medical disputes: how to prove the injury is work-related using clinical evidence",
  "Mass tort pharmaceutical cases: how individual medical records support class-wide claims",
  "Wrongful death from hospital neglect: building the medical narrative from admission to death",
  "Veteran medical malpractice: the unique challenges of VA hospital records",
  "Telemedicine malpractice: how virtual visit records differ and what they prove",
  "Concussion and TBI litigation: what neurological testing records reveal about long-term damage",
  "Opioid overprescription cases: how prescription drug monitoring data supports your case",
  "Elder abuse in assisted living: the medical evidence that distinguishes abuse from natural decline",
  "Maternal mortality cases: how labor and delivery records prove preventable death",
  "NICU malpractice: proving a premature infant received substandard care",
  "Implant failure cases: linking surgical records and device tracking to manufacturer defects",
  "Ambulatory surgery center negligence: how outpatient procedure records differ from hospital records",
  "Urgent care malpractice: proving the provider should have referred to the emergency room",
  "Home health negligence: proving the visiting nurse failed to escalate a deteriorating patient",
  "Infection after surgery: proving the OR failed to follow sterile technique protocols",
  "Radiology malpractice: how to prove a radiologist missed findings on imaging",
  "Pathology malpractice: proving a lab misread a biopsy that delayed a cancer diagnosis",
  "Pharmacy malpractice: how dispensing records prove the wrong drug or dose was given",

  // BUSINESS AND INDUSTRY INSIGHTS (52 topics)
  "What attorneys should look for when hiring a legal nurse consultant for the first time",
  "How a legal nurse consultant reduces your paralegal's workload by 40 hours per case",
  "The ROI of using a legal nurse consultant on every medical-legal case",
  "Why small and mid-size firms benefit the most from legal nurse consulting services",
  "How to integrate a legal nurse consultant into your existing case workflow",
  "The difference between freelance legal nurse consultants and a managed LNC firm",
  "Why turnaround time on medical record review matters for your litigation timeline",
  "How to evaluate the quality of a case chronology before using it in court",
  "What a legal nurse consultant's work product should look like",
  "How legal nurse consultants and medical expert witnesses work together on a case",
  "Why your intake process should include a legal nurse consultant's preliminary review",
  "How digital medical records changed the way legal nurse consultants work",
  "The growing demand for legal nurse consultants in mass tort litigation",
  "How legal nurse consultants help insurance companies evaluate claim validity",
  "Why government agencies use legal nurse consultants for fraud investigation",
  "How a legal nurse consultant helps you decide which cases to accept and which to decline",
  "The continuing education requirements that keep legal nurse consultants current",
  "How AI is changing medical record review and why clinical expertise still matters",
  "What to expect from a legal nurse consultant's initial case screening report",
  "How to budget for legal nurse consulting services on a contingency case",
  "Why virtual legal nurse consulting delivers the same quality as on-site review",
  "How legal nurse consultants handle cases involving multiple states and jurisdictions",
  "The role of legal nurse consultants in qui tam and False Claims Act cases",
  "How to use a legal nurse consultant's findings to negotiate before filing suit",
  "Why defense firms are hiring legal nurse consultants to review their own cases",
  "How legal nurse consultants help with Americans with Disabilities Act medical claims",
  "The role of legal nurse consultants in long-term disability insurance disputes",
  "How tribal law medical cases benefit from legal nurse consulting expertise",
  "Why immigration attorneys use legal nurse consultants for medical evidence in asylum cases",
  "How legal nurse consultants support military medical malpractice claims under the FTCA",
  "What law firm administrators need to know about managing LNC vendor relationships",
  "How to present a legal nurse consultant's findings to a jury in plain language",
  "Why your firm needs a standard process for medical record review on every case",
  "How legal nurse consultants identify opportunities for structured settlements in catastrophic injury",
  "The role of a legal nurse consultant in guardianship and conservatorship proceedings",
  "How legal nurse consultants support elder law attorneys with medical evidence",
  "Why real estate attorneys sometimes need legal nurse consultants for mold and environmental cases",
  "How a legal nurse consultant helps you prepare a day-in-the-life video for trial",
  "What attorneys should know about AALNC certification and why it matters",
  "How to use a legal nurse consultant's analysis in your opening and closing statements",
  "Why your medical malpractice screening panel benefits from clinical input",
  "How legal nurse consultants are used in state medical board complaint proceedings",
  "The expanding role of legal nurse consultants in healthcare compliance investigations",
  "How to use medical record analysis to support motions for summary judgment",
  "Why mediation preparation with a legal nurse consultant leads to higher settlements",
  "How legal nurse consultants help with Social Security Disability medical evidence",
  "What veteran disability attorneys need from a legal nurse consultant",
  "How legal nurse consultants support attorneys in child abuse and neglect proceedings",
  "Why insurance defense firms are the fastest-growing segment of legal nurse consulting clients",
  "How a legal nurse consultant saves you from hiring the wrong medical expert witness",
  "The future of legal nurse consulting and what it means for attorneys",
  "Why every personal injury attorney needs a legal nurse consultant on speed dial",

  // ATTORNEY EDUCATION (52 topics)
  "Medical terminology crash course for attorneys: the 50 terms you need to know",
  "How to read a hospital chart without a medical degree",
  "What ICD-10 codes mean and how they affect your case strategy",
  "How CPT codes reveal what procedures were actually performed versus what was billed",
  "Understanding the hierarchy of medical providers and what each one documents",
  "What SOAP notes are and how to use them in case preparation",
  "How to read a pathology report and understand tumor staging",
  "What a complete blood count tells you and when abnormal values matter in litigation",
  "How to read an EKG report and understand cardiac findings in malpractice cases",
  "What MRI and CT findings mean in traumatic brain injury litigation",
  "How to understand infection markers in sepsis and hospital-acquired infection cases",
  "What blood gas values prove about respiratory failure and ventilator management",
  "How to read a radiology report and understand what was and was not visualized",
  "Understanding the Glasgow Coma Scale and its importance in head injury cases",
  "What Apgar scores tell you about a newborn's condition at birth in birth injury cases",
  "How to understand medication dosing errors and their clinical significance",
  "What nursing assessment scales mean: Braden, Morse, pain scales, and their legal significance",
  "How to understand surgical pathology findings in cancer misdiagnosis cases",
  "What hemodynamic monitoring values mean in critical care malpractice",
  "How to read an autopsy report for evidence of medical negligence",
  "Understanding the chain of custody for medical specimens in pathology malpractice",
  "What the American Heart Association guidelines mean for cardiac care malpractice",
  "How to understand antibiotic sensitivity reports in infection mismanagement cases",
  "What ventilator settings reveal about respiratory care decisions",
  "How to interpret toxicology reports in overdose and poisoning cases",
  "What the National Institutes of Health stroke scale tells you about stroke severity",
  "How to understand organ donation records in wrongful death cases",
  "What the Rancho Los Amigos Scale reveals about brain injury recovery and prognosis",
  "How to read a burn assessment using the Rule of Nines in burn injury litigation",
  "Understanding the TNM staging system in cancer misdiagnosis cases",
  "What pediatric growth charts reveal about failure to thrive in child neglect cases",
  "How to understand the medical examiner's findings versus the hospital death summary",
  "What the APACHE score tells you about a patient's severity of illness in ICU cases",
  "How to interpret echocardiogram findings in cardiac malpractice",
  "Understanding wound classification systems in surgical site infection cases",
  "What the Wells Score and D-dimer results prove in missed blood clot cases",
  "How to read a spirometry report in occupational lung disease litigation",
  "Understanding the CURB-65 score in pneumonia mismanagement cases",
  "What the MELD score reveals about liver disease management in transplant cases",
  "How to interpret urinalysis results in kidney disease and UTI cases",
  "Understanding the dermatome map and its importance in spinal injury cases",
  "What the American Spinal Injury Association scale proves about spinal cord damage",
  "How to read a bone density scan report in osteoporosis-related fracture cases",
  "Understanding the Mallampati score and its relevance to intubation malpractice",
  "What the Richmond Agitation-Sedation Scale reveals about ICU sedation practices",
  "How to interpret nerve conduction study results in peripheral nerve injury cases",
  "Understanding blood type compatibility errors in transfusion reaction cases",
  "What the Child-Pugh score tells you about liver function in hepatotoxicity cases",
  "How to read an echocardiogram stress test in missed cardiac diagnosis cases",
  "Understanding the CAGE questionnaire and its role in medication prescribing cases",
  "What hemoglobin A1C values prove about diabetes management over time",
  "How to interpret lumbar puncture results in meningitis misdiagnosis cases",
];

function getTodaysTopic() {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 1);
  const dayOfYear = Math.floor((today - startOfYear) / (1000 * 60 * 60 * 24));

  // Check which topics have already been used this year
  let blogData;
  try {
    blogData = fs.readFileSync(BLOG_DATA_PATH, 'utf8');
  } catch {
    blogData = '';
  }

  // Rotate through topics based on day of year, skip any already used
  const yearTopics = [...TOPICS];
  const startIndex = dayOfYear % yearTopics.length;

  for (let i = 0; i < yearTopics.length; i++) {
    const idx = (startIndex + i) % yearTopics.length;
    const topic = yearTopics[idx];
    const topicSlug = topic.toLowerCase().replace(/[^a-z0-9\s]/g, '').substring(0, 40);
    if (!blogData.includes(topicSlug)) {
      return topic;
    }
  }

  // If somehow all used, fall back to day-based selection
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
    max_tokens: 3000,
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
  const topic = getTodaysTopic();
  const today = new Date().toISOString().split('T')[0];

  const prompt = `You are Wylie Stevens, BSN, RN, founder of Frontline Legal Nurse Consulting, with 20 years of healthcare experience and extensive medical-legal case work. You have personally reviewed thousands of medical records for attorneys handling personal injury, medical malpractice, toxic tort, product liability, wrongful death, workers compensation, and nursing home abuse cases. You lead a team with access to thousands of legal nurse consultants nationwide.

You are writing a blog post for attorneys who handle medical-legal cases. Write with the authority of someone who has seen these issues firsthand in real case files. Your tone is direct, clinical, and practical. You do not use filler. You do not hedge. You state what you know from experience.

Write a blog post about: "${topic}"

STRICT WRITING RULES:
- Write in active voice. Use short, punchy sentences.
- Speak directly to the attorney reading this. Use "you" and "your."
- Be specific. Use real clinical details, medical terminology, and concrete examples.
- Every paragraph delivers actionable information the attorney uses in their next case.
- Do not use these words: can, may, just, that, actually, probably, basically, could, however, remarkable, unlock, discover, revolutionize, paradigm, shed light.
- Do not use emojis, ellipses, em dashes, or semicolons.
- Do not start any sentence with "In the world of" or "When it comes to" or "In today's" or "As a."
- Do not include any disclaimers or "consult your attorney" language. Your reader IS the attorney.
- Do not write a conclusion paragraph. End on a strong, specific point.
- Include a final line: "Frontline Legal Nurse Consulting reviews medical records for attorneys who refuse to leave money on the table. Call (928) 223-4233 or visit frontlinelegalnurse.com."

STRUCTURE:
- Title: 8-12 words. Direct. No clickbait. No colons.
- 5-7 paragraphs with bold subheadings marked as **Subheading**
- Each paragraph is 3-5 sentences of dense, useful information.
- Total length: 600-900 words.

Return the response in this exact JSON format (no markdown code blocks, raw JSON only):
{
  "title": "The blog post title",
  "excerpt": "A 1-2 sentence summary under 200 characters for the blog listing page",
  "content": "The full blog post content with **bold subheadings** separated by double newlines",
  "category": "One of: Medical Records, Case Strategy, Practice Areas, Attorney Education, Industry Insights",
  "readTime": "X min read",
  "metaDescription": "SEO meta description under 155 characters with primary keyword near the front",
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5", "keyword6"]
}`;

  console.log(`Generating blog post about: ${topic}`);
  const response = await callAnthropic(prompt);

  let postData;
  try {
    postData = JSON.parse(response);
  } catch {
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

  // Check for duplicate slugs
  if (blogData.includes(`slug: "${slug}"`)) {
    console.log(`Post with slug "${slug}" already exists. Skipping.`);
    return;
  }

  // Escape backticks and dollar signs in content for template literal safety
  const safeContent = postData.content
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');

  const newPost = `  {
    slug: "${slug}",
    title: ${JSON.stringify(postData.title)},
    excerpt: ${JSON.stringify(postData.excerpt)},
    content: \`\n${safeContent}\n    \`.trim(),
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
  console.log(`Category: ${postData.category}`);
  console.log(`Keywords: ${postData.keywords.join(', ')}`);
}

generateBlogPost().catch((err) => {
  console.error('Error generating blog post:', err);
  process.exit(1);
});
