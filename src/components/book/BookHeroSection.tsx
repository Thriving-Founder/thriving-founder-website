import { useEffect } from "react";

const BookHeroSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <section className="section-navy min-h-[80vh] flex items-center px-6 pt-32 pb-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
        <div>
          <h1 className="heading-display text-5xl md:text-7xl text-primary-foreground mb-8">
            Book your strategy call.
          </h1>
          <div className="font-body text-base text-primary-foreground/70 leading-relaxed space-y-6">
            <p style={{ textWrap: "balance" }}>
              A strategy call is a 30-minute conversation to explore where you are, where you want to go, and whether Founder ON™ is the right partnership for your transition.
            </p>
          </div>
        </div>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/aaron-thrivingfounder/30min?hide_gdpr_banner=1"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </section>
  );
};

export default BookHeroSection;
