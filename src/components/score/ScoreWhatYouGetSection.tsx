import { useScrollReveal } from "@/hooks/useScrollReveal";
import GoldLineIcon from "@/components/GoldLineIcon";

const items = [
  {
    icon: "clarity" as const,
    title: "Your Founder Freedom Pattern",
    description: "Your score across all 4 Foundations, Clarity, Capacity, Cashflow, and Confidence.",
  },
  {
    icon: "capacity" as const,
    title: "Your #1 Constraint",
    description: "The single Foundation that's most limiting your progress right now.",
  },
  {
    icon: "cashflow" as const,
    title: "A Recommended Next Step",
    description: "A personalized recommendation based on your score and readiness level.",
  },
  {
    icon: "confidence" as const,
    title: "A Follow-Up Series",
    description: "A short email series with targeted insights for your specific situation. No spam. Unsubscribe anytime.",
  },
];

const ScoreWhatYouGetSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-offwhite py-24 md:py-36 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="heading-display text-4xl md:text-5xl text-navy text-center mb-20">
          Your score. Your #1 barrier. Your next step.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              <div className="flex justify-center mb-6">
                <GoldLineIcon type={item.icon} size={48} />
              </div>
              <h3 className="heading-display text-lg text-navy mb-3">{item.title}</h3>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScoreWhatYouGetSection;
