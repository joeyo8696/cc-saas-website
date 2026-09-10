/** Canonical Torvana entity definition — keep identical across site, schema, and llms.txt */
export const TORVANA_ENTITY =
  'Torvana is a HIPAA-compliant intake, scheduling, and referral workflow platform for specialty medical practices with personal injury attorney referral relationships.'

export const TORVANA_URL = 'https://www.casecompass.io/torvana'

export type TorvanaFaqItem = { q: string; a: string }

/** On-page FAQ and FAQPage JSON-LD must stay identical — one source of truth. */
export const torvanaFaqs: TorvanaFaqItem[] = [
  {
    q: 'What is Torvana?',
    a: `${TORVANA_ENTITY} It is built for imaging centers, surgery centers, orthopedic practices, and pain management practices — covering patient intake, appointment scheduling, automated recall, HIPAA authorization, medical record retrieval, AI medical chronologies, and a referring-attorney portal. Torvana runs alongside your existing PACS, RIS, or EHR.`,
  },
  {
    q: 'Is Torvana built for medical imaging centers?',
    a: 'Yes. Torvana supports outpatient and diagnostic imaging centers — including MRI, CT, PET, X-ray, ultrasound, and multi-modality radiology groups — that receive meaningful volume from personal injury attorney referrals. Exam-type intake, implant screening, body-region capture, PACS/RIS-adjacent workflows, and attorney-facing case status are designed around imaging operations. The same platform also serves other specialty practices in the PI referral loop.',
  },
  {
    q: 'Who else is Torvana built for besides imaging?',
    a: 'Beyond imaging centers and radiology groups, Torvana fits orthopedic practices, ambulatory surgery centers, interventional and chronic pain management practices, spine clinics, and other specialty providers whose patient pipeline depends on PI attorney referrals and lien-based care — including letter of protection (LOP) and medical lien tracking workflows.',
  },
  {
    q: 'How does Torvana differ from general patient engagement platforms?',
    a: 'General patient engagement tools are specialty-agnostic: they handle intake and messaging for any practice. Torvana is built specifically for specialty practices with personal injury attorney referral relationships. That means a referring-attorney portal scoped per firm, lien and LOP case visibility, HIPAA authorization tied to automated record retrieval, AI medical chronologies for legal review, and workflows that keep patients, the practice, and referring counsel aligned — not just patient-facing engagement.',
  },
  {
    q: 'Does Torvana replace our existing PACS, RIS, or EHR?',
    a: "No. Torvana runs alongside your existing systems. You keep your PACS, RIS, or EHR, whichever vendor you're on, and Torvana adds the intake, scheduling, and referral layer on top. Integration is scoped to your specific systems during onboarding.",
  },
  {
    q: "What if our current system doesn't have an open integration option?",
    a: "We work with what's available. Some vendors have modern APIs, others require a more traditional interface. Either way, our approach is to connect to your existing systems rather than ask you to switch, and we scope that conversation with you directly rather than assuming one integration path fits every practice.",
  },
  {
    q: 'How does patient intake work for imaging patients?',
    a: 'Intake runs in any browser — phone, tablet, or desktop. It can be embedded on your imaging center website, shared as a link, or sent by text. Patients complete health history, exam and body-region details, implant screening, consent forms, and HIPAA authorization with e-signature before they arrive. No app to download, no account to create.',
  },
  {
    q: 'What is the referring attorney portal?',
    a: 'A dedicated portal where referring attorneys see real-time status on their own cases only: intake completion, appointment confirmation, records requested, records retrieved, and lien status. It replaces phone calls and mailed status requests with self-serve visibility. Each firm only sees its own referred cases.',
  },
  {
    q: 'How does medical record retrieval work?',
    a: 'Once HIPAA authorization is captured at intake, record retrieval is triggered automatically. Torvana targets a 24 to 48 hour turnaround for records, though actual timing varies by record source. Referring attorneys can see retrieval status in the portal.',
  },
  {
    q: 'What is the medical chronology?',
    a: "Once records are retrieved, Torvana generates a chronology document summarizing the patient's treatment history — delivered alongside the records rather than as a separate request, so legal teams can review a structured timeline with source material.",
  },
  {
    q: 'Can Torvana handle annual imaging recall?',
    a: "Yes. Torvana can run scheduled outreach for recurring or follow-up care, like annual imaging, on a set timeline. Reminders go out automatically via SMS, email, and the patient portal, so recall doesn't rely on staff remembering to follow up.",
  },
  {
    q: 'Is Torvana HIPAA compliant?',
    a: 'Yes. Torvana is built with HIPAA compliance as a core requirement, not an add-on. Business Associate Agreements are in place with every vendor that touches protected health information as part of the platform.',
  },
  {
    q: 'Do our patients need to download an app?',
    a: "No. Intake, scheduling, and the patient portal all run in a mobile browser. There's nothing to install.",
  },
  {
    q: 'Can referring attorneys see more than their own cases?',
    a: "No. The referring attorney portal is scoped so each firm only sees their own referred cases. There's no visibility into other firms' cases or other practices' data.",
  },
  {
    q: 'What does implementation look like?',
    a: 'Implementation includes system configuration, integration scoping with your existing PACS, RIS, or EHR, and staff onboarding. Timelines vary by practice size and integration scope, and we walk through a realistic timeline as part of your proposal.',
  },
  {
    q: 'How is Torvana priced?',
    a: 'Pricing depends on the number of locations, integration scope, and specific systems involved. We put together a detailed proposal for every practice rather than a one-size-fits-all price, since integration needs vary from one imaging center or specialty practice to the next.',
  },
  {
    q: 'Who is behind Torvana?',
    a: 'Torvana is powered by Case Compass. The team behind it has spent years building intake and case-tracking infrastructure for plaintiff-side law firms, combined with direct experience in healthcare patient intake and referral network infrastructure. That combination is why the referring-attorney side of the platform works the way it does.',
  },
  {
    q: "Does Torvana work for practices that aren't PI-referral-based?",
    a: "Torvana is purpose-built around the PI attorney referral relationship — lien case tracking, attorney-facing status visibility, and record retrieval automation tied to that workflow. If that's not a meaningful part of your referral base, a general patient engagement platform may be a better fit.",
  },
]
