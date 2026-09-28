import Link from "next/link";
import {
  Check,
  X,
  ArrowRight,
  Sparkles,
  Building2,
  Users,
  ShieldCheck,
  Clock3,
  CalendarDays,
  Zap,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

const plans = [
  {
    name: "Basic",
    description: "For small clinics getting started with digital queues.",
    price: "999",
    period: "/month",
    note: "Billed monthly",
    popular: false,
    button: "Get Started",
    features: [
      "1 clinic location",
      "Up to 2 doctors",
      "1 receptionist account",
      "Queue management",
      "Patient QR code",
      "Basic appointment management",
      "Basic patient records",
      "Email support",
    ],
  },
  {
    name: "Pro",
    description: "For growing clinics that need more control and insights.",
    price: "2,499",
    period: "/month",
    note: "Billed monthly",
    popular: true,
    button: "Start with Pro",
    features: [
      "1 clinic location",
      "Up to 10 doctors",
      "Up to 5 receptionist accounts",
      "Everything in Basic",
      "Advanced queue management",
      "Appointment management",
      "Patient history",
      "Analytics and reports",
      "Team management",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    description: "For larger practices with multiple locations and teams.",
    price: "Custom",
    period: "",
    note: "Tailored to your needs",
    popular: false,
    button: "Contact Sales",
    features: [
      "Multiple clinic locations",
      "Custom team limits",
      "Everything in Pro",
      "Centralized clinic management",
      "Advanced reporting",
      "Custom onboarding",
      "Dedicated support",
      "Custom integrations",
      "Flexible configuration",
    ],
  },
];

const comparison = [
  {
    category: "Clinic",
    rows: [
      ["Clinic locations", "1", "1", "Multiple"],
      ["Doctors", "Up to 2", "Up to 10", "Custom"],
      ["Receptionists", "1", "Up to 5", "Custom"],
    ],
  },
  {
    category: "Queue & Appointments",
    rows: [
      ["Queue management", true, true, true],
      ["Patient QR joining", true, true, true],
      ["Appointment management", "Basic", "Advanced", "Advanced"],
      ["Live queue tracking", true, true, true],
    ],
  },
  {
    category: "Patients & Insights",
    rows: [
      ["Patient records", "Basic", "Advanced", "Advanced"],
      ["Patient history", false, true, true],
      ["Analytics & reports", false, true, true],
      ["Export reports", false, true, true],
    ],
  },
  {
    category: "Support",
    rows: [
      ["Email support", true, true, true],
      ["Priority support", false, true, true],
      ["Dedicated onboarding", false, false, true],
    ],
  },
];

const faqs = [
  {
    question: "Can I change my plan later?",
    answer:
      "Yes. You can choose a plan that fits your clinic's needs and change it as your requirements grow. Plan changes and billing adjustments will depend on the final billing setup.",
  },
  {
    question: "Do patients need to create an account?",
    answer:
      "No. Patients can join a clinic queue through its QR code and provide the required details without creating a QueueLess account.",
  },
  {
    question: "Can I add more doctors to my clinic?",
    answer:
      "Doctor limits depend on the plan. You can move to a plan with a higher team limit or contact the team about custom requirements.",
  },
  {
    question: "Does QueueLess support multiple clinic locations?",
    answer:
      "The proposed Enterprise plan includes multiple locations. The exact multi-location features will depend on the final product implementation.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Trial availability has not been finalized yet. You can update this section once your actual trial and billing policy is decided.",
  },
  {
    question: "How do I get help with setup?",
    answer:
      "The planned support options include email support, priority support and custom onboarding depending on the plan.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">

      {/* HERO */}
      <section className="relative px-5 pb-14 pt-16 sm:px-8 sm:pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Simple, transparent pricing
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The right plan for{" "}
            <span className="text-primary">your clinic</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Start with the essentials and choose the tools
            your clinic needs as it grows. Clear plans for
            smoother daily operations.
          </p>

          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
            <CheckCircleIcon />
            No complicated setup
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border bg-card p-6 sm:p-8 ${
                plan.popular
                  ? "border-primary shadow-xl shadow-primary/10 lg:scale-[1.03]"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground">
                  MOST POPULAR
                </div>
              )}

              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    plan.popular
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {plan.name === "Basic" ? (
                    <Building2 className="h-5 w-5" />
                  ) : plan.name === "Pro" ? (
                    <Zap className="h-5 w-5" />
                  ) : (
                    <ShieldCheck className="h-5 w-5" />
                  )}
                </div>

                <div>
                  <h2 className="text-xl font-bold">{plan.name}</h2>
                  <p className="text-xs text-muted-foreground">
                    {plan.name === "Basic"
                      ? "Essential tools"
                      : plan.name === "Pro"
                      ? "More flexibility"
                      : "Custom solution"}
                  </p>
                </div>
              </div>

              <p className="mt-5 min-h-12 text-sm leading-6 text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-6">
                <div className="flex items-baseline gap-1">
                  {plan.price !== "Custom" && (
                    <span className="text-xl font-semibold">₹</span>
                  )}
                  <span className="text-4xl font-bold tracking-tight sm:text-5xl">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {plan.note}
                </p>
              </div>

              <Link
                href={
                  plan.name === "Enterprise"
                    ? "/about"
                    : "/register"
                }
                className={`mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border bg-background hover:bg-muted"
                }`}
              >
                {plan.button}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="my-7 h-px bg-border" />

              <p className="text-sm font-semibold">
                What&apos;s included
              </p>

              <ul className="mt-5 flex-1 space-y-3.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-muted-foreground">
          Pricing and plan limits shown here are sample
          frontend content. Final prices, taxes, billing
          terms and included features should be confirmed
          before launch.
        </p>
      </section>

      {/* VALUE STRIP */}
      <section className="border-y border-border bg-muted/30 px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
          {[
            {
              icon: Clock3,
              title: "Queue clarity",
              desc: "Help staff and patients understand the current queue.",
            },
            {
              icon: CalendarDays,
              title: "Organized schedules",
              desc: "Keep appointment information easier to manage.",
            },
            {
              icon: Users,
              title: "Team coordination",
              desc: "Bring clinic roles into one shared workspace.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold tracking-widest text-primary">
              PLAN COMPARISON
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Compare plan features
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Review the differences and see which set of
              tools matches your clinic&apos;s needs.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-muted/60">
                  <th className="w-[40%] px-5 py-5 font-semibold">
                    Features
                  </th>
                  <th className="px-5 py-5 text-center font-semibold">
                    Basic
                  </th>
                  <th className="bg-primary/5 px-5 py-5 text-center font-semibold text-primary">
                    Pro
                  </th>
                  <th className="px-5 py-5 text-center font-semibold">
                    Enterprise
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparison.map((group) => (
                  <>
                    <tr key={group.category} className="bg-muted/30">
                      <td
                        colSpan={4}
                        className="px-5 py-3 font-bold"
                      >
                        {group.category}
                      </td>
                    </tr>

                    {group.rows.map((row) => (
                      <tr
                        key={row[0]}
                        className="border-t border-border"
                      >
                        <td className="px-5 py-4 text-muted-foreground">
                          {row[0]}
                        </td>
                        {row.slice(1).map((value, index) => (
                          <td
                            key={index}
                            className={`px-5 py-4 text-center ${
                              index === 1 ? "bg-primary/5" : ""
                            }`}
                          >
                            <CompareValue value={value} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold tracking-widest text-primary">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Questions about pricing?
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Here are some common questions about plans,
              clinic setup and how QueueLess works.
            </p>

            <div className="mt-7 rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">
                    Need more details?
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Get in touch with our team.
                  </p>
                </div>
              </div>

              <Link
                href="/about"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-border bg-card p-5 sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* --------------------------------------------- */
/* SMALL COMPONENTS */
/* --------------------------------------------- */

function CompareValue({ value }) {
  if (value === true) {
    return (
      <Check className="mx-auto h-4 w-4 text-success" />
    );
  }

  if (value === false) {
    return (
      <X className="mx-auto h-4 w-4 text-muted-foreground/50" />
    );
  }

  return (
    <span className="font-medium">{value}</span>
  );
}

function CheckCircleIcon() {
  return <Check className="h-4 w-4 text-success" />;
}