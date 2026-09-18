import {
  AMAZON_A_PLUS_CONTENT_PATH,
  AMAZON_A_TO_Z_PATH,
  AMAZON_ACCOUNT_MANAGEMENT_PATH,
  AMAZON_DSP_SERVICES_PATH,
  AMAZON_LISTING_OPTIMIZATION_PATH,
  AMAZON_PPC_ADVERTISING_PATH,
  AMAZON_PRODUCT_HUNTING_PATH,
  AMAZON_PRODUCT_LAUNCH_PATH,
  AMAZON_SELLER_CENTRAL_PATH,
  AMAZON_SEO_SERVICES_PATH,
  AMAZON_VENDOR_CENTRAL_PATH,
} from "@/lib/amazon-a-to-z";

/**
 * Shared site navigation data — App Router paths (replaces window.XO_NAV).
 */

export const ROUTES = {
  home: "/",
  about: "/about",
  blog: "/blog",
  contact: "/contact",
  consulting: "/consulting",
  discoveryWorkshop: "/consulting/discovery-workshop-services",
  aiConsultation: "/consulting/ai-consultation-services",
  digitalTransformation: "/consulting/digital-transformation-services",
  engineering: "/engineering",
  aiSoftwareDevelopment: "/engineering/ai-software-development-services",
  customAppDevelopment: "/engineering/custom-app-development-services",
  applicationModernization: "/engineering/application-modernization-services",
  mvpPocDevelopment: "/engineering/mvp-poc-development-services",
  cmsDevelopment: "/engineering/cms-development-services",
  uiUxServices: "/engineering/ui-ux-services",
  pythonWebDevelopment: "/python-web-development-services",
  /** Unlisted SEO landing — do not add to XO_NAV or FOOTER_COLUMNS */
  pythonApplicationDevelopment: "/python-application-development",
  nodejsWebDevelopment: "/nodejs-web-development-services",
  laravelWebsiteDevelopment: "/laravel-website-development-services",
  customDotnetDevelopment: "/custom-dotnet-development",
  /** Unlisted SEO landing — do not add to XO_NAV or FOOTER_COLUMNS */
  djangoDevelopmentCompany: "/django-development-company",
  /** Unlisted SEO landing — do not add to XO_NAV or FOOTER_COLUMNS */
  flutterMobileAppDevelopment: "/flutter-mobile-app-development",
  /** Unlisted SEO landing — do not add to XO_NAV or FOOTER_COLUMNS */
  javaWebDevelopment: "/java-web-development",
  ai: "/ai",
  aiAgentDevelopment: "/ai/ai-agent-development",
  mlDataScience: "/ai/ml-data-science-services",
  workflowAutomation: "/ai/workflow-automation-services",
  managedServices: "/managed-services",
  devops: "/managed-services/devops-services",
  cybersecurity: "/managed-services/cybersecurity-services",
  itInfrastructure: "/managed-services/it-infrastructure-services",
  marketingServices: "/marketing-services",
  seoServices: "/marketing-services/seo-services",
  localSeoServices: "/marketing-services/local-seo-services",
  googleAdsServices: "/marketing-services/google-ads-services",
  metaAdsServices: "/marketing-services/meta-ads-services",
  socialMediaManagement: "/marketing-services/social-media-management-services",
  b2bMarketingServices: "/marketing-services/b2b-marketing-services",
  staffAugmentation: "/consulting/staff-augmentation-services",
  howWeWork: "/how-we-work",
  industries: "/industries",
  ourWork: "/our-work",
  caseStudy: (slug: string) => `/case-studies/${slug}`,
  blogPost: (slug: string) => `/blog/${slug}`,
  industry: (slug: string) => `/industries/${slug}`,
  losono: "/solutions/losono",
  clearbeam: "/solutions/clearbeam",
  leadem: "/solutions/leadem",
} as const;

export type NavIconName =
  | "compass"
  | "code-2"
  | "database"
  | "server-cog"
  | "megaphone"
  | "handshake"
  | "heart-pulse"
  | "building-2"
  | "landmark"
  | "shopping-cart"
  | "graduation-cap"
  | "truck"
  | "layout-grid"
  | "rocket"
  | "palmtree"
  | "building"
  | "newspaper"
  | "git-branch"
  | "kanban-square"
  | "mail-check"
  | "bot";

export interface NavServiceItem {
  label: string;
  href: string;
}

export interface NavServiceCategory {
  name: string;
  icon: NavIconName;
  href: string;
  items: NavServiceItem[];
}

export interface NavIndustry {
  name: string;
  icon: NavIconName;
  desc: string;
  href: string;
}

export interface NavCompanyLink {
  name: string;
  icon: NavIconName;
  desc: string;
  href: string;
}

export interface NavFeaturedCaseStudy {
  tag: string;
  title: string;
  desc: string;
  img: string;
  href: string;
  metaTitle: string;
  stats: [string, string][];
}

export interface NavSolution {
  name: string;
  tagline: string;
  icon: NavIconName;
  href: string;
  live: boolean;
}

export interface SiteNavigation {
  caseStudiesHref: string;
  solutions: NavSolution[];
  services: NavServiceCategory[];
  industries: NavIndustry[];
  company: NavCompanyLink[];
  featured: NavFeaturedCaseStudy;
}

export const XO_NAV: SiteNavigation = {
  caseStudiesHref: ROUTES.ourWork,
  solutions: [],
  services: [
    {
      name: "Consulting",
      icon: "compass",
      href: ROUTES.consulting,
      items: [
        { label: "Discovery Workshop", href: ROUTES.discoveryWorkshop },
        { label: "AI Consulting", href: ROUTES.aiConsultation },
        { label: "Digital Transformation", href: ROUTES.digitalTransformation },
        { label: "Staff Augmentation", href: ROUTES.staffAugmentation },
      ],
    },
    {
      name: "Engineering",
      icon: "code-2",
      href: ROUTES.engineering,
      items: [
        {
          label: "AI Software Development",
          href: ROUTES.aiSoftwareDevelopment,
        },
        { label: "Custom App Development", href: ROUTES.customAppDevelopment },
        {
          label: "Application Modernization",
          href: ROUTES.applicationModernization,
        },
        { label: "MVP / POC Development", href: ROUTES.mvpPocDevelopment },
        { label: "CMS Development Services", href: ROUTES.cmsDevelopment },
        { label: "UI/UX Services", href: ROUTES.uiUxServices },
      ],
    },
    {
      name: "AI",
      icon: "bot",
      href: ROUTES.ai,
      items: [
        { label: "AI Agent Development", href: ROUTES.aiAgentDevelopment },
        { label: "ML & Data Science Services", href: ROUTES.mlDataScience },
        {
          label: "Workflow Automation Services",
          href: ROUTES.workflowAutomation,
        },
      ],
    },
    {
      name: "Managed Services",
      icon: "server-cog",
      href: ROUTES.managedServices,
      items: [
        { label: "DevOps", href: ROUTES.devops },
        { label: "Cybersecurity", href: ROUTES.cybersecurity },
        { label: "IT Infrastructure", href: ROUTES.itInfrastructure },
      ],
    },
    {
      name: "Marketing Services",
      icon: "megaphone",
      href: ROUTES.marketingServices,
      items: [
        { label: "SEO", href: ROUTES.seoServices },
        { label: "Local SEO", href: ROUTES.localSeoServices },
        { label: "Google Ads", href: ROUTES.googleAdsServices },
        { label: "Meta Ads", href: ROUTES.metaAdsServices },
        {
          label: "Social Media Management",
          href: ROUTES.socialMediaManagement,
        },
        { label: "B2B Marketing", href: ROUTES.b2bMarketingServices },
      ],
    },
    {
      name: "Amazon A to Z Services",
      icon: "shopping-cart",
      href: AMAZON_A_TO_Z_PATH,
      items: [
        {
          label: "Product Hunting & Sourcing",
          href: AMAZON_PRODUCT_HUNTING_PATH,
        },
        {
          label: "Listing Optimization Services",
          href: AMAZON_LISTING_OPTIMIZATION_PATH,
        },
        {
          label: "Product Launch Services",
          href: AMAZON_PRODUCT_LAUNCH_PATH,
        },
        { label: "A+ Content", href: AMAZON_A_PLUS_CONTENT_PATH },
        { label: "SEO Services", href: AMAZON_SEO_SERVICES_PATH },
        { label: "PPC Services", href: AMAZON_PPC_ADVERTISING_PATH },
        { label: "DSP Services", href: AMAZON_DSP_SERVICES_PATH },
        {
          label: "Seller Central Management",
          href: AMAZON_SELLER_CENTRAL_PATH,
        },
        {
          label: "Account Management",
          href: AMAZON_ACCOUNT_MANAGEMENT_PATH,
        },
        {
          label: "Vendor Central Services",
          href: AMAZON_VENDOR_CENTRAL_PATH,
        },
      ],
    },
  ],
  industries: [
    {
      name: "Healthcare",
      icon: "heart-pulse",
      desc: "Compliant, accessible systems that improve care delivery.",
      href: ROUTES.industry("health-tech"),
    },
    {
      name: "Real Estate",
      icon: "building-2",
      desc: "Platforms that streamline property and tenant operations.",
      href: ROUTES.industry("real-estate"),
    },
    {
      name: "Fintech",
      icon: "landmark",
      desc: "Secure infrastructure that manages risk and prevents fraud.",
      href: ROUTES.industry("fintech"),
    },
    {
      name: "E-commerce",
      icon: "shopping-cart",
      desc: "Conversion-focused commerce engines built to scale.",
      href: ROUTES.industry("ecommerce"),
    },
    {
      name: "Edtech",
      icon: "graduation-cap",
      desc: "Engaging learning platforms that scale to every student.",
      href: ROUTES.industry("edtech"),
    },
    {
      name: "Logistics",
      icon: "truck",
      desc: "Real-time visibility and automation across the supply chain.",
      href: ROUTES.industry("logistics"),
    },
    {
      name: "SaaS",
      icon: "layout-grid",
      desc: "Multi-tenant platforms engineered to scale from first customer to enterprise.",
      href: ROUTES.industry("saas"),
    },
    {
      name: "Startups",
      icon: "rocket",
      desc: "MVPs and investor-ready products built to ship fast and scale.",
      href: ROUTES.industry("startups"),
    },
    {
      name: "Travel & Hospitality",
      icon: "palmtree",
      desc: "Booking platforms and guest experiences that lift occupancy and loyalty.",
      href: ROUTES.industry("travel-hospitality"),
    },
  ],
  company: [
    {
      name: "About Us",
      icon: "building",
      desc: "Who we are and how we partner.",
      href: ROUTES.about,
    },
    {
      name: "Blogs",
      icon: "newspaper",
      desc: "Field notes on shipping production AI.",
      href: ROUTES.blog,
    },
    {
      name: "How we Work",
      icon: "git-branch",
      desc: "Our engineering process, end to end.",
      href: ROUTES.howWeWork,
    },
  ],
  featured: {
    tag: "FEATURED CASE STUDY",
    title: "From Empty Storefront to 2.5 ROAS: An Amazon AU Launch",
    desc: "A demand-validated multi-unit card tracker, conversion-ready listing, Brand Registry assets, and a disciplined $20/day Sponsored Products plan — reaching 2.5 ROAS in about five weeks.",
    img: "/assets/case-studies/amazon-au-product-launch/hero.webp",
    href: ROUTES.caseStudy("amazon-au-product-launch"),
    metaTitle: "Amazon AU Product Launch Case Study — 2.5 ROAS | Xorora",
    stats: [
      ["2.5", "ROAS"],
      ["~5 wks", "to launch"],
    ],
  },
};

export interface FooterColumn {
  heading: string;
  href?: string;
  items: Array<
    { label: string; href: string } | { label: string; action: "top" }
  >;
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Engineering",
    href: ROUTES.engineering,
    items: [
      { label: "AI Software Development", href: ROUTES.aiSoftwareDevelopment },
      { label: "Custom App Development", href: ROUTES.customAppDevelopment },
      {
        label: "Application Modernization",
        href: ROUTES.applicationModernization,
      },
      { label: "MVP / POC Development", href: ROUTES.mvpPocDevelopment },
      { label: "CMS Development Services", href: ROUTES.cmsDevelopment },
      { label: "UI/UX Services", href: ROUTES.uiUxServices },
    ],
  },
  {
    heading: "AI",
    href: ROUTES.ai,
    items: [
      { label: "AI Agent Development", href: ROUTES.aiAgentDevelopment },
      { label: "ML & Data Science Services", href: ROUTES.mlDataScience },
      {
        label: "Workflow Automation Services",
        href: ROUTES.workflowAutomation,
      },
    ],
  },
  {
    heading: "Marketing Services",
    href: ROUTES.marketingServices,
    items: [
      { label: "SEO", href: ROUTES.seoServices },
      { label: "Local SEO", href: ROUTES.localSeoServices },
      { label: "Google Ads", href: ROUTES.googleAdsServices },
      { label: "Meta Ads", href: ROUTES.metaAdsServices },
      { label: "Social Media Management", href: ROUTES.socialMediaManagement },
      { label: "B2B Marketing", href: ROUTES.b2bMarketingServices },
    ],
  },
  {
    heading: "Amazon A to Z",
    href: AMAZON_A_TO_Z_PATH,
    items: [
      {
        label: "Product Hunting & Sourcing",
        href: AMAZON_PRODUCT_HUNTING_PATH,
      },
      {
        label: "Listing Optimization",
        href: AMAZON_LISTING_OPTIMIZATION_PATH,
      },
      { label: "Product Launch", href: AMAZON_PRODUCT_LAUNCH_PATH },
      { label: "A+ Content", href: AMAZON_A_PLUS_CONTENT_PATH },
      { label: "Amazon SEO", href: AMAZON_SEO_SERVICES_PATH },
      { label: "Amazon PPC", href: AMAZON_PPC_ADVERTISING_PATH },
      { label: "Amazon DSP", href: AMAZON_DSP_SERVICES_PATH },
      {
        label: "Seller Central Management",
        href: AMAZON_SELLER_CENTRAL_PATH,
      },
      {
        label: "Account Management",
        href: AMAZON_ACCOUNT_MANAGEMENT_PATH,
      },
      {
        label: "Vendor Central",
        href: AMAZON_VENDOR_CENTRAL_PATH,
      },
    ],
  },
  {
    heading: "Industries",
    items: XO_NAV.industries.map((ind) => ({
      label: ind.name,
      href: ind.href,
    })),
  },
  {
    heading: "Consulting",
    href: ROUTES.consulting,
    items: [
      { label: "Discovery Workshop", href: ROUTES.discoveryWorkshop },
      { label: "AI Consulting", href: ROUTES.aiConsultation },
      { label: "Digital Transformation", href: ROUTES.digitalTransformation },
      { label: "Staff Augmentation", href: ROUTES.staffAugmentation },
    ],
  },
  {
    heading: "Managed Services",
    href: ROUTES.managedServices,
    items: [
      { label: "DevOps", href: ROUTES.devops },
      { label: "Cybersecurity", href: ROUTES.cybersecurity },
      { label: "IT Infrastructure", href: ROUTES.itInfrastructure },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About Us", href: ROUTES.about },
      { label: "Blogs", href: ROUTES.blog },
      { label: "How we Work", href: ROUTES.howWeWork },
      { label: "Our Work", href: ROUTES.ourWork },
      { label: "Contact us", href: ROUTES.contact },
    ],
  },
];

export { SITE_OFFICES as FOOTER_OFFICES } from "@/lib/contact";
