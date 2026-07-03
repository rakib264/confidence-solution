import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(8, "Phone is required"),
  service: z.string().min(1, "Select a service"),
  projectType: z.string().min(1, "Select project type"),
  budget: z.string().min(1, "Select budget range"),
  message: z.string().min(20, "Please provide more project details"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
