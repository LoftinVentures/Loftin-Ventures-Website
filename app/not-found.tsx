import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found section-dark">
      <div className="container narrow-copy">
        <p className="eyebrow">404 / Off protocol</p>
        <h1>This page does not exist.</h1>
        <p>The path changed, but the standard did not.</p>
        <Link className="button" href="/">
          Return home <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </main>
  );
}
