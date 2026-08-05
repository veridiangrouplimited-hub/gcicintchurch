"use client";

import {
  ArrowRight,
  Baby,
  BookOpen,
  Broadcast,
  Calendar,
  Camera,
  CaretDown,
  ChatCircleText,
  Crown,
  EnvelopeSimple,
  Flame,
  Globe,
  GraduationCap,
  HandHeart,
  HandsPraying,
  Heart,
  List,
  MapPin,
  MicrophoneStage,
  Newspaper,
  ShieldCheck,
  Users,
  UsersThree,
  VideoCamera,
  X,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react/lib";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { primaryNav, siteConfig } from "@/lib/site-config";

const navIcons: Record<string, Icon> = {
  "/about": Users,
  "/about/leadership": Crown,
  "/about#what-we-believe": BookOpen,
  "/about/membership-class": GraduationCap,
  "/ministries/children-and-youth": Baby,
  "/ministries/mens-group": UsersThree,
  "/ministries/women-of-impact": Flame,
  "/ministries/marriage-and-family": Heart,
  "/ministries/outreach": Globe,
  "/ministries/welfare": HandHeart,
  "/ministries/heavenly-jerusalem-altar": MapPin,
  "/ministries/training-department": GraduationCap,
  "/watch": VideoCamera,
  "/sermons": MicrophoneStage,
  "/devotionals": BookOpen,
  "/radio": Broadcast,
  "/blog": Newspaper,
  "/gallery": Camera,
  "/events": Calendar,
  "/contact": EnvelopeSimple,
  "/prayer": HandsPraying,
  "/testimony": ChatCircleText,
  "/get-involved": HandHeart,
  "/privacy": ShieldCheck,
};

export function Header() {
  const [condensed, setCondensed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setCondensed(!entry.isIntersecting), {
      rootMargin: "-80px 0px 0px 0px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Close any open submenu/drawer on route change via Escape, and on outside click.
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" />
      <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full border-b transition-all duration-200 ${
        condensed
          ? "bg-ivory/95 backdrop-blur border-sand-200 shadow-warm"
          : "bg-ivory border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-200 sm:px-6 lg:px-8 ${
          condensed ? "h-16" : "h-20"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpenMenu(null)}>
          <Image
            src="/images/gcic-logo.png"
            alt={siteConfig.churchName}
            width={44}
            height={44}
            className="h-10 w-10 sm:h-11 sm:w-11"
            priority
          />
          <span className="hidden font-sans text-xs font-medium uppercase tracking-[0.06em] text-ink-900 md:inline">
            {siteConfig.churchName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <div key={item.label} className="relative">
              {item.children ? (
                <>
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-[var(--radius-control)] px-3 py-2 font-sans text-sm font-medium text-ink-900 hover:text-crimson-600"
                    aria-expanded={openMenu === item.label}
                    aria-haspopup="true"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenMenu(openMenu === item.label ? null : item.label);
                    }}
                  >
                    {item.label}
                    <CaretDown size={12} weight="bold" />
                  </button>
                  {openMenu === item.label && (
                    <div
                      className={`dropdown-in absolute left-0 top-full z-10 mt-2 rounded-[var(--radius-media)] border border-sand-200 bg-ivory p-2 shadow-warm-lg ${
                        item.children.length > 5 ? "grid w-[26rem] grid-cols-2 gap-0.5" : "min-w-60"
                      }`}
                    >
                      {item.children.map((child) => {
                        const Icon = navIcons[child.href];
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-2.5 rounded-[var(--radius-control)] px-3 py-2.5 font-sans text-sm text-ink-900 transition-colors hover:bg-sand-100 hover:text-crimson-600"
                            onClick={() => setOpenMenu(null)}
                          >
                            {Icon && <Icon size={16} weight="regular" className="shrink-0 text-crimson-600" />}
                            {child.label}
                          </Link>
                        );
                      })}
                      <Link
                        href={item.href}
                        className={`col-span-2 mt-1 flex items-center gap-1.5 rounded-[var(--radius-control)] border-t border-sand-200 px-3 pt-3 pb-1 font-sans text-sm font-semibold text-crimson-600 transition-colors hover:text-crimson-700 ${
                          item.children.length > 5 ? "" : "col-span-1"
                        }`}
                        onClick={() => setOpenMenu(null)}
                      >
                        View all {item.label}
                        <ArrowRight size={13} weight="bold" />
                      </Link>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="rounded-[var(--radius-control)] px-3 py-2 font-sans text-sm font-medium text-ink-900 hover:text-crimson-600"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/give"
            className="hidden rounded-[var(--radius-control)] bg-crimson-600 px-4 py-2 font-sans text-sm font-semibold text-ivory hover:bg-crimson-700 sm:inline-block"
          >
            Give
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-[var(--radius-control)] p-2 text-ink-900 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} weight="regular" /> : <List size={22} weight="regular" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-sand-200 bg-ivory px-4 pb-6 lg:hidden"
        >
          {primaryNav.map((item) => (
            <div key={item.label} className="border-b border-sand-100 last:border-none">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  className="flex-1 py-3 font-sans text-base font-medium text-ink-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    aria-label={`Toggle ${item.label} submenu`}
                    className="p-3 text-ink-900"
                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                  >
                    <CaretDown
                      size={12}
                      weight="bold"
                      className={`transition-transform duration-150 ${openMenu === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                )}
              </div>
              {item.children && openMenu === item.label && (
                <div className="pb-3 pl-4">
                  {item.children.map((child) => {
                    const Icon = navIcons[child.href];
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-2.5 py-2 font-sans text-sm text-ink-600 hover:text-crimson-600"
                        onClick={() => setMobileOpen(false)}
                      >
                        {Icon && <Icon size={15} weight="regular" className="shrink-0 text-crimson-600" />}
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/give"
            className="mt-4 block rounded-[var(--radius-control)] bg-crimson-600 px-4 py-3 text-center font-sans text-sm font-semibold text-ivory"
            onClick={() => setMobileOpen(false)}
          >
            Give
          </Link>
        </nav>
      )}
      </header>
    </>
  );
}
