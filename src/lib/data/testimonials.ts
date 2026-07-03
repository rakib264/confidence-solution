import { Testimonial } from "@/lib/types";
import manab9 from "@/assets/manab-noor/manab-9.jpeg";
import shah8 from "@/assets/shah-residence/shah-8.jpeg";

export const testimonials: Testimonial[] = [
  {
    quote:
      "Manab Noor has been a comfortable home for our family. The building is well maintained and the location is very convenient.",
    author: "Mahin Ahmed",
    role: "Resident",
    company: "Manab Noor",
    rating: 5,
    avatar: manab9,
  },
  {
    quote:
      "We are happy with our flat at Shah Residence. The layout is practical and the handover was smooth.",
    author: "Sabrina Rahman",
    role: "Apartment Owner",
    company: "Shah Residence",
    rating: 5,
    avatar: shah8,
  },
];
