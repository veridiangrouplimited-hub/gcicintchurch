"use client";

import { useState } from "react";
import { FormStatusMessage } from "@/components/forms/FormStatusMessage";
import { honeypotProps, useFormSubmit } from "@/components/forms/useFormSubmit";

export function ContactForm() {
  const { status, error, submit } = useFormSubmit("/api/forms/contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  if (status === "success") {
    return (
      <div className="mt-6">
        <FormStatusMessage status={status} error={error} successMessage="Thanks — your message has been sent. We'll be in touch soon." />
      </div>
    );
  }

  return (
    <form
      className="mt-6 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        submit({ name, email, subject, message });
      }}
    >
      <input type="text" {...honeypotProps} />
      <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />
      <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />
      <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />
      <textarea placeholder="Message" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-[var(--radius-control)] bg-crimson-600 px-4 py-2 font-sans text-sm font-semibold text-ivory hover:bg-crimson-700 disabled:opacity-60 sm:w-auto sm:px-8"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
      <FormStatusMessage status={status} error={error} successMessage="" />
    </form>
  );
}
