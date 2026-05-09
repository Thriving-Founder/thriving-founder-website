import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomCTASection from "@/components/BottomCTASection";
import whyBgImg from "@/assets/tuvalum-kwlcKkMoPZU-unsplash.webp";
import heroImg from "@/assets/getty-images-oEpLHKdh-AY-unsplash.webp";

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

const foundations = [
  {
    name: "Clarity",
    body: "Do you know what you are building, who it is for, and how it creates value?",
  },
  {
    name: "Capacity",
    body: "Do you have the time, energy, systems, and internal bandwidth to build well?",
  },
  {
    name: "Cashflow",
    body: "Do you have a viable commercial path, or are you still operating in uncertainty?",
  },
  {
    name: "Confidence",
    body: "Are you making grounded decisions from conviction, or hesitating at every step?",
  },
];

const receives = [
  "Your overall readiness score and tier placement",
  "Individual scores across all four foundations, displayed as a visual radar chart",
  "Insight into which foundation is your strongest, and which is most limiting your progress",
  "A clearer sense of what your next move may need to be",
  "A pathway toward deeper support through Founder ON™, if the fit is right",
];

const radarLabels = ["Clarity", "Capacity", "Cashflow", "Confidence"];
const radarValues = [0.85, 0.6, 0.45, 0.75]; // sample scores
const cx = 200;
const cy = 200;
const maxR = 150;
const rings = [0.25, 0.5, 0.75, 1];

function polarToXY(angle: number, r: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

const RadarChart = () => {
  const angles = radarLabels.map((_, i) => (360 / radarLabels.length) * i);
  const dataPoints = radarValues.map((v, i) => polarToXY(angles[i], v * maxR));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";

  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-[360px]" style={{ overflow: "visible" }}>
      {/* Guide rings */}
      {rings.map((r) => (
        <circle
          key={r}
          cx={cx}
          cy={cy}
          r={maxR * r}
          fill="none"
          stroke="hsl(var(--gold))"
          strokeWidth="0.5"
          opacity={0.3}
        />
      ))}

      {/* Axis lines */}
      {angles.map((a, i) => {
        const end = polarToXY(a, maxR);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={end.x}
            y2={end.y}
            stroke="hsl(var(--gold))"
            strokeWidth="0.5"
            opacity={0.3}
          />
        );
      })}

      {/* Data shape */}
      <path
        d={dataPath}
        fill="hsl(var(--gold) / 0.15)"
        stroke="hsl(var(--gold))"
        strokeWidth="2"
      />

      {/* Data dots */}
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="5" fill="hsl(var(--gold))" />
      ))}

      {/* Labels */}
      {angles.map((a, i) => {
        const labelPos = polarToXY(a, maxR + 28);
        const anchor = a === 0 || a === 180 ? "middle" : a < 180 ? "start" : "end";
        const dy = a === 0 ? "-0.5em" : a === 180 ? "1.2em" : "0.35em";
        return (
          <text
            key={i}
            x={labelPos.x}
            y={labelPos.y}
            textAnchor={anchor}
            dy={dy}
            className="font-body"
            style={{
              fontSize: "14px",
              fill: "hsl(var(--navy))",
              fontWeight: 600,
            }}
          >
            {radarLabels[i]}
          </text>
        );
      })}
    </svg>
  );
};

const FoundationCard =({ foundation }: { foundation: { name: string; body: string } }) => (
  <div
    className="flex flex-col justify-between gap-16 rounded-lg p-6 md:p-8 bg-gold/5"
  >
    <h3 className="heading-display text-2xl md:text-3xl text-navy">
      {foundation.name}
    </h3>
    <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
      {foundation.body}
    </p>
  </div>
);

const FounderFreedomScore = () => {
  return (
    <>
    <div className="min-h-screen relative z-10 bg-background">
      <Navbar bg="#1F3F78" hideGoldButton />

      {/* Hero */}
      <section className="section-navy">
        <div className="grid md:grid-cols-2 items-stretch">
          {/* Left content */}
          <div className="flex flex-col justify-center pt-40 pb-24 md:pt-48 md:pb-32 px-8 md:px-16">
            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-8 text-balance">
              Founder Freedom Score
              <sup
                style={{
                  fontSize: "0.2em",
                  position: "relative",
                  top: "-2.5em",
                  marginLeft: "0.1em",
                  verticalAlign: "baseline",
                  fontWeight: 500,
                }}
              >
                ™
              </sup>
            </h1>
            <p className="font-body text-xl md:text-2xl text-primary-foreground/90 leading-snug mb-12 text-balance">
              A clear diagnostic of where you stand as an entrepreneur, in about 3 minutes.
            </p>
            <a
              href="https://founderfreedomscore.netlify.app/assessment"
              className="btn-gold self-start"
            >
              Begin Assessment →
            </a>
          </div>

          {/* Right photo */}
          <div className="hidden md:block relative min-h-[600px]">
            <img
              src={heroImg}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ borderRadius: 0, objectPosition: "center center" }}
            />
          </div>
        </div>
      </section>

      {/* Intro statement + radar */}
      <section className="bg-card pt-24 md:pt-32 pb-12 md:pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-display text-4xl md:text-5xl text-navy text-center mb-16">
            Assess your readiness<br />across four core foundations.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Radar chart */}
            <div className="flex justify-center">
              <RadarChart />
            </div>

            {/* Text */}
            <div>
              <p className="font-body text-xl md:text-2xl text-charcoal/80 leading-relaxed">
                This is not a gimmicky quiz. It is a practical diagnostic designed to help you see what is supporting your next chapter, and what may still be limiting it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What It Measures */}
      <section className="bg-card pt-12 md:pt-16 pb-24 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
              What It Measures
            </p>
            <h2 className="heading-display text-4xl md:text-5xl text-navy mb-8">
              Freedom in business is not just a dream. It rests on foundations.
            </h2>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
              The Founder Freedom Score helps you assess four areas that consistently shape readiness:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {foundations.map((f, i) => (
              <FoundationCard key={i} foundation={f} />
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section-offwhite py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            Why It Matters
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-10">
            Most people do not need more information. They need a more honest view of where they stand.
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
            When the foundations are weak, even talented people stay stuck in cycles of overthinking, inconsistency, and partial commitment.
          </p>
          <p className="font-body text-lg md:text-xl font-bold text-charcoal leading-relaxed">
            A better diagnosis leads to better decisions.
          </p>
        </div>
      </section>

      {/* What You Receive */}
      <section className="bg-card py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            What You Receive
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-10">
            After completing the Founder Freedom Score, you will receive:
          </h2>
          <div className="flex flex-col gap-5 mb-10">
            {receives.map((t, i) => (
              <Bullet key={i}>{t}</Bullet>
            ))}
          </div>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
            The results are immediate, on-screen, and designed to be genuinely useful, not a teaser for a sales pitch.
          </p>
        </div>
      </section>

      {/* How It Connects to Founder ON™ */}
      <section className="section-navy py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            How It Connects to Founder ON™
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-primary-foreground mb-10">
            The Founder Freedom Score is the front door, not the full journey.
          </h2>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-6">
            For some people, the score will simply create clarity.
          </p>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-6">
            For others, it will reveal that they are ready for a deeper build, one that requires strategy, execution, and support at a higher level.
          </p>
          <p className="font-body text-lg md:text-xl font-bold text-primary-foreground leading-relaxed">
            That is where Founder ON™ begins.
          </p>
        </div>
      </section>

      <BottomCTASection
        heading="See where you stand. Build from truth."
        paragraph="Your results are immediate, honest, and designed to help you move forward with clarity."
        ctaText="Begin Assessment →"
        ctaHref="https://founderfreedomscore.netlify.app/assessment"
      /></div>
      <Footer />
      </>
  );
};

export default FounderFreedomScore;
