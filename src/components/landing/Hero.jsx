'use client'
import {
  ArrowRight,
  Check,
  Play,
  QrCode,
  Clock3,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className='dark:bg-background relative overflow-hidden'>
      {/* Background */}
      <div className="absolute inset-0 -z-10" >
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-2 lg:pb-28 lg:pt-24">

        {/* Content */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <span className="h-2 w-2 rounded-full bg-success" />
            Smarter Queues. Happier Patients.
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Say Goodbye to
            <span className="block">Long Waits.</span>
            <span className="text-primary">Hello to QueueLess.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            A modern queue and appointment management platform built for
            clinics and healthcare centers. Reduce waiting time and give
            patients a better experience.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition hover:-translate-y-0.5 hover:opacity-90"
            >
              Get Started Free
              <ArrowRight size={18} />
            </Link>

            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 font-semibold text-foreground transition hover:bg-muted">
              <Play size={17} />
              Watch Demo
            </button>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check size={16} className="text-success" />
              Easy to use
            </span>

            <span className="flex items-center gap-2">
              <Check size={16} className="text-success" />
              Secure & Reliable
            </span>

            <span className="flex items-center gap-2">
              <Check size={16} className="text-success" />
              No setup fees
            </span>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="absolute -inset-5 rounded-4xl bg-primary/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-2xl">
            <div className="overflow-hidden rounded-2xl border border-border bg-muted">
              <Image
                width={650}
                height={600}
                src="/images/landing/hero-dashboard.png"
                alt="QueueLess dashboard"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Floating ticket */}
          <div className="absolute -bottom-5 -left-5 hidden w-52 rounded-2xl border border-border bg-card p-4 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <QrCode size={20} />
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Your Token
                </p>
                <p className="text-xl font-bold text-foreground">
                  A102
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock3 size={13} />
                ~12 min
              </span>

              <span className="rounded-full bg-warning/10 px-2.5 py-1 text-xs font-semibold text-warning">
                Waiting
              </span>
            </div>
          </div>

          {/* Patients */}
          <div className="absolute -right-5 -top-5 hidden rounded-2xl border border-border bg-card p-4 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10 text-success">
                <Users size={19} />
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  In Queue
                </p>
                <p className="font-bold text-foreground">
                  12 Patients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}