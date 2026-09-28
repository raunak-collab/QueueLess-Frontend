"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  LockKeyhole,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8FAFC] px-4 py-7 text-[#0F172A] dark:bg-[#0B1120] dark:text-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative w-full max-w-md">
       {/* Logo */}
        <Link href="/" className="flex items-center justify-center py-3.5 gap-2">
          <span className="">
            <Image src='/logo.png' height={40} width={40} alt="queueless"/>
          </span>

          <span className="text-2xl font-bold tracking-tight text-foreground">
            Queue<span className="text-primary">Less</span>
          </span>
        </Link>

        {/* Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-[#111827] dark:shadow-black/10 sm:p-8">
          {!submitted ? (
            <>
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <Mail size={26} />
              </div>

              <h1 className="text-2xl font-bold tracking-tight">
                Forgot your password?
              </h1>

              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                No worries! Enter the email address associated with your
                account and we&apos;ll send you a link to reset your password.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-[#0B1120] dark:focus:border-indigo-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
                >
                  Send Reset Link
                  <ArrowRight size={17} />
                </button>
              </form>
            </>
          ) : (
            <div className="py-3 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                <CheckCircle2 size={32} />
              </div>

              <h1 className="text-2xl font-bold">
                Check your email
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                If an account exists for{" "}
                <span className="font-semibold text-slate-800 dark:text-white">
                  {email}
                </span>
                , you&apos;ll receive instructions to reset your password.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
              >
                Try another email
              </button>
            </div>
          )}

          <div className="mt-7 border-t border-slate-200 pt-6 text-center dark:border-slate-800">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              <ArrowLeft size={16} />
              Back to Login
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck size={15} />
          Your account security matters to us.
        </div>
      </div>
    </main>
  );
}
