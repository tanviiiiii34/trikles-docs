export type DocFeature = {
  icon: string;
  title: string;
  description: string;
};

export type DocStep = {
  title: string;
  description: string;
};

export type DocScreenshot = {
  eyebrow: string;
  title: string;
  caption: string;
  tags: string[];
};

export type DocCodeExample = {
  title: string;
  description: string;
  language: string;
  code: string;
};

export type DocPage = {
  id: string;
  routeSegment: string;
  title: string;
  summary: string;
  description: string;
  audience: string;
  estimatedTime: string;
  videoUrl: string;
  hero?: {
    title: string;
    description: string;
    primaryHref: string;
    secondaryHref: string;
  };
  featureCards: DocFeature[];
  deepFeatures: DocFeature[];
  steps: DocStep[];
  screenshots: DocScreenshot[];
  codeExamples: DocCodeExample[];
  toc: Array<{ id: string; title: string }>;
};

export type SidebarItem = {
  label: string;
  route: string;
  docId: string;
};

export type SidebarSection = {
  title: string;
  items: SidebarItem[];
  defaultOpen?: boolean;
};
