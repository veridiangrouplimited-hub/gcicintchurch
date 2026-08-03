"use client";

import { useState } from "react";
import { BankDetailsPanel } from "@/components/BankDetailsPanel";
import { GivingForm } from "@/components/GivingForm";

export function GivingTabs({ categories }: { categories: string[] }) {
  const [tab, setTab] = useState<"online" | "bank">("online");

  return (
    <div>
      <div className="mb-8 flex justify-center gap-2">
        <button
          type="button"
          onClick={() => setTab("online")}
          className={`rounded-[var(--radius-control)] px-4 py-2 font-sans text-sm font-semibold ${
            tab === "online" ? "bg-crimson-600 text-ivory" : "border border-sand-200 text-ink-900"
          }`}
        >
          Give Online
        </button>
        <button
          type="button"
          onClick={() => setTab("bank")}
          className={`rounded-[var(--radius-control)] px-4 py-2 font-sans text-sm font-semibold ${
            tab === "bank" ? "bg-crimson-600 text-ivory" : "border border-sand-200 text-ink-900"
          }`}
        >
          Bank Transfer
        </button>
      </div>
      {tab === "online" ? <GivingForm categories={categories} /> : <BankDetailsPanel />}
    </div>
  );
}
