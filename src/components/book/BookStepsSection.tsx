import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "1",
    title: "You book",
    description: "Choose a time that works for you. The call is 30 minutes, focused and unhurried.",
  },
  {
    number: "2",
    title: "We talk",
    description: "A candid conversation about where you are, what you're building, and what's in the way.",
  },
  {
    number: "3",
    title: "You decide",
    description: "If Founder ON™ is the right fit, we'll outline the next steps together. No pressure. No follow-up calls.",
  },
];

const BookStepsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-offwhite py-24 md:py-36 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            What to Expect
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-10" style={{ textWrap: "balance" }}>
            A real conversation, not a sales call.
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6" style={{ textWrap: "balance" }}>
            There's no pitch, no pressure, and no obligation. This is a conversation between two professionals exploring whether the fit is right.
          </p>
          <p className="font-body text-lg md:text-xl font-bold text-charcoal leading-relaxed" style={{ textWrap: "balance" }}>
            If it's a match, we'll discuss timelines and next steps. If it's not, you'll still walk away with clarity on your situation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-16">
          {steps.map((s) => (
            <div key={s.number} className="text-center">
              <p className="heading-display text-5xl text-gold mb-6">{s.number}</p>
              <h3 className="heading-display text-xl text-navy mb-4">{s.title}</h3>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed" style={{ textWrap: "balance" }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookStepsSection;
