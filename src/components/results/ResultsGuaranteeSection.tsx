import { useScrollReveal } from "@/hooks/useScrollReveal";

const ResultsGuaranteeSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-navy py-24 md:py-36 px-6">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="heading-display text-4xl md:text-5xl text-primary-foreground mb-10">
          The milestone guarantee.
        </h2>
        <div className="space-y-6 font-body text-base text-primary-foreground/70 leading-relaxed">
          <p>
            Every Founder ON™ partnership is built around 9 measurable milestones. If you do the work, complete the playbooks, attend the sessions, implement the action steps, your business will be operational within the partnership timeline.
          </p>
          <p>
            If your brand and website are not live by Week 12 and your first client has not been enrolled by Week 20, we continue providing support at no additional cost until your first client is enrolled.
          </p>
        </div>
        <div className="mt-16 pt-12 border-t border-primary-foreground/10">
          <a href="/program" className="btn-outline-light">See the Full Program →</a>
        </div>
      </div>
    </section>
  );
};

export default ResultsGuaranteeSection;
