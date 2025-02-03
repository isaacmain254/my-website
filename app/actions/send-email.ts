"use server";

import { ContactEmail } from "@/components/sub/email-template";
import { Resend } from "resend";

export interface PrevStateProps {
  type: string;
  message: string;
}

const sendMessageWithResend = async (
  name: string,
  email: string,
  message: string
) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const toEmail = process.env.TO_EMAIL as string;
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [toEmail],
      subject: "New message from portfolio website",
      react: ContactEmail({ name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};

export const sendMessage = async (
  prevState: PrevStateProps,
  formData: FormData
) => {
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const message = formData.get("message") as string;
  try {
    if (!email || !name || !message) {
      return { type: "ERROR", message: "Please fill all fields." };
    }
    await sendMessageWithResend(name, email, message);
    return {
      type: "SUCCESS",
      message:
        "Message sent successfully. We will get back to you as soon as possible.",
    };
  } catch (error) {
    return {
      type: "ERROR",
      message: "Failed to send message. Please try again",
    };
  }
};
