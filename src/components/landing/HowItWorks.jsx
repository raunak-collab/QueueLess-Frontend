import {
  Building2,
  QrCode,
  UserRoundPlus,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";

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
      className="overflow-hidden bg-background border-t border-border py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">

        <div>
          <span className="inline-flex rounded-full bg-success/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-success">
            How It Works
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Getting Started is Simple
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
            QueueLess removes the complexity from clinic queue management.
            Patients and staff can get started in just a few simple steps.
          </p>

          <div className="mt-10 space-y-7">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="flex gap-4">
                  <div className="relative flex shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card text-primary shadow-sm ring-1 ring-border">
                      <Icon size={21} />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-primary">
                        {step.number}
                      </span>

                      <h3 className="font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-xl">
            <Image
            width={600}
            height={300}
              src="/images/landing/how-it-works.png"
              alt="How QueueLess works"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}