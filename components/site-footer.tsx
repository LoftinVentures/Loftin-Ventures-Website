import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="wordmark" href="/" aria-label="JAY L squared home">
            JAY L<sup>2</sup>
          </Link>
          <p className="footer-note">
            Change your body. Raise your standard.
          </p>
        </div>
        <div className="footer-links" aria-label="Legal links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <a href={`mailto:${siteConfig.email}`}>Contact</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} JAY L²</span>
        <span>{siteConfig.location}</span>
      </div>
    </footer>
  );
}
