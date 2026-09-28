"use client";

import React from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Clock3,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Users,
  UserCheck,
  Zap,
  Building2,
} from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: Clock3,
      title: "Less Waiting",
      description:
        "Help patients understand their waiting time and make every visit more predictable.",
    },
    {
      icon: Activity,
      title: "Smoother Workflows",
      description:
        "Keep receptionists and doctors coordinated with a clear, organized queue.",
    },
    {
      icon: HeartPulse,
      title: "Better Patient Experience",
      description:
        "Create a calmer clinic experience with transparent updates and less confusion.",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: UserCheck,
      title: "Join the Queue",
      description:
        "Patients register for a visit and receive a token without unnecessary confusion.",
    },
    {
      number: "02",
      icon: Activity,
      title: "Track Progress",
      description:
        "Receptionists manage the queue while patients stay informed about their turn.",
    },
    {
      number: "03",
      icon: Stethoscope,
      title: "Get Seen",
      description:
        "Doctors can follow the organized patient flow and focus on providing care.",
    },
  ];

  const audiences = [
    {
      icon: Building2,
      title: "Clinic Owners",
      description:
        "Get visibility into daily operations and manage your clinic from one place.",
    },
    {
      icon: Users,
      title: "Receptionists",
      description:
        "Register patients, organize tokens, and manage the waiting list efficiently.",
    },
    {
      icon: Stethoscope,
      title: "Doctors",
      description:
        "See who's next and keep track of patient flow throughout the day.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC] text-[#0F172A] dark:bg-[#0B1120] dark:text-white">

      {/* HERO */}
      <section className="relative px-5 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-600 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              ABOUT QUEUELESS
            </div>

            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Better Queues.
              <span className="block text-indigo-500">
                Better Care.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
              We believe a better healthcare experience starts before
              the consultation. QueueLess helps clinics organize patient
              flow, simplify daily operations, and make waiting more
              transparent.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-indigo-600"
              >
                Get Started Free
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold transition hover:border-indigo-300 dark:border-slate-700 dark:bg-[#111827]"
              >
                Explore Features
              </Link>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-indigo-500/5 blur-2xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/60 dark:border-slate-800 dark:bg-[#111827] dark:shadow-black/20 sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5 dark:border-slate-800">
                <div>
                  <p className="text-xs font-medium text-slate-400">
                    CLINIC OVERVIEW
                  </p>
                  <h3 className="mt-1 text-lg font-bold">
                    Today&apos;s Queue
                  </h3>
                </div>
                <span className="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                  Live
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-indigo-50 p-4 dark:bg-indigo-500/10">
                  <Users size={20} className="text-indigo-500" />
                  <p className="mt-4 text-2xl font-bold">24</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Total Patients
                  </p>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-500/10">
                  <CheckCircle2 size={20} className="text-emerald-500" />
                  <p className="mt-4 text-2xl font-bold">16</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Completed
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="text-sm font-semibold">
                    Current Patients
                  </h4>
                  <span className="text-xs text-slate-400">
                    View all
                  </span>
                </div>

                {[
                  {
                    token: "A101",
                    name: "Patient One",
                    status: "In Consultation",
                    color: "bg-emerald-100 text-emerald-700",
                  },
                  {
                    token: "A102",
                    name: "Patient Two",
                    status: "Waiting",
                    color: "bg-amber-100 text-amber-700",
                  },
                  {
                    token: "A103",
                    name: "Patient Three",
                    status: "Waiting",
                    color: "bg-amber-100 text-amber-700",
                  },
                ].map((patient) => (
                  <div
                    key={patient.token}
                    className="mb-3 flex items-center justify-between rounded-xl border border-slate-100 p-3 dark:border-slate-800"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {patient.token}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">
                          {patient.name}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          General Consultation
                        </p>
                      </div>
                    </div>
                    <span
                      className={`rounded-lg px-2.5 py-1.5 text-[10px] font-semibold ${patient.color}`}
                    >
                      {patient.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl bg-indigo-500 p-4 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                  <Clock3 size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold">
                    Keep your clinic moving
                  </p>
                  <p className="mt-1 text-xs text-indigo-100">
                    One organized queue at a time.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-5 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-[#111827] sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10">
                <ShieldCheck size={21} />
              </div>
              <div>
                <p className="text-sm font-bold">Organized Care</p>
                <p className="text-xs text-slate-400">
                  Designed for clinic teams
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-slate-200/70 bg-white px-5 py-20 dark:border-slate-800 dark:bg-[#0E1625] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold tracking-widest text-indigo-500">
              WHY QUEUELESS
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Making clinic visits simpler
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
              Less uncertainty for patients. Better visibility for
              clinic teams. A more organized way to manage everyday care.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 dark:border-slate-800 dark:bg-[#111827] dark:hover:border-indigo-500/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-indigo-500">
              HOW IT WORKS
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Built for every step of the visit
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
              From the moment a patient arrives to the end of their
              consultation, QueueLess helps your team stay coordinated.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-[#111827]">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                        <Icon size={23} />
                      </div>
                      <span className="text-3xl font-bold text-slate-100 dark:text-slate-800">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="mt-7 text-lg font-bold">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>

                  {index !== 2 && (
                    <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 text-indigo-500 dark:border-slate-700 dark:bg-[#0B1120] md:block">
                      <ArrowRight size={16} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="border-y border-slate-200/70 bg-white px-5 py-20 dark:border-slate-800 dark:bg-[#0E1625] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-bold tracking-widest text-indigo-500">
              WHO WE SERVE
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              One platform. Your entire clinic.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {audiences.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 p-6 dark:border-slate-800"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                    <Icon size={21} />
                  </div>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-indigo-600 px-6 py-16 text-center text-white sm:px-12">
          <div className="pointer-events-none absolute -left-20 -top-32 h-80 w-80 rounded-full border-[50px] border-white/5" />
          <div className="pointer-events-none absolute -bottom-48 -right-20 h-96 w-96 rounded-full border-[60px] border-white/5" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <Zap size={27} />
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to make waiting simpler?
            </h2>

            <p className="mt-4 text-sm leading-7 text-indigo-100 sm:text-base">
              Bring more clarity to your clinic&apos;s daily workflow.
              Get started with QueueLess and build a more organized
              patient experience.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-indigo-600 transition hover:bg-indigo-50"
              >
                Get Started Free
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/login"
                className="rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}