import { TeamMember } from "@/lib/types";
import womenPlaceholder from "@/assets/placeholders/woman-placeholder.svg";
import mamunAvatar from "@/assets/mamun.jpeg";

//test the deployment

export const teamMembers: TeamMember[] = [
  {
    name: "Marjia Khalid Sanjida Nabila",
    role: "Chairman",
    bio: "Provides strategic vision and governance leadership, guiding Confidence Solution LTD.'s long-term growth across Bangladesh's premium real estate landscape.",
    avatar: womenPlaceholder,
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Mohammed Mamun",
    role: "Managing Director",
    bio: "Leads day-to-day operations, project delivery, and client partnerships — ensuring every development meets Confidence Solution LTD.'s standards of quality and trust.",
    avatar: mamunAvatar,
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];
