"use client";

import { useMemo, useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowUp,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Download,
  FileSpreadsheet,
  FileText,
  MoreHorizontal,
  TrendingDown,
  TrendingUp,
  UserCheck,
  UserMinus,
  Users,
  UserX,
  Stethoscope,
  Timer,
  XCircle,
} from "lucide-react";

export default function ReportsPage() {
  const [period, setPeriod] = useState("Last 7 days");
  const [showPeriodMenu, setShowPeriodMenu] = useState(false);
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [showCustomRange, setShowCustomRange] = useState(false);

  const periods = [
    "Today",
    "Yesterday",
    "Last 7 days",
    "Last 30 days",
    "Last 3 months",
    "Custom range",
  ];

  const stats = [
    {
      title: "Total Patients",
      value: "1,284",
      change: "12.5%",
      trend: "up",
      description: "vs previous period",
      icon: Users,
    },
    {
      title: "Completed Visits",
      value: "1,106",
      change: "8.2%",
      trend: "up",
      description: "vs previous period",
      icon: CheckCircle2,
    },
    {
      title: "Avg. Wait Time",
      value: "18 min",
      change: "14.3%",
      trend: "down",
      description: "vs previous period",
      icon: Clock3,
    },
    {
      title: "No-show Rate",
      value: "6.8%",
      change: "2.1%",
      trend: "down",
      description: "vs previous period",
      icon: UserX,
    },
    {
      title: "Avg. Consultation",
      value: "24 min",
      change: "4.6%",
      trend: "down",
      description: "vs previous period",
      icon: Timer,
    },
    {
      title: "Queue Completion",
      value: "91.4%",
      change: "5.8%",
      trend: "up",
      description: "vs previous period",
      icon: Activity,
    },
    {
      title: "Cancelled",
      value: "84",
      change: "3.2%",
      trend: "down",
      description: "vs previous period",
      icon: XCircle,
    },
    {
      title: "Returning Patients",
      value: "438",
      change: "11.7%",
      trend: "up",
      description: "vs previous period",
      icon: UserCheck,
    },
  ];

  const patientVolume = [
    { day: "Mon", patients: 142, completed: 128 },
    { day: "Tue", patients: 186, completed: 164 },
    { day: "Wed", patients: 164, completed: 148 },
    { day: "Thu", patients: 218, completed: 192 },
    { day: "Fri", patients: 196, completed: 176 },
    { day: "Sat", patients: 128, completed: 116 },
    { day: "Sun", patients: 72, completed: 64 },
  ];

  const peakHours = [
    { time: "9 AM", value: 42 },
    { time: "10 AM", value: 68 },
    { time: "11 AM", value: 84 },
    { time: "12 PM", value: 72 },
    { time: "1 PM", value: 48 },
    { time: "2 PM", value: 61 },
    { time: "3 PM", value: 78 },
    { time: "4 PM", value: 56 },
    { time: "5 PM", value: 34 },
  ];

  const doctors = [
    {
      name: "Dr. Sarah Wilson",
      specialty: "General Physician",
      patients: 186,
      completed: 172,
      wait: "14 min",
      consultation: "22 min",
      completion: "92.5%",
    },
    {
      name: "Dr. Michael Brown",
      specialty: "Cardiologist",
      patients: 154,
      completed: 141,
      wait: "17 min",
      consultation: "27 min",
      completion: "91.6%",
    },
    {
      name: "Dr. Emily Davis",
      specialty: "Dermatologist",
      patients: 132,
      completed: 124,
      wait: "19 min",
      consultation: "24 min",
      completion: "93.9%",
    },
    {
      name: "Dr. James Miller",
      specialty: "Pediatrician",
      patients: 118,
      completed: 108,
      wait: "21 min",
      consultation: "26 min",
      completion: "91.5%",
    },
    {
      name: "Dr. Olivia Taylor",
      specialty: "Dentist",
      patients: 96,
      completed: 87,
      wait: "16 min",
      consultation: "25 min",
      completion: "90.6%",
    },
  ];

  const queueStats = [
    {
      label: "Served",
      value: "1,106",
      percentage: 76,
      icon: CheckCircle2,
    },
    {
      label: "Waiting",
      value: "142",
      percentage: 10,
      icon: Clock3,
    },
    {
      label: "Skipped",
      value: "48",
      percentage: 3,
      icon: UserMinus,
    },
    {
      label: "No-show",
      value: "84",
      percentage: 6,
      icon: UserX,
    },
    {
      label: "Cancelled",
      value: "84",
      percentage: 5,
      icon: XCircle,
    },
  ];

  const appointmentStats = [
    {
      label: "Completed",
      value: 1106,
      percentage: 86,
    },
    {
      label: "Pending",
      value: 94,
      percentage: 7,
    },
    {
      label: "Cancelled",
      value: 84,
      percentage: 7,
    },
  ];

  const patientTypes = [
    {
      label: "Returning Patients",
      value: "438",
      percentage: 34,
    },
    {
      label: "New Patients",
      value: "846",
      percentage: 66,
    },
  ];

  const maxPatients = Math.max(
    ...patientVolume.map((item) => item.patients)
  );

  const maxPeak = Math.max(...peakHours.map((item) => item.value));

  const selectedPeriodLabel =
    period === "Custom range" ? "Custom range" : period;

  const reportDateText = useMemo(() => {
    if (period === "Today") return "September 25, 2026";
    if (period === "Yesterday") return "September 24, 2026";
    if (period === "Last 7 days") return "September 19 – September 25, 2026";
    if (period === "Last 30 days")
      return "August 27 – September 25, 2026";
    if (period === "Last 3 months")
      return "June 25 – September 25, 2026";

    return "Select a custom date range";
  }, [period]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] dark:bg-[#0B1120] dark:text-white">
      <div className="lg:pl-64">
        <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <BarChart3 className="h-4 w-4" />
                <span>Analytics</span>
                <span>/</span>
                <span>Reports</span>
              </div>

              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Reports & Analytics
              </h1>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Monitor your clinic performance and understand patient trends.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Period */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowPeriodMenu(!showPeriodMenu);
                    setShowExportMenu(false);
                  }}
                  className="flex h-11 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium shadow-sm transition hover:border-slate-300 dark:border-slate-800 dark:bg-[#111827] dark:hover:border-slate-700"
                >
                  <CalendarDays className="h-4 w-4 text-slate-500 dark:text-slate-400" />

                  <span>{selectedPeriodLabel}</span>

                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 transition ${
                      showPeriodMenu ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showPeriodMenu && (
                  <div className="absolute right-0 top-13 z-50 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl dark:border-slate-800 dark:bg-[#111827]">
                    {periods.map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setPeriod(item);
                          setShowPeriodMenu(false);

                          if (item === "Custom range") {
                            setShowCustomRange(true);
                          } else {
                            setShowCustomRange(false);
                          }
                        }}
                        className={`flex w-full items-center rounded-lg px-3 py-2.5 text-left text-sm transition ${
                          period === item
                            ? "bg-indigo-50 font-medium text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                            : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Export */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowExportMenu(!showExportMenu);
                    setShowPeriodMenu(false);
                  }}
                  className="flex h-11 items-center gap-2 rounded-xl bg-[#6366F1] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#5558E8] dark:bg-[#818CF8] dark:text-[#0B1120] dark:hover:bg-[#9295FF]"
                >
                  <Download className="h-4 w-4" />
                  Export
                  <ChevronDown className="h-4 w-4" />
                </button>

                {showExportMenu && (
                  <div className="absolute right-0 top-13 z-50 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl dark:border-slate-800 dark:bg-[#111827]">
                    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800">
                      <FileSpreadsheet className="h-4 w-4" />
                      Export as CSV
                    </button>

                    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800">
                      <FileText className="h-4 w-4" />
                      Export as PDF
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Custom Range */}
          {showCustomRange && (
            <div className="mb-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-500/20 dark:bg-indigo-500/5">
              <div className="flex flex-col gap-4 md:flex-row md:items-end">
                <div className="flex-1">
                  <label className="mb-2 block text-sm font-medium">
                    From
                  </label>
                  <input
                    type="date"
                    defaultValue="2026-09-19"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-[#111827]"
                  />
                </div>

                <div className="flex-1">
                  <label className="mb-2 block text-sm font-medium">
                    To
                  </label>
                  <input
                    type="date"
                    defaultValue="2026-09-25"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-[#111827]"
                  />
                </div>

                <button
                  onClick={() => setShowCustomRange(false)}
                  className="h-11 rounded-xl bg-[#6366F1] px-5 text-sm font-semibold text-white hover:bg-[#5558E8]"
                >
                  Apply Range
                </button>
              </div>
            </div>
          )}

          {/* Selected Date */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Report period
              </p>

              <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                {reportDateText}
              </p>
            </div>

            <div className="hidden items-center gap-2 text-xs text-slate-500 sm:flex dark:text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Data updated recently
            </div>
          </div>

          {/* KPI Grid */}
          <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#111827]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div
                      className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
                        stat.trend === "up"
                          ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                          : "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                      }`}
                    >
                      {stat.trend === "up" ? (
                        <ArrowUp className="h-3 w-3" />
                      ) : (
                        <ArrowDown className="h-3 w-3" />
                      )}
                      {stat.change}
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {stat.title}
                    </p>

                    <h3 className="mt-1 text-2xl font-bold tracking-tight">
                      {stat.value}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      {stat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </section>

          {/* Patient Volume + Patient Type */}
          <section className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.8fr_1fr]">
            {/* Patient Volume */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#111827]">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="font-semibold">Patient Volume</h2>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Patients visiting your clinic during the selected period
                  </p>
                </div>

                <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>

              <div className="mb-5 flex items-center gap-5 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
                  Total patients
                </div>

                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                  Completed
                </div>
              </div>

              <div className="flex h-64 items-end gap-3 sm:gap-5">
                {patientVolume.map((item) => {
                  const height = (item.patients / maxPatients) * 100;
                  const completedHeight =
                    (item.completed / maxPatients) * 100;

                  return (
                    <div
                      key={item.day}
                      className="flex h-full flex-1 flex-col justify-end"
                    >
                      <div className="relative flex h-[90%] items-end justify-center gap-1">
                        <div
                          className="w-3 rounded-t-md bg-indigo-200 transition-all dark:bg-indigo-500/30 sm:w-5"
                          style={{ height: `${height}%` }}
                          title={`${item.patients} patients`}
                        />

                        <div
                          className="w-3 rounded-t-md bg-indigo-500 transition-all dark:bg-indigo-400 sm:w-5"
                          style={{ height: `${completedHeight}%` }}
                          title={`${item.completed} completed`}
                        />
                      </div>

                      <span className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">
                        {item.day}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Patient Type */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#111827]">
              <div className="mb-6">
                <h2 className="font-semibold">Patient Breakdown</h2>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  New vs returning patients
                </p>
              </div>

              <div className="flex justify-center">
                <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-[conic-gradient(#6366F1_0_66%,#CBD5E1_66%_100%)] dark:bg-[conic-gradient(#818CF8_0_66%,#334155_66%_100%)]">
                  <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white dark:bg-[#111827]">
                    <span className="text-2xl font-bold">1,284</span>
                    <span className="text-xs text-slate-500">
                      Total patients
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-7 space-y-4">
                {patientTypes.map((item, index) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${
                            index === 0
                              ? "bg-slate-300 dark:bg-slate-600"
                              : "bg-indigo-500"
                          }`}
                        />

                        <span className="text-slate-600 dark:text-slate-300">
                          {item.label}
                        </span>
                      </div>

                      <span className="font-semibold">{item.value}</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div
                        className={`h-full rounded-full ${
                          index === 0
                            ? "bg-slate-300 dark:bg-slate-600"
                            : "bg-indigo-500"
                        }`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Queue + Appointment */}
          <section className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Queue Overview */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#111827]">
              <div className="mb-6">
                <h2 className="font-semibold">Queue Overview</h2>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Current queue activity and patient outcomes
                </p>
              </div>

              <div className="space-y-5">
                {queueStats.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label}>
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-slate-400" />
                          <span className="text-sm text-slate-600 dark:text-slate-300">
                            {item.label}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold">
                            {item.value}
                          </span>

                          <span className="text-xs text-slate-400">
                            {item.percentage}%
                          </span>
                        </div>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                        <div
                          className="h-full rounded-full bg-indigo-500"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Appointment Status */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#111827]">
              <div className="mb-6">
                <h2 className="font-semibold">Appointment Analytics</h2>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Appointment status distribution
                </p>
              </div>

              <div className="space-y-6">
                {appointmentStats.map((item, index) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        {item.label}
                      </span>

                      <span className="text-sm font-semibold">
                        {item.value}
                      </span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div
                        className={`h-full rounded-full ${
                          index === 0
                            ? "bg-emerald-500"
                            : index === 1
                            ? "bg-amber-500"
                            : "bg-rose-500"
                        }`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>

                    <p className="mt-1 text-right text-xs text-slate-400">
                      {item.percentage}% of appointments
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-emerald-50 p-3 dark:bg-emerald-500/10">
                  <p className="text-xs text-emerald-600 dark:text-emerald-400">
                    Completion
                  </p>
                  <p className="mt-1 text-lg font-bold text-emerald-700 dark:text-emerald-400">
                    86%
                  </p>
                </div>

                <div className="rounded-xl bg-amber-50 p-3 dark:bg-amber-500/10">
                  <p className="text-xs text-amber-600 dark:text-amber-400">
                    Pending
                  </p>
                  <p className="mt-1 text-lg font-bold text-amber-700 dark:text-amber-400">
                    7%
                  </p>
                </div>

                <div className="rounded-xl bg-rose-50 p-3 dark:bg-rose-500/10">
                  <p className="text-xs text-rose-600 dark:text-rose-400">
                    Cancelled
                  </p>
                  <p className="mt-1 text-lg font-bold text-rose-700 dark:text-rose-400">
                    7%
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Doctor Performance */}
          <section className="mb-6 rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#111827]">
            <div className="flex flex-col gap-3 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800">
              <div>
                <h2 className="font-semibold">Doctor Performance</h2>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Performance metrics for doctors during this period
                </p>
              </div>

              <button className="flex items-center gap-2 self-start rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                View all doctors
                <ArrowUp className="h-3.5 w-3.5 rotate-45" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/70 text-left text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-900/30 dark:text-slate-400">
                    <th className="px-5 py-4 font-medium">Doctor</th>
                    <th className="px-5 py-4 font-medium">Patients</th>
                    <th className="px-5 py-4 font-medium">Completed</th>
                    <th className="px-5 py-4 font-medium">Avg. Wait</th>
                    <th className="px-5 py-4 font-medium">
                      Avg. Consultation
                    </th>
                    <th className="px-5 py-4 font-medium">Completion</th>
                  </tr>
                </thead>

                <tbody>
                  {doctors.map((doctor) => (
                    <tr
                      key={doctor.name}
                      className="border-b border-slate-100 last:border-0 dark:border-slate-800/70"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                            {doctor.name
                              .replace("Dr. ", "")
                              .split(" ")
                              .map((name) => name[0])
                              .join("")}
                          </div>

                          <div>
                            <p className="text-sm font-semibold">
                              {doctor.name}
                            </p>

                            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                              {doctor.specialty}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-4 text-sm font-medium">
                        {doctor.patients}
                      </td>

                      <td className="px-5 py-4 text-sm">
                        <span className="font-medium">{doctor.completed}</span>
                        <span className="ml-1 text-xs text-slate-400">
                          patients
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <span className="inline-flex rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                          {doctor.wait}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-600 dark:text-slate-300">
                        {doctor.consultation}
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-20 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                            <div
                              className="h-full rounded-full bg-emerald-500"
                              style={{
                                width: doctor.completion,
                              }}
                            />
                          </div>

                          <span className="text-xs font-medium">
                            {doctor.completion}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Peak Hours + Operational Insights */}
          <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.6fr_1fr]">
            {/* Peak Hours */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#111827]">
              <div className="mb-6">
                <h2 className="font-semibold">Peak Hours</h2>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Patient arrivals throughout the day
                </p>
              </div>

              <div className="flex h-56 items-end gap-2 sm:gap-4">
                {peakHours.map((item) => {
                  const height = (item.value / maxPeak) * 100;

                  return (
                    <div
                      key={item.time}
                      className="flex h-full flex-1 flex-col justify-end"
                    >
                      <div className="relative flex h-[85%] items-end">
                        <div
                          className="group relative w-full rounded-t-lg bg-indigo-500 transition-all hover:bg-indigo-600 dark:bg-indigo-400"
                          style={{ height: `${height}%` }}
                        >
                          <div className="absolute -top-7 left-1/2 hidden -translate-x-1/2 rounded-md bg-slate-900 px-2 py-1 text-[10px] text-white group-hover:block">
                            {item.value}
                          </div>
                        </div>
                      </div>

                      <span className="mt-3 text-center text-[10px] text-slate-500 sm:text-xs">
                        {item.time}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-xl bg-amber-50 px-4 py-3 text-xs text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
                <Activity className="h-4 w-4 shrink-0" />
                <span>
                  Highest patient traffic is between <strong>11 AM</strong>{" "}
                  and <strong>12 PM</strong>.
                </span>
              </div>
            </div>

            {/* Operational Insights */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#111827]">
              <div className="mb-6">
                <h2 className="font-semibold">Operational Insights</h2>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Important observations from your clinic
                </p>
              </div>

              <div className="space-y-3">
                <InsightCard
                  icon={TrendingUp}
                  title="Patient volume increased"
                  description="Patient visits are 12.5% higher than the previous period."
                  type="positive"
                />

                <InsightCard
                  icon={TrendingDown}
                  title="Wait time improved"
                  description="Average waiting time dropped by 14.3%."
                  type="positive"
                />

                <InsightCard
                  icon={Clock3}
                  title="Peak queue detected"
                  description="11 AM is currently the busiest hour."
                  type="warning"
                />

                <InsightCard
                  icon={UserX}
                  title="No-show rate"
                  description="6.8% of scheduled appointments were missed."
                  type="neutral"
                />
              </div>
            </div>
          </section>

          {/* Bottom Summary */}
          <section className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50 p-5 dark:border-indigo-500/10 dark:bg-indigo-500/5">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />

                  <h3 className="font-semibold">
                    Clinic performance summary
                  </h3>
                </div>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Your clinic handled{" "}
                  <strong className="text-slate-900 dark:text-white">
                    1,284 patients
                  </strong>{" "}
                  during the selected period, with a{" "}
                  <strong className="text-slate-900 dark:text-white">
                    91.4% queue completion rate
                  </strong>
                  . Average waiting time remained at{" "}
                  <strong className="text-slate-900 dark:text-white">
                    18 minutes
                  </strong>
                  , while patient volume increased compared with the previous
                  period.
                </p>
              </div>

              <div className="shrink-0 rounded-xl bg-white px-5 py-4 shadow-sm dark:bg-[#111827]">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Overall completion
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <span className="text-2xl font-bold">91.4%</span>

                  <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <ArrowUp className="h-3 w-3" />
                    5.8%
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function InsightCard({ icon: Icon, title, description, type }) {
  const styles = {
    positive:
      "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
    warning:
      "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
    neutral:
      "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  };

  return (
    <div className="flex gap-3 rounded-xl border border-slate-100 p-3.5 dark:border-slate-800">
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${styles[type]}`}
      >
        <Icon className="h-4 w-4" />
      </div>

      <div>
        <p className="text-sm font-semibold">{title}</p>

        <p className="mt-0.5 text-xs leading-5 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}