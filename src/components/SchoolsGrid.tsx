import {
  Compass,
  GraduationCap,
  HandsPraying,
  IdentificationCard,
  Megaphone,
  MicrophoneStage,
  Toolbox,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react/lib";

const schoolIcons: Record<string, Icon> = {
  "Membership School": IdentificationCard,
  "Workers Academy": Toolbox,
  "Prayer and Deliverance School": HandsPraying,
  "School of Ministry and Destiny": Compass,
  "School of Mission (Evangelism)": Megaphone,
  "School of Worship": MicrophoneStage,
};

export function SchoolsGrid({ schools }: { schools: { name: string; purpose: string }[] }) {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
      {schools.map((s) => {
        const Icon = schoolIcons[s.name] ?? GraduationCap;
        return (
          <div
            key={s.name}
            className="rounded-[var(--radius-media)] border border-sand-200 bg-ivory p-6 shadow-warm transition-all duration-200 hover:-translate-y-0.5 hover:border-crimson-600/40 hover:shadow-warm-lg"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-crimson-50 text-crimson-600 ring-1 ring-crimson-600/15">
              <Icon size={20} weight="regular" />
            </span>
            <h3 className="mt-4 font-display text-base font-semibold text-ink-900">{s.name}</h3>
            <p className="mt-2 font-sans text-sm text-ink-600">{s.purpose}</p>
          </div>
        );
      })}
    </div>
  );
}
