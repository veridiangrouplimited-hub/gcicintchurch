"use client";

import { useState } from "react";
import { FormStatusMessage } from "@/components/forms/FormStatusMessage";
import { honeypotProps, useFormSubmit } from "@/components/forms/useFormSubmit";
import { prayerRequests } from "@/content/pages";

export function PrayerForm() {
  const { status, error, submit } = useFormSubmit("/api/forms/prayer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState(prayerRequests.areas[0]);
  const [message, setMessage] = useState("");

  if (status === "success") {
    return (
      <FormStatusMessage
        status={status}
        error={error}
        successMessage="Thank you — your prayer request has been sent to our prayer team. We are praying with you."
      />
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        submit({ name, email, phone, area, message });
      }}
    >
      <input type="text" {...honeypotProps} />
      <input type="text" placeholder="Your Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />
      <input type="email" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />
      <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />
      <select value={area} onChange={(e) => setArea(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm">
        {prayerRequests.areas.map((a) => (
          <option key={a} value={a}>
            {a}
          </option>
        ))}
      </select>
      <textarea
        placeholder="Briefly tell us how we can pray for you"
        required
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-[var(--radius-control)] bg-crimson-600 px-4 py-2 font-sans text-sm font-semibold text-ivory hover:bg-crimson-700 disabled:opacity-60 sm:w-auto sm:px-8"
      >
        {status === "submitting" ? "Sending..." : "Send Prayer Request"}
      </button>
      <FormStatusMessage status={status} error={error} successMessage="" />
    </form>
  );
}
