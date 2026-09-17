// the process of guiding a new user, customer, or
//  employee through an initial setup and introduction
//  so they can successfully use a website, app, or platform

"use client";

import Link from "next/link";
import {
    ArrowRight,
    Building2,
    CheckCircle2,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
    Stethoscope,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CreateClinicPage() {

    const router = useRouter()

    const handleCreateClinic = (e) => {
      e.preventDefault()
      router.push('/dashboard')
    }
    

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
                            <Image src='/logo.png' width={33} height={30} alt="QueueLess" />
                        </span>

                        <span className="text-2xl font-bold tracking-tight text-white">
                            QueueLess
                        </span>
                    </Link>

                    {/* Main content */}

                    <div className="max-w-xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                            <CheckCircle2 className="h-4 w-4" />

                            One last step
                        </div>

                        <h1 className="text-3xl font-bold leading-tight text-white xl:text-4xl">
                            Set up your clinic.
                            <br />

                            <span className="text-white/80">
                                Start managing smarter.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-lg text-base leading-7 text-white/75 xl:text-lg">
                            Add your clinic details to create your
                            workspace and start managing appointments,
                            queues and your team.
                        </p>

                        {/* Benefits */}

                        <div className="mt-10 space-y-5">
                            <Feature
                                icon={Building2}
                                title="Create your clinic workspace"
                                description="Set up a dedicated workspace for your clinic and team."
                            />

                            <Feature
                                icon={Stethoscope}
                                title="Manage your entire team"
                                description="Invite doctors and receptionists after setting up your clinic."
                            />

                            <Feature
                                icon={ShieldCheck}
                                title="Your data stays protected"
                                description="Your clinic and patient information is kept secure."
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
            {/* RIGHT SIDE - CREATE CLINIC FORM */}
            {/* ================================================= */}

            <section className="flex min-h-screen items-center justify-center overflow-y-auto bg-background px-5 py-10 sm:px-8">
                <div className="w-full max-w-lg">
                    {/* Mobile logo */}

                    <div className="mb-8 flex lg:hidden">
                        <Link
                            href="/"
                            className="flex items-center gap-3"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary shadow-lg">
                                <Image src='/logo.png' width={33} height={30} alt="QueueLess" />
                            </span>

                            <span className="text-xl font-bold">
                                QueueLess
                            </span>
                        </Link>
                    </div>

                    {/* ================================================= */}
                    {/* PROGRESS */}
                    {/* ================================================= */}

                    <div className="mb-8">
                        <div className="flex items-center justify-between text-xs">
                            <span className="font-medium text-primary">
                                Step 2 of 2
                            </span>

                            <span className="text-muted-foreground">
                                Clinic setup
                            </span>
                        </div>

                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                            <div className="h-full w-full rounded-full bg-primary" />
                        </div>
                    </div>

                    {/* ================================================= */}
                    {/* HEADING */}
                    {/* ================================================= */}

                    <div className="mb-7">
                        <p className="mb-3 text-sm font-medium text-primary">
                            Clinic setup
                        </p>

                        <h2 className="text-3xl text-foreground font-bold tracking-tight sm:text-4xl">
                            Create your clinic
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            Add a few details about your clinic to
                            complete your workspace setup.
                        </p>
                    </div>

                    {/* ================================================= */}
                    {/* FORM */}
                    {/* ================================================= */}

                    <form className="space-y-5">
                        {/* ================================================= */}
                        {/* CLINIC NAME */}
                        {/* ================================================= */}

                        <div>
                            <label
                                htmlFor="clinicName"
                                className="mb-2 block text-foreground text-sm font-medium"
                            >
                                Clinic name
                            </label>

                            <div className="relative">
                                <Building2 className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                                <input
                                    id="clinicName"
                                    type="text"
                                    placeholder="e.g. City Care Clinic"
                                    autoComplete="organization"
                                    className="h-12 w-full rounded-xl border border-input bg-card pl-11 pr-4 text-sm text-card-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                        </div>

                        {/* ================================================= */}
                        {/* CLINIC PHONE */}
                        {/* ================================================= */}

                        <div>
                            <label
                                htmlFor="clinicPhone"
                                className="mb-2 block text-foreground text-sm font-medium"
                            >
                                Clinic phone
                            </label>

                            <div className="relative">
                                <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                                <input
                                    id="clinicPhone"
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    autoComplete="tel"
                                    className="h-12 w-full rounded-xl border border-input bg-card pl-11 pr-4 text-sm text-card-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                        </div>

                        {/* ================================================= */}
                        {/* CLINIC EMAIL */}
                        {/* ================================================= */}

                        <div>
                            <label
                                htmlFor="clinicEmail"
                                className="mb-2 text-foreground block text-sm font-medium"
                            >
                                Clinic email
                                <span className="ml-1 text-xs font-normal text-muted-foreground">
                                    (optional)
                                </span>
                            </label>

                            <div className="relative">
                                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                                <input
                                    id="clinicEmail"
                                    type="email"
                                    placeholder="clinic@example.com"
                                    autoComplete="email"
                                    className="h-12 w-full rounded-xl border border-input bg-card pl-11 pr-4 text-sm text-card-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                        </div>

                        {/* ================================================= */}
                        {/* SPECIALIZATION */}
                        {/* ================================================= */}

                        <div>
                            <label
                                htmlFor="specialization"
                                className="mb-2 text-foreground block text-sm font-medium"
                            >
                                Clinic type
                            </label>

                            <div className="relative">
                                <Stethoscope className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                                <select
                                    id="specialization"
                                    defaultValue=""
                                    className="h-12 w-full appearance-none rounded-xl border border-input bg-card pl-11 pr-4 text-sm text-card-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                                >
                                    <option value="" disabled>
                                        Select clinic type
                                    </option>

                                    <option value="general">
                                        General Clinic
                                    </option>

                                    <option value="dental">
                                        Dental Clinic
                                    </option>

                                    <option value="dermatology">
                                        Dermatology
                                    </option>

                                    <option value="pediatric">
                                        Pediatric Clinic
                                    </option>

                                    <option value="orthopedic">
                                        Orthopedic Clinic
                                    </option>

                                    <option value="multi-specialty">
                                        Multi-specialty Clinic
                                    </option>

                                    <option value="other">
                                        Other
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* ================================================= */}
                        {/* ADDRESS */}
                        {/* ================================================= */}

                        <div>
                            <label
                                htmlFor="address"
                                className="mb-2 text-foreground block text-sm font-medium"
                            >
                                Clinic address
                            </label>

                            <div className="relative">
                                <MapPin className="pointer-events-none absolute left-3.5 top-4 h-5 w-5 text-muted-foreground" />

                                <textarea
                                    id="address"
                                    rows={3}
                                    placeholder="Enter your clinic address"
                                    className="w-full resize-none rounded-xl border border-input bg-card py-3.5 pl-11 pr-4 text-sm text-card-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                        </div>

                        {/* ================================================= */}
                        {/* CITY + PINCODE */}
                        {/* ================================================= */}

                        <div className="grid grid-cols-1 text-foreground gap-5 sm:grid-cols-2">
                            {/* City */}

                            <div>
                                <label
                                    htmlFor="city"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    City
                                </label>

                                <input
                                    id="city"
                                    type="text"
                                    placeholder="e.g. Delhi"
                                    autoComplete="address-level2"
                                    className="h-12 w-full rounded-xl border border-input bg-card px-4 text-sm text-card-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                                />
                            </div>

                            {/* Pincode */}

                            <div>
                                <label
                                    htmlFor="pincode"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Pincode
                                </label>

                                <input
                                    id="pincode"
                                    type="text"
                                    inputMode="numeric"
                                    placeholder="e.g. 110001"
                                    autoComplete="postal-code"
                                    className="h-12 w-full rounded-xl border border-input bg-card px-4 text-sm text-card-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                        </div>

                        {/* ================================================= */}
                        {/* INFO CARD */}
                        {/* ================================================= */}

                        <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                            <div>
                                <p className="text-sm text-foreground font-medium">
                                    Your clinic workspace is private
                                </p>

                                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                                    Only you and the team members you invite
                                    will have access to this clinic.
                                </p>
                            </div>
                        </div>

                        {/* ================================================= */}
                        {/* CREATE CLINIC BUTTON */}
                        {/* ================================================= */}

                        <button
                        onClick={handleCreateClinic}
                            type="submit"
                            className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/30"
                        >
                            Create clinic

                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </form>

                    {/* Security */}

                    <div className="mt-7 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <ShieldCheck className="h-4 w-4" />

                        <span>
                            Your clinic information is securely protected
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
