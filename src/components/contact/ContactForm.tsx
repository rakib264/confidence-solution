"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(8, "Phone is required"),
  service: z.string().min(1, "Select a service"),
  projectType: z.string().min(1, "Select project type"),
  budget: z.string().min(1, "Select budget range"),
  message: z.string().min(20, "Please provide more project details"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    toast.success("Thanks. Your inquiry was sent successfully.");
    setLoading(false);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 rounded-xl border border-border bg-card p-6 shadow-md">
      <h2 className="text-2xl font-black">Request a Development Consultation</h2>
      <Input placeholder="Name" {...register("name")} />
      {errors.name ? <p className="text-xs text-destructive">{errors.name.message}</p> : null}
      <Input type="email" placeholder="Email" {...register("email")} />
      {errors.email ? <p className="text-xs text-destructive">{errors.email.message}</p> : null}
      <Input placeholder="Phone" {...register("phone")} />
      {errors.phone ? <p className="text-xs text-destructive">{errors.phone.message}</p> : null}
      <Select defaultValue="" {...register("service")}>
        <option value="" disabled>Service Interest</option>
        <option>Master Development Planning</option>
        <option>Design & Build</option>
        <option>Commercial Construction</option>
        <option>Program Management</option>
      </Select>
      {errors.service ? <p className="text-xs text-destructive">{errors.service.message}</p> : null}
      <div className="grid gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Project Type</p>
        <label className="inline-flex items-center gap-2 text-sm">
          <input type="radio" value="Residential" {...register("projectType")} />
          Residential Development
        </label>
        <label className="inline-flex items-center gap-2 text-sm">
          <input type="radio" value="Commercial" {...register("projectType")} />
          Commercial Asset
        </label>
        <label className="inline-flex items-center gap-2 text-sm">
          <input type="radio" value="Industrial" {...register("projectType")} />
          Institutional / Industrial
        </label>
      </div>
      {errors.projectType ? <p className="text-xs text-destructive">{errors.projectType.message}</p> : null}
      <Select defaultValue="" {...register("budget")}>
        <option value="" disabled>Budget Range</option>
        <option>Under SAR 5M</option>
        <option>SAR 5M - SAR 25M</option>
        <option>SAR 25M - SAR 150M</option>
        <option>Above SAR 150M</option>
      </Select>
      {errors.budget ? <p className="text-xs text-destructive">{errors.budget.message}</p> : null}
      <Textarea placeholder="Tell us about your development goals and timeline" {...register("message")} />
      {errors.message ? <p className="text-xs text-destructive">{errors.message.message}</p> : null}
      <Button type="submit" loading={loading}>Submit Consultation Request</Button>
    </form>
  );
}
