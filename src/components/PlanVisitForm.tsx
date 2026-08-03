"use client";

import { useState } from "react";
import { FormStatusMessage } from "@/components/forms/FormStatusMessage";
import { honeypotProps, useFormSubmit } from "@/components/forms/useFormSubmit";

export function PlanVisitForm() {
  const { status, error, submit } = useFormSubmit("/api/forms/plan-visit");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");

  if (status === "success") {
    return (
      <FormStatusMessage
        status={status}
        error={error}
        successMessage="Thanks — we've got your details and our welcome team will be expecting you."
      />
    );
  }

  return (
    <form
      className="mt-6 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        submit({ name, email, service });
      }}
    >
      <input type="text" {...honeypotProps} />
      <input type="text" placeholder="Full name" required value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />
      <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />
      <input type="text" placeholder="Which service are you joining?" value={service} onChange={(e) => setService(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-[var(--radius-control)] bg-crimson-600 px-4 py-2 font-sans text-sm font-semibold text-ivory hover:bg-crimson-700 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send"}
      </button>
      <FormStatusMessage status={status} error={error} successMessage="" />
    </form>
  );
}
