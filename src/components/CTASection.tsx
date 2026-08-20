import { trackCTA } from "@/lib/gtag";

const CTASection = () => {
  return (
    <section className="section-navy py-24 md:py-32 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="heading-display text-4xl md:text-6xl text-primary-foreground mb-12">
          Ready to thrive?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="btn-gold" onClick={() => trackCTA("Take the Founder Freedom Score", "cta_section")}>Take the Founder Freedom Pattern →</a>
          <a href="#" className="btn-outline-light" onClick={() => trackCTA("Learn About the Program", "cta_section")}>Learn About the Program →</a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
