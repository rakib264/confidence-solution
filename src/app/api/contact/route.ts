import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@/lib/validation/contact";

const CONTACT_TO_EMAIL = "info.confidencesolutionltd@gmail.com";

function parseIntSafe(value: string | undefined, fallback: number) {
  const num = Number.parseInt(value ?? "", 10);
  return Number.isNaN(num) ? fallback : num;
}

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Invalid form data.",
        errors: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Email service is not configured. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS.",
      },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: parseIntSafe(process.env.SMTP_PORT, 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const data = parsed.data;
  const fromEmail = process.env.SMTP_FROM || smtpUser;
  const submittedAt = new Date().toLocaleString("en-BD", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const subject = `New Contact Request: ${data.name} (${data.projectType})`;
  const text = [
    "New contact form submission",
    `Submitted: ${submittedAt}`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Service Interest: ${data.service}`,
    `Project Type: ${data.projectType}`,
    `Budget: ${data.budget}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
      <h2 style="margin-bottom: 8px;">New Contact Form Submission</h2>
      <p style="margin-top: 0; color: #555;">Submitted: ${submittedAt}</p>
      <table cellpadding="6" cellspacing="0" border="0" style="border-collapse: collapse;">
        <tr><td><strong>Name</strong></td><td>${data.name}</td></tr>
        <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${data.phone}</td></tr>
        <tr><td><strong>Service Interest</strong></td><td>${data.service}</td></tr>
        <tr><td><strong>Project Type</strong></td><td>${data.projectType}</td></tr>
        <tr><td><strong>Budget</strong></td><td>${data.budget}</td></tr>
      </table>
      <h3 style="margin-bottom: 6px;">Message</h3>
      <p style="white-space: pre-wrap;">${data.message}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: fromEmail,
      to: CONTACT_TO_EMAIL,
      replyTo: data.email,
      subject,
      text,
      html,
    });

    return NextResponse.json({
      ok: true,
      message: "Your inquiry was sent successfully.",
    });
  } catch (error) {
    console.error("Contact email send failed:", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Failed to send inquiry email. Please try again.",
      },
      { status: 500 },
    );
  }
}
