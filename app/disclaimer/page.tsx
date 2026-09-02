import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fitness & Results Disclaimer",
  description: "Important health, fitness, and results information for JAY L².",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Legal / 03"
      title="Fitness & Results Disclaimer"
      intro="Training and nutrition changes carry real risk. Read this before using JAY L² content or applying for coaching."
    >
      <section>
        <h2>Not medical advice</h2>
        <p>
          JAY L² provides fitness coaching and general nutrition education. It
          does not provide medical diagnosis, medical nutrition therapy, physical
          therapy, mental-health care, or emergency services. Consult an
          appropriate licensed professional before beginning or changing an
          exercise or nutrition program, especially if you have symptoms,
          injuries, medical conditions, take medication, or have been inactive.
        </p>
      </section>
      <section>
        <h2>Assumption of risk</h2>
        <p>
          Physical exercise can result in fatigue, soreness, falls, injury,
          illness, cardiovascular events, or death. Nutrition changes can also
          create adverse effects or interact with medical conditions and
          medications. Stop activity and seek appropriate care if you experience
          pain, dizziness, shortness of breath beyond normal exertion, or other
          concerning symptoms.
        </p>
      </section>
      <section>
        <h2>No guaranteed results</h2>
        <p>
          Examples, targets, testimonials, and program descriptions are not
          promises. Results vary with starting point, adherence, genetics, health,
          sleep, stress, environment, and other factors. No specific amount of
          weight loss, strength gain, body-composition change, or maintenance
          result is guaranteed.
        </p>
      </section>
      <section>
        <h2>Individual responsibility</h2>
        <p>
          You are responsible for using appropriate judgment, technique,
          equipment, supervision, and medical guidance. Public website content is
          not personalized to your circumstances. A coaching application is not a
          readiness clearance or clinical assessment.
        </p>
      </section>
      <section>
        <h2>Questions</h2>
        <p>
          Contact <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          for questions about this disclaimer. For medical concerns, contact a
          qualified healthcare professional.
        </p>
      </section>
    </LegalPage>
  );
}
