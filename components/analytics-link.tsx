"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

type AnalyticsLinkProps = ComponentProps<typeof Link> & {
  eventName: string;
  eventLocation: string;
};

export function AnalyticsLink({
  eventName,
  eventLocation,
  onClick,
  ...props
}: AnalyticsLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const payload = {
      event: eventName,
      location: eventLocation,
      href: String(props.href),
    };

    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push(payload);
    window.dispatchEvent(
      new CustomEvent("jayl2:analytics", { detail: payload }),
    );
    onClick?.(event);
  }

  return <Link {...props} onClick={handleClick} />;
}
