import { useRef } from "react";
import GoldLineIcon from "./GoldLineIcon";

const phases = [
  {
    icon: "empower" as const,
    title: "EMPOWER",
    weeks: "Weeks 1–4",
    desc: "Discover who you are as a founder. Clarify your vision, values, and what freedom actually looks like for you.",
  },
  {
    icon: "build" as const,
    title: "BUILD",
    weeks: "Weeks 5–10",
    desc: "Design your offer, validate your market, and co-build your brand identity and website with the production team.",
  },
  {
    icon: "operate" as const,
    title: "OPERATE",
    weeks: "Weeks 11–18",
    desc: "Launch into the market. Build your client acquisition system, delivery systems, and operational infrastructure. Enroll your first client.",
  },
  {
    icon: "thrive" as const,
    title: "THRIVE",
    weeks: "Weeks 19–24",
    desc: "Optimize, scale, and build for sustainability. Create the growth plan and leadership foundation for long-term freedom.",
  },
];

const ONMethodSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-offwhite py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left - Centered text */}
        <div className="flex flex-col justify-center items-center text-center md:sticky md:top-32 h-fit">
          <p className="font-body text-sm font-semibold tracking-widest text-gold mb-6 uppercase">The Founder ON™ Method</p>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-4">
            4 phases. 24 weeks.
          </h2>
          <h3 className="heading-display text-3xl md:text-4xl text-navy mb-6">
            A business that thrives.
          </h3>
          <p className="font-body text-base text-navy/70 max-w-md leading-relaxed">
            The Founder ON™ Method is the structured process that guides every client through the transition from experienced professional to thriving founder.
          </p>
        </div>

        {/* Right - Horizontal scroll journey */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex md:flex-col gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory"
          >
            {phases.map((phase, i) => (
              <div
                key={phase.title}
                className="flex-shrink-0 w-72 md:w-full snap-center relative"
              >
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <GoldLineIcon type={phase.icon} size={40} />
                    </div>
                    {i < phases.length - 1 && (
                      <div className="hidden md:block w-px h-16 bg-gold/30 mt-2" />
                    )}
                  </div>
                  <div className="pt-2">
                    <p className="font-body text-xs font-semibold tracking-widest text-gold mb-1">{phase.weeks}</p>
                    <h4 className="font-body text-lg font-bold text-navy mb-2 tracking-wide">{phase.title}</h4>
                    <p className="font-body text-sm text-charcoal/70 leading-relaxed">{phase.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll hint on mobile */}
          <div className="md:hidden flex justify-center mt-4 gap-2">
            {phases.map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-gold/40" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ONMethodSection;
