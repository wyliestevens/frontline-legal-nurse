export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  metaDescription: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-endocrinology-records-reveal-in-diabetes-mismanagement-claims",
    title: "What Endocrinology Records Reveal in Diabetes Mismanagement Claims",
    excerpt: "Endocrinology records expose patterns of negligence your opposing counsel hopes you miss. Here's what to look for.",
    content: `
Your diabetes mismanagement case lives or dies on the endocrinology records. I've reviewed hundreds of these files. The negligence patterns repeat themselves. The documentation gaps tell the real story. You need to know what to pull and where to look.

**HbA1c Trends Show the Timeline of Deterioration**

HbA1c results don't lie. Every endocrinology record includes serial HbA1c values spanning months or years. An HbA1c above 7% signals poor glycemic control. Above 9% indicates dangerous mismanagement. I've seen cases where the HbA1c climbed from 7.2% to 11.8% over eighteen months while the endocrinologist made zero medication adjustments. The timestamps on these labs establish when the provider knew control was failing. Defense counsel will argue the patient was noncompliant. The endocrinology notes either document noncompliance or they don't. Missing documentation means missing defense.

**Medication Titration Records Expose Inaction**

Endocrinology visits exist for one purpose: optimize diabetes medication. Look at the medication list on every visit note. Compare it to the previous visit. I've pulled records where a patient saw an endocrinologist quarterly for two years with an HbA1c consistently above 10%, and the provider never advanced beyond metformin monotherapy. Standard of care requires titration to maximum tolerated doses, then addition of second and third-line agents. GLP-1 agonists, SGLT-2 inhibitors, basal insulin. The records show exactly when the endocrinologist should have escalated therapy and didn't. Each missed opportunity becomes a bullet point in your expert's report.

**Complication Screening Documentation Reveals Omissions**

Endocrinologists must screen for diabetic complications at defined intervals. Retinopathy screening annually. Microalbuminuria testing annually. Foot exams at every visit. Lipid panels annually. The records either document these screenings or they don't. I've worked cases where patients developed proliferative diabetic retinopathy because no one ordered a dilated eye exam for three years. The endocrinology records contained no referral to ophthalmology, no documentation of patient education about eye complications, no mention of vision symptoms. That omission becomes your liability anchor. Check every progress note for complication screening. The absence speaks louder than the presence.

**Treatment Plan Documentation Shows Communication Failures**

Every endocrinology note should contain a clear treatment plan. Specific medication changes with exact dosing instructions. Follow-up intervals. Lab orders. Referrals. I've reviewed dozens of notes that say "continue current management" when the HbA1c is 10.5%. That phrase is negligence in writing. Look for notes without specific numerical targets. "Improve blood sugar control" means nothing. "Target HbA1c less than 7%" creates a measurable standard. Your expert witness needs these documented plans to establish what the provider committed to do versus what happened. The vague notes help you. They prove the provider had no actual plan.

**Coordination With Primary Care Records Exposes Fragmented Care**

Pull both the endocrinology records and the primary care records. Compare them. The endocrinology note should reference recent PCP visits, emergency department visits for hyperglycemia, and hospital admissions. I've seen catastrophic outcomes where a patient had three ED visits for blood sugars above 400 mg/dL, and the endocrinology notes from the same time period make no mention of these events. That gap proves the endocrinologist wasn't reviewing the patient's complete medical picture. It shows fragmented, negligent care. The timestamps matter. If the ED visit was Tuesday and the endocrinology follow-up was Friday, those records should align. When they don't, you have ammunition.

**Patient Education Documentation Determines Shared Responsibility**

Defense counsel will blame the patient. They'll claim noncompliance caused the bad outcome. Your response comes from the patient education documentation in the endocrinology records. I look for specific documentation: "Reviewed carbohydrate counting. Patient verbalizes understanding." Or "Discussed signs of hypoglycemia. Patient able to repeat back symptoms." These notes prove the provider fulfilled their duty to educate. The absence proves they didn't. I've won cases where the provider claimed the patient refused insulin, but zero documentation in two years of notes supported that claim. No "patient declines insulin" entry. No informed refusal form. No documentation means it didn't happen. Your expert hammers that point home.

Frontline Legal Nurse Consulting reviews medical records for attorneys who refuse to leave money on the table. Call (928) 223-4233 or visit frontlinelegalnurse.com.
    `.trim(),
    date: "2026-02-16",
    author: "Wylie Stevens, BSN, RN",
    category: "Case Strategy",
    readTime: "4 min read",
    metaDescription: "Endocrinology records in diabetes mismanagement claims reveal HbA1c trends, medication failures, and documentation gaps that prove negligence.",
    keywords: ["diabetes mismanagement","endocrinology records","medical malpractice","HbA1c","legal nurse consultant","medical record review"],
  },
  {
    slug: "why-attorneys-need-legal-nurse-consultants",
    title: "Why Attorneys Need Legal Nurse Consultants to Win Medical Cases",
    excerpt:
      "Medical malpractice and personal injury cases demand a deep understanding of healthcare. A legal nurse consultant bridges the gap between medicine and law, giving your firm a competitive edge.",
    content: `
Medical malpractice and personal injury cases demand a deep understanding of healthcare. Attorneys who try to navigate complex medical records without clinical expertise risk missing the details that make or break a case.

A legal nurse consultant (LNC) brings years of bedside experience to your legal team. They read medical records the way a clinician does, spotting inconsistencies, deviations from the standard of care, and critical timeline gaps that paralegals and legal secretaries are not trained to identify.

**The Real Cost of Missing Medical Details**

When your team misses a key medical detail, the consequences are direct. Settlement values drop. Cases get dismissed. Opposing counsel gains leverage. An LNC eliminates that risk by providing a thorough, clinically accurate review of every record in the case file.

**What a Legal Nurse Consultant Delivers**

A qualified LNC provides case chronologies that organize months or years of medical treatment into a clear, date-by-date narrative. They produce fact summary reports that distill hundreds of pages of records into concise, attorney-friendly documents. They conduct case merit reviews that identify strengths, weaknesses, and potential issues before depositions and trial.

**Stronger Cases, Higher Settlements**

Attorneys who use legal nurse consultants consistently report stronger demand packages, better-prepared clients, and higher settlement values. The medical clarity an LNC provides translates directly into more persuasive arguments and better outcomes.

If you are handling personal injury, medical malpractice, toxic tort, or product liability cases, a legal nurse consultant is not a luxury. It is a strategic advantage.
    `.trim(),
    date: "2026-02-10",
    author: "Wylie Stevens, BSN, RN",
    category: "Legal Nurse Consulting",
    readTime: "4 min read",
    metaDescription:
      "Learn why attorneys need legal nurse consultants to strengthen medical malpractice and personal injury cases. Expert medical record review for better case outcomes.",
    keywords: [
      "legal nurse consultant",
      "attorney",
      "medical malpractice",
      "personal injury",
      "medical record review",
    ],
  },
  {
    slug: "medical-chronology-vs-fact-summary-which-do-you-need",
    title: "Medical Chronology vs. Fact Summary Report: Which Does Your Case Need?",
    excerpt:
      "Both documents serve different purposes in litigation. Understanding when to use a case chronology versus a fact summary report helps you build a more effective case strategy.",
    content: `
Attorneys often ask whether they need a case chronology or a fact summary report. The answer depends on where you are in the case and what you need to accomplish.

**Case Chronology: The Complete Medical Timeline**

A case chronology is a detailed, date-by-date account of every medical event from the time of the incident through the present. It captures every appointment, every diagnosis, every procedure, and every medication change in sequential order.

This document is essential for depositions, trial preparation, and identifying gaps in treatment. It gives you a complete picture of the medical timeline so you never get caught off guard by opposing counsel.

**Fact Summary Report: The Strategic Overview**

A fact summary report takes a different approach. Instead of listing every event chronologically, it provides a comprehensive overview with expert analysis. It highlights the most important medical findings, identifies patterns, and connects the medical evidence to the legal issues in the case.

This document is ideal for evaluating case merit, preparing demand packages, and communicating complex medical information to clients, adjusters, and mediators.

**When to Use Each**

Use a case chronology when you need the full timeline for deposition prep or trial. Use a fact summary report when you need a strategic analysis for case evaluation or settlement negotiations. Many attorneys use both, starting with the fact summary to evaluate the case and then ordering the chronology as the case moves toward litigation.

The right document at the right time strengthens your position and saves hours of attorney time.
    `.trim(),
    date: "2026-02-07",
    author: "Wylie Stevens, BSN, RN",
    category: "Services",
    readTime: "3 min read",
    metaDescription:
      "Understand the difference between a medical case chronology and a fact summary report. Learn which document strengthens your legal case strategy.",
    keywords: [
      "case chronology",
      "fact summary report",
      "medical record review",
      "legal nurse consulting",
      "litigation support",
    ],
  },
  {
    slug: "5-signs-your-medical-records-need-expert-review",
    title: "5 Signs Your Medical Records Need Expert Review Before Filing",
    excerpt:
      "Filing a case without a thorough medical record review is a gamble. Here are five warning signs that your records need a legal nurse consultant's trained eye.",
    content: `
Filing a medical malpractice or personal injury case without a thorough review of the medical records is risky. Here are five warning signs that tell you an expert review is overdue.

**1. The Records Are Voluminous and Disorganized**

When a case involves hundreds or thousands of pages of records from multiple providers, critical information gets buried. A legal nurse consultant organizes and cross-references these records so nothing gets overlooked.

**2. The Medical Terminology Is Unclear to Your Team**

If your paralegals are spending hours looking up medical terms and still getting it wrong, your case preparation is suffering. An LNC reads medical records fluently and translates complex clinical information into language your entire team understands.

**3. You Are Unsure About the Standard of Care**

Determining whether a healthcare provider deviated from the standard of care requires clinical knowledge. An LNC identifies where the care fell short and explains why, giving you the foundation for your argument.

**4. The Timeline Has Gaps**

Missing records, unexplained gaps in treatment, or conflicting dates are red flags. An LNC identifies these gaps and helps you determine whether they represent missing evidence, noncompliance, or potential issues with the case.

**5. The Opposing Expert Report Raises Questions**

When the defense produces an expert report that contradicts your position, you need someone who can analyze it from a clinical perspective. An LNC reviews opposing expert opinions and identifies weaknesses, unsupported claims, and areas for cross-examination.

Do not wait until trial preparation to discover problems in your medical records. An early expert review saves time, strengthens your strategy, and protects your case.
    `.trim(),
    date: "2026-02-03",
    author: "Wylie Stevens, BSN, RN",
    category: "Case Strategy",
    readTime: "4 min read",
    metaDescription:
      "5 warning signs your medical records need a legal nurse consultant review before filing. Protect your case with expert medical record analysis.",
    keywords: [
      "medical record review",
      "legal nurse consultant",
      "case strategy",
      "medical malpractice",
      "expert review",
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
