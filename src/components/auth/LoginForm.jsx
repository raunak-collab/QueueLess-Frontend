"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock3,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  // Frontend-only state.
  // Tum baad mein isko apne login logic se connect karoge.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO:
    // Yahan tum apna login/API logic likhoge.
    console.log({
      email,
      password,
      rememberMe,
    });
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* ================================================= */}
      {/* LEFT SIDE - BRAND / INFORMATION */}
      {/* ================================================= */}

      <section className="relative hidden overflow-hidden bg-primary lg:flex">
        {/* Background decoration */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-40 -right-20 h-125 w-125 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 flex w-full flex-col justify-between p-10 xl:p-14">
          {/* Logo */}
          <Link
            href="/"
            className="flex w-fit items-center gap-3"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-lg">
              <Image src='/logo.png' height={30} width={33} alt="QueueLess"/>
            </span>

            <span className="text-2xl font-bold tracking-tight text-white">
              QueueLess
            </span>
          </Link>

          {/* Main content */}
          <div className="max-w-xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <CheckCircle2 className="h-4 w-4" />
              Smart queue management
            </div>

            <h1 className="text-3xl font-bold leading-tight text-white xl:text-4xl">
              Spend less time waiting.
              <br />
              <span className="text-white/80">
                Run your clinic smarter.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/75 xl:text-lg">
              Manage queues, appointments, doctors and patients from
              one simple platform built for modern clinics.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">
              <Feature
                icon={Clock3}
                title="Real-time queue tracking"
                description="Know exactly who's waiting and who's being served."
              />

              <Feature
                icon={Users}
                title="Simple patient management"
                description="Keep your patient flow organized and efficient."
              />

              <Feature
                icon={ShieldCheck}
                title="Built for clinics"
                description="A secure and reliable workspace for your entire team."
              />
            </div>
          </div>

          {/* Bottom text */}
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} QueueLess. All rights reserved.
          </p>
        </div>
      </section>

      {/* ================================================= */}
      {/* RIGHT SIDE - LOGIN FORM */}
      {/* ================================================= */}

      <section className="flex min-h-screen items-center justify-center bg-background px-5 py-10 sm:px-8">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="mb-10 flex  lg:hidden">
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary-foreground">
                <Image src="/logo.png" width={33} height={30} alt="QueueLess"/>
              </span>

              <span className="text-xl font-bold">
                QueueLess
              </span>
            </Link>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <p className="mb-3 text-sm font-medium text-primary">
              Welcome back
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Sign in to your account
            </h2>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Enter your credentials to access your clinic dashboard.
            </p>
          </div>

          {/* ================================================= */}
          {/* GOOGLE BUTTON */}
          {/* ================================================= */}

          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-card-foreground transition hover:bg-muted"
          >
            {/* Google icon */}
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                fill="#4285F4"
                d="M21.35 12.27c0-.78-.07-1.54-.22-2.27H12v4.3h5.22a4.47 4.47 0 0 1-1.94 2.93v2.45h3.14c1.84-1.69 2.93-4.18 2.93-7.41Z"
              />
              <path
                fill="#34A853"
                d="M12 21.5c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.75 9.75 0 0 0 12 21.5Z"
              />
              <path
                fill="#FBBC05"
                d="M6.54 13.59A5.86 5.86 0 0 1 6.23 12c0-.55.11-1.09.31-1.59V7.88H3.3A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.05 4.12l3.24-2.53Z"
              />
              <path
                fill="#EA4335"
                d="M12 6.38c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.83 3.47 14.63 2.5 12 2.5a9.75 9.75 0 0 0-8.7 5.38l3.24 2.53C7.31 8.1 9.46 6.38 12 6.38Z"
              />
            </svg>

            Continue with Google
          </button>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />

            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              or continue with email
            </span>

            <div className="h-px flex-1 bg-border" />
          </div>

          {/* ================================================= */}
          {/* LOGIN FORM */}
          {/* ================================================= */}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email address
              </label>

              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="h-12 w-full rounded-xl border border-input bg-card pl-11 pr-4 text-sm text-card-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium"
                >
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-primary transition hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="h-12 w-full rounded-xl border border-input bg-card pl-11 pr-12 text-sm text-card-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center">
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) =>
                    setRememberMe(e.target.checked)
                  }
                  className="h-4 w-4 cursor-pointer rounded border-border accent-primary"
                />

                <span className="text-sm text-muted-foreground">
                  Remember me
                </span>
              </label>
            </div>

            {/* ================================================= */}
            {/* ERROR PLACEHOLDER */}
            {/* ================================================= */}

            {/*
              Tum baad mein apne API error ko yahan show kar sakte ho.

              Example:
              {error && (
                <div>...</div>
              )}
            */}

            {/* Login button */}
            <button
              type="submit"
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              Sign in

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          {/* Register */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-primary hover:underline"
            >
              Create an account
            </Link>
          </p>

          {/* Security note */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4" />

            <span>
              Your account information is securely protected
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================================================= */
/* FEATURE COMPONENT */
/* ================================================= */

function Feature({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-white/65">
          {description}
        </p>
      </div>
    </div>
  );
}