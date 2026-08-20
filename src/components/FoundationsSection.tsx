import GoldLineIcon from "./GoldLineIcon";

const foundations = [
  {
    icon: "clarity" as const,
    title: "Clarity",
    desc: "Know exactly what you're building, who it's for, and why it matters.",
  },
  {
    icon: "capacity" as const,
    title: "Capacity",
    desc: "Build without burning out. Design a life that supports the business, not the other way around.",
  },
  {
    icon: "cashflow" as const,
    title: "Cashflow",
    desc: "Make strategic decisions instead of survival decisions. Build a financial foundation that gives you freedom.",
  },
  {
    icon: "confidence" as const,
    title: "Confidence",
    desc: "Trust yourself to make the hard calls, handle setbacks, and keep going when it gets uncomfortable.",
  },
];

const FoundationsSection = () => {
  return (
    <section className="bg-card py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-display text-4xl md:text-5xl text-navy text-center mb-20">
          Everything we do is built on<br />four foundations.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {foundations.map((f) => (
            <div key={f.title} className="text-center">
              <div className="flex justify-center mb-6">
                <GoldLineIcon type={f.icon} size={48} />
              </div>
              <h3 className="heading-display text-xl text-navy mb-3">{f.title}</h3>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <p className="font-body text-sm text-charcoal/60 text-center max-w-3xl mx-auto mt-16 leading-relaxed">
          These four dimensions are the backbone of the Founder Freedom Pattern™, the diagnostic framework for every coaching session, and the measurement system that tracks your transformation from Week 1 to Week 24.
        </p>
      </div>
    </section>
  );
};

export default FoundationsSection;
