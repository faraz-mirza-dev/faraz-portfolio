import type { ContactFormData } from "@/types";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export type SubmitContactResult =
  | { ok: true; message: string }
  | {
      ok: false;
      code?: string;
      message: string;
    };

export async function submitContactForm(
  body: ContactFormData,
): Promise<SubmitContactResult> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();

  if (!accessKey) {
    return {
      ok: false,
      code: "NO_ACCESS_KEY",
      message:
        "Email is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file (get a free key at https://web3forms.com), then restart the dev server.",
    };
  }

  if (!body.name || !body.email || !body.subject || !body.message) {
    return { ok: false, message: "Missing required fields" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.email)) {
    return { ok: false, message: "Invalid email format" };
  }

  const payload = {
    access_key: accessKey,
    name: body.name.trim(),
    email: body.email.trim(),
    subject: body.subject.trim(),
    message: body.message.trim(),
    from_name: "Portfolio contact form",
  };

  let upstream: Response;
  try {
    upstream = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch {
    return {
      ok: false,
      message: "Network error. Check your connection and try again.",
    };
  }

  const raw = await upstream.text();
  let parsed: { success?: boolean; message?: string };
  try {
    parsed = JSON.parse(raw) as { success?: boolean; message?: string };
  } catch {
    return {
      ok: false,
      message: "Unexpected response from email service.",
    };
  }

  if (!upstream.ok || parsed.success === false) {
    return {
      ok: false,
      message:
        typeof parsed.message === "string"
          ? parsed.message
          : "Could not send message. Try again later.",
    };
  }

  return {
    ok: true,
    message:
      typeof parsed.message === "string" && parsed.message.length > 0
        ? parsed.message
        : "Thank you — your message was sent.",
  };
}
