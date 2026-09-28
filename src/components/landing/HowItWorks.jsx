import {
  Building2,
  QrCode,
  UserRoundPlus,
  Stethoscope,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Create Your Queue",
    description:
      "Clinic staff creates a queue for a department, doctor, or service.",
  },
  {
    number: "02",
    icon: QrCode,
    title: "Patient Scans QR",
    description:
      "Patients scan the clinic's QR code from their phone.",
  },
  {
    number: "03",
    icon: UserRoundPlus,
    title: "Patient Joins",
    description:
      "They enter basic details and instantly receive a digital token.",
  },
  {
    number: "04",
    icon: Stethoscope,
    title: "Clinic Serves",
    description:
      "Staff calls the next patient and the queue updates in real-time.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-border bg-background px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
              Simple Process
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              From scan to care.
              <br />
              <span className="text-primary">
                It&apos;s that simple.
              </span>
            </h2>
          </div>

          <div className="md:pb-1">
            <p className="max-w-xl leading-7 text-muted-foreground">
              QueueLess makes the patient journey easier, from
              joining the queue to being called in for consultation.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-sm font-semibold text-muted-foreground/60">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold tracking-tight text-foreground">
                  {step.title}
                </h3>

                <p className="mt-3 min-h-20 text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>

                <div className="mt-6 border-t border-border pt-4">
                  <span className="text-xs font-medium text-primary">
                    STEP {step.number}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-9 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-muted/30 p-5 sm:flex-row sm:px-7">
          <div>
            <p className="font-semibold text-foreground">
              A smoother experience for everyone.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Less confusion at reception, more clarity for patients.
            </p>
          </div>

          <Link
            href="/register"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Simple from the start
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}