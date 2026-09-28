
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    CalendarDays,
    Check,
    CheckCircle2,
    Clock3,
    Users,
    Stethoscope,
    BarChart3,
    QrCode,
    Bell,
    ShieldCheck,
    Activity,
    CalendarCheck,
    ListOrdered,
    Settings2,
    Zap,
    Smartphone,
    Building2,
    ChevronRight,
} from "lucide-react";

const coreFeatures = [
    {
        number: "01",
        icon: ListOrdered,
        title: "Smart Queue Management",
        description:
            "Manage your clinic's patient flow from one place. Keep track of waiting patients and move your queue forward without confusion.",
        points: [
            "Create and manage multiple queues",
            "Call next, skip, recall and complete tokens",
            "Track waiting and serving patients",
            "See live queue status",
        ],
        tag: "CORE FEATURE",
    },
    {
        number: "02",
        icon: CalendarDays,
        title: "Simple Appointment Management",
        description:
            "Organize appointments and daily schedules. Give your team a clear view of upcoming visits and changes.",
        points: [
            "View daily and upcoming appointments",
            "Book and reschedule visits",
            "Track appointment status",
            "Keep schedules organized",
        ],
        tag: "SCHEDULING",
    },
    {
        number: "03",
        icon: Smartphone,
        title: "Live Patient Tracking",
        description:
            "Let patients check their place in the queue without repeatedly asking the reception desk.",
        points: [
            "Join a queue using a QR code",
            "View token number and queue position",
            "See people ahead",
            "Check estimated waiting time",
        ],
        tag: "PATIENT EXPERIENCE",
    },
];

const additionalFeatures = [
    {
        icon: Users,
        title: "Patient Management",
        description:
            "Keep patient details, contact information and visit history organized in one place.",
    },
    {
        icon: Stethoscope,
        title: "Team & Role Management",
        description:
            "Invite doctors and receptionists, assign roles and organize your clinic team.",
    },
    {
        icon: BarChart3,
        title: "Analytics & Reports",
        description:
            "Understand patient visits, queue activity, appointments and clinic performance.",
    },
    {
        icon: Bell,
        title: "Notifications",
        description:
            "Keep patients and staff informed about important queue and appointment updates.",
    },
    {
        icon: Settings2,
        title: "Clinic Settings",
        description:
            "Configure clinic information, working hours and queue preferences.",
    },
    {
        icon: ShieldCheck,
        title: "Role-Based Access",
        description:
            "Give each team member access based on their responsibilities in the clinic.",
    },
];

export default function FeaturesPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-background text-foreground">

            {/* HERO */}
            <section className="relative px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pb-28">
                <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

                <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
                    <div className="max-w-2xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                            <Zap className="h-4 w-4" />
                            Everything your clinic needs
                        </div>

                        <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                            A smarter way to{" "}
                            <span className="text-primary">
                                manage your clinic.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                            From patient queues to appointments and team
                            coordination, QueueLess brings your clinic&apos;s
                            daily operations together in one simple workspace.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/register"
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                            >
                                Get Started Free
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            <Link
                                href="/pricing"
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 text-sm font-semibold transition hover:bg-muted"
                            >
                                Explore Pricing
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-success" />
                                Easy to use
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-success" />
                                Made for clinics
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-success" />
                                One simple workspace
                            </span>
                        </div>
                    </div>

                    {/* Dashboard preview */}
                    <div className="relative mx-auto w-full max-w-2xl">
                        <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" />

                        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10">
                            <div className="flex items-center justify-between border-b border-border px-5 py-4">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                        <Clock3 className="h-4 w-4" />
                                    </div>
                                    <span className="font-bold">QueueLess</span>
                                </div>
                                <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success">
                                    Clinic overview
                                </span>
                            </div>

                            <div className="space-y-5 p-5 sm:p-6">
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Sunday, September 27
                                    </p>
                                    <h3 className="mt-1 text-xl font-bold">
                                        Good morning, Dr. Sharma
                                    </h3>
                                </div>

                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                    <Metric
                                        icon={Users}
                                        label="Total Patients"
                                        value="128"
                                        color="text-primary"
                                        bg="bg-primary/10"
                                    />
                                    <Metric
                                        icon={Clock3}
                                        label="Waiting"
                                        value="12"
                                        color="text-warning"
                                        bg="bg-warning/10"
                                    />
                                    <Metric
                                        icon={CalendarCheck}
                                        label="Appointments"
                                        value="36"
                                        color="text-success"
                                        bg="bg-success/10"
                                    />
                                </div>

                                <div className="rounded-xl border border-border p-4">
                                    <div className="mb-4 flex items-center justify-between">
                                        <div>
                                            <h4 className="font-semibold">
                                                Current Queue
                                            </h4>
                                            <p className="mt-1 text-xs text-muted-foreground">
                                                General Medicine
                                            </p>
                                        </div>
                                        <span className="rounded-lg bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                                            Active
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between rounded-lg bg-muted/60 p-3">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                                                A
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold">
                                                    Token A102
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    Currently serving
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-sm font-semibold text-success">
                                            Now
                                        </span>
                                    </div>

                                    <div className="mt-3 space-y-3">
                                        {[
                                            ["A103", "Rahul Mehta", "Waiting"],
                                            ["A104", "Priya Sharma", "Waiting"],
                                            ["A105", "Aman Verma", "Waiting"],
                                        ].map(([token, name, status]) => (
                                            <div
                                                key={token}
                                                className="flex items-center justify-between"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-xs font-semibold">
                                                        {token.slice(-2)}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium">
                                                            {name}
                                                        </p>
                                                        <p className="text-xs text-muted-foreground">
                                                            Token {token}
                                                        </p>
                                                    </div>
                                                </div>
                                                <span className="text-xs text-muted-foreground">
                                                    {status}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 rounded-xl bg-primary/5 p-3 text-xs text-muted-foreground">
                                    <Activity className="h-4 w-4 shrink-0 text-primary" />
                                    A simple overview of your clinic&apos;s daily activity.
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-border bg-card p-4 shadow-xl sm:block md:-left-8">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10 text-success">
                                    <CheckCircle2 className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold">
                                        Queue organized
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        Your team is in sync
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE FEATURES */}
            <section className="border-y border-border bg-muted/30 px-5 py-20 sm:px-8 lg:py-28">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading
                        eyebrow="CORE FEATURES"
                        title="Everything works together"
                        description="The essential tools to help your clinic handle everyday operations with less manual work."
                    />

                    <div className="mt-14 space-y-8">
                        {coreFeatures.map((feature, index) => {
                            const Icon = feature.icon;
                            const reverse = index % 2 === 1;

                            return (
                                <div
                                    key={feature.number}
                                    className={`grid items-center gap-10 rounded-3xl border border-border bg-card p-6 sm:p-9 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""
                                        }`}
                                >
                                    <div>
                                        <div className="mb-5 flex items-center gap-3">
                                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                <Icon className="h-5 w-5" />
                                            </span>
                                            <span className="text-xs font-semibold tracking-wider text-primary">
                                                {feature.tag}
                                            </span>
                                        </div>

                                        <p className="text-sm font-semibold text-muted-foreground">
                                            FEATURE {feature.number}
                                        </p>
                                        <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                                            {feature.title}
                                        </h3>
                                        <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                                            {feature.description}
                                        </p>

                                        <ul className="mt-6 space-y-3">
                                            {feature.points.map((point) => (
                                                <li
                                                    key={point}
                                                    className="flex items-start gap-3 text-sm"
                                                >
                                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <FeaturePreview type={index} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ADDITIONAL FEATURES */}
            <section className="px-5 py-20 sm:px-8 lg:py-28">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading
                        eyebrow="MORE CAPABILITIES"
                        title="More control for your clinic"
                        description="Useful tools that help your team stay organized and keep the clinic running smoothly."
                    />

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {additionalFeatures.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <h3 className="mt-5 text-lg font-semibold">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-muted/30 px-5 py-20 sm:px-8 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading
                        eyebrow="HOW IT WORKS"
                        title="Get your clinic started in 3 steps"
                        description="A straightforward setup that helps you get ready to manage your first queue."
                    />

                    <div className="relative mt-14 grid gap-8 md:grid-cols-3">
                        {[
                            {
                                step: "01",
                                icon: Building2,
                                title: "Set up your clinic",
                                description:
                                    "Create your account and add your clinic details and working hours.",
                            },
                            {
                                step: "02",
                                icon: Users,
                                title: "Bring your team in",
                                description:
                                    "Invite your doctors and receptionists and organize their access.",
                            },
                            {
                                step: "03",
                                icon: QrCode,
                                title: "Start managing queues",
                                description:
                                    "Create your queue and let patients join and track their turn.",
                            },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.step}
                                    className="relative rounded-2xl border border-border bg-card p-7"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold text-primary">
                                            STEP {item.step}
                                        </span>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                    </div>

                                    <h3 className="mt-7 text-xl font-bold">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}

/* --------------------------------------------- */
/* SMALL REUSABLE COMPONENTS */
/* --------------------------------------------- */

function SectionHeading({ eyebrow, title, description }) {
    return (
        <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold tracking-widest text-primary">
                {eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
                {description}
            </p>
        </div>
    );
}

function Metric({ icon: Icon, label, value, color, bg }) {
    return (
        <div className="rounded-xl border border-border p-3">
            <div className={`mb-3 flex h-8 w-8 items-center justify-center rounded-lg ${bg} ${color}`}>
                <Icon className="h-4 w-4" />
            </div>
            <p className="text-xl font-bold">{value}</p>
            <p className="mt-1 text-xs text-muted-foreground">
                {label}
            </p>
        </div>
    );
}

function FeaturePreview({ type }) {
    if (type === 0) {
        return (
            <div className="rounded-2xl border border-border bg-background p-4 sm:p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs text-muted-foreground">
                            QUEUE OVERVIEW
                        </p>
                        <h4 className="mt-1 font-bold">General Medicine</h4>
                    </div>
                    <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                        Active
                    </span>
                </div>

                <div className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-4">
                    <p className="text-xs text-muted-foreground">
                        NOW SERVING
                    </p>
                    <div className="mt-1 flex items-center justify-between">
                        <span className="text-3xl font-bold text-primary">
                            A102
                        </span>
                        <span className="text-xs font-medium text-success">
                            In consultation
                        </span>
                    </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                    <h5 className="font-semibold">Waiting list</h5>
                    <span className="text-xs text-muted-foreground">
                        4 patients
                    </span>
                </div>

                <div className="mt-3 space-y-2">
                    {[
                        ["A103", "Rahul Mehta", "Waiting"],
                        ["A104", "Priya Sharma", "Waiting"],
                        ["A105", "Aman Verma", "Waiting"],
                        ["A106", "Neha Singh", "Waiting"],
                    ].map(([token, name, status]) => (
                        <div
                            key={token}
                            className="flex items-center justify-between rounded-lg border border-border bg-card p-3"
                        >
                            <div>
                                <p className="text-sm font-semibold">{token}</p>
                                <p className="text-xs text-muted-foreground">
                                    {name}
                                </p>
                            </div>
                            <span className="text-xs text-muted-foreground">
                                {status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (type === 1) {
        return (
            <div className="rounded-2xl border border-border bg-background p-4 sm:p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs text-muted-foreground">
                            APPOINTMENTS
                        </p>
                        <h4 className="mt-1 font-bold">Today&apos;s schedule</h4>
                    </div>
                    <CalendarDays className="h-5 w-5 text-primary" />
                </div>

                <div className="mt-5 grid grid-cols-7 gap-1.5">
                    {["M", "T", "W", "T", "F", "S", "S"].map(
                        (day, index) => (
                            <div
                                key={`${day}-${index}`}
                                className={`rounded-lg py-2 text-center text-xs ${index === 3
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-muted text-muted-foreground"
                                    }`}
                            >
                                {day}
                                <p className="mt-1 text-sm font-bold">
                                    {21 + index}
                                </p>
                            </div>
                        )
                    )}
                </div>

                <div className="mt-5 space-y-3">
                    {[
                        ["09:00 AM", "Rahul Mehta", "Confirmed"],
                        ["10:30 AM", "Priya Sharma", "Checked in"],
                        ["11:15 AM", "Aman Verma", "Upcoming"],
                        ["12:00 PM", "Neha Singh", "Upcoming"],
                    ].map(([time, name, status]) => (
                        <div
                            key={time}
                            className="flex items-center gap-3 rounded-xl border border-border bg-card p-3"
                        >
                            <div className="min-w-20 text-xs font-semibold text-primary">
                                {time}
                            </div>
                            <div className="h-8 w-px bg-border" />
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-semibold">
                                    {name}
                                </p>
                                <p className="mt-0.5 text-xs text-muted-foreground">
                                    {status}
                                </p>
                            </div>
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-2xl border border-border bg-background p-5 sm:p-7">
            <div className="mx-auto max-w-sm rounded-2xl border border-border bg-card p-5 shadow-xl">
                <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <Clock3 className="h-6 w-6" />
                    </div>
                    <h4 className="mt-4 text-lg font-bold">City Care Clinic</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                        Your live queue status
                    </p>
                </div>

                <div className="mt-6 rounded-xl bg-primary/5 p-5 text-center">
                    <p className="text-xs font-semibold tracking-wider text-muted-foreground">
                        YOUR TOKEN
                    </p>
                    <p className="mt-2 text-4xl font-bold text-primary">
                        A108
                    </p>
                    <span className="mt-2 inline-flex rounded-full bg-warning/10 px-3 py-1 text-xs font-medium text-warning">
                        Waiting
                    </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-border p-3 text-center">
                        <p className="text-2xl font-bold">4</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                            People ahead
                        </p>
                    </div>
                    <div className="rounded-xl border border-border p-3 text-center">
                        <p className="text-2xl font-bold">20 min</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                            Estimated wait
                        </p>
                    </div>
                </div>

                <div className="mt-5 rounded-xl bg-muted p-3 text-center">
                    <p className="text-xs text-muted-foreground">
                        We&apos;ll keep you updated about your turn.
                    </p>
                </div>
            </div>
        </div>
    );
}