import { useScrollReveal } from "@/hooks/useScrollReveal";

const plans = [
  { label: "Pay in Full", price: "$30,000", detail: "at enrollment", highlight: true },
  { label: "Two Payments", price: "$15,000", detail: "at enrollment + $15,000 at Week 12", highlight: false },
  { label: "Six Monthly", price: "$5,000", detail: "per month for six months", highlight: false },
];

const InvestmentSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-offwhite py-24 md:py-36 px-6">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-6">
            Investment
          </h2>
          <p className="font-body text-base text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
            Founder ON™ is a 24-week one-on-one partnership including weekly strategy sessions, full brand and website co-build, marketing systems, and access to ON Platform™.
          </p>
        </div>

        {/* Payment table */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.label}
              className={`p-8 text-center transition-all ${
                plan.highlight
                  ? "bg-navy text-primary-foreground"
                  : "bg-card border border-border"
              }`}
            >
              {plan.highlight && (
                <p className="font-body text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-4">
                  Recommended
                </p>
              )}
              <p className={`font-body text-sm font-semibold tracking-wide uppercase mb-4 ${plan.highlight ? "text-primary-foreground/80" : "text-charcoal/60"}`}>
                {plan.label}
              </p>
              <p className={`heading-display text-3xl mb-2 ${plan.highlight ? "text-gold" : "text-navy"}`}>
                {plan.price}
              </p>
              <p className={`font-body text-xs ${plan.highlight ? "text-primary-foreground/60" : "text-charcoal/50"}`}>
                {plan.detail}
              </p>
            </div>
          ))}
        </div>

        <p className="font-body text-sm text-charcoal/60 text-center mb-4">
          Pay-in-full clients receive a complimentary 90-day post-graduation strategy session.
        </p>

        <p className="font-body text-sm text-charcoal/60 text-center max-w-xl mx-auto leading-relaxed mb-12">
          The investment reflects the depth and scope of a partnership that includes strategic coaching, professional production, and a full business infrastructure, built alongside you.
        </p>

        <div className="text-center">
          <a href="/book" className="btn-gold">Book a Strategy Call →</a>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
