import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Clinic Owner",
    image: "/images/landing/testimonial-1.jpg",
    text: "QueueLess completely changed the way we manage our clinic. Patients are happier and our staff is more efficient.",
  },
  {
    name: "Rahul Verma",
    role: "Patient",
    image: "/images/landing/testimonial-2.jpg",
    text: "The queue system is super easy to use. I didn't have to wait for long. Highly recommended!",
  },
  {
    name: "Sneha Kapoor",
    role: "Patient",
    image: "/images/landing/testimonial-3.jpg",
    text: "I love the real-time updates. It's so convenient and saves a lot of time.",
  },
];

export default function Testimonials() {
  return (
    <section className="dark:bg-background border-t border-border bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
            Testimonials
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-muted-foreground">
            Real experiences from healthcare providers and patients.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="text-primary/30" size={30} />

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                “{testimonial.text}”
              </p>

              <div className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-11 w-11 rounded-full object-cover"
                />

                <div>
                  <p className="text-sm font-bold text-foreground">
                    {testimonial.name}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    className="fill-warning text-warning"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}