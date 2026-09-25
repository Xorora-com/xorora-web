/**
 * Local category-relevant product assets for Amazon PPC case studies.
 * UK rugs study uses rug imagery; US bedding study uses sheet imagery.
 */

export type AmazonPpcImageSet = {
  hero: { src: string; alt: string };
  overview: { src: string; alt: string };
  challenge: { src: string; alt: string };
  solution: { src: string; alt: string };
  outcomes: { src: string; alt: string };
};

export const AMAZON_PPC_IMAGES: Record<string, AmazonPpcImageSet> = {
  "amazon-uk-rugs-acos-turnaround": {
    hero: {
      src: "/assets/case-studies/amazon-uk-rugs-acos-turnaround/hero.png",
      alt: "Patterned area rug in a UK living room — home furnishings product hero",
    },
    overview: {
      src: "/assets/case-studies/amazon-uk-rugs-acos-turnaround/rugs-detail.png",
      alt: "Close-up of textured area rug weave and fringe detail",
    },
    challenge: {
      src: "/assets/case-studies/amazon-uk-rugs-acos-turnaround/rugs-rolled.png",
      alt: "Thick wool area rug rolled open on hardwood — UK rugs catalog product",
    },
    solution: {
      src: "/assets/case-studies/amazon-uk-rugs-acos-turnaround/rugs-layered.png",
      alt: "Layered patterned area rugs on light wood floor in a bright UK home",
    },
    outcomes: {
      src: "/assets/case-studies/amazon-uk-rugs-acos-turnaround/rugs-living.png",
      alt: "Colorful area rug as living-room centerpiece after profitable Amazon UK PPC growth",
    },
  },
  "amazon-us-bedding-sku-ppc": {
    hero: {
      src: "/assets/case-studies/amazon-us-bedding-sku-ppc/hero.png",
      alt: "Folded bed sheets and pillowcases — US bedding product hero",
    },
    overview: {
      src: "/assets/case-studies/amazon-us-bedding-sku-ppc/sheets-lifestyle.png",
      alt: "Made bed with crisp white sheets and duvet in a bright bedroom",
    },
    challenge: {
      src: "/assets/case-studies/amazon-us-bedding-sku-ppc/sheets-folded.png",
      alt: "Folded white and ivory cotton bed sheets with visible weave texture",
    },
    solution: {
      src: "/assets/case-studies/amazon-us-bedding-sku-ppc/sheets-pillowcases.png",
      alt: "Sage and white pillowcases and flat sheets folded on a wooden dresser",
    },
    outcomes: {
      src: "/assets/case-studies/amazon-us-bedding-sku-ppc/sheets-stack.png",
      alt: "Stacked fitted sheets, flat sheets, and pillowcases after efficient Amazon PPC",
    },
  },
};
