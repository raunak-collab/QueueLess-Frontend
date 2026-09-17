import {
  Activity,
  BarChart3,
  CalendarDays,
  Clock3,
  LockKeyhole,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Smart Queue Management",
    description:
      "Create and manage multiple queues in real-time with simple controls.",
  },
  {
    icon: CalendarDays,
    title: "Online Appointments",
    description:
      "Let patients book appointments without calling your reception.",
  },
  {
    icon: Users,
    title: "Patient Management",
    description:
      "Keep patient records and visit history organized in one place.",
  },
  {
    icon: Clock3,
    title: "Real-time Updates",
    description:
      "Patients always know their queue position and estimated waiting time.",
  },
  {
    icon: LockKeyhole,
    title: "Secure & Reliable",
    description:
      "Keep your clinic and patient information protected with modern security.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description:
      "Understand queue performance and improve your clinic operations.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-background border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
            Powerful Features
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need in One Place
          </h2>

          <p className="mt-4 text-muted-foreground">
            From queue management to patient records, QueueLess helps
            healthcare teams run their clinics more efficiently.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                id="features"
                className="group rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg shadow-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}