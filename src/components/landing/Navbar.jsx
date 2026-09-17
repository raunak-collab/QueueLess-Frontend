"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { dark, ToggleTheme } = useTheme();
  const router = useRouter()

  const links = [
    "Features",
    "How It Works",
    "Pricing",
    "About"
  ];

  const handleScrollAndLink = (id) => {
    if (id === 'about') {
      return router.push('/about')
    }
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="">
            <Image src='/logo.png' height={40} width={40} alt="queueless"/>
          </span>

          <span className="text-2xl font-bold tracking-tight text-foreground">
            Queue<span className="text-primary">Less</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              type="button"
              key={link}
              onClick={() => handleScrollAndLink(link.toLowerCase().replaceAll(' ', '-'))}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={ToggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition hover:text-foreground"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            href="/login"
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-4 flex gap-3 border-t border-border pt-4">
            <Link
              href="/login"
              className="flex-1 rounded-xl border border-border px-4 py-3 text-center text-sm font-semibold"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="flex-1 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}