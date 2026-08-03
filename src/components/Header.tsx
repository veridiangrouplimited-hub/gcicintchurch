"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { primaryNav, siteConfig } from "@/lib/site-config";

export function Header() {
  const [condensed, setCondensed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full border-b transition-all duration-200 ${
        condensed
          ? "bg-ivory/95 backdrop-blur border-sand-200 shadow-sm"
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
          <span className="hidden font-sans text-xs uppercase tracking-[0.2em] text-ink-600 md:inline">
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
                    <ChevronDown />
                  </button>
                  {openMenu === item.label && (
                    <div className="absolute left-0 top-full z-10 mt-1 min-w-56 rounded-md border border-sand-200 bg-ivory py-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 font-sans text-sm text-ink-900 hover:bg-sand-100 hover:text-crimson-600"
                          onClick={() => setOpenMenu(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
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
            <MenuIcon open={mobileOpen} />
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
                    <ChevronDown rotated={openMenu === item.label} />
                  </button>
                )}
              </div>
              {item.children && openMenu === item.label && (
                <div className="pb-3 pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-2 font-sans text-sm text-ink-600 hover:text-crimson-600"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
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
  );
}

function ChevronDown({ rotated = false }: { rotated?: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-150 ${rotated ? "rotate-180" : ""}`}
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
