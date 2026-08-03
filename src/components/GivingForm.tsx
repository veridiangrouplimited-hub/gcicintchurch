"use client";

import Script from "next/script";
import { useState } from "react";
import { estimatePaystackFee } from "@/lib/paystack-fee";

declare global {
  interface Window {
    PaystackPop?: {
      setup: (options: {
        key: string;
        email: string;
        amount: number;
        ref: string;
        metadata: Record<string, unknown>;
        callback: (response: { reference: string }) => void;
        onClose: () => void;
      }) => { openIframe: () => void };
    };
  }
}

const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

export function GivingForm({ categories }: { categories: string[] }) {
  const [scriptReady, setScriptReady] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "processing" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const amountNumber = Number(amount) || 0;
  const fee = estimatePaystackFee(amountNumber);
  const total = amountNumber + fee;

  if (!publicKey) {
    return (
      <div className="rounded-[var(--radius-media)] border border-sand-200 bg-sand-100 p-6 font-sans text-sm text-ink-600">
        Online giving isn&rsquo;t configured yet — please use the Bank Transfer tab for now.
      </div>
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!scriptReady || !window.PaystackPop) {
      setError("Payment is still loading — please try again in a moment.");
      setStatus("error");
      return;
    }
    setStatus("processing");
    setError(null);

    const reference = `gcic_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

    const handler = window.PaystackPop.setup({
      key: publicKey!,
      email,
      amount: Math.round(total * 100),
      ref: reference,
      metadata: { category, note, givingName: name, phone },
      callback: (response) => {
        fetch("/api/giving/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reference: response.reference }),
        })
          .then((res) => res.json())
          .then((json) => {
            window.location.href = json.ok ? "/give/thank-you" : "/give/failed";
          })
          .catch(() => {
            window.location.href = "/give/failed";
          });
      },
      onClose: () => setStatus("idle"),
    });
    handler.openIframe();
  }

  return (
    <>
      <Script src="https://js.paystack.co/v1/inline.js" strategy="lazyOnload" onReady={() => setScriptReady(true)} />
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />
        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />
        <input type="tel" placeholder="Phone Number" required value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />
        <input type="number" min="100" placeholder="Amount (NGN)" required value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm">
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Note (optional)" value={note} onChange={(e) => setNote(e.target.value)} className="w-full rounded-[var(--radius-control)] border border-sand-200 px-4 py-2 font-sans text-sm" />

        {amountNumber > 0 && (
          <p className="font-sans text-sm text-ink-600">
            Transaction fee: ₦{fee.toLocaleString()} · Total: <span className="font-semibold text-ink-900">₦{total.toLocaleString()}</span>
          </p>
        )}

        {status === "error" && error && (
          <p role="alert" className="font-sans text-sm text-crimson-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "processing"}
          className="w-full rounded-[var(--radius-control)] bg-crimson-600 px-4 py-3 font-sans text-sm font-semibold text-ivory hover:bg-crimson-700 disabled:opacity-60"
        >
          {status === "processing" ? "Processing..." : "Give Now"}
        </button>
      </form>
    </>
  );
}
