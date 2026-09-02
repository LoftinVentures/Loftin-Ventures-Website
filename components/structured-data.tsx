import { siteConfig } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      areaServed: "United States",
    },
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/#service`,
      name: "L² Rebuild",
      description: siteConfig.description,
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: "United States",
      offers: {
        "@type": "Offer",
        price: "1000",
        priceCurrency: "USD",
        availability: "https://schema.org/LimitedAvailability",
        url: `${siteConfig.url}/apply`,
      },
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
