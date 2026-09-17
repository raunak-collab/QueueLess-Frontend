"use client";

import {
    Search,
    Plus,
    MoreHorizontal,
    Users,
    UserPlus,
    UserCheck,
    Clock3,
    ChevronLeft,
    ChevronRight,
    Eye,
    Phone,
    Mail,
    CalendarDays,
    X,
} from "lucide-react";
import { useState } from "react";

const patients = [
    {
        id: "P-1001",
        name: "Neha Kapoor",
        phone: "+91 98765 43210",
        email: "neha.kapoor@example.com",
        age: 28,
        gender: "Female",
        lastVisit: "12 Sep 2026",
        visits: 8,
        status: "Active",
    },
    {
        id: "P-1002",
        name: "Rahul Sharma",
        phone: "+91 98123 45678",
        email: "rahul.sharma@example.com",
        age: 35,
        gender: "Male",
        lastVisit: "11 Sep 2026",
        visits: 5,
        status: "Active",
    },
    {
        id: "P-1003",
        name: "Priya Verma",
        phone: "+91 97654 32109",
        email: "priya.verma@example.com",
        age: 24,
        gender: "Female",
        lastVisit: "10 Sep 2026",
        visits: 3,
        status: "Active",
    },
    {
        id: "P-1004",
        name: "Amit Singh",
        phone: "+91 99887 66554",
        email: "amit.singh@example.com",
        age: 42,
        gender: "Male",
        lastVisit: "05 Sep 2026",
        visits: 12,
        status: "Active",
    },
    {
        id: "P-1005",
        name: "Sneha Gupta",
        phone: "+91 98989 11223",
        email: "sneha.gupta@example.com",
        age: 31,
        gender: "Female",
        lastVisit: "02 Sep 2026",
        visits: 6,
        status: "Inactive",
    },
    {
        id: "P-1006",
        name: "Arjun Mehta",
        phone: "+91 98712 33445",
        email: "arjun.mehta@example.com",
        age: 29,
        gender: "Male",
        lastVisit: "29 Aug 2026",
        visits: 4,
        status: "Active",
    },
];

const navItems = [
    { label: "Overview", href: "/dashboard" },
    { label: "Queue", href: "/dashboard/queue" },
    { label: "Appointments", href: "/dashboard/appointments" },
    { label: "Patients", href: "/dashboard/patients", active: true },
    { label: "Doctors & Staff", href: "/dashboard/staff" },
    { label: "Invitations", href: "/dashboard/invitations" },
    { label: "Reports", href: "/dashboard/reports" },
    { label: "Settings", href: "/dashboard/settings" },
];

export default function PatientsPage() {
    const [search, setSearch] = useState("");
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [statusFilter, setStatusFilter] = useState("All");

    const filteredPatients = patients.filter((patient) => {
        const matchesSearch =
            patient.name.toLowerCase().includes(search.toLowerCase()) ||
            patient.phone.includes(search) ||
            patient.id.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === "All" || patient.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Main */}
            <main className="lg:pl-64">
                <div className="p-5 md:p-8">
                    {/* Heading */}
                    <div className="mb-7">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Patients
                        </h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Manage patient records and view their visit history.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="mb-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        <StatCard
                            icon={Users}
                            title="Total Patients"
                            value="1,248"
                            description="All registered patients"
                        />

                        <StatCard
                            icon={UserPlus}
                            title="New Patients"
                            value="36"
                            description="Added this month"
                        />

                        <StatCard
                            icon={UserCheck}
                            title="Active Patients"
                            value="1,102"
                            description="Currently active"
                        />

                        <StatCard
                            icon={Clock3}
                            title="Visited Today"
                            value="24"
                            description="Patients seen today"
                        />
                    </div>

                    {/* Patient list */}
                    <section className="rounded-2xl border border-border bg-card">
                        {/* Toolbar */}
                        <div className="flex flex-col gap-4 border-b border-border p-5 md:flex-row md:items-center md:justify-between">
                            <div>
                                <h2 className="font-semibold">Patient Directory</h2>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    {filteredPatients.length} patients shown
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                {/* Search */}
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                                    <input
                                        type="text"
                                        placeholder="Search patient..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="h-10 w-full rounded-lg border border-input bg-background pl-9 pr-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 sm:w-64"
                                    />
                                </div>

                                {/* Status */}
                                <select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    className="h-10 rounded-lg border border-input bg-background px-3 text-sm outline-none focus:border-primary"
                                >
                                    <option value="All">All Status</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                        </div>

                        {/* Desktop table */}
                        <div className="hidden overflow-x-auto md:block">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-border text-left">
                                        <th className="px-5 py-3 text-xs font-medium text-muted-foreground">
                                            Patient
                                        </th>
                                        <th className="px-5 py-3 text-xs font-medium text-muted-foreground">
                                            Contact
                                        </th>
                                        <th className="px-5 py-3 text-xs font-medium text-muted-foreground">
                                            Age / Gender
                                        </th>
                                        <th className="px-5 py-3 text-xs font-medium text-muted-foreground">
                                            Last Visit
                                        </th>
                                        <th className="px-5 py-3 text-xs font-medium text-muted-foreground">
                                            Visits
                                        </th>
                                        <th className="px-5 py-3 text-xs font-medium text-muted-foreground">
                                            Status
                                        </th>
                                        <th className="px-5 py-3 text-right text-xs font-medium text-muted-foreground">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredPatients.map((patient) => (
                                        <tr
                                            key={patient.id}
                                            className="border-b border-border last:border-0 hover:bg-muted/30"
                                        >
                                            {/* Patient */}
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-3">
                                                    <Avatar name={patient.name} />

                                                    <div>
                                                        <p className="text-sm font-medium">
                                                            {patient.name}
                                                        </p>
                                                        <p className="text-xs text-muted-foreground">
                                                            {patient.id}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Contact */}
                                            <td className="px-5 py-4">
                                                <p className="text-sm">{patient.phone}</p>
                                                <p className="mt-0.5 text-xs text-muted-foreground">
                                                    {patient.email}
                                                </p>
                                            </td>

                                            {/* Age */}
                                            <td className="px-5 py-4 text-sm">
                                                {patient.age} yrs
                                                <span className="text-muted-foreground">
                                                    {" "}
                                                    / {patient.gender}
                                                </span>
                                            </td>

                                            {/* Last visit */}
                                            <td className="px-5 py-4 text-sm">
                                                {patient.lastVisit}
                                            </td>

                                            {/* Visits */}
                                            <td className="px-5 py-4 text-sm font-medium">
                                                {patient.visits}
                                            </td>

                                            {/* Status */}
                                            <td className="px-5 py-4">
                                                <StatusBadge status={patient.status} />
                                            </td>

                                            {/* Action */}
                                            <td className="px-5 py-4 text-right">
                                                <button
                                                    onClick={() => setSelectedPatient(patient)}
                                                    className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium transition hover:bg-muted"
                                                >
                                                    <Eye className="h-3.5 w-3.5" />
                                                    View
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile cards */}
                        <div className="divide-y divide-border md:hidden">
                            {filteredPatients.map((patient) => (
                                <div key={patient.id} className="p-5">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <Avatar name={patient.name} />

                                            <div>
                                                <p className="text-sm font-medium">{patient.name}</p>
                                                <p className="text-xs text-muted-foreground">
                                                    {patient.id}
                                                </p>
                                            </div>
                                        </div>

                                        <StatusBadge status={patient.status} />
                                    </div>

                                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                                        <div>
                                            <p className="text-xs text-muted-foreground">Phone</p>
                                            <p className="mt-1">{patient.phone}</p>
                                        </div>

                                        <div>
                                            <p className="text-xs text-muted-foreground">
                                                Age / Gender
                                            </p>
                                            <p className="mt-1">
                                                {patient.age} / {patient.gender}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs text-muted-foreground">
                                                Last Visit
                                            </p>
                                            <p className="mt-1">{patient.lastVisit}</p>
                                        </div>

                                        <div>
                                            <p className="text-xs text-muted-foreground">
                                                Total Visits
                                            </p>
                                            <p className="mt-1">{patient.visits}</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setSelectedPatient(patient)}
                                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-border py-2 text-sm font-medium hover:bg-muted"
                                    >
                                        <Eye className="h-4 w-4" />
                                        View Patient
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Empty state */}
                        {filteredPatients.length === 0 && (
                            <div className="p-12 text-center">
                                <Users className="mx-auto h-8 w-8 text-muted-foreground" />
                                <h3 className="mt-3 font-medium">No patients found</h3>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Try changing your search or filter.
                                </p>
                            </div>
                        )}

                        {/* Pagination */}
                        <div className="flex items-center justify-between border-t border-border px-5 py-4">
                            <p className="text-xs text-muted-foreground">
                                Showing 1–6 of 1,248 patients
                            </p>

                            <div className="flex items-center gap-2">
                                <button className="rounded-lg border border-border p-2 hover:bg-muted">
                                    <ChevronLeft className="h-4 w-4" />
                                </button>

                                <span className="text-sm">1</span>

                                <button className="rounded-lg border border-border p-2 hover:bg-muted">
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Bottom information */}
                    <div className="mt-6 grid gap-6 lg:grid-cols-2">
                        {/* Recent patients */}
                        <section className="rounded-2xl border border-border bg-card p-5">
                            <div className="mb-5">
                                <h2 className="font-semibold">Recently Added</h2>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Patients recently registered at your clinic.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {patients.slice(0, 4).map((patient) => (
                                    <div
                                        key={patient.id}
                                        className="flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Avatar name={patient.name} />

                                            <div>
                                                <p className="text-sm font-medium">{patient.name}</p>
                                                <p className="text-xs text-muted-foreground">
                                                    {patient.id}
                                                </p>
                                            </div>
                                        </div>

                                        <span className="text-xs text-muted-foreground">
                                            {patient.lastVisit}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Quick info */}
                        <section className="rounded-2xl border border-border bg-card p-5">
                            <div className="mb-5">
                                <h2 className="font-semibold">Patient Overview</h2>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Quick information about your patient base.
                                </p>
                            </div>

                            <div className="space-y-5">
                                <ProgressRow
                                    label="Active Patients"
                                    value="88%"
                                    width="88%"
                                />

                                <ProgressRow
                                    label="Returning Patients"
                                    value="64%"
                                    width="64%"
                                />

                                <ProgressRow
                                    label="Appointments Completed"
                                    value="92%"
                                    width="92%"
                                />
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            {/* Patient Detail Modal */}
            {selectedPatient && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
                    <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card shadow-xl">
                        {/* Modal header */}
                        <div className="flex items-center justify-between border-b border-border p-5">
                            <div className="flex items-center gap-3">
                                <Avatar name={selectedPatient.name} />

                                <div>
                                    <h2 className="font-semibold">
                                        {selectedPatient.name}
                                    </h2>

                                    <p className="text-xs text-muted-foreground">
                                        Patient ID: {selectedPatient.id}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => setSelectedPatient(null)}
                                className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Modal body */}
                        <div className="space-y-6 p-5">
                            {/* Basic information */}
                            <div>
                                <h3 className="mb-4 text-sm font-semibold">
                                    Basic Information
                                </h3>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <InfoItem
                                        icon={Phone}
                                        label="Phone"
                                        value={selectedPatient.phone}
                                    />

                                    <InfoItem
                                        icon={Mail}
                                        label="Email"
                                        value={selectedPatient.email}
                                    />

                                    <InfoItem
                                        icon={CalendarDays}
                                        label="Age"
                                        value={`${selectedPatient.age} years`}
                                    />

                                    <InfoItem
                                        icon={Users}
                                        label="Gender"
                                        value={selectedPatient.gender}
                                    />
                                </div>
                            </div>

                            {/* Visit summary */}
                            <div>
                                <h3 className="mb-4 text-sm font-semibold">
                                    Visit Summary
                                </h3>

                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                    <MiniStat
                                        label="Total Visits"
                                        value={selectedPatient.visits}
                                    />

                                    <MiniStat
                                        label="Last Visit"
                                        value={selectedPatient.lastVisit}
                                    />

                                    <MiniStat
                                        label="Status"
                                        value={selectedPatient.status}
                                    />
                                </div>
                            </div>

                            {/* Recent history */}
                            <div>
                                <h3 className="mb-4 text-sm font-semibold">
                                    Recent Visit History
                                </h3>

                                <div className="space-y-3">
                                    <HistoryItem
                                        date="12 Sep 2026"
                                        doctor="Dr. Priya Sharma"
                                        type="General Consultation"
                                        status="Completed"
                                    />

                                    <HistoryItem
                                        date="20 Aug 2026"
                                        doctor="Dr. Amit Verma"
                                        type="Follow-up"
                                        status="Completed"
                                    />

                                    <HistoryItem
                                        date="14 Jul 2026"
                                        doctor="Dr. Priya Sharma"
                                        type="General Consultation"
                                        status="Completed"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Modal footer */}
                        <div className="flex justify-end gap-3 border-t border-border p-5">
                            <button
                                onClick={() => setSelectedPatient(null)}
                                className="rounded-lg border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted"
                            >
                                Close
                            </button>

                            <button className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
                                Edit Patient
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

/* ---------------- Components ---------------- */

function StatCard({ icon: Icon, title, value, description }) {
    return (
        <div className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                </div>

                <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
            </div>

            <p className="mt-5 text-sm text-muted-foreground">{title}</p>

            <p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>

            <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        </div>
    );
}

function Avatar({ name }) {
    const initials = name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2);

    return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            {initials}
        </div>
    );
}

function StatusBadge({ status }) {
    const active = status === "Active";

    return (
        <span
            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${active
                    ? "bg-success/10 text-success"
                    : "bg-muted text-muted-foreground"
                }`}
        >
            {status}
        </span>
    );
}

function InfoItem({ icon: Icon, label, value }) {
    return (
        <div className="rounded-xl border border-border p-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Icon className="h-3.5 w-3.5" />
                {label}
            </div>

            <p className="mt-2 text-sm font-medium break-all">{value}</p>
        </div>
    );
}

function MiniStat({ label, value }) {
    return (
        <div className="rounded-xl bg-muted/50 p-3">
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="mt-1 text-sm font-semibold">{value}</p>
        </div>
    );
}

function HistoryItem({ date, doctor, type, status }) {
    return (
        <div className="flex items-center justify-between rounded-xl border border-border p-3">
            <div>
                <p className="text-sm font-medium">{type}</p>

                <p className="mt-1 text-xs text-muted-foreground">
                    {doctor} · {date}
                </p>
            </div>

            <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                {status}
            </span>
        </div>
    );
}

function ProgressRow({ label, value, width }) {
    return (
        <div>
            <div className="mb-2 flex items-center justify-between">
                <span className="text-sm">{label}</span>
                <span className="text-sm font-medium">{value}</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                    className="h-full rounded-full bg-primary"
                    style={{ width }}
                />
            </div>
        </div>
    );
}