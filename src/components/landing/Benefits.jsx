import {
  Clock,
  HeartHandshake,
  TrendingUp,
  Zap,
} from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    icon: Clock,
    title: "Reduced Waiting Time",
    description:
      "Patients spend less time sitting in crowded waiting rooms.",
  },
  {
    icon: Zap,
    title: "Higher Efficiency",
    description:
      "Give receptionists and doctors a smoother daily workflow.",
  },
  {
    icon: HeartHandshake,
    title: "Better Patient Experience",
    description:
      "Keep patients informed instead of leaving them guessing.",
  },
  {
    icon: TrendingUp,
    title: "Increased Revenue",
    description:
      "Serve more patients efficiently and make better use of resources.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-background border-t border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">

        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
            <Image
              width={600}
              height={600}
              src="/images/landing/patient-qr.png"
              alt="QueueLess patient ticket"
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
            Why Choose QueueLess
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Better Experience for
            <span className="block text-primary">
              Patients & Staff
            </span>
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            Stop wasting time on manual queues and constant patient
            interruptions. QueueLess keeps everyone informed.
          </p>

          <div className="mt-9 grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div key={benefit.title}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={19} />
                  </div>

                  <h3 className="mt-3 font-bold text-foreground">
                    {benefit.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}