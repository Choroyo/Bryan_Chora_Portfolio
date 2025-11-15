"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur bg-slate-950/80 border-b border-slate-800/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-white transition hover:text-accent-2"
        >
          Bryan Chora
        </Link>
        <nav className="hidden gap-1 rounded-full border border-slate-800 bg-slate-900/50 p-1 text-sm text-slate-200 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 transition ${
                isActive(link.href)
                  ? "bg-accent text-slate-900 shadow-[0_8px_30px_rgba(196,154,44,0.35)]"
                  : "hover:bg-slate-800 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="rounded-md border border-slate-800 p-2 text-slate-100 transition hover:bg-slate-800 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Open navigation</span>
          <div className="flex h-5 w-5 flex-col justify-between">
            <span
              className={`h-0.5 w-full origin-center bg-white transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full origin-center bg-white transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden"
          >
            <div className="space-y-1 border-t border-slate-800 bg-slate-900/90 px-6 py-4 text-sm text-slate-100">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-lg px-4 py-2 ${
                    isActive(link.href)
                      ? "bg-accent text-slate-900"
                      : "hover:bg-slate-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
