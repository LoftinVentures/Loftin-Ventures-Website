import Link from "next/link";
import { AnalyticsLink } from "@/components/analytics-link";

const navigation = [
  { href: "/#included", label: "What you get" },
  { href: "/#calculator", label: "Calculator" },
  { href: "/#investment", label: "Investment" },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label="JAY L squared home">
          JAY L<sup>2</sup>
        </Link>
        <nav className="primary-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <AnalyticsLink
          className="button button-small"
          href="/apply"
          eventName="application_started"
          eventLocation="header"
        >
          Apply now <span aria-hidden="true">↗</span>
        </AnalyticsLink>
      </div>
    </header>
  );
}
