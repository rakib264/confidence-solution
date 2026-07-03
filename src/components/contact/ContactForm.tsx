"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validation/contact";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as {
        ok: boolean;
        message?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Failed to submit form.");
      }

      toast.success(result.message || "Thanks. Your inquiry was sent successfully.");
      reset();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-border/80 bg-card/95 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-7">
      <h2 className="font-display text-[clamp(1.6rem,2.8vw,2.1rem)] font-medium">Request a Development Consultation</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <Input placeholder="Name" {...register("name")} />
        <Input type="email" placeholder="Email" {...register("email")} />
      </div>
      {errors.name ? <p className="text-xs text-destructive">{errors.name.message}</p> : null}
      {errors.email ? <p className="text-xs text-destructive">{errors.email.message}</p> : null}
      <Input placeholder="Phone" {...register("phone")} />
      {errors.phone ? <p className="text-xs text-destructive">{errors.phone.message}</p> : null}
      <Select defaultValue="" {...register("service")}>
        <option value="" disabled>Service Interest</option>
        <option>Real Estate Development</option>
        <option>High-Rise Construction</option>
        <option>Architecture & Design Management</option>
        <option>Program Management</option>
      </Select>
      {errors.service ? <p className="text-xs text-destructive">{errors.service.message}</p> : null}
      <div className="grid gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Project Type</p>
        <div className="grid gap-2 sm:grid-cols-3">
          <label className="inline-flex items-center gap-2 rounded-xl border border-input bg-white/80 px-3 py-2 text-sm">
            <input type="radio" value="Residential" {...register("projectType")} />
            Residential
          </label>
          <label className="inline-flex items-center gap-2 rounded-xl border border-input bg-white/80 px-3 py-2 text-sm">
            <input type="radio" value="Commercial" {...register("projectType")} />
            Commercial
          </label>
          <label className="inline-flex items-center gap-2 rounded-xl border border-input bg-white/80 px-3 py-2 text-sm">
            <input type="radio" value="Industrial" {...register("projectType")} />
            Industrial
          </label>
        </div>
      </div>
      {errors.projectType ? <p className="text-xs text-destructive">{errors.projectType.message}</p> : null}
      <Select defaultValue="" {...register("budget")}>
        <option value="" disabled>Budget Range</option>
        <option>Under BDT 1 Crore</option>
        <option>BDT 1 Crore - BDT 5 Crore</option>
        <option>BDT 5 Crore - BDT 20 Crore</option>
        <option>Above BDT 20 Crore</option>
      </Select>
      {errors.budget ? <p className="text-xs text-destructive">{errors.budget.message}</p> : null}
      <Textarea placeholder="Tell us about your development goals and timeline" {...register("message")} />
      {errors.message ? <p className="text-xs text-destructive">{errors.message.message}</p> : null}
      <Button type="submit" loading={loading} className="w-full sm:w-auto">Submit Consultation Request</Button>
    </form>
  );
}
