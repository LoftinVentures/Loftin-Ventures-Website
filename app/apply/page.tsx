import type { Metadata } from "next";
import { AnalyticsLink } from "@/components/analytics-link";
import { applicationEmailHref, applicationQuestions, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apply for L² Rebuild",
  description:
    "Apply for the founding cohort of L² Rebuild, a 16-week lean-strength coaching system for busy fathers.",
  alternates: { canonical: "/apply" },
};

export default function ApplyPage() {
  return (
    <main id="main-content" className="application-page section-dark">
      <section className="application-hero">
        <div className="container application-grid">
          <div>
            <p className="eyebrow">L² Rebuild · Application</p>
            <h1>Start with the truth.</h1>
            <p className="application-lede">
              This is a small, founder-led cohort. The application protects your
              time and ours by confirming the goal, commitment, and investment
              before a call is scheduled.
            </p>
            <div className="application-facts" aria-label="Program facts">
              <div>
                <span>01</span>
                <p>16-week private engagement</p>
              </div>
              <div>
                <span>02</span>
                <p>Three strength sessions weekly</p>
              </div>
              <div>
                <span>03</span>
                <p>$1,000 paid in full or 3 × $375</p>
              </div>
            </div>
          </div>
          <aside className="next-steps">
            <p className="next-steps-label">What happens next</p>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <strong>Send the application</strong>
                  <p>Answer seven direct questions. About five minutes.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Complete a fit call</strong>
                  <p>Qualified applicants receive an invitation by email.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Decide with clarity</strong>
                  <p>If the fit is mutual, you receive terms and enrollment steps.</p>
                </div>
              </li>
            </ol>
          </aside>
        </div>
      </section>

      <section className="application-form-section section-paper">
        <div className="container application-form-grid">
          <div>
            <p className="eyebrow">Seven questions</p>
            <h2>Ready when you are.</h2>
            <p>
              The button opens a pre-addressed email with every question ready
              to answer. Phase 1 intentionally collects no application data on
              this website.
            </p>
            <AnalyticsLink
              className="button"
              href={applicationEmailHref}
              eventName="application_email_opened"
              eventLocation="application_page"
            >
              Open the application <span aria-hidden="true">↗</span>
            </AnalyticsLink>
            <p className="email-fallback">
              Email not opening? Send your answers to{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          </div>
          <ol className="question-list">
            {applicationQuestions.map((question, index) => (
              <li key={question}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{question}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="application-safety section-light">
        <div className="container narrow-copy">
          <p>
            Do not email medical records or sensitive health information. A
            separate readiness and risk screen is required before coaching begins.
            Exercise and nutrition coaching is not medical care.
          </p>
        </div>
      </section>
    </main>
  );
}
