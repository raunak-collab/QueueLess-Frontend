import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CalendarDays,
  Smartphone,
} from "lucide-react";

const highlights = [
  {
    icon: Activity,
    number: "01",
    title: "Run your queue",
    description:
      "See who's waiting, track active tokens and move patients forward without confusion.",
    detail: "A clearer view of every patient's turn.",
  },
  {
    icon: CalendarDays,
    number: "02",
    title: "Stay on schedule",
    description:
      "Keep appointments and daily visits organized so your team knows what's coming next.",
    detail: "Your clinic's day, organized in one place.",
  },
  {
    icon: Smartphone,
    number: "03",
    title: "Keep patients informed",
    description:
      "Let patients check their token, queue position and estimated waiting time.",
    detail: "Less uncertainty while patients wait.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="border-t border-border bg-background px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
              Built for your clinic
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Less waiting.
              <br />
              <span className="text-primary">
                Smoother clinic days.
              </span>
            </h2>
          </div>

          <div className="md:pb-1">
            <p className="max-w-xl leading-7 text-muted-foreground">
              The essentials to keep your clinic moving, your team
              organized and your patients informed — all in one place.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {highlights.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.number}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-sm font-semibold text-muted-foreground/60">
                    {feature.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold tracking-tight text-foreground">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {feature.description}
                </p>

                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-xs font-medium text-primary">
                    {feature.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-9 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-muted/30 p-5 sm:flex-row sm:px-7">
          <div>
            <p className="font-semibold text-foreground">
              Want to see everything QueueLess can do?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Explore the complete set of tools for your clinic.
            </p>
          </div>

          <Link
            href="/features"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Explore all features
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}