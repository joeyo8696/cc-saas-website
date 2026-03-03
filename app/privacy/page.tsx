'use client'

import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import GalaxyCanvas from '@/components/home/GalaxyCanvas'

export default function PrivacyPage() {
  return (
    <>
      <GalaxyCanvas />
      <AnnouncementBanner />
      <Nav />
      <main style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Hero */}
        <section
          style={{
            minHeight: '40vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '140px 40px 60px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: '#fff',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '20px',
              }}
            >
              Privacy Policy
            </h1>
            <p
              style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.7,
              }}
            >
              Effective Date: January 1, 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ background: '#fff', padding: '80px 40px 120px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            <div style={{ marginBottom: '48px' }}>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '24px' }}>
                Case Compass ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, platform, or services.
              </p>
            </div>

            <Section title="1. Information We Collect">
              <p>We may collect the following categories of information:</p>
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, law firm or business name, job title, and billing information.</li>
                <li><strong>Case/Client Data:</strong> Information uploaded or entered into our platform by your firm's users (e.g., intake forms, signed retainers, case notes).</li>
                <li><strong>Usage Information:</strong> Log data, IP address, browser type, operating system, device identifiers, and interactions with our platform.</li>
                <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies to improve functionality, remember preferences, and analyze traffic.</li>
              </ul>
            </Section>

            <Section title="2. How We Use Information">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, operate, and improve our platform and services.</li>
                <li>Process payments and manage billing.</li>
                <li>Communicate with you regarding updates, support, or marketing (where permitted).</li>
                <li>Maintain security, detect fraud, and comply with legal obligations.</li>
                <li>Generate aggregated, anonymized insights to improve our platform.</li>
              </ul>
            </Section>

            <Section title="3. Sharing of Information">
              <p>We do not sell your personal information. We may share information only in the following cases:</p>
              <ul>
                <li><strong>With Service Providers:</strong> Vendors who help us operate (e.g., hosting, payment processing, analytics) under strict confidentiality agreements.</li>
                <li><strong>For Legal Compliance:</strong> When required by law, regulation, or valid legal process.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
              </ul>
            </Section>

            <Section title="4. Data Security">
              <p>We implement appropriate technical and organizational measures to protect your information against unauthorized access, disclosure, alteration, or destruction. However, no system is 100% secure, and we cannot guarantee absolute security.</p>
            </Section>

            <Section title="5. Data Retention">
              <p>We retain your information only as long as necessary to provide services, comply with our legal obligations, resolve disputes, and enforce agreements. Client intake data uploaded by your firm may be deleted at your request.</p>
            </Section>

            <Section title="6. Your Rights">
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul>
                <li>Access, correction, or deletion of your data.</li>
                <li>Objection to or restriction of data processing.</li>
                <li>Withdrawal of consent where processing is based on consent.</li>
                <li>Data portability.</li>
              </ul>
              <p>To exercise your rights, contact us at <a href="mailto:privacy@casecompass.io" style={{ color: '#4f46e5', textDecoration: 'underline' }}>privacy@casecompass.io</a>.</p>
            </Section>

            <Section title="7. Children's Privacy">
              <p>Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13 without verified parental consent. For individuals between the ages of 13 and 17, we process personal data only as permitted by applicable law and, when required, in collaboration with a parent or legal guardian.</p>
              <p>When we receive information about a minor, we:</p>
              <ul>
                <li>Collect only the data strictly necessary for the relevant service (such as intake, eligibility review, or legal documentation).</li>
                <li>Obtain appropriate consent or authorization from a parent, guardian, or authorized representative before using that information.</li>
                <li>Apply heightened security controls to protect sensitive data and prevent unauthorized access.</li>
                <li>Provide parents or guardians the ability to review, update, or request deletion of a minor's personal data.</li>
              </ul>
            </Section>

            <Section title="8. International Data Transfers">
              <p>If you access our services outside the United States, your information may be transferred and processed in the U.S., where data protection laws may differ from your country.</p>
            </Section>

            <Section title="9. Updates to This Policy">
              <p>We may update this Privacy Policy from time to time. Any changes will be posted here with a revised effective date.</p>
            </Section>

            <Section title="10. Contact Us">
              <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
              <div style={{ marginTop: '16px', padding: '24px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <p style={{ margin: 0, fontWeight: 600, color: '#0f172a' }}>Case Compass</p>
                <p style={{ margin: '8px 0 0 0', color: '#64748b' }}>
                  205 Hudson Street<br />
                  New York, NY 10013<br />
                  585.484.7472
                </p>
              </div>
            </Section>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '48px' }}>
      <h2
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.75rem',
          color: '#0f172a',
          marginBottom: '20px',
          lineHeight: 1.3,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          fontSize: '1rem',
          color: '#475569',
          lineHeight: 1.8,
        }}
      >
        {children}
      </div>
      <style>{`
        div ul {
          margin: 16px 0;
          padding-left: 24px;
        }
        div ul li {
          margin-bottom: 12px;
          color: #475569;
        }
        div p {
          margin-bottom: 16px;
        }
        div p:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  )
}
