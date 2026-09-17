import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-background px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-6 py-14 sm:px-12 lg:px-16">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-black/10 blur-2xl" />

        <div className="relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your clinic experience?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
              Join healthcare providers who are making queues faster,
              simpler, and more patient-friendly.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-primary transition hover:bg-white/90"
            >
              Get Started Free
              <ArrowRight size={17} />
            </Link>

            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
              <Play size={16} />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}