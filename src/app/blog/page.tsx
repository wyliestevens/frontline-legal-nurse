import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog - Legal Nurse Consulting Insights for Attorneys",
  description:
    "Expert articles on legal nurse consulting, medical record review, case strategy, and litigation support for personal injury and medical malpractice attorneys.",
  alternates: { canonical: "https://frontlinelegalnurse.com/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section style={{ backgroundColor: "#422616" }} className="section-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="font-['Oswald'] text-4xl md:text-5xl font-bold mb-4" style={{ color: "#D0B690" }}>
            Blog
          </h1>
          <p className="font-['Lato'] text-white text-lg max-w-3xl">
            Insights, strategies, and expert perspectives on legal nurse consulting for attorneys handling medical-legal cases.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#f6f6f6" }} className="section-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white border-2 border-black hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <p className="font-['Lato'] text-xs uppercase tracking-wider mb-2" style={{ color: "#775738" }}>
                    {post.category} &middot; {post.readTime}
                  </p>
                  <h2 className="font-['Oswald'] text-xl font-bold mb-3" style={{ color: "#422616" }}>
                    <Link href={`/blog/${post.slug}`} className="hover:opacity-70 transition-opacity">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="font-['Lato'] text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-['Lato'] text-xs text-gray-400">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-['Oswald'] text-sm font-semibold uppercase tracking-wider hover:opacity-70 transition-opacity"
                      style={{ color: "#422616" }}
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="font-['Lato'] text-gray-500 text-lg">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <section style={{ backgroundColor: "#775738" }} className="section-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-['Oswald'] text-3xl font-bold text-white mb-6">
            Need Expert Medical-Legal Support?
          </h2>
          <p className="font-['Lato'] text-white text-lg leading-relaxed mb-8">
            Our team of experienced legal nurse consultants is ready to help strengthen your case.
          </p>
          <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
