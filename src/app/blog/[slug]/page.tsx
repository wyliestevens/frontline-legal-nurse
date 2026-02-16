import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: { canonical: `https://frontlinelegalnurse.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "Frontline Legal Nurse Consulting",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section style={{ backgroundColor: "#422616" }} className="section-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/blog"
            className="font-['Oswald'] text-sm uppercase tracking-wider mb-6 inline-block hover:opacity-70 transition-opacity"
            style={{ color: "#D0B690" }}
          >
            &larr; Back to Blog
          </Link>
          <p className="font-['Lato'] text-xs uppercase tracking-wider mb-3" style={{ color: "#9ae6b4" }}>
            {post.category} &middot; {post.readTime}
          </p>
          <h1 className="font-['Oswald'] text-3xl md:text-4xl font-bold mb-4" style={{ color: "#D0B690" }}>
            {post.title}
          </h1>
          <p className="font-['Lato'] text-sm text-gray-300">
            By {post.author} &middot;{" "}
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#f6f6f6" }} className="section-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <article className="bg-white border-2 border-black p-8 md:p-12">
            <div className="font-['Lato'] text-gray-700 leading-relaxed space-y-4 text-base">
              {post.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h2
                      key={i}
                      className="font-['Oswald'] text-xl font-bold mt-8 mb-4"
                      style={{ color: "#422616" }}
                    >
                      {paragraph.replace(/\*\*/g, "")}
                    </h2>
                  );
                }
                return <p key={i}>{paragraph}</p>;
              })}
            </div>
          </article>

          <div className="mt-12 bg-white border-2 border-black p-8 text-center" style={{ borderColor: "#D0B690" }}>
            <h3 className="font-['Oswald'] text-2xl font-bold mb-4" style={{ color: "#422616" }}>
              Need Expert Medical-Legal Support?
            </h3>
            <p className="font-['Lato'] text-gray-600 mb-6">
              Schedule a free consultation and see how Frontline Legal Nurse Consulting strengthens your cases.
            </p>
            <Link href="/contact" className="btn-primary">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
