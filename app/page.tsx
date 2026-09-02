import { AnalyticsLink } from "@/components/analytics-link";
import { SectionHeading } from "@/components/section-heading";
import { StartPointCalculator } from "@/components/start-point-calculator";

const included = [
  {
    number: "01",
    title: "A plan built around your life",
    copy: "Three focused strength sessions using the equipment, schedule, and training experience you actually have.",
  },
  {
    number: "02",
    title: "Clear nutrition targets",
    copy: "Calories, protein, meal guardrails, and practical rules for restaurants, travel, weekends, and family meals.",
  },
  {
    number: "03",
    title: "Weekly course correction",
    copy: "Your weight trend, waist, strength, recovery, and adherence determine what changes next—not guesswork.",
  },
  {
    number: "04",
    title: "Private accountability",
    copy: "A direct weekly check-in plus weekday support when a hard decision or disrupted week threatens the plan.",
  },
  {
    number: "05",
    title: "Two formal recalibrations",
    copy: "Deeper reviews to reset training, nutrition, recovery, and the next phase as your body responds.",
  },
  {
    number: "06",
    title: "A system you keep",
    copy: "A personal 90-day maintenance plan so your result survives the end of the 16-week engagement.",
  },
] as const;

const process = [
  {
    number: "01",
    title: "Measure the truth",
    copy: "We establish your real baseline, constraints, and the few numbers that matter.",
  },
  {
    number: "02",
    title: "Execute the minimum effective plan",
    copy: "You train three days, hit clear nutrition targets, and stop relying on perfect weeks.",
  },
  {
    number: "03",
    title: "Adjust until it works",
    copy: "We use your weekly data to remove friction, protect strength, and keep progress moving.",
  },
] as const;

const faqs = [
  {
    question: "Who is L² Rebuild for?",
    answer:
      "Busy fathers and high-performing men who used to feel athletic, want a visibly leaner waist without sacrificing strength, and can protect three training sessions each week.",
  },
  {
    question: "Do I need to live near Westfield or Carmel?",
    answer:
      "No. The founding cohort prioritizes local fathers, but coaching is delivered remotely and strong-fit applicants can join from anywhere.",
  },
  {
    question: "What result is guaranteed?",
    answer:
      "No honest coach can guarantee a specific number of pounds or inches. I can guarantee a clear system, direct feedback, honest accountability, and decisions based on your data. Your result still depends on your effort, health, recovery, and consistency.",
  },
  {
    question: "What happens after I apply?",
    answer:
      "If the fit looks strong, you will receive an invitation to a short call. We clarify your goal, constraints, and expectations before either of us makes a decision.",
  },
] as const;

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero section-dark" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">L² Rebuild · 16-week private coaching</p>
            <h1 id="hero-title">
              Your body is the start.
              <span>I’ll help you change your life.</span>
            </h1>
            <p className="hero-lede">
              You bring three honest workouts a week. I bring the exact plan,
              nutrition targets, accountability, and adjustments to make you
              leaner, stronger, and harder to break—for good.
            </p>
            <p className="hero-promise">
              No bullsh**. No punishment. No plan that collapses when life gets
              busy.
            </p>
            <div className="button-row">
              <AnalyticsLink
                className="button"
                href="/apply"
                eventName="application_started"
                eventLocation="hero"
              >
                Apply for coaching <span aria-hidden="true">↗</span>
              </AnalyticsLink>
              <AnalyticsLink
                className="text-link"
                href="#calculator"
                eventName="calculator_viewed"
                eventLocation="hero"
              >
                Calculate your starting point <span aria-hidden="true">↓</span>
              </AnalyticsLink>
            </div>
            <p className="microcopy">
              10 founding spots · Westfield / Carmel priority · Application only
            </p>
          </div>

          <aside className="protocol-card" aria-label="L squared Rebuild summary">
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
                <dt>Founding rate</dt>
                <dd>$1,000</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="signal-strip" aria-label="Program outcomes">
        <div className="container signal-grid">
          <div>
            <span className="signal-index">01</span>
            <strong>Leaner body</strong>
            <span>Visible progress without a crash diet</span>
          </div>
          <div>
            <span className="signal-index">02</span>
            <strong>Real strength</strong>
            <span>Performance protected while fat comes off</span>
          </div>
          <div>
            <span className="signal-index">03</span>
            <strong>Higher standard</strong>
            <span>A repeatable system built to last</span>
          </div>
        </div>
      </section>

      <section className="section section-paper" id="included">
        <div className="container">
          <SectionHeading
            eyebrow="What you get"
            title="Everything required to change. Nothing that wastes your time."
            copy="This is not a folder of workouts or another app you forget to open. It is a focused coaching system with a real person watching the right numbers and correcting the plan."
          />
          <ol className="deliverables-grid">
            {included.map((item) => (
              <li key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-dark method-compact" id="method">
        <div className="container">
          <SectionHeading
            eyebrow="The method"
            title="Simple enough to execute. Personal enough to work."
          />
          <ol className="phase-list phase-list-compact">
            {process.map((phase) => (
              <li key={phase.number}>
                <span className="phase-number">{phase.number}</span>
                <h3>{phase.title}</h3>
                <p>{phase.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section calculator-section section-light" id="calculator">
        <div className="container calculator-layout">
          <SectionHeading
            eyebrow="Free starting-point calculator"
            title="Know your first numbers in 60 seconds."
            copy="Get an evidence-informed starting estimate for daily calories and protein while cutting fat and supporting strength. No email required."
          />
          <StartPointCalculator />
        </div>
      </section>

      <section className="section section-dark investment-section" id="investment">
        <div className="container investment-grid">
          <div>
            <p className="eyebrow">The commitment</p>
            <h2>This works when you are done negotiating with yourself.</h2>
            <ul className="commitment-list">
              <li>You can protect three focused training sessions each week.</li>
              <li>You will follow clear nutrition targets without chasing perfection.</li>
              <li>You will report honestly—even when the week goes sideways.</li>
              <li>You want a system you can keep, not another temporary sprint.</li>
            </ul>
            <p className="proof-note">
              Founding cohort results will be measured and documented. No fake
              testimonials. No manufactured transformations.
            </p>
          </div>
          <div className="price-block">
            <p className="price-kicker">16-week founding rate</p>
            <p className="price">$1,000</p>
            <p className="price-option">or 3 monthly payments of $375</p>
            <AnalyticsLink
              className="button button-full"
              href="/apply"
              eventName="application_started"
              eventLocation="investment"
            >
              Apply for coaching <span aria-hidden="true">↗</span>
            </AnalyticsLink>
            <p className="price-note">
              Application first. No payment is collected on this website.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light faq-section">
        <div className="container faq-grid">
          <SectionHeading eyebrow="Straight answers" title="Before you apply." />
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

      <section className="final-cta section-orange">
        <div className="container final-cta-inner">
          <p className="eyebrow">Your move</p>
          <h2>This can change more than your body.</h2>
          <p>
            If you are ready to stop restarting, apply. I will tell you directly
            whether L² Rebuild is the right next move.
          </p>
          <AnalyticsLink
            className="button button-dark"
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
