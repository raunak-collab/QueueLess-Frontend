"use client";

import { useState } from "react";
import {
    Stethoscope,
    Search,
    Clock3,
    UserPlus,
    Play,
    CheckCircle2,
    SkipForward,
    MoreHorizontal,
    UserRound,
    CircleDot,
    Timer,
    UsersRound,
} from "lucide-react";

export default function QueuePage() {
    const [selectedPatient, setSelectedPatient] = useState(null);

    const queueData = [
        {
            token: "Q-024",
            patient: "Aarav Sharma",
            phone: "+91 98765 43210",
            doctor: "Dr. Priya Mehta",
            time: "10:15 AM",
            status: "Waiting",
            waitTime: "12 min",
            type: "General Consultation",
        },
        {
            token: "Q-025",
            patient: "Riya Verma",
            phone: "+91 98123 45678",
            doctor: "Dr. Rahul Singh",
            time: "10:30 AM",
            status: "Serving",
            waitTime: "5 min",
            type: "Follow-up",
        },
        {
            token: "Q-026",
            patient: "Kabir Khan",
            phone: "+91 99887 66554",
            doctor: "Dr. Priya Mehta",
            time: "10:45 AM",
            status: "Waiting",
            waitTime: "8 min",
            type: "General Consultation",
        },
        {
            token: "Q-027",
            patient: "Ananya Gupta",
            phone: "+91 97654 32109",
            doctor: "Dr. Rahul Singh",
            time: "11:00 AM",
            status: "Completed",
            waitTime: "18 min",
            type: "Consultation",
        },
        {
            token: "Q-028",
            patient: "Aditya Jain",
            phone: "+91 98712 34567",
            doctor: "Dr. Priya Mehta",
            time: "11:15 AM",
            status: "Waiting",
            waitTime: "3 min",
            type: "General Consultation",
        },
        {
            token: "Q-029",
            patient: "Simran Kaur",
            phone: "+91 98989 11223",
            doctor: "Dr. Rahul Singh",
            time: "11:30 AM",
            status: "Waiting",
            waitTime: "1 min",
            type: "Follow-up",
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">

            {/* ============================= */}
            {/* MAIN */}
            {/* ============================= */}

            <div className="lg:pl-64">
               

                {/* ============================= */}
                {/* CONTENT */}
                {/* ============================= */}

                <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
                    {/* Page Heading */}
                    <section className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <div>
                            <p className="mb-2 text-sm font-medium text-primary">
                                Wednesday, September 10, 2026
                            </p>

                            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                                Today&apos;s Queue
                            </h1>

                            <p className="mt-2 text-sm text-muted-foreground">
                                Manage patients waiting to see a doctor.
                            </p>
                        </div>

                        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90">
                            <UserPlus size={17} />
                            Add Patient to Queue
                        </button>
                    </section>

                    {/* ============================= */}
                    {/* QUEUE STATS */}
                    {/* ============================= */}

                    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        <QueueStatCard
                            title="Total in Queue"
                            value="24"
                            description="Patients today"
                            icon={UsersRound}
                        />

                        <QueueStatCard
                            title="Waiting"
                            value="8"
                            description="Patients waiting"
                            icon={Timer}
                        />

                        <QueueStatCard
                            title="Serving"
                            value="2"
                            description="Currently being served"
                            icon={CircleDot}
                        />

                        <QueueStatCard
                            title="Completed"
                            value="14"
                            description="Completed today"
                            icon={CheckCircle2}
                        />
                    </section>

                    {/* ============================= */}
                    {/* FILTER BAR */}
                    {/* ============================= */}

                    <section className="mt-6 rounded-2xl border border-border bg-card p-4">
                        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                            <div className="relative flex-1">
                                <Search
                                    size={17}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                />

                                <input
                                    type="text"
                                    placeholder="Search by patient name or token..."
                                    className="h-11 w-full rounded-xl border border-input bg-background pl-10 pr-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                                />
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <select className="h-11 rounded-xl border border-input bg-background px-4 text-sm outline-none focus:border-primary">
                                    <option>All Doctors</option>
                                    <option>Dr. Priya Mehta</option>
                                    <option>Dr. Rahul Singh</option>
                                </select>

                                <select className="h-11 rounded-xl border border-input bg-background px-4 text-sm outline-none focus:border-primary">
                                    <option>All Status</option>
                                    <option>Waiting</option>
                                    <option>Serving</option>
                                    <option>Completed</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* ============================= */}
                    {/* QUEUE + SELECTED PATIENT */}
                    {/* ============================= */}

                    <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_330px]">
                        {/* Queue Table */}
                        <div className="overflow-hidden rounded-2xl border border-border bg-card">
                            <div className="flex items-center justify-between border-b border-border px-5 py-4">
                                <div>
                                    <h2 className="font-semibold">Patient Queue</h2>

                                    <p className="mt-1 text-xs text-muted-foreground">
                                        8 patients currently waiting
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                                    Live
                                </div>
                            </div>

                            {/* Desktop Table */}
                            <div className="hidden overflow-x-auto md:block">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-border text-left text-xs text-muted-foreground">
                                            <th className="px-5 py-3 font-medium">Token</th>
                                            <th className="px-5 py-3 font-medium">Patient</th>
                                            <th className="px-5 py-3 font-medium">Doctor</th>
                                            <th className="px-5 py-3 font-medium">Joined</th>
                                            <th className="px-5 py-3 font-medium">Wait Time</th>
                                            <th className="px-5 py-3 font-medium">Status</th>
                                            <th className="px-5 py-3"></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {queueData.map((item) => (
                                            <tr
                                                key={item.token}
                                                onClick={() => setSelectedPatient(item)}
                                                className={`cursor-pointer border-b border-border transition last:border-0 hover:bg-muted/40 ${selectedPatient?.token === item.token
                                                        ? "bg-primary/5"
                                                        : ""
                                                    }`}
                                            >
                                                <td className="px-5 py-4">
                                                    <span className="font-semibold text-primary">
                                                        {item.token}
                                                    </span>
                                                </td>

                                                <td className="px-5 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-xs font-semibold text-primary">
                                                            {item.patient
                                                                .split(" ")
                                                                .map((word) => word[0])
                                                                .join("")}
                                                        </div>

                                                        <div>
                                                            <p className="text-sm font-medium">
                                                                {item.patient}
                                                            </p>

                                                            <p className="mt-0.5 text-xs text-muted-foreground">
                                                                {item.type}
                                                            </p>
                                                        </div>
                                                    </div>
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

                                                <td className="px-5 py-4 text-sm text-muted-foreground">
                                                    {item.waitTime}
                                                </td>

                                                <td className="px-5 py-4">
                                                    <StatusBadge status={item.status} />
                                                </td>

                                                <td className="px-5 py-4 text-right">
                                                    <button
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                                                    >
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
                                    <button
                                        key={item.token}
                                        onClick={() => setSelectedPatient(item)}
                                        className={`w-full p-4 text-left transition hover:bg-muted/40 ${selectedPatient?.token === item.token
                                                ? "bg-primary/5"
                                                : ""
                                            }`}
                                    >
                                        <div className="flex items-start justify-between gap-3">
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

                                        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                                            <span>{item.time}</span>
                                            <span>Wait: {item.waitTime}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* ============================= */}
                        {/* SELECTED PATIENT PANEL */}
                        {/* ============================= */}

                        <div className="h-fit rounded-2xl border border-border bg-card">
                            {selectedPatient ? (
                                <>
                                    <div className="border-b border-border p-5">
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm font-semibold">
                                                Patient Details
                                            </p>

                                            <StatusBadge status={selectedPatient.status} />
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        {/* Avatar */}
                                        <div className="flex flex-col items-center text-center">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-lg font-bold text-primary">
                                                {selectedPatient.patient
                                                    .split(" ")
                                                    .map((word) => word[0])
                                                    .join("")}
                                            </div>

                                            <h3 className="mt-3 font-semibold">
                                                {selectedPatient.patient}
                                            </h3>

                                            <p className="mt-1 text-xs text-muted-foreground">
                                                {selectedPatient.phone}
                                            </p>

                                            <span className="mt-3 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                                                {selectedPatient.token}
                                            </span>
                                        </div>

                                        {/* Details */}
                                        <div className="mt-6 space-y-4">
                                            <DetailRow
                                                label="Doctor"
                                                value={selectedPatient.doctor}
                                            />

                                            <DetailRow
                                                label="Appointment"
                                                value={selectedPatient.time}
                                            />

                                            <DetailRow
                                                label="Wait time"
                                                value={selectedPatient.waitTime}
                                            />

                                            <DetailRow
                                                label="Visit type"
                                                value={selectedPatient.type}
                                            />
                                        </div>

                                        {/* Actions */}
                                        <div className="mt-6 space-y-2">
                                            {selectedPatient.status === "Waiting" && (
                                                <>
                                                    <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
                                                        <Play size={16} />
                                                        Call Patient
                                                    </button>

                                                    <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-muted">
                                                        <SkipForward size={16} />
                                                        Skip Patient
                                                    </button>
                                                </>
                                            )}

                                            {selectedPatient.status === "Serving" && (
                                                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
                                                    <CheckCircle2 size={16} />
                                                    Mark Completed
                                                </button>
                                            )}

                                            {selectedPatient.status === "Completed" && (
                                                <div className="rounded-xl bg-emerald-500/10 p-3 text-center text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                                    Patient visit completed
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="flex min-h-[420px] flex-col items-center justify-center px-6 text-center">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
                                        <UserRound
                                            size={24}
                                            className="text-muted-foreground"
                                        />
                                    </div>

                                    <h3 className="mt-4 text-sm font-semibold">
                                        Select a patient
                                    </h3>

                                    <p className="mt-2 max-w-[220px] text-xs leading-5 text-muted-foreground">
                                        Select a patient from the queue to view their details and
                                        manage their visit.
                                    </p>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* ============================= */}
                    {/* QUEUE SUMMARY */}
                    {/* ============================= */}

                    <section className="mt-6 grid gap-6 lg:grid-cols-2">
                        {/* Current Doctors */}
                        <div className="rounded-2xl border border-border bg-card p-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="font-semibold">Doctors on Duty</h2>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        Current queue status by doctor
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 space-y-3">
                                <DoctorCard
                                    name="Dr. Priya Mehta"
                                    specialty="General Physician"
                                    waiting="5"
                                    serving="1"
                                    status="Available"
                                />

                                <DoctorCard
                                    name="Dr. Rahul Singh"
                                    specialty="Internal Medicine"
                                    waiting="3"
                                    serving="1"
                                    status="Busy"
                                />
                            </div>
                        </div>

                        {/* Queue Info */}
                        <div className="rounded-2xl border border-border bg-card p-5">
                            <div>
                                <h2 className="font-semibold">Queue Overview</h2>

                                <p className="mt-1 text-xs text-muted-foreground">
                                    Quick insights for today
                                </p>
                            </div>

                            <div className="mt-5 space-y-4">
                                <ProgressRow
                                    label="Queue completion"
                                    value="58%"
                                    progress="58%"
                                />

                                <ProgressRow
                                    label="Average waiting time"
                                    value="18 min"
                                    progress="45%"
                                />

                                <ProgressRow
                                    label="Today's appointments"
                                    value="32"
                                    progress="72%"
                                />
                            </div>

                            <div className="mt-5 rounded-xl bg-primary/5 p-4">
                                <div className="flex gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Clock3 size={17} />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold">
                                            Average wait time is 18 minutes
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                                            Queue performance is looking good compared to your
                                            clinic&apos;s average.
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

/* ================================= */
/* QUEUE STAT CARD */
/* ================================= */

function QueueStatCard({
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

/* ================================= */
/* STATUS BADGE */
/* ================================= */

function StatusBadge({ status }) {
    const styles = {
        Waiting:
            "bg-amber-500/10 text-amber-600 dark:text-amber-400",
        Serving:
            "bg-primary/10 text-primary",
        Completed:
            "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
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

/* ================================= */
/* DETAIL ROW */
/* ================================= */

function DetailRow({ label, value }) {
    return (
        <div className="flex items-start justify-between gap-4">
            <span className="text-xs text-muted-foreground">{label}</span>

            <span className="text-right text-xs font-medium">{value}</span>
        </div>
    );
}

/* ================================= */
/* DOCTOR CARD */
/* ================================= */

function DoctorCard({
    name,
    specialty,
    waiting,
    serving,
    status,
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
                <p className="text-xs font-medium">{status}</p>

                <p className="mt-1 text-[11px] text-muted-foreground">
                    {waiting} waiting · {serving} serving
                </p>
            </div>
        </div>
    );
}

/* ================================= */
/* PROGRESS ROW */
/* ================================= */

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

                <span className="text-xs font-semibold">{value}</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: progress }}
                />
            </div>
        </div>
    );
}

