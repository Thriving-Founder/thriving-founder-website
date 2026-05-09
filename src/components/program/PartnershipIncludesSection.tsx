import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Circle } from "lucide-react";

const items = [
  {
    category: "Coaching",
    lines: [
      "Weekly partnership sessions with Aaron McLean focused on strategy, clarity, and accountability.",
      "Founder Reset Sessions designed to restore clarity and break the stress-performance cycle.",
      "Between-session support so clients are never stuck waiting for the next session.",
    ],
  },
  {
    category: "Production",
    lines: [
      "Full brand identity including logo, color palette, messaging framework, and brand guidelines co-built with Blair Owens.",
      "Professional website designed and built alongside the client.",
      "Social media strategy including content pillars, templates, and posting structure.",
    ],
  },
  {
    category: "Infrastructure",
    lines: [
      "Marketing and client acquisition systems including email sequences and lead generation tools.",
      "24 interactive playbooks delivered through ON Platform™ that guide weekly progress.",
    ],
  },
  {
    category: "ON Platform™",
    lines: [
      "Your personal dashboard tracking milestones, playbooks, and the Transformation Scorecard.",
    ],
  },
];

const PartnershipIncludesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-card py-24 md:py-36 px-6">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-12">
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-4">
            Everything you need to thrive.
          </h2>
          <h3 className="heading-display text-3xl md:text-4xl text-navy mb-6">
            Nothing that wastes your time.
          </h3>
          <p className="font-body text-lg md:text-xl text-charcoal/70 leading-relaxed">
            Founder ON™ combines weekly strategic advisory, transformational coaching, and done-with-you business production.
          </p>
        </div>

        <div className="space-y-12">
          {items.map((group) => (
            <div key={group.category}>
              <p className="font-body text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-5">
                {group.category}
              </p>
              <ul className="space-y-4">
                {group.lines.map((line, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Circle className="w-4 h-4 text-gold/60 mt-1 flex-shrink-0" strokeWidth={1.5} />
                    <span className="font-body text-sm text-charcoal/80 leading-relaxed">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipIncludesSection;
