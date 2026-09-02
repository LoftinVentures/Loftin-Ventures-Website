"use client";

import { useState, type FormEvent } from "react";
import { AnalyticsLink } from "@/components/analytics-link";

type Calculation = {
  calories: number;
  protein: number;
};

const activityFactors = {
  low: 1.25,
  light: 1.35,
  moderate: 1.5,
  high: 1.65,
} as const;

export function StartPointCalculator() {
  const [result, setResult] = useState<Calculation | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const age = Number(form.get("age"));
    const weightPounds = Number(form.get("weight"));
    const heightFeet = Number(form.get("heightFeet"));
    const heightInches = Number(form.get("heightInches"));
    const activity = String(form.get("activity")) as keyof typeof activityFactors;

    const weightKilograms = weightPounds * 0.453592;
    const heightCentimeters = (heightFeet * 12 + heightInches) * 2.54;
    const basalMetabolicRate =
      10 * weightKilograms + 6.25 * heightCentimeters - 5 * age + 5;
    const maintenanceCalories = basalMetabolicRate * activityFactors[activity];
    const startingCalories = Math.max(
      basalMetabolicRate * 1.05,
      maintenanceCalories * 0.84,
    );

    setResult({
      calories: Math.round(startingCalories / 50) * 50,
      protein: Math.round((weightPounds * 0.9) / 5) * 5,
    });

    const payload = {
      event: "starting_point_calculated",
      location: "homepage_calculator",
    };

    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push(payload);
    window.dispatchEvent(new CustomEvent("jayl2:analytics", { detail: payload }));
  }

  return (
    <div className="calculator-card">
      <form className="calculator-form" onSubmit={handleSubmit}>
        <div className="calculator-fields">
          <label>
            <span>Age</span>
            <input
              type="number"
              name="age"
              min="18"
              max="80"
              inputMode="numeric"
              placeholder="35"
              required
            />
          </label>
          <label>
            <span>Weight</span>
            <span className="input-with-unit">
              <input
                type="number"
                name="weight"
                min="100"
                max="500"
                inputMode="decimal"
                placeholder="220"
                required
              />
              <span aria-hidden="true">lb</span>
            </span>
          </label>
          <fieldset className="height-field">
            <legend>Height</legend>
            <div>
              <label>
                <span className="sr-only">Height in feet</span>
                <span className="input-with-unit">
                  <input
                    type="number"
                    name="heightFeet"
                    min="4"
                    max="7"
                    inputMode="numeric"
                    placeholder="6"
                    required
                  />
                  <span aria-hidden="true">ft</span>
                </span>
              </label>
              <label>
                <span className="sr-only">Additional height in inches</span>
                <span className="input-with-unit">
                  <input
                    type="number"
                    name="heightInches"
                    min="0"
                    max="11"
                    inputMode="numeric"
                    placeholder="0"
                    required
                  />
                  <span aria-hidden="true">in</span>
                </span>
              </label>
            </div>
          </fieldset>
          <label className="activity-field">
            <span>Typical daily movement</span>
            <select name="activity" defaultValue="light" required>
              <option value="low">Mostly seated · under 5,000 steps</option>
              <option value="light">Some movement · 5,000–8,000 steps</option>
              <option value="moderate">Active · 8,000–12,000 steps</option>
              <option value="high">Very active · 12,000+ steps</option>
            </select>
          </label>
        </div>

        <button className="button calculator-submit" type="submit">
          Calculate my starting point <span aria-hidden="true">→</span>
        </button>
        <p className="calculator-assumption">
          Built for adult men pursuing gradual fat loss while resistance training.
        </p>
      </form>

      <div
        className={`calculator-result${result ? " calculator-result-visible" : ""}`}
        aria-live="polite"
      >
        {result ? (
          <>
            <p className="result-label">Your estimated daily starting targets</p>
            <div className="result-numbers">
              <div>
                <strong>{result.calories.toLocaleString()}</strong>
                <span>calories</span>
              </div>
              <div>
                <strong>{result.protein}g</strong>
                <span>protein</span>
              </div>
              <div>
                <strong>3×</strong>
                <span>strength / week</span>
              </div>
            </div>
            <p className="result-copy">
              A calculator gives you a starting line—not a complete system. The
              advantage comes from measuring your response and adjusting before
              a bad week becomes another restart.
            </p>
            <AnalyticsLink
              className="button button-full"
              href="/apply"
              eventName="application_started"
              eventLocation="calculator_result"
            >
              Build my complete plan <span aria-hidden="true">↗</span>
            </AnalyticsLink>
          </>
        ) : (
          <div className="result-placeholder" aria-hidden="true">
            <span>YOUR STARTING POINT</span>
            <strong>—</strong>
            <p>Enter four inputs to reveal the numbers.</p>
          </div>
        )}
      </div>

      <p className="calculator-disclaimer">
        Educational estimate only—not medical or nutrition care. Actual needs
        vary. Consult a qualified clinician when health conditions, medications,
        or a history of disordered eating affect nutrition or exercise.
      </p>
    </div>
  );
}
