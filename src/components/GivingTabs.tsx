"use client";

import { useState } from "react";
import { BankDetailsPanel } from "@/components/BankDetailsPanel";
import { GivingForm } from "@/components/GivingForm";

export function GivingTabs({ categories }: { categories: string[] }) {
  const [tab, setTab] = useState<"online" | "bank">("online");

  return (
    <div>
      <div className="mb-8 flex justify-center">
        <div className="inline-flex gap-1 rounded-full bg-sand-100 p-1">
          <button
            type="button"
            onClick={() => setTab("online")}
            className={`rounded-full px-4 py-2 font-sans text-sm font-semibold transition-colors duration-200 ${
              tab === "online" ? "bg-crimson-600 text-ivory shadow-warm" : "text-ink-900 hover:text-crimson-600"
            }`}
          >
            Give Online
          </button>
          <button
            type="button"
            onClick={() => setTab("bank")}
            className={`rounded-full px-4 py-2 font-sans text-sm font-semibold transition-colors duration-200 ${
              tab === "bank" ? "bg-crimson-600 text-ivory shadow-warm" : "text-ink-900 hover:text-crimson-600"
            }`}
          >
            Bank Transfer
          </button>
        </div>
      </div>
      {tab === "online" ? <GivingForm categories={categories} /> : <BankDetailsPanel />}
    </div>
  );
}
