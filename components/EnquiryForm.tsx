"use client";

import { useState, type FormEvent } from "react";

// Web3Forms access key. It is public by design and safe in client-side code, but it is
// tied to the receiving inbox. TODO: create a key for drmaitrayeeroy.com at web3forms.com
// using the inbox the client confirms, then paste it here. Until then submissions fail.
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

type Status = "idle" | "loading" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "mt-1 w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) nextErrors.email = "Please enter your email address.";
    else if (!EMAIL_PATTERN.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (!message) nextErrors.message = "Please enter a message.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New enquiry from drmaitrayeeroy.com",
          name,
          email,
          phone,
          message,
        }),
      });
      const result = await res.json().catch(() => null);
      if (res.ok && result?.success) {
        setStatus("success");
        form.reset();
      } else {
        setErrorMessage(result?.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Could not send your message. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-xl bg-white p-8 text-center text-navy shadow-lg">
        <p className="text-xl font-semibold">Thanks, I&apos;ll get back to you soon.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-navy-500 underline underline-offset-4 transition-colors hover:text-navy"
        >
          Send another message
        </button>
      </div>
    );
  }

  const loading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-xl bg-white p-8 text-gray-800 shadow-lg"
    >
      <div>
        <label htmlFor="enquiry-name" className="text-sm font-medium text-navy">
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="enquiry-name"
          name="name"
          type="text"
          autoComplete="name"
          disabled={loading}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "enquiry-name-error" : undefined}
          className={inputClass}
        />
        {errors.name && (
          <p id="enquiry-name-error" className="mt-1 text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="enquiry-email" className="text-sm font-medium text-navy">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="enquiry-email"
          name="email"
          type="email"
          autoComplete="email"
          disabled={loading}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "enquiry-email-error" : undefined}
          className={inputClass}
        />
        {errors.email && (
          <p id="enquiry-email-error" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="enquiry-phone" className="text-sm font-medium text-navy">
          Phone <span className="font-normal text-gray-500">(optional)</span>
        </label>
        <input
          id="enquiry-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          disabled={loading}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="enquiry-message" className="text-sm font-medium text-navy">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={5}
          disabled={loading}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "enquiry-message-error" : undefined}
          className={inputClass}
        />
        {errors.message && (
          <p id="enquiry-message-error" className="mt-1 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
