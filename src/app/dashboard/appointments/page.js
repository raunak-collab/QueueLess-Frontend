"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  ListOrdered,
  CalendarDays,
  Users,
  Stethoscope,
  Mail,
  BarChart3,
  Settings,
  Search,
  Bell,
  ChevronDown,
  Menu,
  X,
  CalendarPlus,
  Clock3,
  MoreHorizontal,
  CheckCircle2,
  CircleDot,
  XCircle,
  CalendarClock,
  UserRound,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function AppointmentsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [view, setView] = useState("list");

  const menuItems = [
    {
      label: "Overview",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Queue",
      href: "/dashboard/queue",
      icon: ListOrdered,
    },
    {
      label: "Appointments",
      href: "/dashboard/appointments",
      icon: CalendarDays,
    },
    {
      label: "Patients",
      href: "/dashboard/patients",
      icon: Users,
    },
    {
      label: "Doctors & Staff",
      href: "/dashboard/staff",
      icon: Stethoscope,
    },
    {
      label: "Invitations",
      href: "/dashboard/invitations",
      icon: Mail,
    },
    {
      label: "Reports",
      href: "/dashboard/reports",
      icon: BarChart3,
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  const appointments = [
    {
      id: "APT-1024",
      patient: "Neha Kapoor",
      doctor: "Dr. Priya Mehta",
      specialty: "General Physician",
      date: "Sep 12, 2026",
      time: "09:30 AM",
      type: "General Consultation",
      status: "Confirmed",
    },
    {
      id: "APT-1025",
      patient: "Vikram Malhotra",
      doctor: "Dr. Rahul Singh",
      specialty: "Internal Medicine",
      date: "Sep 12, 2026",
      time: "10:00 AM",
      type: "Follow-up",
      status: "Confirmed",
    },
    {
      id: "APT-1026",
      patient: "Sneha Agarwal",
      doctor: "Dr. Priya Mehta",
      specialty: "General Physician",
      date: "Sep 12, 2026",
      time: "10:30 AM",
      type: "Consultation",
      status: "Pending",
    },
    {
      id: "APT-1027",
      patient: "Arjun Mehta",
      doctor: "Dr. Rahul Singh",
      specialty: "Internal Medicine",
      date: "Sep 12, 2026",
      time: "11:00 AM",
      type: "Follow-up",
      status: "Confirmed",
    },
    {
      id: "APT-1028",
      patient: "Pooja Sharma",
      doctor: "Dr. Priya Mehta",
      specialty: "General Physician",
      date: "Sep 12, 2026",
      time: "11:30 AM",
      type: "General Consultation",
      status: "Cancelled",
    },
    {
      id: "APT-1029",
      patient: "Karan Verma",
      doctor: "Dr. Rahul Singh",
      specialty: "Internal Medicine",
      date: "Sep 12, 2026",
      time: "12:00 PM",
      type: "Consultation",
      status: "Confirmed",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ================================================= */}
      {/* MAIN */}
      {/* ================================================= */}

      <div className="lg:pl-64">
        {/* ================================================= */}
        {/* CONTENT */}
        {/* ================================================= */}

        <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* Heading */}
          <section className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-medium text-primary">
                Friday, September 12, 2026
              </p>

              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Appointments
              </h1>

              <p className="mt-2 text-sm text-muted-foreground">
                Schedule and manage appointments for your clinic.
              </p>
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90">
              <CalendarPlus size={17} />
              New Appointment
            </button>
          </section>

          {/* ================================================= */}
          {/* STATS */}
          {/* ================================================= */}

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <AppointmentStat
              title="Today's Appointments"
              value="32"
              description="Scheduled for today"
              icon={CalendarDays}
            />

            <AppointmentStat
              title="Confirmed"
              value="24"
              description="Confirmed appointments"
              icon={CheckCircle2}
            />

            <AppointmentStat
              title="Pending"
              value="5"
              description="Awaiting confirmation"
              icon={CalendarClock}
            />

            <AppointmentStat
              title="Cancelled"
              value="3"
              description="Cancelled today"
              icon={XCircle}
            />
          </section>

          {/* ================================================= */}
          {/* TOOLBAR */}
          {/* ================================================= */}

          <section className="mt-6 rounded-2xl border border-border bg-card p-4">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              {/* Date Navigation */}
              <div className="flex items-center gap-2">
                <button className="rounded-xl border border-border p-2.5 hover:bg-muted">
                  <ChevronLeft size={18} />
                </button>

                <button className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted">
                  Today
                </button>

                <button className="rounded-xl border border-border p-2.5 hover:bg-muted">
                  <ChevronRight size={18} />
                </button>

                <div className="ml-1 hidden items-center gap-2 sm:flex">
                  <CalendarDays
                    size={17}
                    className="text-muted-foreground"
                  />

                  <span className="text-sm font-semibold">
                    September 12, 2026
                  </span>
                </div>
              </div>

              {/* Filters + View */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <select className="h-10 rounded-xl border border-input bg-background px-3 text-sm outline-none focus:border-primary">
                  <option>All Doctors</option>
                  <option>Dr. Priya Mehta</option>
                  <option>Dr. Rahul Singh</option>
                </select>

                <select className="h-10 rounded-xl border border-input bg-background px-3 text-sm outline-none focus:border-primary">
                  <option>All Status</option>
                  <option>Confirmed</option>
                  <option>Pending</option>
                  <option>Cancelled</option>
                </select>

                {/* View Toggle */}
                <div className="flex rounded-xl border border-border bg-background p-1">
                  <button
                    onClick={() => setView("list")}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
                      view === "list"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    List
                  </button>

                  <button
                    onClick={() => setView("calendar")}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
                      view === "calendar"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Calendar
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================= */}
          {/* APPOINTMENTS */}
          {/* ================================================= */}

          {view === "list" ? (
            <AppointmentList appointments={appointments} />
          ) : (
            <CalendarView appointments={appointments} />
          )}

          {/* ================================================= */}
          {/* BOTTOM SECTION */}
          {/* ================================================= */}

          <section className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* Doctor Schedule */}
            <div className="rounded-2xl border border-border bg-card p-5">
              <div>
                <h2 className="font-semibold">Doctor Schedule</h2>

                <p className="mt-1 text-xs text-muted-foreground">
                  Today&apos;s appointment workload
                </p>
              </div>

              <div className="mt-5 space-y-4">
                <DoctorSchedule
                  name="Dr. Priya Mehta"
                  specialty="General Physician"
                  appointments="18"
                  completed="11"
                />

                <DoctorSchedule
                  name="Dr. Rahul Singh"
                  specialty="Internal Medicine"
                  appointments="14"
                  completed="9"
                />
              </div>
            </div>

            {/* Appointment Info */}
            <div className="rounded-2xl border border-border bg-card p-5">
              <div>
                <h2 className="font-semibold">Appointment Overview</h2>

                <p className="mt-1 text-xs text-muted-foreground">
                  Today&apos;s appointment performance
                </p>
              </div>

              <div className="mt-5 space-y-4">
                <ProgressRow
                  label="Confirmed appointments"
                  value="75%"
                  progress="75%"
                />

                <ProgressRow
                  label="Completed appointments"
                  value="62%"
                  progress="62%"
                />

                <ProgressRow
                  label="Cancellation rate"
                  value="9%"
                  progress="9%"
                />
              </div>

              <div className="mt-5 rounded-xl bg-primary/5 p-4">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock3 size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Next appointment at 10:00 AM
                    </p>

                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      Vikram Malhotra with Dr. Rahul Singh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

/* ================================================= */
/* APPOINTMENT LIST */
/* ================================================= */

function AppointmentList({ appointments }) {
  return (
    <section className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div>
          <h2 className="font-semibold">Today&apos;s Appointments</h2>

          <p className="mt-1 text-xs text-muted-foreground">
            32 appointments scheduled for today
          </p>
        </div>

        <span className="rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
          September 12
        </span>
      </div>

      {/* Desktop */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border text-left text-xs text-muted-foreground">
              <th className="px-5 py-3 font-medium">Patient</th>
              <th className="px-5 py-3 font-medium">Doctor</th>
              <th className="px-5 py-3 font-medium">Time</th>
              <th className="px-5 py-3 font-medium">Type</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((appointment) => (
              <tr
                key={appointment.id}
                className="border-b border-border last:border-0 hover:bg-muted/40"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-xs font-semibold text-primary">
                      {getInitials(appointment.patient)}
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        {appointment.patient}
                      </p>

                      <p className="mt-0.5 text-[11px] text-muted-foreground">
                        {appointment.id}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4">
                  <p className="text-sm font-medium">
                    {appointment.doctor}
                  </p>

                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {appointment.specialty}
                  </p>
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-1.5 text-sm">
                    <Clock3 size={14} className="text-muted-foreground" />
                    {appointment.time}
                  </div>
                </td>

                <td className="px-5 py-4 text-sm text-muted-foreground">
                  {appointment.type}
                </td>

                <td className="px-5 py-4">
                  <AppointmentStatus status={appointment.status} />
                </td>

                <td className="px-5 py-4 text-right">
                  <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="divide-y divide-border md:hidden">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-xs font-bold text-primary">
                  {getInitials(appointment.patient)}
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    {appointment.patient}
                  </p>

                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {appointment.doctor}
                  </p>
                </div>
              </div>

              <AppointmentStatus status={appointment.status} />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock3 size={13} />
                {appointment.time}
              </span>

              <span>{appointment.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================================================= */
/* CALENDAR VIEW */
/* ================================================= */

function CalendarView({ appointments }) {
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  return (
    <section className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
      <div className="border-b border-border p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <CalendarDays size={19} />
          </div>

          <div>
            <h2 className="font-semibold">Daily Schedule</h2>

            <p className="mt-1 text-xs text-muted-foreground">
              Friday, September 12, 2026
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {timeSlots.map((time) => {
            const appointment = appointments.find(
              (item) => item.time === time
            );

            return (
              <div
                key={time}
                className="grid min-h-[90px] grid-cols-[110px_1fr] border-b border-border last:border-0"
              >
                <div className="border-r border-border p-4 text-xs font-medium text-muted-foreground">
                  {time}
                </div>

                <div className="p-3">
                  {appointment ? (
                    <div className="flex max-w-xl items-center justify-between rounded-xl border border-primary/20 bg-primary/5 p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-xs font-semibold text-primary-foreground">
                          {getInitials(appointment.patient)}
                        </div>

                        <div>
                          <p className="text-sm font-semibold">
                            {appointment.patient}
                          </p>

                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {appointment.doctor} · {appointment.type}
                          </p>
                        </div>
                      </div>

                      <AppointmentStatus status={appointment.status} />
                    </div>
                  ) : (
                    <div className="flex h-full items-center text-xs text-muted-foreground">
                      No appointment
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================================================= */
/* STAT CARD */
/* ================================================= */

function AppointmentStat({
  title,
  value,
  description,
  icon: Icon,
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>

          <p className="mt-2 text-3xl font-bold tracking-tight">
            {value}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon size={19} />
        </div>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

/* ================================================= */
/* STATUS */
/* ================================================= */

function AppointmentStatus({ status }) {
  const styles = {
    Confirmed:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    Pending:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    Cancelled:
      "bg-red-500/10 text-red-600 dark:text-red-400",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium ${
        styles[status] || "bg-muted text-muted-foreground"
      }`}
    >
      {status}
    </span>
  );
}

/* ================================================= */
/* DOCTOR SCHEDULE */
/* ================================================= */

function DoctorSchedule({
  name,
  specialty,
  appointments,
  completed,
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Stethoscope size={18} />
        </div>

        <div>
          <p className="text-sm font-semibold">{name}</p>

          <p className="mt-0.5 text-xs text-muted-foreground">
            {specialty}
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-sm font-semibold">
          {appointments}
        </p>

        <p className="mt-0.5 text-[11px] text-muted-foreground">
          {completed} completed
        </p>
      </div>
    </div>
  );
}

/* ================================================= */
/* PROGRESS ROW */
/* ================================================= */

function ProgressRow({
  label,
  value,
  progress,
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {label}
        </span>

        <span className="text-xs font-semibold">
          {value}
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: progress }}
        />
      </div>
    </div>
  );
}

/* ================================================= */
/* INITIALS */
/* ================================================= */

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("");
}