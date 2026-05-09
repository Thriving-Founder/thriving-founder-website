import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomCTASection from "@/components/BottomCTASection";
import resultsHeroImg from "@/assets/molly-the-cat-qP_ezdWEQEs-unsplash.jpg";
import statementBgImg from "@/assets/curated-lifestyle-d8FV5wLz8x4-unsplash.jpg";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-4">
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
      {children}
    </p>
  </div>
);

const caseStudies = [
  {
    title: "From scattered expertise to a premium market position.",
    body: "A former corporate leader with 20 years of industry experience had deep knowledge but no clear way to package it. Through Founder ON™, they moved from a vague consulting concept to a defined premium offer with clear positioning, a professional brand, and a web presence that reflected the caliber of their work.",
    outcome:
      "Within the first 12 weeks, they had a clarified premium offer, a launched site, and their first qualified inbound inquiries from their target market.",
  },
  {
    title: "From overthinking to operational momentum.",
    body: "A founder in the wellness and professional development space had been circling the same decisions for over a year, unable to commit to a direction, a price point, or a brand identity. The structured progression of Founder ON™ gave them the strategic clarity and accountability to stop deliberating and start building.",
    outcome:
      "By Week 16, they had a launched brand, a functioning website, and their first paying clients, after more than a year of stalling.",
  },
  {
    title: "From fragmented effort to an integrated business.",
    body: "A creative professional who had been piecing together strategy from one source, branding from another, and coaching from a third stopped trying to assemble a business from disconnected parts. Through one integrated process, they built a coherent business with aligned positioning, a premium brand foundation, and the confidence to price at a level that reflected the quality of the work.",
    outcome:
      "They went from undercharging and overexplaining to commanding premium fees with clarity.",
  },
];

const reflections = [
  {
    label: "Clearer",
    body: "less noise, more signal",
  },
  {
    label: "More honest",
    body: "real feedback, not flattery",
  },
  {
    label: "More substantial",
    body: "tangible outputs, not just conversations",
  },
  {
    label: "More supported",
    body: "not left to figure it out alone",
  },
  {
    label: "More aligned",
    body: "the business started to feel like it actually fit their life",
  },
];

const tangibleOutcomes = [
  "A business strategy that is clear enough to explain in one sentence",
  "Market positioning that earns attention without chasing it",
  "A brand presence that builds trust before the first conversation",
  "Improved decision-making and the confidence to act on it",
  "A deeper sense that the business is serving the founder's freedom, not replacing it",
];

const Results = () => {
  return (
    <>
    <div className="min-h-screen relative z-10 bg-background">
      <Navbar bg="#1F3F78" />

      {/* Hero */}
      <section className="section-navy">
        <div className="grid md:grid-cols-2 items-stretch">
          {/* Left content */}
          <div className="flex flex-col justify-center pt-40 pb-24 md:pt-48 md:pb-32 px-8 md:px-16">
            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-8">
              Results
            </h1>
            <p className="font-body text-xl md:text-2xl text-primary-foreground/90 leading-snug">
              What the work actually produces, in business, leadership, and the life that surrounds both.
            </p>
          </div>

          {/* Right photo */}
          <div className="hidden md:block relative min-h-[600px]">
            <img
              src={resultsHeroImg}
              alt="Founder working"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ borderRadius: 0, transform: "scaleX(-1)" }}
            />
          </div>
        </div>
      </section>

      {/* Intro statement */}
      <section className="bg-card py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-xl md:text-2xl text-charcoal leading-relaxed">
            Thriving Founder exists to create real outcomes, not polished language. This page is designed to show you what the process looks like when it works.
          </p>
        </div>
      </section>

      {/* Page Intro */}
      <section className="relative py-20 md:py-24 px-6 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${statementBgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ backgroundColor: "hsl(var(--navy) / 0.75)" }}
        />
        <div className="relative max-w-6xl mx-auto text-left">
          <h3 className="heading-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground max-w-2xl">
            The work is designed to produce change that is visible and lasting.
          </h3>
          <p className="font-body text-xl md:text-2xl text-primary-foreground/85 leading-relaxed max-w-lg ml-auto mt-16 md:mt-32">
            That may mean a sharper market position, a stronger offer, a credible premium brand, a more professional presence, clearer commercial direction, or a more grounded and capable founder. The point is not surface change. The point is building something more real.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-offwhite py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            Case Studies
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-16">
            What the process looks like when it works.
          </h2>

          <div className="flex flex-col gap-14">
            {caseStudies.map((c, i) => (
              <div key={i} className="border-t-2 border-gold pt-8 grid md:grid-cols-[4rem_1fr] gap-6 md:gap-10">
                <p className="heading-display text-4xl md:text-5xl text-gold leading-none">
                  0{i + 1}
                </p>
                <div>
                  <h3 className="heading-display text-2xl md:text-3xl text-navy mb-5 leading-snug">
                    {c.title}
                  </h3>
                  <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-5">
                    {c.body}
                  </p>
                  <p className="font-body text-lg md:text-xl font-bold text-charcoal leading-relaxed">
                    {c.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Clients Reflect */}
      <section className="bg-card py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            What Clients Reflect
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-10 max-w-3xl">
            Not only what was built, but how different the experience felt.
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-12 max-w-3xl">
            What clients often share is how the work compared to previous attempts:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {reflections.map((r, i) => (
              <div key={i} className="border-t-2 border-gold pt-5">
                <h3 className="heading-display text-2xl md:text-3xl text-navy mb-2">
                  {r.label}
                </h3>
                <p className="font-body text-base text-charcoal/70 leading-relaxed">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Strongest Outcomes */}
      <section className="section-navy py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-display text-4xl md:text-5xl text-primary-foreground mb-10">
            The strongest outcomes are both tangible and lived.
          </h2>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10">
            That can include:
          </p>
          <div className="flex flex-col gap-5">
            {tangibleOutcomes.map((t, i) => (
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
                <p className="font-body text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
                  {t}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BottomCTASection
        heading="See where you stand before you decide what to build next."
        paragraph="A clear diagnostic of where you stand as an entrepreneur, in about 3 minutes."
        ctaText="Discover Your Founder Freedom Score →"
        ctaHref="/founder-freedom-score"
      /></div>
      <Footer />
      </>
  );
};

export default Results;
