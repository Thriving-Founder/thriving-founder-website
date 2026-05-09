const items = [
  "You have real expertise and want to turn it into a thriving business",
  "You want more freedom, but not at the cost of instability",
  "You are tired of fragmented approaches to entrepreneurship",
  "You want both strategic depth and execution support",
  "You are ready to invest in building something at a premium level",
];

const WhoThisIsForSection = () => {
  return (
    <section className="bg-card py-16 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
          Who This Is For
        </p>
        <h2 className="heading-display text-4xl md:text-5xl text-navy mb-10">
          Built for capable, ambitious founders.
        </h2>

        <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
          Founder ON™ is designed for people who already have meaningful professional experience and real capacity. They may be coming from corporate leadership, consulting, creative industries, wellness, professional services, or an earlier chapter of entrepreneurship.
        </p>
        <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-12">
          This is for capable professionals who are ready to turn expertise into a thriving business, without losing the life they are trying to create.
        </p>

        <h3 className="heading-display text-2xl md:text-3xl text-navy mb-8">
          This is likely for you if:
        </h3>

        <div className="flex flex-col gap-6">
          {items.map((text, i) => (
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
              <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;
