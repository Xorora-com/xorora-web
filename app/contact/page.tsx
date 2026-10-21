import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ContactPageSection } from "@/components/contact/contact-page-section";
import { SignalRule } from "@/components/geometry/signal-rule";
import { XWatermark } from "@/components/geometry/x-watermark";
import { buttonClassName } from "@/lib/button-styles";
import { SITE_EMAIL, SITE_OFFICES, SITE_PHONES } from "@/lib/contact";
import { ROUTES } from "@/lib/navigation";
import { SITE_URL } from "@/lib/site-url";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact Xorora — Tell Us About Your Project",
  description:
    "Contact Xorora to discuss your software or AI project. Reach us by email or phone in the US and Pakistan, or send a project brief — we respond within one business day.",
  keywords: [
    "contact Xorora",
    "software development contact",
    "AI development partner",
    "start a project",
  ],
  alternates: { canonical: ROUTES.contact },
  openGraph: {
    title: "Contact Xorora — Tell Us About Your Project",
    description:
      "Share a few project details and our team will get back within one business day. Offices in Austin, Lahore, and Woodstock.",
    url: ROUTES.contact,
    siteName: "Xorora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Xorora — Tell Us About Your Project",
    description:
      "Share a few project details and our team will get back within one business day.",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Xorora",
  url: `${SITE_URL}${ROUTES.contact}`,
  description:
    "Contact Xorora to discuss custom software and AI development projects.",
  mainEntity: {
    "@type": "Organization",
    name: "Xorora",
    url: SITE_URL,
    email: SITE_EMAIL,
    telephone: SITE_PHONES.map((p) => p.display),
    address: SITE_OFFICES.map((office) => ({
      "@type": "PostalAddress",
      name: office.city,
      streetAddress: office.addr,
    })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: `${SITE_URL}${ROUTES.contact}`,
    },
  ],
};

export default function ContactPage() {
  return (
    <div className="bg-surface">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <ContactPageSection />

      <section className="relative overflow-hidden bg-navy-950 px-5 py-[clamp(64px,8vw,104px)] sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_50%_0%,rgba(70,76,159,0.42),transparent_60%)]" />
        <XWatermark
          size={520}
          color="rgba(120,150,240,0.05)"
          className="-translate-x-1/2 bottom-[-220px] left-1/2"
        />
        <div className="relative mx-auto max-w-[720px] text-center">
          <SignalRule
            color="var(--tangerine-400)"
            className="mb-[26px] justify-center"
          />
          <h2 className="mb-[18px] text-balance font-extrabold font-sans text-[clamp(28px,4.2vw,44px)] text-white leading-tight tracking-tight">
            Explore what we build
            <span className="text-tangerine-400">.</span>
          </h2>
          <p className="mx-auto mb-8 max-w-[520px] font-sans text-[clamp(15px,1.8vw,18px)] text-white/70 leading-relaxed">
            From AI software and custom apps to modernization and managed
            delivery — see the services we engineer for high-stakes teams.
          </p>
          <Link
            href={ROUTES.engineering}
            className={buttonClassName({
              variant: "primary",
              size: "lg",
              className: "justify-center",
            })}
          >
            View our services
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}
