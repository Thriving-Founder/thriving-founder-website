import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  PolarRadiusAxis,
} from "recharts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { supabase } from "@/lib/supabase";
import {
  type Foundation,
  type Tier,
  foundationLabels,
  getScoreRange,
  barrierPatterns,
  barrierCosts,
  fiveQuestions,
  executiveSummaries,
  foundationNarratives,
} from "@/content/ffs-results-content";

interface FoundationScore {
  foundation: Foundation;
  raw: number;
  percent: number;
}

interface ResultData {
  resultId: string;
  user: { firstName: string; email: string };
  scoring: {
    totalRaw: number;
    totalPercent: number;
    foundations: FoundationScore[];
    lowestBarrier: Foundation;
    barrierScore: number;
  };
  tier: Tier;
}

const BOOKING_URL = "https://calendly.com/aaron-thrivingfounder/30min";

// ─── Reveal wrapper ───
const Reveal = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

// ─── Gold tag badge ───
const Tag = ({ label }: { label: string }) => (
  <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
    {label}
  </p>
);

const FFSReport = () => {
  const { resultId } = useParams<{ resultId: string }>();
  const [result, setResult] = useState<ResultData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!resultId) {
      setError(true);
      setLoading(false);
      return;
    }

    const fetchResult = async () => {
      const { data, error: fetchError } = await supabase
        .from("assessment_results")
        .select("result_data")
        .eq("id", resultId)
        .single();

      if (fetchError || !data) {
        setError(true);
      } else {
        setResult(data.result_data as ResultData);
      }
      setLoading(false);
    };

    fetchResult();
  }, [resultId]);

  if (loading) {
    return (
      <>
        <div className="min-h-screen relative z-10 bg-background">
          <Navbar bg="#1F3F78" />
          <section className="section-navy">
            <div className="flex items-center justify-center pt-48 pb-32">
              <p className="font-body text-xl text-primary-foreground/70">
                Loading your results...
              </p>
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !result) {
    return (
      <>
        <div className="min-h-screen relative z-10 bg-background">
          <Navbar bg="#1F3F78" />
          <section className="section-navy">
            <div className="flex flex-col items-center justify-center pt-48 pb-32 px-6 text-center">
              <h1 className="heading-display text-3xl md:text-4xl text-primary-foreground mb-4">
                Report Not Found
              </h1>
              <p className="font-body text-lg text-primary-foreground/70 mb-8 max-w-md">
                This report link may have expired or is invalid.
              </p>
              <a href="/founder-freedom-score" className="btn-gold">
                Take the Assessment
              </a>
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  }

  const { firstName } = result.user;
  const barrier = result.scoring.lowestBarrier;
  const barrierLabel = foundationLabels[barrier];
  const tier = result.tier;

  const summaryText = executiveSummaries[tier][barrier]
    .replace(/^\{firstName\}, your/, "Your")
    .replace(/^\{firstName\}, you/, "You")
    .replace("{firstName}", firstName);

  const foundationScoreMap = result.scoring.foundations.reduce(
    (acc, f) => ({ ...acc, [f.foundation]: f.percent }),
    {} as Record<Foundation, number>
  );

  const foundations: Foundation[] = [
    "clarity",
    "capacity",
    "cashflow",
    "confidence",
  ];

  return (
    <>
      <div className="min-h-screen relative z-10 bg-background">
        <Navbar bg="#1F3F78" />

        {/* ─── 1. Greeting ─── */}
        <section className="section-offwhite">
          <div className="flex flex-col justify-center pt-40 pb-24 md:pt-48 md:pb-32 px-8 md:px-16">
            <div className="max-w-3xl mx-auto">
              <Reveal>
                <h1 className="heading-display text-4xl md:text-5xl text-navy leading-[1.1] mb-12 text-center">
                  Thank you for taking the <span className="md:whitespace-nowrap">Founder Freedom Pattern</span>, {firstName}.
                </h1>
                <div className="bg-white rounded-lg p-8 md:p-10">
                  <p className="heading-display text-2xl md:text-3xl text-navy leading-snug mb-6">
                    Your #1 barrier to freedom is <span className="text-gold">{barrierLabel}</span>.
                  </p>
                  <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
                    {barrierPatterns[barrier]}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── 2. What This Is Costing You ─── */}
        <section className="bg-card py-24 md:py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <Tag label="What This Is Costing You" />
              <div className="flex flex-col gap-5">
                {barrierCosts[barrier].map((cost, i) => (
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
                      {cost}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─── 3. Your Score Across The Four Cs ─── */}
        <section className="section-navy py-24 md:py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <Tag label="Your Foundations" />
              <h2 className="heading-display text-4xl md:text-5xl text-primary-foreground mb-16">
                Your Score Across The Four Cs
              </h2>
            </Reveal>

            {/* Radar Chart */}
            <Reveal>
              <div className="py-10 px-4 mb-16">
                <div className="w-full h-[320px] md:h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                      data={foundations.map((f) => ({
                        foundation: foundationLabels[f],
                        score: foundationScoreMap[f] ?? 0,
                        fullMark: 100,
                      }))}
                      cx="50%"
                      cy="50%"
                      outerRadius="75%"
                    >
                      <PolarGrid
                        stroke="#FFFFFF"
                        strokeOpacity={0.1}
                        radialLines={false}
                      />
                      <PolarAngleAxis
                        dataKey="foundation"
                        tick={{
                          fill: "#FFFFFF",
                          fillOpacity: 0.7,
                          fontSize: 13,
                          fontFamily: "Figtree, system-ui, sans-serif",
                          fontWeight: 500,
                        }}
                        tickLine={false}
                      />
                      <PolarRadiusAxis
                        angle={90}
                        domain={[0, 100]}
                        tick={false}
                        axisLine={false}
                      />
                      <Radar
                        dataKey="score"
                        stroke="#C9A84C"
                        fill="#C9A84C"
                        fillOpacity={0.15}
                        strokeWidth={2}
                        dot={{
                          r: 4,
                          fill: "#C9A84C",
                          stroke: "#1F3F78",
                          strokeWidth: 2,
                        }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Reveal>

            {/* Foundation Cards */}
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {foundations.map((f) => {
                const percent = foundationScoreMap[f] ?? 0;
                const range = getScoreRange(percent);
                const narrative = foundationNarratives[f][range];
                return (
                  <Reveal key={f}>
                    <div className="border-t-2 border-gold pt-6">
                      <div className="flex items-baseline justify-between mb-1">
                        <h3 className="heading-display text-2xl md:text-3xl text-primary-foreground">
                          {foundationLabels[f]}
                        </h3>
                        <p className="heading-display text-2xl md:text-3xl text-gold">
                          {Math.round(percent)}%
                        </p>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-5">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${percent}%`,
                            backgroundColor: "hsl(var(--gold))",
                          }}
                        />
                      </div>
                      <p className="font-body text-base text-primary-foreground/70 leading-relaxed">
                        {narrative}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 5. Five Questions Worth Sitting With ─── */}
        <section className="section-navy py-24 md:py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <Tag label="Reflection" />
              <h2 className="heading-display text-4xl md:text-5xl text-primary-foreground mb-16">
                Three Questions Worth Sitting With
              </h2>
            </Reveal>

            <div className="flex flex-col gap-10">
              {fiveQuestions.slice(0, 3).map((q, i) => (
                <Reveal key={i}>
                  <div className="border-t border-primary-foreground/20 pt-8 grid md:grid-cols-[4rem_1fr] gap-4 md:gap-10">
                    <p className="heading-display text-3xl md:text-4xl text-gold leading-none">
                      0{i + 1}
                    </p>
                    <p className="font-body text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
                      {q}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 6. CTA ─── */}
        <section style={{ backgroundColor: "#FAF8F5" }}>
          <div className="py-24 md:py-32 px-8 md:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal>
                <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-navy mb-8">
                  Your biggest barrier to freedom is {barrierLabel}.
                </h2>
                <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-10">
                  In a 30-minute strategy call, we will map out exactly how to
                  remove it.
                </p>
                <a href={BOOKING_URL} className="btn-gold">
                  Book Your Strategy Session
                </a>
              </Reveal>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FFSReport;
