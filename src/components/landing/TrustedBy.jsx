export default function TrustedBy() {
  const clinics = [
    "Apollo",
    "Fortis",
    "MAX Healthcare",
    "Manipal Hospitals",
    "Narayana Health",
    "Aster",
  ];

  return (
    <section className="border-y border-border bg-muted/40 py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-sm font-semibold text-muted-foreground">
          Trusted by clinics & healthcare centers
        </p>

        <div className="mt-7 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {clinics.map((clinic) => (
            <div
              key={clinic}
              className="text-center text-sm font-bold text-muted-foreground/70"
            >
              {clinic}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}