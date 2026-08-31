import Image from "next/image";
import { AnalyticsLink } from "@/components/analytics-link";
import { SectionHeading } from "@/components/section-heading";

const phases = [
  {
    number: "01",
    title: "Baseline",
    copy: "Establish the real starting point: schedule, training history, waist, weight trend, strength markers, food environment, and constraints.",
  },
  {
    number: "02",
    title: "Rebuild",
    copy: "Install a three-day strength plan and simple nutrition guardrails that survive work, travel, family meals, and imperfect weeks.",
  },
  {
    number: "03",
    title: "Progress",
    copy: "Adjust load, volume, calories, and recovery from weekly data—not emotion, novelty, or punishment.",
  },
  {
    number: "04",
    title: "Hold",
    copy: "Finish with a maintenance operating system so the result does not disappear when the 16 weeks end.",
  },
] as const;

const included = [
  ["01", "Private kickoff and baseline review"],
  ["02", "Personalized three-day strength plan"],
  ["03", "Protein, calorie, and meal guardrails"],
  ["04", "Weekly progress scorecard and plan adjustment"],
  ["05", "Weekday private coaching support"],
  ["06", "Two formal recalibration reviews"],
  ["07", "Travel, restaurant, and disrupted-week protocols"],
  ["08", "Personal 90-day maintenance plan"],
] as const;

const idealFor = [
  "You are a father with a demanding career and limited spare time.",
  "You used to feel athletic, but your body no longer reflects your standards.",
  "You want fat loss without becoming smaller, weaker, or obsessed with food.",
  "You can protect three training sessions each week and report honestly.",
] as const;

const notFor = [
  "You want a crash diet, six-day routine, or instant transformation.",
  "You need medical nutrition therapy, injury rehabilitation, or clinical care.",
  "You are unwilling to track a few useful signals or communicate consistently.",
  "You want motivation delivered to you without changing your environment.",
] as const;

const faqs = [
  {
    question: "What result are we working toward?",
    answer:
      "A visibly leaner waist, retained or improved key strength markers, and a repeatable system you can keep using. Your exact rate of progress depends on your starting point, adherence, health, and recovery; no specific result is guaranteed.",
  },
  {
    question: "How much time does the program require?",
    answer:
      "Plan on three focused strength sessions per week, basic meal preparation, and a short weekly check-in. The system is designed around a full schedule—not around living in the gym.",
  },
  {
    question: "Do I need a home gym?",
    answer:
      "No. A commercial gym is ideal, but the plan is built around the equipment you can reliably access. We decide whether that setup is sufficient before enrollment.",
  },
  {
    question: "Is this only for local clients?",
    answer:
      "The founding cohort prioritizes fathers in Westfield and Carmel, Indiana. Coaching is delivered remotely, so strong-fit applicants elsewhere may still be considered.",
  },
  {
    question: "What happens after I apply?",
    answer:
      "If your application looks aligned, you will be invited to a short fit call. We will clarify your starting point, constraints, and expectations. Enrollment is offered only when the program can responsibly help.",
  },
] as const;

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero section-dark" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">L² Rebuild · Founding cohort</p>
            <h1 id="hero-title">
              Lose the weight.
              <span>Keep the strength.</span>
            </h1>
            <p className="hero-lede">
              A 16-week lean-strength coaching system for busy fathers who used
              to feel athletic—and refuse to accept that their strongest years
              are behind them.
            </p>
            <div className="button-row">
              <AnalyticsLink
                className="button"
                href="/apply"
                eventName="application_started"
                eventLocation="hero"
              >
                Apply for the founding cohort <span aria-hidden="true">↗</span>
              </AnalyticsLink>
              <AnalyticsLink
                className="text-link"
                href="#method"
                eventName="method_viewed"
                eventLocation="hero"
              >
                See the system <span aria-hidden="true">↓</span>
              </AnalyticsLink>
            </div>
            <p className="microcopy">
              10 founding spots · Westfield / Carmel priority · Application only
            </p>
          </div>
          <aside className="protocol-card" aria-label="Program summary">
            <p className="protocol-label">L² / REBUILD</p>
            <div className="protocol-number">16</div>
            <p className="protocol-unit">weeks</p>
            <dl>
              <div>
                <dt>Training</dt>
                <dd>3× / week</dd>
              </div>
              <div>
                <dt>Coaching</dt>
                <dd>Private</dd>
              </div>
              <div>
                <dt>System</dt>
                <dd>Built to keep</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="campaign-wrap section-dark" aria-label="JAY L squared campaign">
        <div className="container">
          <div className="campaign-frame">
            <Image
              src="/jay-l2-campaign.jpg"
              alt="An athlete preparing for a deadlift in a dark strength studio beside the JAY L squared message: Lose the weight. Keep the strength."
              width={1536}
              height={807}
              sizes="(max-width: 1240px) 100vw, 1200px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Program principles">
        <div className="container signal-grid">
          <div>
            <span className="signal-index">01</span>
            <strong>Strength preserved</strong>
            <span>No indiscriminate weight loss</span>
          </div>
          <div>
            <span className="signal-index">02</span>
            <strong>Schedule resilient</strong>
            <span>Built around real constraints</span>
          </div>
          <div>
            <span className="signal-index">03</span>
            <strong>Data informed</strong>
            <span>Adjustments from useful signals</span>
          </div>
        </div>
      </section>

      <section className="section section-light problem-section">
        <div className="container split-layout">
          <SectionHeading
            eyebrow="The actual problem"
            title="You do not need more fitness information."
          />
          <div className="body-stack">
            <p className="lead-paragraph">
              You already know how to work hard. What breaks is the system:
              ambitious plans collide with meetings, travel, family meals,
              poor sleep, and a week that refuses to cooperate.
            </p>
            <p>
              L² Rebuild replaces all-or-nothing fitness with a minimum effective
              operating system: enough structure to create a visible result,
              enough flexibility to survive adult life, and enough accountability
              to keep you from quietly lowering the standard.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="method">
        <div className="container">
          <SectionHeading
            eyebrow="The L² protocol"
            title="A controlled rebuild. Four phases. No chaos."
            copy="The framework is standardized for consistency. Your training loads, exercise selection, nutrition targets, and weekly adjustments are personalized from your data and constraints."
          />
          <ol className="phase-list">
            {phases.map((phase) => (
              <li key={phase.number}>
                <span className="phase-number">{phase.number}</span>
                <h3>{phase.title}</h3>
                <p>{phase.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container included-grid">
          <SectionHeading
            eyebrow="Inside the engagement"
            title="Personal where it changes the result. Productized everywhere else."
            copy="You are not buying access to a content library. You are buying a clear plan, objective feedback, and fast correction when real life disrupts the plan."
          />
          <ol className="included-list">
            {included.map(([number, item]) => (
              <li key={number}>
                <span>{number}</span>
                <strong>{item}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-light" id="fit">
        <div className="container">
          <SectionHeading
            eyebrow="Fit standard"
            title="Built for a specific man at a specific moment."
            align="center"
          />
          <div className="fit-grid">
            <div className="fit-column fit-positive">
              <p className="fit-label">Strong fit</p>
              <ul>
                {idealFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="fit-column">
              <p className="fit-label">Wrong fit</p>
              <ul>
                {notFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-red evidence-section">
        <div className="container evidence-grid">
          <p className="eyebrow">Founding cohort standard</p>
          <h2>Proof is measured. Never manufactured.</h2>
          <p>
            The first cohort will document starting conditions, waist and weight
            trends, strength markers, adherence, and the maintenance result. No
            invented testimonials. No cropped timelines. Just evidence earned
            through the work.
          </p>
        </div>
      </section>

      <section className="section section-dark investment-section" id="investment">
        <div className="container investment-grid">
          <div>
            <p className="eyebrow">Founding investment</p>
            <h2>16 weeks to rebuild the standard.</h2>
            <p className="investment-copy">
              One complete engagement. No recurring charge during the initial
              program. Qualified graduates will be offered a lower-touch
              maintenance option afterward—never an automatic enrollment.
            </p>
          </div>
          <div className="price-block">
            <p className="price-kicker">Paid in full</p>
            <p className="price">$1,000</p>
            <p className="price-option">or 3 monthly payments of $375</p>
            <AnalyticsLink
              className="button button-full"
              href="/apply"
              eventName="application_started"
              eventLocation="investment"
            >
              Apply now <span aria-hidden="true">↗</span>
            </AnalyticsLink>
            <p className="price-note">
              Application first. No payment is collected on this website.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light faq-section">
        <div className="container faq-grid">
          <SectionHeading eyebrow="Questions" title="Before you apply." />
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta section-dark">
        <div className="container final-cta-inner">
          <p className="eyebrow">Applications open</p>
          <h2>Your strongest years are not behind you.</h2>
          <p>
            If you are ready to train three days, report honestly, and rebuild
            the standard for good, make the first move.
          </p>
          <AnalyticsLink
            className="button"
            href="/apply"
            eventName="application_started"
            eventLocation="final_cta"
          >
            Apply for L² Rebuild <span aria-hidden="true">↗</span>
          </AnalyticsLink>
        </div>
      </section>
    </main>
  );
}
