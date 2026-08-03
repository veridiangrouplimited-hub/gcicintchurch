"use client";

import { useState } from "react";
import { FormStatusMessage } from "@/components/forms/FormStatusMessage";
import { honeypotProps, useFormSubmit } from "@/components/forms/useFormSubmit";

export function TestimonyForm() {
  const { status, error, submit } = useFormSubmit("/api/forms/testimony");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [testimony, setTestimony] = useState("");

  if (status === "success") {
    return (
      <FormStatusMessage
        status={status}
        error={error}
        successMessage="Thank you for sharing! Your testimony will be reviewed before it's published — we're grateful for what God has done."
      />
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        submit({ name, email, testimony });
      }}
    >
      <input type="text" {...honeypotProps} />
      <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />
      <textarea
        placeholder="Your testimony"
        required
        rows={6}
        value={testimony}
        onChange={(e) => setTestimony(e.target.value)}
        className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-[var(--radius-control)] bg-crimson-600 px-4 py-2 font-sans text-sm font-semibold text-ivory hover:bg-crimson-700 disabled:opacity-60 sm:w-auto sm:px-8"
      >
        {status === "submitting" ? "Sending..." : "Share Testimony"}
      </button>
      <FormStatusMessage status={status} error={error} successMessage="" />
    </form>
  );
}
