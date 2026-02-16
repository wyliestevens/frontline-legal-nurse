import Link from "next/link";
import { getAllPosts } from "@/lib/blog-data";

const services = [
  {
    title: "Case Chronology",
    description:
      "A detailed, organized account of your client's complete medical history from the time of the incident through the present. Every appointment, diagnosis, and procedure documented in clear, sequential order.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Fact Summary Report",
    description:
      "A comprehensive overview of the case with expert medical analysis. Highlights critical findings, connects medical evidence to legal issues, and distills complex records into attorney-ready documents.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: "Case Merit Review",
    description:
      "An in-depth analysis of your medical records that identifies case strengths, weaknesses, and potential issues. Know exactly where your case stands before depositions and trial.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Brief Summary of Causation",
    description:
      "A focused analysis linking the incident to the injuries and subsequent treatment. Establishes the medical causation narrative your case needs to succeed at settlement or trial.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative section-border"
        style={{ backgroundColor: "#422616" }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(135deg, rgba(208,182,144,0.3) 0%, transparent 50%, rgba(119,87,56,0.3) 100%)',
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1
              className="font-['Oswald'] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ color: "#D0B690" }}
            >
              Expert Legal Nurse Consulting for Your Peace of Mind
            </h1>
            <p className="font-['Lato'] text-lg md:text-xl text-white leading-relaxed mb-8 max-w-2xl">
              No case is too complex for us to handle. We have the expertise and experience to tackle
              any challenge. We work tirelessly to ensure every aspect of your case is thoroughly
              evaluated. No question goes unanswered. No detail gets overlooked.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">
                Book a Free Consultation
              </Link>
              <Link href="/services" className="btn-secondary text-center">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Wylie Section */}
      <section style={{ backgroundColor: "#775738" }} className="section-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div
                className="w-80 h-96 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: "#422616",
                  border: "3px solid #D0B690",
                }}
              >
                <div className="text-center px-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#D0B690' }}>
                    <svg className="w-12 h-12" fill="#422616" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <p className="font-['Oswald'] text-lg font-bold" style={{ color: "#D0B690" }}>
                    Wylie Stevens
                  </p>
                  <p className="font-['Lato'] text-sm text-gray-300 mt-1">
                    CEO, BSN, RN
                  </p>
                  <p className="font-['Lato'] text-xs text-gray-400 mt-1">
                    Legal Nurse Consultant
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-['Oswald'] text-3xl md:text-4xl font-bold text-white mb-2">
                Wylie Stevens
              </h2>
              <p className="font-['Oswald'] text-lg mb-6" style={{ color: "#D0B690" }}>
                CEO, BSN, RN, Legal Nurse Consultant
              </p>
              <p className="font-['Lato'] text-white leading-relaxed mb-4">
                With 19 years of nursing experience and 20 years in healthcare, Wylie Stevens is your
                secret weapon to winning more cases. She brings deep clinical expertise to every
                medical record review, ensuring nothing gets missed.
              </p>
              <p className="font-['Lato'] text-white leading-relaxed mb-4">
                Her team provides comprehensive medical record analysis, fact summary reports, and
                expert case evaluations that give attorneys the edge they need. From personal injury
                to medical malpractice, toxic tort to product liability, Frontline Legal Nurse
                delivers clear, actionable medical insights.
              </p>
              <p className="font-['Lato'] text-white leading-relaxed mb-8">
                She has access to thousands of legal nurse consultants and a dedicated team ready to
                handle cases of any size and complexity.
              </p>
              <Link href="/contact" className="btn-primary">
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-border" style={{ backgroundColor: "#f6f6f6" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2
              className="font-['Oswald'] text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#422616" }}
            >
              What We Offer For You
            </h2>
            <p className="font-['Lato'] text-gray-600 max-w-2xl mx-auto">
              Comprehensive legal nurse consulting services designed to strengthen your case strategy
              and maximize settlements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 border-2 border-black hover:shadow-lg transition-shadow"
              >
                <div className="mb-4" style={{ color: "#422616" }}>
                  {service.icon}
                </div>
                <h3
                  className="font-['Oswald'] text-xl font-bold mb-3 uppercase"
                  style={{ color: "#422616" }}
                >
                  {service.title}
                </h3>
                <p className="font-['Lato'] text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="font-['Oswald'] text-sm font-semibold uppercase tracking-wider hover:opacity-70 transition-opacity"
                  style={{ color: "#422616" }}
                >
                  Read More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section style={{ backgroundColor: "#775738" }} className="section-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/nWIKcNmqp0M"
                title="Frontline Legal Nurse Consulting"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-2 border-black"
              />
            </div>
            <div>
              <h2 className="font-['Oswald'] text-3xl font-bold text-white mb-6">
                See How We Transform Your Cases
              </h2>
              <p className="font-['Lato'] text-white leading-relaxed mb-4">
                We take the burden of medical record reviews, expert sourcing, and case preparation
                off your shoulders. Our team of experienced legal nurse consultants delivers clear,
                concise medical insights that make your arguments more compelling.
              </p>
              <p className="font-['Lato'] text-white leading-relaxed mb-8">
                Attorneys who work with us report faster identification of critical medical details,
                giving them an edge in negotiations and at trial. Focus on your clients and strategy
                while we handle the medical complexities.
              </p>
              <Link href="/contact" className="btn-primary">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results / Social Proof */}
      <section className="section-border" style={{ backgroundColor: "#422616" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="font-['Oswald'] text-3xl md:text-4xl font-bold mb-4" style={{ color: "#D0B690" }}>
              Real Results for Real Cases
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <p className="font-['Oswald'] text-5xl font-bold mb-2" style={{ color: "#D0B690" }}>$1.5M</p>
              <p className="font-['Lato'] text-white text-sm">
                Settlement secured after our review uncovered critical evidence the initial $50K offer missed
              </p>
            </div>
            <div className="p-8">
              <p className="font-['Oswald'] text-5xl font-bold mb-2" style={{ color: "#D0B690" }}>20+</p>
              <p className="font-['Lato'] text-white text-sm">
                Years of combined healthcare and legal nurse consulting experience
              </p>
            </div>
            <div className="p-8">
              <p className="font-['Oswald'] text-5xl font-bold mb-2" style={{ color: "#D0B690" }}>1000s</p>
              <p className="font-['Lato'] text-white text-sm">
                Access to thousands of legal nurse consultants for cases of any complexity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section style={{ backgroundColor: "#f6f6f6" }} className="section-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="font-['Oswald'] text-3xl md:text-4xl font-bold mb-4" style={{ color: "#422616" }}>
              From Our Blog
            </h2>
            <p className="font-['Lato'] text-gray-600">
              Insights and strategies for attorneys working medical-legal cases.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.slug} className="bg-white border-2 border-black p-6 hover:shadow-lg transition-shadow">
                <p className="font-['Lato'] text-xs uppercase tracking-wider mb-2" style={{ color: "#775738" }}>
                  {post.category} &middot; {post.readTime}
                </p>
                <h3 className="font-['Oswald'] text-lg font-bold mb-3" style={{ color: "#422616" }}>
                  <Link href={`/blog/${post.slug}`} className="hover:opacity-70 transition-opacity">
                    {post.title}
                  </Link>
                </h3>
                <p className="font-['Lato'] text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-['Oswald'] text-sm font-semibold uppercase tracking-wider hover:opacity-70 transition-opacity"
                  style={{ color: "#422616" }}
                >
                  Read More &rarr;
                </Link>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="btn-primary">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: "#775738" }} className="section-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-['Oswald'] text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s Connect
          </h2>
          <p className="font-['Lato'] text-white text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Ready to strengthen your case with expert medical-legal analysis? Schedule a free
            consultation today and see how Frontline Legal Nurse Consulting gives your firm a
            competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-center">
              Book a Free Consultation
            </Link>
            <a href="tel:9282234233" className="btn-secondary text-center">
              Call (928) 223-4233
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
