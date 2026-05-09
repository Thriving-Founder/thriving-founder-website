import { useScrollReveal } from "@/hooks/useScrollReveal";

const ProgramGuaranteeSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-navy py-24 md:py-36 px-6">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="heading-display text-4xl md:text-5xl text-primary-foreground mb-10">
          We stand behind the partnership.
        </h2>
        <div className="space-y-6 font-body text-base text-primary-foreground/70 leading-relaxed">
          <p>
            Founder ON™ is built around measurable milestones, not vague promises.
          </p>
          <p>
            If you complete the weekly playbooks inside ON Platform™, attend the scheduled partnership sessions, and implement the agreed action steps, your business should be operational within the partnership timeline.
          </p>
          <p>
            If your brand and website are not live by Week 12 and your first client has not been enrolled by Week 20, Thriving Founder™ will continue providing production support and bi-weekly partnership sessions for up to eight additional weeks at no additional investment until your first client is enrolled.
          </p>
        </div>

        <div className="mt-16 pt-16 border-t border-primary-foreground/10">
          <p className="font-body text-sm font-semibold tracking-[0.3em] text-gold uppercase mb-6">
            This is a shared commitment.
          </p>
          <h3 className="heading-display text-3xl md:text-4xl text-primary-foreground mb-3">
            We bring the strategy and infrastructure.
          </h3>
          <h3 className="heading-display text-3xl md:text-4xl text-gold">
            You bring the execution.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ProgramGuaranteeSection;
