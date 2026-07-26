export type LinkItem = {
  label: string;
  href: string;
  icon: string;
  description: string;
  accent: string;
  invert?: boolean;
};

export const featuredLinks: LinkItem[] = [
  {
    label: "circuitquestlab.cz",
    href: "https://circuitquestlab.cz",
    icon: "/images/icon.svg",
    description: "Visit the full Circuit Quest Lab website for project archives, articles, and the latest lab updates.",
    accent: "from-[#10B981] to-[#06B6D4]",
    invert: false,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@CircuitQuestLab?sub_confirmation=1",
    icon: "/images/youtube-logo-icon_filled.svg",
    description: "Subscribe for build videos, tutorials, and lab walkthroughs.",
    accent: "from-[#FF0000] to-[#F97316]",
    invert: true,
  }
];

export const featuredLink: LinkItem = featuredLinks[0];

export const links: LinkItem[] = [
  {
    label: "Patreon",
    href: "https://www.patreon.com/CircuitQuestLab",
    icon: "/images/patreon-logo-icon_filled.svg",
    description: "Support the lab and get early access to build notes, behind-the-scenes updates, and exclusive content.",
    accent: "from-[#FF5A5F] to-[#F97316]",
    invert: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/CircuitQuestLab",
    icon: "/images/instagram-logo-icon_outline.svg",
    description: "Follow the lab for behind-the-scenes electronics and project teasers.",
    accent: "from-[#8B5CF6] to-[#EC4899]",
    invert: true,
  },
  {
    label: "X",
    href: "https://twitter.com/CircuitQuestLab",
    icon: "/images/x-logo-icon_outline.svg",
    description: "Follow the lab on X for quick updates, build teasers, and announcements.",
    accent: "from-[#0EA5E9] to-[#2563EB]",
    invert: true,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@CircuitQuestLab",
    icon: "/images/tiktok-logo-icon.svg",
    description: "Catch short clips of prototypes, experiments, and gear tests.",
    accent: "from-[#00F2EA] to-[#C026D3]",
    invert: true,
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/user/CircuitQuestLab",
    icon: "/images/reddit-logo-icon_filled.svg",
    description: "Join the community and share circuit ideas, reviews, and troubleshooting.",
    accent: "from-[#FF4500] to-[#FBBF24]",
    invert: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/CircuitQuestLab",
    icon: "/images/facebook-logo-icon_filled.svg",
    description: "Connect with the lab on Facebook for updates and project announcements.",
    accent: "from-[#3B82F6] to-[#06B6D4]",
    invert: true,
  },
];
