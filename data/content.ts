export interface Project {
  title: string;
  /** path in public/, e.g. "/projects/project-one.jpg" — empty = placeholder */
  image: string;
  /** optional video path in public/ — takes precedence over image, autoplays muted */
  video?: string;
  /** playback speed for video cards (default 1) */
  speed?: number;
  /** "vertical" renders a centered phone-style frame below the grid */
  layout?: "grid" | "vertical";
  /** destination URL (video, case study, drive link…) */
  href: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    image: "",
    video: "/projects/project-one.mp4",
    href: "#",
  },
  { title: "Project Two", image: "", video: "/projects/project-two-v2.mp4", href: "#" },
  { title: "Project Three", image: "", video: "/projects/project-three.mp4", speed: 2.5, href: "#" },
  { title: "Project Four", image: "", video: "/projects/project-four.mp4", href: "#" },
  {
    title: "Project Five",
    image: "",
    video: "/projects/project-five.mp4",
    href: "#",
    layout: "vertical",
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "What types of projects do you specialize in?",
    answer:
      "Launch videos, explainers, product demos, UI/UX animation, and 2D/3D motion graphics — mostly for SaaS, Tech, and AI startups.",
  },
  {
    question: "How involved are you in the creative process?",
    answer:
      "End to end — from concept and scripting through design, animation, and final delivery. You bring the goal, I handle the craft, with check-ins at every key stage.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects ship in 1–3 weeks depending on scope. Launch videos and product demos usually land around the two-week mark.",
  },
  {
    question: "How do you structure pricing and payments?",
    answer:
      "Fixed quote per project after a short discovery call — 50% to kick off, 50% on delivery. No hourly billing, no surprises.",
  },
];

export const profile = {
  name: "Emmanuel E.",
  availability: "Available for new projects",
  currently:
    "Motion Designer & Video Developer for startups in SaaS, Tech & AI.",
  previously:
    "Graphic Designer & Prompt Engineer, working with indie hackers on projects that brought in thousands of users.",
  portrait: {
    src: "/profile_image_v2.webp",
    alt: "Portrait of Emmanuel E.",
  },
  bookCall: { label: "Book a Call", href: "#book" },
  follow: { label: "Follow me", href: "#follow" },
  services: ["Launch Videos", "AI Ads", "UI/UX motion design"],
  socials: [
    { label: "Instagram", href: "#" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/emmanuel-eromosele-046606318/",
    },
    { label: "Email", href: "mailto:veomanuel@gmail.com" },
  ],
};
