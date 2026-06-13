import { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "general-construction",
    title: "End-to-End Construction Delivery",
    icon: "Building2",
    description:
      "Turnkey construction delivery for residential, commercial, and institutional assets across Saudi Arabia and GCC markets.",
    deliverables: [
      "Contract packaging and site mobilization",
      "Structural, civil, and MEP execution",
      "Compliance-led quality governance",
      "Commissioning and snag-free handover",
    ],
  },
  {
    slug: "renovation-remodeling",
    title: "Asset Renewal & Modernization",
    icon: "Hammer",
    description:
      "Strategic upgrades that modernize aging properties, improve operational performance, and preserve long-term asset value.",
    deliverables: [
      "Condition audits and retrofit strategies",
      "Phased execution in operational environments",
      "Envelope, systems, and interior modernization",
      "Post-renewal compliance and performance checks",
    ],
  },
  {
    slug: "architecture-design",
    title: "Architecture & Design Management",
    icon: "DraftingCompass",
    description:
      "Context-aware architectural leadership balancing design ambition, constructability, commercial control, and lifecycle efficiency.",
    deliverables: [
      "Concept, schematic, and design development",
      "3D coordination and technical detailing",
      "Value engineering and material optimization",
      "Authority approvals and permitting support",
    ],
  },
  {
    slug: "project-management",
    title: "Program & Project Controls",
    icon: "ClipboardCheck",
    description:
      "Data-driven governance framework covering schedule, cost, risk, and stakeholder alignment from inception to closeout.",
    deliverables: [
      "Master schedule and milestone control",
      "Budget governance, BOQ, and forecasting",
      "Risk registers and issue escalation protocols",
      "Executive reporting for investors and public bodies",
    ],
  },
  {
    slug: "interior-finishing",
    title: "Interior Fit-Out & Finishing",
    icon: "Paintbrush",
    description:
      "Premium fit-out execution for corporate, hospitality, and residential spaces with durable, brand-aligned detailing.",
    deliverables: [
      "Ceiling, flooring, and wall systems",
      "Custom joinery and specialist fixtures",
      "Lighting and visual environment integration",
      "Final finishing and snag control audits",
    ],
  },
  {
    slug: "industrial-commercial",
    title: "Commercial & Infrastructure Development",
    icon: "Factory",
    description:
      "Complex facility delivery for commercial districts, logistics assets, and infrastructure programs with institutional controls.",
    deliverables: [
      "Large-scale structural and systems planning",
      "Utility networks and process integration",
      "Fire, life-safety, and resilience systems",
      "Commissioning and operational readiness assurance",
    ],
  },
];
