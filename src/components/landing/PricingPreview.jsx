import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "₹999",
    description: "For small clinics getting started.",
    features: [
      "Up to 1 clinic",
      "Basic queue management",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "₹2,499",
    description: "For growing healthcare teams.",
    popular: true,
    features: [
      "Up to 3 clinics",
      "Advanced features",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For larger healthcare organizations.",
    features: [
      "Unlimited clinics",
      "All features",
      "Dedicated support",
    ],
  },
];

export default function PricingPreview() {
  return (
    <section id="pricing" className="bg-background border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <div className="text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
            Pricing
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple & Flexible Pricing
          </h2>

          <p className="mt-4 text-muted-foreground">
            Choose a plan that fits your clinic&apos;s needs.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-7 ${
                plan.popular
                  ? "border-primary bg-primary/5 shadow-xl shadow-primary/10"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-bold text-foreground">
                {plan.name}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-6">
                <span className="text-4xl font-extrabold text-foreground">
                  {plan.price}
                </span>

                {plan.price !== "Custom" && (
                  <span className="text-sm text-muted-foreground">
                    /month
                  </span>
                )}
              </div>

              <div className="my-7 h-px bg-border" />

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <Check size={16} className="text-success" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/register"
                className={`mt-8 block rounded-xl px-5 py-3 text-center text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border bg-background text-foreground hover:bg-muted"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}