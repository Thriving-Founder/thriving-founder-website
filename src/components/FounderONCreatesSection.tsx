import createsImg from "@/assets/logan-weaver-lgnwvr-qmFLpVS9tRM-unsplash.webp";
import RevealImage from "@/components/RevealImage";
import RevealText from "@/components/RevealText";

const outcomes = [
  "A business with strategic clarity and commercial credibility",
  "Positioning and messaging that command premium attention",
  "A brand foundation that reflects the quality of your work",
  "Stronger decision-making and the confidence to lead without second-guessing",
  "A business designed to support greater freedom in how you work, earn, and live",
];

const FounderONCreatesSection = () => {
  return (
    <section className="bg-card pt-12 md:pt-16 pb-12 md:pb-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <RevealImage
          src={createsImg}
          alt="A founder built to lead"
          className="aspect-square order-2 md:order-1"
        />
        <RevealText className="order-1 md:order-2">
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-8">
            Founder ON™ is designed to create:
          </h2>
          <div className="flex flex-col gap-5">
            {outcomes.map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <span
                  aria-hidden
                  className="flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{
                    width: "1rem",
                    height: "1rem",
                    marginTop: "0.45rem",
                    border: "1.5px solid hsl(var(--gold))",
                  }}
                >
                  <span
                    className="rounded-full"
                    style={{
                      width: "0.4rem",
                      height: "0.4rem",
                      backgroundColor: "hsl(var(--gold))",
                    }}
                  />
                </span>
                <p className="font-body text-base md:text-lg text-charcoal/80 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </RevealText>
      </div>
    </section>
  );
};

export default FounderONCreatesSection;
