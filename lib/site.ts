export const siteConfig = {
  name: "JAY L²",
  url: "https://www.loftinventures.com",
  email: "lsquared.jay@gmail.com",
  location: "Westfield / Carmel, Indiana",
  description:
    "Sixteen weeks of private coaching for busy fathers ready to build a leaner, stronger body and a standard that lasts.",
} as const;

export const applicationQuestions = [
  "What is the single most important result you want over the next 16 weeks?",
  "How consistently have you trained during the past 90 days?",
  "What has stopped previous attempts from lasting?",
  "What gym access or training equipment do you have?",
  "Can you protect three strength-training sessions each week?",
  "Are you prepared to invest $1,000 paid in full or three payments of $375 if the fit is right?",
  "Why is now the right time to make this change?",
] as const;

const applicationBody = [
  "JAY L² FOUNDING COHORT APPLICATION",
  "",
  "Name:",
  "City:",
  "Best phone number:",
  "",
  ...applicationQuestions.flatMap((question, index) => [
    `${index + 1}. ${question}`,
    "Answer:",
    "",
  ]),
].join("\n");

export const applicationEmailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  "JAY L² Founding Cohort Application",
)}&body=${encodeURIComponent(applicationBody)}`;
