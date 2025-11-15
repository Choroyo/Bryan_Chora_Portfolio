import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO,
    SMTP_SECURE,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      {
        error:
          "Email service is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.",
      },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio" <${SMTP_USER}>`,
    to: CONTACT_TO || SMTP_USER,
    replyTo: email,
    subject: `Portfolio contact – ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  return NextResponse.json({ success: true });
}
