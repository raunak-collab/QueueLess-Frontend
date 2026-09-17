'use client'
import {
    LayoutDashboard,
    ListOrdered,
    CalendarDays,
    Users,
    Stethoscope,
    Mail,
    BarChart3,
    Settings,
    ChevronDown,
    X,
    Menu,
    Bell,
    Search,
} from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import React, { useState } from 'react'

export default function Aside() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const pathname = usePathname()

    const menuItems = [
        {
            label: "Overview",
            href: "/dashboard/overview",
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

    return (
        <>

            {/* ============================= */}
            {/* MOBILE OVERLAY */}
            {/* ============================= */}

            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Top Navbar */}
            <header className="sticky top-0 z-30 ml-0 flex h-20 w-full items-center justify-between border-b border-border bg-background/90 px-4 backdrop-blur-xl sm:px-6 lg:ml-64 lg:w-[calc(100%-16rem)] lg:px-8">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="rounded-xl border border-border p-2.5 hover:bg-muted lg:hidden"
                    >
                        <Menu size={20} />
                    </button>

                    {/* Search */}
                    <div className="relative hidden md:block">
                        <Search
                            size={17}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                        />

                        <input
                            type="text"
                            placeholder="Search..."
                            className="h-10 w-52 text-foreground rounded-xl border border-input bg-card pl-9 pr-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                    </div>

                </div>

                <div className="flex items-center gap-3">
                    {/* Notification */}
                    <button className="relative rounded-xl border border-border bg-card p-2.5 text-muted-foreground transition hover:bg-muted hover:text-foreground">
                        <Bell size={19} />

                        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary ring-2 ring-card" />
                    </button>

                    {/* Profile */}
                    <button className="flex items-center gap-2 rounded-xl border border-border bg-card p-1.5 pr-3 transition hover:bg-muted">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
                            R
                        </div>

                        <div className="hidden text-left sm:block">
                            <p className="text-xs text-foreground font-semibold">Raunak</p>
                            <p className="text-[11px] text-muted-foreground">Owner</p>
                        </div>

                        <ChevronDown
                            size={15}
                            className="hidden text-muted-foreground sm:block"
                        />
                    </button>
                </div>
            </header>

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-0 flex w-64 flex-col border-r border-border bg-card transition-transform duration-300 overflow-y-scroll lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Logo */}
                <div className="flex h-20 py-5 items-center border-b border-border px-6">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo.png"
                            alt="QueueLess"
                            width={38}
                            height={38}
                            className="rounded-xl"
                        />

                        <div>
                            <p className="text-lg text-foreground font-bold tracking-tight">QueueLess</p>
                            <p className="text-xs text-muted-foreground">
                                Clinic Management
                            </p>
                        </div>
                    </Link>

                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="ml-auto rounded-lg p-2 text-muted-foreground hover:bg-muted lg:hidden"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Clinic */}
                <div className="mx-4 mt-5 rounded-xl border border-border bg-background p-3">
                    <p className="text-xs text-muted-foreground">Current clinic</p>

                    <div className="mt-1 flex items-center justify-between">
                        <p className="truncate text-foreground text-sm font-semibold">
                            City Care Clinic
                        </p>

                        <ChevronDown
                            size={16}
                            className="shrink-0 text-muted-foreground"
                        />
                    </div>
                </div>

                {/* Navigation */}
                <nav className="mt-6 flex-1 px-4">
                    <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Workspace
                    </p>

                    <div className="space-y-1">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const active = item.href === pathname;

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setSidebarOpen(false)}
                                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${active
                                        ? "bg-primary text-primary-foreground shadow-sm"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                        }`}
                                >
                                    <Icon size={18} />
                                    <span>{item.label}</span>
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                {/* Help Card */}
                <div className="mx-4 mt-2 mb-5 rounded-xl border border-border bg-background p-4">
                    <p className="text-sm text-foreground font-semibold">Need help?</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        Learn how to manage your clinic with QueueLess.
                    </p>

                    <button className="mt-3 text-xs font-semibold text-primary hover:underline">
                        View documentation →
                    </button>
                </div>
            </aside>
        </>
    )
}
