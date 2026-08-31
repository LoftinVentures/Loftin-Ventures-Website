import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website Terms",
  description: "Terms governing use of the JAY L² website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal / 02"
      title="Website Terms"
      intro="These terms govern access to and use of the JAY L² website. Separate signed terms govern any paid coaching engagement."
    >
      <section>
        <h2>Use of this website</h2>
        <p>
          You may use this website for lawful, personal purposes. You may not
          interfere with its operation, attempt unauthorized access, introduce
          malicious code, scrape it abusively, or use its content to misrepresent
          an affiliation with JAY L².
        </p>
      </section>
      <section>
        <h2>Informational content</h2>
        <p>
          Website content is general educational information, not medical care,
          diagnosis, physical therapy, or individualized nutrition treatment. It
          is not a substitute for advice from a qualified healthcare professional.
          Read the full Disclaimer before acting on fitness or nutrition content.
        </p>
      </section>
      <section>
        <h2>Applications and coaching</h2>
        <p>
          Submitting an application does not create a coach-client relationship,
          guarantee acceptance, reserve a place, or create a payment obligation.
          Any coaching engagement begins only after both parties accept separate
          written enrollment terms, required readiness screening, and payment
          arrangements.
        </p>
      </section>
      <section>
        <h2>Intellectual property</h2>
        <p>
          The JAY L² name, visual identity, website design, written material,
          frameworks, and original media are owned by or licensed to JAY L² and
          protected by applicable intellectual-property laws. No license is
          granted except the limited right to view the website for personal use.
        </p>
      </section>
      <section>
        <h2>No warranties; limitation</h2>
        <p>
          The website is provided on an “as available” basis to the extent
          permitted by law. We do not warrant uninterrupted access, error-free
          content, or a particular result. To the fullest extent allowed by law,
          JAY L² is not liable for indirect, incidental, special, or consequential
          losses arising from use of this website.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Questions about these website terms may be sent to
          <a href={`mailto:${siteConfig.email}`}> {siteConfig.email}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
