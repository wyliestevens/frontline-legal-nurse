'use client';

import type { Metadata } from "next";
import { useState } from "react";

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "ProfessionalService",
    name: "Frontline Legal Nurse Consulting",
    telephone: "+19282234233",
    email: "wylie@frontlinelegalnurse.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kingman",
      addressRegion: "AZ",
      addressCountry: "US",
    },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    caseType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <section style={{ backgroundColor: "#422616" }} className="section-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="font-['Oswald'] text-4xl md:text-5xl font-bold mb-4" style={{ color: "#D0B690" }}>
            Contact Us
          </h1>
          <p className="font-['Lato'] text-white text-lg max-w-3xl">
            Ready to get started? Schedule a free consultation or reach out directly. We respond to all inquiries within one business day.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#f6f6f6" }} className="section-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-['Oswald'] text-3xl font-bold mb-8" style={{ color: "#422616" }}>
                Let&apos;s Connect
              </h2>

              {submitted ? (
                <div className="bg-white border-2 border-[#9ae6b4] p-8 text-center">
                  <h3 className="font-['Oswald'] text-2xl font-bold mb-4" style={{ color: "#422616" }}>
                    Thank You!
                  </h3>
                  <p className="font-['Lato'] text-gray-600">
                    We received your message and will get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="font-['Oswald'] text-sm font-bold uppercase tracking-wider block mb-2" style={{ color: "#422616" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 border-2 border-black font-['Lato'] focus:outline-none focus:border-[#D0B690]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-['Oswald'] text-sm font-bold uppercase tracking-wider block mb-2" style={{ color: "#422616" }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 border-2 border-black font-['Lato'] focus:outline-none focus:border-[#D0B690]"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="font-['Oswald'] text-sm font-bold uppercase tracking-wider block mb-2" style={{ color: "#422616" }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 border-2 border-black font-['Lato'] focus:outline-none focus:border-[#D0B690]"
                    />
                  </div>
                  <div>
                    <label htmlFor="caseType" className="font-['Oswald'] text-sm font-bold uppercase tracking-wider block mb-2" style={{ color: "#422616" }}>
                      Case Type
                    </label>
                    <select
                      id="caseType"
                      value={formData.caseType}
                      onChange={(e) => setFormData({ ...formData, caseType: e.target.value })}
                      className="w-full p-3 border-2 border-black font-['Lato'] focus:outline-none focus:border-[#D0B690] bg-white"
                    >
                      <option value="">Select a case type</option>
                      <option value="personal-injury">Personal Injury</option>
                      <option value="medical-malpractice">Medical Malpractice</option>
                      <option value="toxic-tort">Toxic Tort</option>
                      <option value="product-liability">Product Liability</option>
                      <option value="class-action">Class Action</option>
                      <option value="wrongful-death">Wrongful Death</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="font-['Oswald'] text-sm font-bold uppercase tracking-wider block mb-2" style={{ color: "#422616" }}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 border-2 border-black font-['Lato'] focus:outline-none focus:border-[#D0B690]"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-center">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="font-['Oswald'] text-3xl font-bold mb-8" style={{ color: "#422616" }}>
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="bg-white border-2 border-black p-6">
                  <h3 className="font-['Oswald'] text-lg font-bold mb-2" style={{ color: "#422616" }}>Phone</h3>
                  <a href="tel:9282234233" className="font-['Lato'] text-gray-700 hover:text-[#422616] transition-colors">(928) 223-4233</a>
                </div>
                <div className="bg-white border-2 border-black p-6">
                  <h3 className="font-['Oswald'] text-lg font-bold mb-2" style={{ color: "#422616" }}>Email</h3>
                  <a href="mailto:wylie@frontlinelegalnurse.com" className="font-['Lato'] text-gray-700 hover:text-[#422616] transition-colors">wylie@frontlinelegalnurse.com</a>
                </div>
                <div className="bg-white border-2 border-black p-6">
                  <h3 className="font-['Oswald'] text-lg font-bold mb-2" style={{ color: "#422616" }}>Location</h3>
                  <p className="font-['Lato'] text-gray-700">Kingman, AZ</p>
                </div>
                <div className="bg-white border-2 border-black p-6">
                  <h3 className="font-['Oswald'] text-lg font-bold mb-2" style={{ color: "#422616" }}>Assistance Hours</h3>
                  <p className="font-['Lato'] text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="font-['Lato'] text-gray-700">Saturday - Sunday: Closed</p>
                </div>
              </div>

              <div className="mt-8 border-2 border-black overflow-hidden" style={{ height: '300px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52881.39776689!2d-114.08!3d35.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ce8f3c85ffb30d%3A0x6efb4c8cb4cdbb1d!2sKingman%2C%20AZ!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Frontline Legal Nurse Consulting - Kingman, AZ"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
