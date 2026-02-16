import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Nurse Consulting Services - Case Chronology, Fact Summary, Merit Review",
  description:
    "Comprehensive legal nurse consulting services including case chronologies, fact summary reports, case merit reviews, and causation summaries for attorneys.",
  alternates: { canonical: "https://frontlinelegalnurse.com/services" },
};

const services = [
  {
    title: "Case Chronology",
    description:
      "A case chronology is a detailed, date-by-date account of your client's complete medical history from the time of the incident through the present. Every appointment, diagnosis, procedure, and medication change is documented in clear, sequential order.",
    details: [
      "Comprehensive timeline from incident to present",
      "Every provider visit, test, and procedure documented",
      "Organized chronologically for depositions and trial",
      "Gaps in treatment identified and flagged",
      "Cross-referenced across multiple providers",
    ],
    useCase: "Ideal for deposition preparation, trial exhibits, and identifying gaps in the medical timeline.",
  },
  {
    title: "Fact Summary Report",
    description:
      "A fact summary report provides a comprehensive overview of the case with expert medical analysis. Instead of listing every event chronologically, it highlights the most important medical findings, identifies patterns, and connects the medical evidence to the legal issues in the case.",
    details: [
      "Expert analysis of key medical findings",
      "Medical evidence connected to legal issues",
      "Critical details highlighted for attorney review",
      "Complex medical information translated into clear language",
      "Organized by relevance to case strategy",
    ],
    useCase: "Ideal for case evaluation, demand packages, settlement negotiations, and communicating with clients and adjusters.",
  },
  {
    title: "Case Merit Review",
    description:
      "A case merit review is an in-depth analysis of the medical records that identifies case strengths, weaknesses, and potential issues. This assessment gives you a clear picture of where your case stands before investing significant resources in depositions and trial preparation.",
    details: [
      "Strengths and weaknesses identified",
      "Standard of care analysis",
      "Potential defense arguments anticipated",
      "Recommendations for additional records or experts",
      "Clear assessment of case viability",
    ],
    useCase: "Ideal for early case evaluation, deciding whether to accept a case, and identifying issues before they become problems.",
  },
  {
    title: "Brief Summary of Causation",
    description:
      "A causation summary is a focused analysis linking the incident to the injuries and subsequent treatment. It establishes the medical narrative connecting the event to the harm, providing the causation foundation your case needs.",
    details: [
      "Direct link between incident and injuries established",
      "Medical causation narrative documented",
      "Supporting evidence identified and cited",
      "Pre-existing conditions addressed",
      "Timeline of injury progression mapped",
    ],
    useCase: "Ideal for building the causation argument in your demand package or at trial.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section style={{ backgroundColor: "#422616" }} className="section-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="font-['Oswald'] text-4xl md:text-5xl font-bold mb-4" style={{ color: "#D0B690" }}>
            Our Services
          </h1>
          <p className="font-['Lato'] text-white text-lg max-w-3xl">
            Comprehensive legal nurse consulting services designed to strengthen your case strategy, save attorney time, and maximize settlements.
          </p>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.title}
          style={{ backgroundColor: index % 2 === 0 ? "#f6f6f6" : "#775738" }}
          className="section-border"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-4xl">
              <h2
                className="font-['Oswald'] text-3xl font-bold mb-6 uppercase"
                style={{ color: index % 2 === 0 ? "#422616" : "#D0B690" }}
              >
                {service.title}
              </h2>
              <p
                className={`font-['Lato'] leading-relaxed mb-8 ${
                  index % 2 === 0 ? "text-gray-700" : "text-white"
                }`}
              >
                {service.description}
              </p>
              <div className="mb-8">
                <h3
                  className="font-['Oswald'] text-lg font-bold mb-4"
                  style={{ color: index % 2 === 0 ? "#422616" : "#D0B690" }}
                >
                  What You Get:
                </h3>
                <ul className={`space-y-2 ${index % 2 === 0 ? "text-gray-600" : "text-white"}`}>
                  {service.details.map((detail) => (
                    <li key={detail} className="font-['Lato'] text-sm flex items-start gap-2">
                      <span style={{ color: "#9ae6b4" }} className="mt-1 shrink-0">&#10003;</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <p
                className={`font-['Lato'] text-sm italic mb-8 ${
                  index % 2 === 0 ? "text-gray-500" : "text-gray-300"
                }`}
              >
                {service.useCase}
              </p>
            </div>
          </div>
        </section>
      ))}

      <section style={{ backgroundColor: "#422616" }} className="section-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="font-['Oswald'] text-3xl font-bold mb-4" style={{ color: "#D0B690" }}>
            Practice Areas We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {["Personal Injury", "Medical Malpractice", "Toxic Tort", "Product Liability", "Class Action", "Wrongful Death", "Workers' Compensation", "Nursing Home Abuse"].map(
              (area) => (
                <div key={area} className="border-2 border-[#D0B690] p-6 text-center">
                  <p className="font-['Oswald'] text-lg font-bold text-white">{area}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#775738" }} className="section-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-['Oswald'] text-3xl font-bold text-white mb-6">
            Get Expert Medical-Legal Support Today
          </h2>
          <p className="font-['Lato'] text-white text-lg leading-relaxed mb-8">
            Every case deserves a thorough medical review. Schedule a free consultation and let us show you how our services strengthen your case strategy.
          </p>
          <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
