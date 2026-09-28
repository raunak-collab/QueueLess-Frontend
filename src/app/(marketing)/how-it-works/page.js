import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  Check,
  CheckCircle2,
  Clock3,
  Building2,
  Users,
  Settings2,
  QrCode,
  Smartphone,
  Stethoscope,
  UserRound,
  ListOrdered,
  ShieldCheck,
  MousePointerClick,
} from "lucide-react";

const steps = [
  {
    number: "01",
    label: "FOR CLINIC OWNERS",
    title: "Create your clinic workspace",
    description:
      "Start by creating your QueueLess account and setting up your clinic. Add the basic information your team and patients need.",
    points: [
      "Create your owner account",
      "Add your clinic name and contact details",
      "Set your clinic's working hours",
      "Configure your clinic preferences",
    ],
    icon: Building2,
    type: "clinic",
  },
  {
    number: "02",
    label: "FOR CLINIC OWNERS",
    title: "Invite your team",
    description:
      "Bring your doctors and receptionists into one workspace. Give each person the access they need for their responsibilities.",
    points: [
      "Invite doctors and receptionists",
      "Assign the right role to each member",
      "Organize your clinic team",
      "Manage team access from one place",
    ],
    icon: Users,
    type: "team",
  },
  {
    number: "03",
    label: "FOR CLINIC STAFF",
    title: "Set up your queue",
    description:
      "Create a queue for your clinic and prepare it for the day's patients. Your reception team can manage patient flow from the dashboard.",
    points: [
      "Create a queue for a department or doctor",
      "Set queue availability",
      "Generate a patient joining QR code",
      "Start accepting patients",
    ],
    icon: ListOrdered,
    type: "queue",
  },
  {
    number: "04",
    label: "FOR PATIENTS",
    title: "Patients join the queue",
    description:
      "Patients can scan the clinic's QR code and enter their details to join the queue without needing to create a QueueLess account.",
    points: [
      "Scan the clinic's QR code",
      "Enter name and phone number",
      "Receive a token number",
      "View their queue position",
    ],
    icon: QrCode,
    type: "patient",
  },
  {
    number: "05",
    label: "FOR CLINIC STAFF",
    title: "Manage patients in real time",
    description:
      "Receptionists and doctors can follow the queue, call patients and update their status as they move through the clinic.",
    points: [
      "See who is waiting",
      "Call the next patient",
      "Skip or recall a token when needed",
      "Complete a visit when finished",
    ],
    icon: Stethoscope,
    type: "manage",
  },
];

const benefits = [
  {
    icon: Clock3,
    title: "Less uncertainty",
    description:
      "Patients can check their queue position instead of repeatedly asking how long they need to wait.",
  },
  {
    icon: Users,
    title: "One connected team",
    description:
      "Owners, receptionists and doctors work from the same clinic workspace with role-based access.",
  },
  {
    icon: ActivityIcon,
    title: "Clear daily operations",
    description:
      "See queue activity and appointment information in one organized place.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">

      {/* HERO */}
      <section className="relative px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pb-28">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <MousePointerClick className="h-4 w-4" />
            Simple from day one
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            How QueueLess{" "}
            <span className="text-primary">works</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            From setting up your clinic to helping patients
            track their turn, QueueLess keeps the entire
            process simple and organized.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Set Up Your Clinic
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="#steps"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 text-sm font-semibold transition hover:bg-muted"
            >
              Explore the steps
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* SIMPLE FLOW */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-3 sm:grid-cols-4">
            {[
              {
                icon: Building2,
                title: "Set up clinic",
                subtitle: "Owner",
              },
              {
                icon: Users,
                title: "Invite team",
                subtitle: "Owner",
              },
              {
                icon: ListOrdered,
                title: "Start queue",
                subtitle: "Clinic staff",
              },
              {
                icon: Smartphone,
                title: "Join & track",
                subtitle: "Patient",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="relative">
                  <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold">{item.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {index !== 3 && (
                    <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-primary sm:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section
        id="steps"
        className="border-y border-border bg-muted/30 px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold tracking-widest text-primary">
              THE PROCESS
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Up and running in five steps
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Each person has a clear role, from the clinic
              owner setting up the workspace to patients
              checking their turn.
            </p>
          </div>

          <div className="mt-16 space-y-8 lg:space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const reverse = index % 2 === 1;

              return (
                <div
                  key={step.number}
                  className={`grid items-center gap-8 rounded-3xl border border-border bg-card p-5 sm:p-8 lg:grid-cols-2 lg:gap-16 lg:p-10 ${
                    reverse
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >
                  {/* TEXT */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-bold text-primary">
                        STEP {step.number}
                      </span>
                      <span className="text-xs font-semibold tracking-wider text-muted-foreground">
                        {step.label}
                      </span>
                    </div>

                    <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                      {step.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {step.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
                            <Check className="h-3 w-3" />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* VISUAL */}
                  <StepVisual type={step.type} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold tracking-widest text-primary">
              BUILT FOR EVERYONE
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              One clinic. Different roles.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Everyone gets a workspace suited to what
              they need to do.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Building2,
                title: "Clinic Owner",
                desc: "Oversees the clinic and its operations.",
                items: [
                  "Clinic setup and settings",
                  "Invite and manage staff",
                  "View analytics and reports",
                  "Manage queues and appointments",
                ],
              },
              {
                icon: UserRound,
                title: "Receptionist",
                desc: "Handles patient check-ins and queue flow.",
                items: [
                  "Register walk-in patients",
                  "Manage waiting lists",
                  "Check patients in",
                  "Help with appointments",
                ],
              },
              {
                icon: Stethoscope,
                title: "Doctor",
                desc: "Manages patient flow for consultations.",
                items: [
                  "View assigned queue",
                  "Call the next patient",
                  "Update visit status",
                  "Review relevant patient details",
                ],
              },
            ].map((role) => {
              const Icon = role.icon;

              return (
                <div
                  key={role.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {role.desc}
                  </p>

                  <div className="my-5 h-px bg-border" />

                  <ul className="space-y-3">
                    {role.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-muted/30 px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold tracking-widest text-primary">
              WHY IT MATTERS
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A smoother clinic experience
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              QueueLess helps bring structure to everyday
              clinic operations and makes queue information
              easier to understand.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-border bg-card p-6 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {benefit.description}
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
/* STEP VISUALS */
/* --------------------------------------------- */

function StepVisual({ type }) {
  if (type === "clinic") {
    return (
      <div className="rounded-2xl border border-border bg-background p-5 sm:p-7">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <p className="font-bold">Clinic setup</p>
            <p className="text-xs text-muted-foreground">
              Your workspace details
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <MockField label="Clinic name" value="City Care Clinic" />
          <MockField label="Contact number" value="+91 98765 43210" />
          <MockField label="Working hours" value="09:00 AM – 06:00 PM" />
        </div>

        <div className="mt-5 flex items-center justify-between rounded-xl bg-primary/5 p-3">
          <div className="flex items-center gap-2 text-sm font-medium">
            <CheckCircle2 className="h-4 w-4 text-success" />
            Workspace details
          </div>
          <span className="text-xs font-semibold text-success">
            Ready
          </span>
        </div>
      </div>
    );
  }

  if (type === "team") {
    return (
      <div className="rounded-2xl border border-border bg-background p-5 sm:p-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold">Your team</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Manage clinic members
            </p>
          </div>
          <span className="rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground">
            + Invite
          </span>
        </div>

        <div className="mt-6 space-y-3">
          {[
            ["DS", "Dr. Sharma", "Doctor", "Owner"],
            ["AP", "Anita Patel", "Receptionist", "Invited"],
            ["RK", "Dr. Kapoor", "Doctor", "Active"],
          ].map(([initials, name, role, status]) => (
            <div
              key={name}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">
                  {name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {role}
                </p>
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                  status === "Active"
                    ? "bg-success/10 text-success"
                    : status === "Invited"
                    ? "bg-warning/10 text-warning"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {status}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-primary" />
          Access is based on each member&apos;s role.
        </p>
      </div>
    );
  }

  if (type === "queue") {
    return (
      <div className="rounded-2xl border border-border bg-background p-5 sm:p-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold">Create a queue</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Configure patient flow
            </p>
          </div>
          <Settings2 className="h-5 w-5 text-primary" />
        </div>

        <div className="mt-6 space-y-4">
          <MockField label="Queue name" value="General Medicine" />
          <MockField label="Assigned doctor" value="Dr. Sharma" />
          <MockField label="Daily capacity" value="30 patients" />
        </div>

        <div className="mt-5 rounded-xl border border-dashed border-primary/40 bg-primary/5 p-5 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-card text-primary shadow-sm">
            <QrCode className="h-8 w-8" />
          </div>
          <p className="mt-3 text-sm font-semibold">
            Patient QR code
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Patients can scan to join this queue
          </p>
        </div>
      </div>
    );
  }

  if (type === "patient") {
    return (
      <div className="mx-auto w-full max-w-sm rounded-2xl border border-border bg-background p-5 sm:p-7">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Clock3 className="h-6 w-6" />
          </div>
          <p className="mt-4 text-lg font-bold">
            City Care Clinic
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Join General Medicine queue
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <MockField label="Your name" value="Rahul Mehta" />
          <MockField label="Phone number" value="+91 98765 43210" />
        </div>

        <div className="mt-5 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground">
          Join Queue
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          No account required to join.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-background p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">Live queue</p>
          <p className="mt-1 text-xs text-muted-foreground">
            General Medicine
          </p>
        </div>
        <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
          Active
        </span>
      </div>

      <div className="mt-5 rounded-xl bg-primary/5 p-4">
        <p className="text-xs text-muted-foreground">
          CURRENTLY SERVING
        </p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-3xl font-bold text-primary">
            A102
          </p>
          <span className="text-xs font-semibold text-success">
            In consultation
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm font-semibold">Waiting list</p>
        <p className="text-xs text-muted-foreground">
          3 patients
        </p>
      </div>

      <div className="mt-3 space-y-2">
        {[
          ["A103", "Rahul Mehta"],
          ["A104", "Priya Sharma"],
          ["A105", "Aman Verma"],
        ].map(([token, name]) => (
          <div
            key={token}
            className="flex items-center justify-between rounded-xl border border-border bg-card p-3"
          >
            <div>
              <p className="text-sm font-semibold">{token}</p>
              <p className="text-xs text-muted-foreground">
                {name}
              </p>
            </div>
            <span className="rounded-lg bg-muted px-3 py-1.5 text-xs font-medium">
              Waiting
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-primary px-3 py-3 text-center text-xs font-semibold text-primary-foreground">
          Call Next
        </div>
        <div className="rounded-xl border border-border bg-card px-3 py-3 text-center text-xs font-semibold">
          View Queue
        </div>
      </div>
    </div>
  );
}

function MockField({ label, value }) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium text-muted-foreground">
        {label}
      </p>
      <div className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium">
        {value}
      </div>
    </div>
  );
}

function ActivityIcon(props) {
  return <Clock3 {...props} />;
}