import { BlogPost } from "@/lib/types";
import manab5 from "@/assets/manab-noor/manab-5.jpeg";
import manab6 from "@/assets/manab-noor/manab-6.jpeg";
import manab7 from "@/assets/manab-noor/manab-7.jpeg";
import manab8 from "@/assets/manab-noor/manab-8.jpeg";
import shah6 from "@/assets/shah-residence/shah-6.jpeg";
import shah7 from "@/assets/shah-residence/shah-7.jpeg";

const longForm = [
  "Bangladesh's premium real estate market now demands more than attractive facades. Investors and homeowners expect delivery certainty, transparent communication, and measurable quality from design stage to final handover.",
  "The strongest projects in Dhaka and Chattogram align planning, design, procurement, and execution in one decision loop. Early cross-functional coordination reduces rework, protects timelines, and creates better long-term asset performance.",
  "Procurement strategy is a major differentiator in high-rise development. Teams that secure long-lead materials early and tie sourcing decisions to milestone controls avoid schedule shocks and protect finish quality.",
  "Premium residential and corporate towers require disciplined quality gates. Confidence Solution LTD. uses mockups, hold points, and structured inspections to maintain consistency across repeated floors and parallel work fronts.",
  "Safety leadership is not only a compliance requirement - it is a productivity driver. Sites with proactive HSE systems maintain stronger logistics discipline, fewer disruptions, and more reliable trade coordination.",
  "Executive dashboards should enable decisions, not just present static updates. The best reporting explains impact, options, and next actions so project sponsors can protect value with confidence.",
  "As urban density accelerates, successful developers will be those who combine architectural ambition with governance rigor. The future of Bangladesh's skyline belongs to teams that can deliver both.",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-deliver-large-projects-on-time-without-sacrificing-quality",
    title: "How to Deliver High-Rise Projects On Time Without Sacrificing Quality",
    category: "Project Management",
    date: "2026-04-16",
    author: "Nadia Rahman",
    excerpt:
      "A practical framework for managing schedule pressure while preserving quality, safety, and buyer confidence.",
    thumbnail: manab5,
    content: longForm,
    tags: ["planning", "quality", "construction", "delivery"],
  },
  {
    slug: "renovation-playbook-for-operational-buildings",
    title: "Asset Renewal Playbook for Occupied Developments",
    category: "Renovation",
    date: "2026-03-28",
    author: "Sabbir Alam",
    excerpt:
      "Strategies to phase modernization work while keeping tenants, teams, and operations safely active.",
    thumbnail: manab6,
    content: longForm,
    tags: ["retrofit", "phasing", "operations", "risk"],
  },
  {
    slug: "why-early-mep-coordination-saves-millions",
    title: "Why Early MEP Coordination Saves Millions in Tower Delivery",
    category: "Engineering",
    date: "2026-02-12",
    author: "Reza Chowdhury",
    excerpt:
      "Early-stage coordination of MEP systems reduces clashes, rework, and hidden lifecycle costs.",
    thumbnail: manab7,
    content: longForm,
    tags: ["mep", "coordination", "engineering", "cost"],
  },
  {
    slug: "construction-safety-systems-that-actually-work",
    title: "Construction Safety Systems That Drive Real Delivery Outcomes",
    category: "Safety",
    date: "2026-01-21",
    author: "Imran Mahmud",
    excerpt:
      "How proactive safety governance protects people while improving delivery consistency.",
    thumbnail: manab8,
    content: longForm,
    tags: ["safety", "hse", "leadership", "site"],
  },
  {
    slug: "future-proofing-commercial-spaces-for-hybrid-work",
    title: "Future-Proofing Commercial Assets for Bangladesh's Growth Corridors",
    category: "Commercial",
    date: "2025-12-09",
    author: "Arif Hossain",
    excerpt:
      "Design and construction considerations for commercial buildings built to adapt over time.",
    thumbnail: shah6,
    content: longForm,
    tags: ["workplace", "commercial", "design", "adaptability"],
  },
  {
    slug: "material-selection-guide-for-lifecycle-performance",
    title: "Material Selection Guide for Long-Term Tower Performance",
    category: "Design",
    date: "2025-11-17",
    author: "Farzana Alam",
    excerpt:
      "A framework to evaluate materials by durability, maintenance profile, and total value over time.",
    thumbnail: shah7,
    content: longForm,
    tags: ["materials", "durability", "design", "performance"],
  },
];
