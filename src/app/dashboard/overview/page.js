"use client";

import Link from "next/link";
import {
  Users,
  Mail,
  Clock3,
  UserPlus,
  CalendarPlus,
  UserRoundPlus,
  MoreHorizontal,
  CheckCircle2,
  CircleDot,
  Timer,
} from "lucide-react";

export default function DashboardPage() {

  const queueData = [
    {
      token: "Q-024",
      patient: "Aarav Sharma",
      doctor: "Dr. Priya Mehta",
      time: "10:15 AM",
      status: "Waiting",
    },
    {
      token: "Q-025",
      patient: "Riya Verma",
      doctor: "Dr. Rahul Singh",
      time: "10:30 AM",
      status: "Serving",
    },
    {
      token: "Q-026",
      patient: "Kabir Khan",
      doctor: "Dr. Priya Mehta",
      time: "10:45 AM",
      status: "Waiting",
    },
    {
      token: "Q-027",
      patient: "Ananya Gupta",
      doctor: "Dr. Rahul Singh",
      time: "11:00 AM",
      status: "Completed",
    },
    {
      token: "Q-028",
      patient: "Aditya Jain",
      doctor: "Dr. Priya Mehta",
      time: "11:15 AM",
      status: "Waiting",
    },
  ];

  const appointments = [
    {
      patient: "Neha Kapoor",
      doctor: "Dr. Priya Mehta",
      time: "11:30 AM",
      type: "General Consultation",
      status: "Confirmed",
    },
    {
      patient: "Vikram Malhotra",
      doctor: "Dr. Rahul Singh",
      time: "12:00 PM",
      type: "Follow-up",
      status: "Confirmed",
    },
    {
      patient: "Sneha Agarwal",
      doctor: "Dr. Priya Mehta",
      time: "12:30 PM",
      type: "Consultation",
      status: "Pending",
    },
  ];

  const getDate = () => {
    return new Date().toDateString()
  }


  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Main Content */}
      <div className="lg:pl-64">

        {/* Dashboard Body */}
        <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* Welcome */}
          <section className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-medium text-primary">
                {/* Wednesday, September 10, 2026 */}
                {getDate()}
              </p>

              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Good morning, Raunak 👋
              </h1>

              <p className="mt-2 text-sm text-muted-foreground">
                Here&apos;s what&apos;s happening at City Care Clinic today.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium transition hover:bg-muted">
                <CalendarPlus size={17} />
                <span>Appointment</span>
              </button>

              <button className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90">
                <UserPlus size={17} />
                <span>Add Patient</span>
              </button>
            </div>
          </section>

          {/* Stats */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="Today's Patients"
              value="24"
              description="+8% from yesterday"
              icon={Users}
            />

            <StatCard
              title="Waiting"
              value="8"
              description="Patients in queue"
              icon={Timer}
            />

            <StatCard
              title="Currently Serving"
              value="2"
              description="Doctors active"
              icon={CircleDot}
            />

            <StatCard
              title="Completed"
              value="16"
              description="67% of today's patients"
              icon={CheckCircle2}
            />
          </section>

          {/* Main Grid */}
          <section className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
            {/* Queue */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <div>
                  <h2 className="font-semibold">Today&apos;s Queue</h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Live patient queue
                  </p>
                </div>

                <Link
                  href="/dashboard/queue"
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  View all
                </Link>
              </div>

              {/* Desktop Table */}
              <div className="hidden overflow-x-auto md:block">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border text-left text-xs text-muted-foreground">
                      <th className="px-5 py-3 font-medium">Token</th>
                      <th className="px-5 py-3 font-medium">Patient</th>
                      <th className="px-5 py-3 font-medium">Doctor</th>
                      <th className="px-5 py-3 font-medium">Time</th>
                      <th className="px-5 py-3 font-medium">Status</th>
                      <th className="px-5 py-3"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {queueData.map((item) => (
                      <tr
                        key={item.token}
                        className="border-b border-border last:border-0 hover:bg-muted/40"
                      >
                        <td className="px-5 py-4 text-sm font-semibold">
                          {item.token}
                        </td>

                        <td className="px-5 py-4">
                          <p className="text-sm font-medium">
                            {item.patient}
                          </p>
                        </td>

                        <td className="px-5 py-4 text-sm text-muted-foreground">
                          {item.doctor}
                        </td>

                        <td className="px-5 py-4">
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Clock3 size={14} />
                            {item.time}
                          </div>
                        </td>

                        <td className="px-5 py-4">
                          <StatusBadge status={item.status} />
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

              {/* Mobile Queue */}
              <div className="divide-y divide-border md:hidden">
                {queueData.map((item) => (
                  <div key={item.token} className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-xs font-bold text-primary">
                          {item.token.replace("Q-", "")}
                        </div>

                        <div>
                          <p className="text-sm font-semibold">
                            {item.patient}
                          </p>

                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {item.doctor}
                          </p>
                        </div>
                      </div>

                      <StatusBadge status={item.status} />
                    </div>

                    <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock3 size={13} />
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl border border-border bg-card">
              <div className="border-b border-border px-5 py-4">
                <h2 className="font-semibold">Quick Actions</h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  Common clinic tasks
                </p>
              </div>

              <div className="grid gap-3 p-5 sm:grid-cols-3 xl:grid-cols-1">
                <QuickAction
                  icon={UserRoundPlus}
                  title="Add Patient"
                  description="Register a new patient"
                />

                <QuickAction
                  icon={CalendarPlus}
                  title="New Appointment"
                  description="Schedule an appointment"
                />

                <QuickAction
                  icon={Mail}
                  title="Invite Staff"
                  description="Invite a doctor or receptionist"
                />
              </div>
            </div>
          </section>

          {/* Appointments */}
          <section className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div>
                <h2 className="font-semibold">Upcoming Appointments</h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  Your next scheduled appointments
                </p>
              </div>

              <Link
                href="/dashboard/appointments"
                className="text-xs font-semibold text-primary hover:underline"
              >
                View all
              </Link>
            </div>

            <div className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
              {appointments.map((appointment) => (
                <div key={appointment.patient} className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        {appointment.patient
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
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

                    <StatusBadge status={appointment.status} />
                  </div>

                  <div className="mt-5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock3 size={14} />
                      {appointment.time}
                    </div>

                    <span className="rounded-lg bg-muted px-2 py-1 text-muted-foreground">
                      {appointment.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Info */}
          <section className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* Clinic Status */}
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Clinic status</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Current clinic availability
                  </p>
                </div>

                <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  Open
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-muted/50 p-3">
                  <p className="text-xs text-muted-foreground">Doctors</p>
                  <p className="mt-1 text-lg font-bold">4</p>
                </div>

                <div className="rounded-xl bg-muted/50 p-3">
                  <p className="text-xs text-muted-foreground">Staff</p>
                  <p className="mt-1 text-lg font-bold">7</p>
                </div>

                <div className="rounded-xl bg-muted/50 p-3">
                  <p className="text-xs text-muted-foreground">Rooms</p>
                  <p className="mt-1 text-lg font-bold">5</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-2xl border border-border bg-card p-5">
              <div>
                <p className="text-sm font-semibold">Recent activity</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Latest clinic updates
                </p>
              </div>

              <div className="mt-4 space-y-4">
                <Activity
                  text="Riya Verma joined the queue"
                  time="2 min ago"
                />

                <Activity
                  text="Dr. Rahul Singh completed an appointment"
                  time="8 min ago"
                />

                <Activity
                  text="New patient Aarav Sharma was registered"
                  time="15 min ago"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

/* ========================= */
/* STAT CARD */
/* ========================= */

function StatCard({
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
          <p className="mt-2 text-3xl font-bold tracking-tight">{value}</p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon size={19} />
        </div>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">{description}</p>
    </div>
  );
}

/* ========================= */
/* STATUS BADGE */
/* ========================= */

function StatusBadge({ status }) {
  const styles = {
    Waiting:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    Serving:
      "bg-primary/10 text-primary",
    Completed:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    Confirmed:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    Pending:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium ${styles[status] || "bg-muted text-muted-foreground"
        }`}
    >
      {status}
    </span>
  );
}

/* ========================= */
/* QUICK ACTION */
/* ========================= */

function QuickAction({
  icon: Icon,
  title,
  description,
}) {
  return (
    <button className="group flex items-center gap-3 rounded-xl border border-border p-3 text-left transition hover:border-primary/40 hover:bg-primary/5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon size={18} />
      </div>

      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {description}
        </p>
      </div>
    </button>
  );
}

/* ========================= */
/* ACTIVITY */
/* ========================= */

function Activity({ text, time }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />

      <div className="min-w-0">
        <p className="text-sm">{text}</p>
        <p className="mt-1 text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  );
}

