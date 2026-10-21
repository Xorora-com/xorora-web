/**
 * Shared site contact details — email, phones (US, Pakistan, Australia), offices.
 */

export const SITE_EMAIL = "info@xorora.com";

export interface SitePhone {
  label: string;
  display: string;
  href: string;
}

export const SITE_PHONES: SitePhone[] = [
  {
    label: "United States",
    display: "+1 512-764-7666",
    href: "tel:+15127647666",
  },
  {
    label: "Pakistan",
    display: "+92-332-0555328",
    href: "tel:+923320555328",
  },
  {
    label: "Australia",
    display: "+61 435 351 857",
    href: "tel:+61435351857",
  },
];

export interface SiteOffice {
  city: string;
  addr: string;
}

export const SITE_OFFICES: SiteOffice[] = [
  {
    city: "United States",
    addr: "5900 Balcones Drive #28551, Austin, TX, 78731, USA",
  },
  {
    city: "Pakistan",
    addr: "Plot # 606, Block F2, Phase 1 Johar Town, Lahore, 54000",
  },
  {
    city: "Australia",
    addr: "Redheart Crescent, Woodstock VIC 3751, Australia",
  },
];

/** Mailto href for the primary site email. */
export const SITE_EMAIL_HREF = `mailto:${SITE_EMAIL}`;
