import artpopStand from "@/assets/artpop-stand.webp";

const WhereDoYouStandSection = () => {
  return (
    <section className="section-navy py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <img loading="lazy"             src={artpopStand}
            alt="Abstract flowing art"
            className="w-full aspect-[4/5] object-cover"
          />
        </div>
        <div className="text-left">
          <h2 className="heading-display text-4xl md:text-5xl text-primary-foreground mb-4">
            How strong is your foundation as an entrepreneur?
          </h2>
          <p className="font-body text-base text-primary-foreground/60 leading-relaxed mb-6">
            Find out where you stand as an entrepreneur.
          </p>
          <p className="font-body text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-4">
            The Founder Freedom Pattern™ is a free assessment that measures your readiness across the 4 Foundations, Clarity, Capacity, Cashflow, and Confidence.
          </p>
          <p className="font-body text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-10">
            In under 5 minutes, you'll know exactly where you are, what's holding you back, and the most important next step.
          </p>
          <a href="#" className="btn-gold mb-4 inline-block">Take the Founder Freedom Pattern →</a>
          <p className="font-body text-xs text-primary-foreground/50 mt-4">
            Free. Takes under 5 minutes. No spam, just your score and a recommended next step.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhereDoYouStandSection;
