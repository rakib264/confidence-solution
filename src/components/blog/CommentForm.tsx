"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  comment: z.string().min(12, "Please write a meaningful comment"),
});

type FormValues = z.infer<typeof schema>;

export function CommentForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    toast.success("Feedback submitted for moderation.");
    setLoading(false);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 rounded-xl border border-border bg-card p-5">
      <h3 className="text-lg font-bold">Leave Your Insight</h3>
      <Input placeholder="Your name" {...register("name")} />
      {errors.name ? <p className="text-xs text-destructive">{errors.name.message}</p> : null}
      <Input placeholder="Your email" {...register("email")} />
      {errors.email ? <p className="text-xs text-destructive">{errors.email.message}</p> : null}
      <Textarea placeholder="Share your thoughts..." {...register("comment")} />
      {errors.comment ? <p className="text-xs text-destructive">{errors.comment.message}</p> : null}
      <Button type="submit" loading={loading}>Submit Insight</Button>
    </form>
  );
}
