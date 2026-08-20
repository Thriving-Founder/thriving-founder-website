const AboutCTASection = () => (
  <section className="section-navy py-24 md:py-36 px-6 text-center">
    <div className="max-w-3xl mx-auto">
      <h2 className="heading-display text-4xl md:text-6xl text-primary-foreground mb-12">
        Want to know if this is right for you?
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="/book" className="btn-gold">Book a Strategy Call →</a>
        <a href="/founder-freedom-score" className="btn-outline-light">Take the Founder Freedom Pattern™</a>
      </div>
    </div>
  </section>
);

export default AboutCTASection;
