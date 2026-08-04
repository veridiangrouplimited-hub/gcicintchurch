"use client";

import { useState } from "react";
import { givingContent } from "@/content/pages";
import { siteConfig } from "@/lib/site-config";

function Field({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex items-center justify-between gap-4 border-b border-sand-200 py-3 last:border-none">
      <div>
        <p className="font-sans text-xs uppercase tracking-wide text-ink-600">{label}</p>
        <p className="font-sans text-sm font-semibold text-ink-900">{value}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
        className="shrink-0 rounded-[var(--radius-control)] border border-sand-200 px-3 py-1 font-sans text-xs font-semibold text-ink-900 hover:border-crimson-600 hover:text-crimson-600"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export function BankDetailsPanel() {
  const { ngn, forex } = givingContent;

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-display text-lg font-semibold text-ink-900">Naira Account</h3>
        <div className="mt-2 rounded-[var(--radius-media)] border border-sand-200 bg-ivory px-6 shadow-warm">
          <Field label="Account Name" value={ngn.accountName} />
          <Field label="Bank" value={ngn.bank} />
          <Field label="Account Number" value={ngn.accountNumber} />
        </div>
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-ink-900">Forex Account</h3>
        <div className="mt-2 rounded-[var(--radius-media)] border border-sand-200 bg-ivory px-6 shadow-warm">
          <Field label="Account Name" value={forex.accountName} />
          <Field label="Bank" value={forex.bank} />
          <Field label="Account Number" value={forex.accountNumber} />
          <Field label="SWIFT" value={forex.swift} />
          <Field label="Sort Code" value={forex.sortCode} />
        </div>
      </div>
      <p className="font-sans text-sm text-ink-600">
        After transferring, you may notify us at{" "}
        <a href={`mailto:${siteConfig.email}`} className="font-semibold text-crimson-600 hover:text-crimson-700">
          {siteConfig.email}
        </a>{" "}
        so we can issue a receipt.
      </p>
    </div>
  );
}
