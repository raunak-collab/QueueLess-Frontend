"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
    Check,
    CheckCircle2,
    Clock3,
    Eye,
    EyeOff,
    LockKeyhole,
    Mail,
    ShieldCheck,
    Users,
    User,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [termsAccepted, setTermsAccepted] = useState(false);

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        router.push("/onboarding/createclinic");

        // TODO:
        // Yahan tum apna registration/API logic likhoge.

        console.log({
            fullName,
            email,
            password,
            confirmPassword,
            termsAccepted,
        });
    };

    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* ================================================= */}
            {/* LEFT SIDE - BRANDING */}
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
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary shadow-lg">
                            <Image
                                src="/logo.png"
                                width={33}
                                height={30}
                                alt="QueueLess"
                            />
                        </span>

                        <span className="text-2xl font-bold tracking-tight text-white">
                            QueueLess
                        </span>
                    </Link>

                    {/* Main content */}

                    <div className="max-w-xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                            <CheckCircle2 className="h-4 w-4" />

                            Start managing smarter
                        </div>

                        <h1 className="text-3xl font-bold leading-tight text-white xl:text-4xl">
                            Your clinic.
                            <br />

                            <span className="text-white/80">
                                Your queue. Simplified.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-lg text-base leading-7 text-white/75 xl:text-lg">
                            Create your QueueLess workspace and bring
                            your clinic&apos;s appointments, queues and staff
                            together in one place.
                        </p>

                        {/* Benefits */}

                        <div className="mt-10 space-y-5">
                            <Feature
                                icon={Clock3}
                                title="Manage queues in real time"
                                description="Keep track of waiting patients and control your queue effortlessly."
                            />

                            <Feature
                                icon={Users}
                                title="Organize your clinic team"
                                description="Invite doctors and receptionists and manage their access."
                            />

                            <Feature
                                icon={ShieldCheck}
                                title="Built with privacy in mind"
                                description="Keep your clinic and patient information protected."
                            />
                        </div>
                    </div>

                    {/* Footer */}

                    <p className="text-sm text-white/60">
                        © {new Date().getFullYear()} QueueLess. All rights reserved.
                    </p>
                </div>
            </section>

            {/* ================================================= */}
            {/* RIGHT SIDE - REGISTER FORM */}
            {/* ================================================= */}

            <section className="flex min-h-screen items-center justify-center overflow-y-auto bg-background px-5 py-10 sm:px-8">
                <div className="w-full max-w-lg">
                    {/* Mobile logo */}

                    <div className="mb-8 flex lg:hidden">
                        <Link
                            href="/"
                            className="flex items-center gap-3"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary-foreground">
                                <Image
                                    src="/logo.png"
                                    width={33}
                                    height={30}
                                    alt="QueueLess"
                                />
                            </span>

                            <span className="text-xl font-bold">
                                QueueLess
                            </span>
                        </Link>
                    </div>

                    {/* ================================================= */}
                    {/* PROGRESS - STEP 1 */}
                    {/* ================================================= */}

                    <div className="mb-8">
                        <div className="flex items-center justify-between text-xs">
                            <span className="font-medium text-primary">
                                Step 1 of 2
                            </span>

                            <span className="text-muted-foreground">
                                Create account
                            </span>
                        </div>

                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                            <div className="h-full w-1/2 rounded-full bg-primary" />
                        </div>
                    </div>

                    {/* ================================================= */}
                    {/* HEADING */}
                    {/* ================================================= */}

                    <div className="mb-7">
                        <p className="mb-3 text-sm font-medium text-primary">
                            Get started
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Create your account
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            Create your account first. You&apos;ll set up
                            your clinic in the next step.
                        </p>
                    </div>

                    {/* ================================================= */}
                    {/* FORM */}
                    {/* ================================================= */}

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        {/* ================================================= */}
                        {/* FULL NAME */}
                        {/* ================================================= */}

                        <div>
                            <label
                                htmlFor="fullName"
                                className="mb-2 block text-sm font-medium"
                            >
                                Full name
                            </label>

                            <div className="relative">
                                <User className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                                <input
                                    id="fullName"
                                    type="text"
                                    value={fullName}
                                    onChange={(e) =>
                                        setFullName(e.target.value)
                                    }
                                    placeholder="Enter your full name"
                                    autoComplete="name"
                                    className="h-12 w-full rounded-xl border border-input bg-card pl-11 pr-4 text-sm text-card-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                        </div>

                        {/* ================================================= */}
                        {/* EMAIL */}
                        {/* ================================================= */}

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
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                    className="h-12 w-full rounded-xl border border-input bg-card pl-11 pr-4 text-sm text-card-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                        </div>

                        {/* ================================================= */}
                        {/* PASSWORD */}
                        {/* ================================================= */}

                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-medium"
                            >
                                Password
                            </label>

                            <div className="relative">
                                <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                                <input
                                    id="password"
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Create a strong password"
                                    autoComplete="new-password"
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

                            {/* Password hint */}

                            <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                                <Check className="h-3.5 w-3.5" />

                                Use at least 8 characters.
                            </div>
                        </div>

                        {/* ================================================= */}
                        {/* CONFIRM PASSWORD */}
                        {/* ================================================= */}

                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="mb-2 block text-sm font-medium"
                            >
                                Confirm password
                            </label>

                            <div className="relative">
                                <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                                <input
                                    id="confirmPassword"
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    placeholder="Re-enter your password"
                                    autoComplete="new-password"
                                    className="h-12 w-full rounded-xl border border-input bg-card pl-11 pr-12 text-sm text-card-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            (prev) => !prev
                                        )
                                    }
                                    aria-label={
                                        showConfirmPassword
                                            ? "Hide password"
                                            : "Show password"
                                    }
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* ================================================= */}
                        {/* TERMS */}
                        {/* ================================================= */}

                        <div className="rounded-xl border border-border bg-card p-4">
                            <label className="flex cursor-pointer items-start gap-3">
                                <input
                                    type="checkbox"
                                    checked={termsAccepted}
                                    onChange={(e) =>
                                        setTermsAccepted(e.target.checked)
                                    }
                                    className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-border accent-primary"
                                />

                                <span className="text-xs leading-5 text-muted-foreground">
                                    I agree to the{" "}
                                    <Link
                                        href="/terms"
                                        className="font-medium text-primary hover:underline"
                                    >
                                        Terms of Service
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        href="/privacy"
                                        className="font-medium text-primary hover:underline"
                                    >
                                        Privacy Policy
                                    </Link>
                                    .
                                </span>
                            </label>
                        </div>

                        {/* ================================================= */}
                        {/* ERROR PLACEHOLDER */}
                        {/* ================================================= */}

                        {/*
                            Tum baad mein apna error state yahan show kar sakte ho.

                            Example:

                            {error && (
                                <div>
                                    {error}
                                </div>
                            )}
                        */}

                        {/* ================================================= */}
                        {/* CREATE ACCOUNT BUTTON */}
                        {/* ================================================= */}

                        <button
                            type="submit"
                            className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/30"
                        >
                            Create account

                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </form>

                    {/* ================================================= */}
                    {/* LOGIN LINK */}
                    {/* ================================================= */}

                    <p className="mt-7 text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-semibold text-primary hover:underline"
                        >
                            Sign in
                        </Link>
                    </p>

                    {/* Security */}

                    <div className="mt-7 flex items-center justify-center gap-2 text-xs text-muted-foreground">
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

function Feature({
    icon: Icon,
    title,
    description,
}) {
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

