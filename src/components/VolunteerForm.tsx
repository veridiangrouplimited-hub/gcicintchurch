"use client";

import { useState } from "react";
import { FormStatusMessage } from "@/components/forms/FormStatusMessage";
import { honeypotProps, useFormSubmit } from "@/components/forms/useFormSubmit";

const volunteerAreas = [
  "Welcome Team",
  "Children & Youth",
  "Media / Tech",
  "Outreach",
  "Ushering",
  "Choir / Worship",
  "Welfare",
];

export function VolunteerForm() {
  const { status, error, submit } = useFormSubmit("/api/forms/volunteer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [areas, setAreas] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  function toggleArea(area: string) {
    setAreas((prev) => (prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]));
  }

  if (status === "success") {
    return (
      <FormStatusMessage
        status={status}
        error={error}
        successMessage="Thank you for volunteering! A member of our team will be in touch about next steps."
      />
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        submit({ name, email, phone, areas, message });
      }}
    >
      <input type="text" {...honeypotProps} />
      <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />
      <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />
      <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />

      <fieldset>
        <legend className="mb-2 font-sans text-sm font-medium text-ink-900">Area(s) of Interest</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {volunteerAreas.map((area) => (
            <label key={area} className="flex items-center gap-2 font-sans text-sm text-ink-600">
              <input type="checkbox" checked={areas.includes(area)} onChange={() => toggleArea(area)} className="rounded border-sand-200" />
              {area}
            </label>
          ))}
        </div>
      </fieldset>

      <textarea placeholder="Message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-[var(--radius-control)] bg-crimson-600 px-4 py-2 font-sans text-sm font-semibold text-ivory hover:bg-crimson-700 disabled:opacity-60 sm:w-auto sm:px-8"
      >
        {status === "submitting" ? "Sending..." : "Volunteer"}
      </button>
      <FormStatusMessage status={status} error={error} successMessage="" />
    </form>
  );
}
