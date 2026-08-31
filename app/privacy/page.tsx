import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How JAY L² handles information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal / 01"
      title="Privacy Policy"
      intro="This policy explains the limited information JAY L² receives through this website and how it is handled."
    >
      <section>
        <h2>Information you provide</h2>
        <p>
          Phase 1 does not operate an on-site application form or checkout. If
          you contact us by email, we receive the information you choose to send,
          such as your name, contact details, goals, and answers to application
          questions. Do not send medical records or sensitive health information
          by email.
        </p>
      </section>
      <section>
        <h2>Information collected automatically</h2>
        <p>
          Our hosting provider may process standard technical data—including IP
          address, device and browser information, requested pages, timestamps,
          and diagnostic logs—to deliver, secure, and maintain the website. This
          site does not currently use advertising pixels or marketing cookies.
        </p>
      </section>
      <section>
        <h2>How information is used</h2>
        <ul>
          <li>To respond to inquiries and evaluate program fit.</li>
          <li>To operate, secure, diagnose, and improve the website.</li>
          <li>To comply with legal obligations and prevent misuse.</li>
        </ul>
        <p>
          We do not sell personal information. Information is shared only with
          service providers needed to operate the business, when required by law,
          or with your direction.
        </p>
      </section>
      <section>
        <h2>Retention and security</h2>
        <p>
          Information is retained only as long as reasonably needed for the
          purposes above, legal obligations, and legitimate business records. No
          transmission or storage method is perfectly secure; we use reasonable
          administrative and technical safeguards appropriate to the information.
        </p>
      </section>
      <section>
        <h2>Your choices</h2>
        <p>
          You may request access, correction, or deletion of information you have
          sent us, subject to applicable law and necessary business records. Email
          <a href={`mailto:${siteConfig.email}`}> {siteConfig.email}</a> with a
          privacy request.
        </p>
      </section>
      <section>
        <h2>Policy changes</h2>
        <p>
          This policy will be updated before new analytics, forms, checkout, or
          member systems materially change how information is handled. The
          effective date above identifies the current version.
        </p>
      </section>
    </LegalPage>
  );
}
