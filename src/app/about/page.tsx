import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Wylie Stevens, BSN, RN - Legal Nurse Consultant",
  description:
    "Meet Wylie Stevens, CEO and founder of Frontline Legal Nurse Consulting. 20 years of healthcare experience helping attorneys win medical-legal cases.",
  alternates: { canonical: "https://frontlinelegalnurse.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <section style={{ backgroundColor: "#422616" }} className="section-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="font-['Oswald'] text-4xl md:text-5xl font-bold mb-4" style={{ color: "#D0B690" }}>
            About Frontline Legal Nurse Consulting
          </h1>
          <p className="font-['Lato'] text-white text-lg max-w-3xl">
            Founded by Wylie Stevens, BSN, RN, we bring 20 years of healthcare experience to every case we touch.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#775738" }} className="section-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div
                className="w-full max-w-md mx-auto h-96 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#422616", border: "3px solid #D0B690" }}
              >
                <div className="text-center px-6">
                  <div className="w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#D0B690' }}>
                    <svg className="w-14 h-14" fill="#422616" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <p className="font-['Oswald'] text-xl font-bold" style={{ color: "#D0B690" }}>Wylie Stevens</p>
                  <p className="font-['Lato'] text-sm text-gray-300 mt-1">CEO, BSN, RN</p>
                  <p className="font-['Lato'] text-xs text-gray-400 mt-1">Legal Nurse Consultant</p>
                  <p className="font-['Lato'] text-xs text-gray-400 mt-1">University of Arkansas for Medical Sciences</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-['Oswald'] text-3xl font-bold text-white mb-2">Wylie Stevens</h2>
              <p className="font-['Oswald'] text-lg mb-6" style={{ color: "#D0B690" }}>CEO, BSN, RN, Legal Nurse Consultant</p>

              <p className="font-['Lato'] text-white leading-relaxed mb-4">
                With a Bachelor of Science in Nursing from the University of Arkansas for Medical Sciences, 19 years of direct nursing experience, and 20 years in healthcare, Wylie Stevens founded Frontline Legal Nurse Consulting to solve a specific problem: attorneys wasting valuable time trying to decipher complex medical records without clinical expertise.
              </p>
              <p className="font-['Lato'] text-white leading-relaxed mb-4">
                Having worked alongside attorneys for years, she saw firsthand how the legal industry often expects paralegals and legal secretaries to handle medical record reviews, even though they lack the medical training to identify critical details. That gap costs attorneys time, money, and case outcomes.
              </p>
              <p className="font-['Lato'] text-white leading-relaxed mb-4">
                Frontline Legal Nurse takes the burden of medical record reviews, expert sourcing, and case preparation off your shoulders. We specialize in personal injury, medical malpractice, class action, toxic tort, and product liability cases.
              </p>
              <p className="font-['Lato'] text-white leading-relaxed mb-8">
                With access to a dedicated team and thousands of legal nurse consultants nationwide, no case is too large or too complex. Every detail gets attention. Every question gets answered.
              </p>
              <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#f6f6f6" }} className="section-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="font-['Oswald'] text-3xl font-bold text-center mb-16" style={{ color: "#422616" }}>
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Clinical Expertise", desc: "Our team reads medical records the way clinicians do. We spot inconsistencies, deviations from the standard of care, and critical timeline gaps that non-medical professionals miss." },
              { title: "Attorney-Ready Work Product", desc: "Every document we produce is designed for immediate use in your case strategy. Clear, concise, and organized for depositions, demand packages, and trial preparation." },
              { title: "Nationwide Coverage", desc: "With access to thousands of legal nurse consultants across the country, we handle cases in every jurisdiction and every medical specialty." },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 border-2 border-black">
                <h3 className="font-['Oswald'] text-xl font-bold mb-4 uppercase" style={{ color: "#422616" }}>{item.title}</h3>
                <p className="font-['Lato'] text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#775738" }} className="section-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-['Oswald'] text-3xl font-bold text-white mb-6">Ready to Strengthen Your Cases?</h2>
          <p className="font-['Lato'] text-white text-lg leading-relaxed mb-8">
            Schedule a free consultation and see how Frontline Legal Nurse Consulting delivers the medical clarity your firm needs.
          </p>
          <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
