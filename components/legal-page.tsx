import type { ReactNode } from "react";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: LegalPageProps) {
  return (
    <main id="main-content" className="legal-page section-light">
      <header className="legal-hero section-dark">
        <div className="container narrow-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <p className="legal-updated">Effective August 31, 2026</p>
        </div>
      </header>
      <article className="container legal-content">{children}</article>
    </main>
  );
}
