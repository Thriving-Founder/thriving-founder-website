import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Progress } from "@/components/ui/progress";
import { trackFormSubmission, trackEvent, trackCTA } from "@/lib/gtag";

const questions = [
  // Clarity
  { foundation: "Clarity", q: "I can clearly articulate what my business does, who it's for, and why it matters, in one sentence." },
  { foundation: "Clarity", q: "I know exactly what I need to build in the next 90 days and why." },
  { foundation: "Clarity", q: "My daily actions are aligned with my long-term vision, not just reactive tasks." },
  // Capacity
  { foundation: "Capacity", q: "I have enough energy and focus at the end of each week to sustain this pace long-term." },
  { foundation: "Capacity", q: "I have systems in place to manage my time, energy, and priorities effectively." },
  { foundation: "Capacity", q: "I can take a full day off without feeling guilty or falling behind." },
  // Cashflow
  { foundation: "Cashflow", q: "I make financial decisions from a place of strategy, not survival." },
  { foundation: "Cashflow", q: "I have a clear pricing model that reflects the value I deliver." },
  { foundation: "Cashflow", q: "I have at least one reliable system for generating new leads or clients." },
  // Confidence
  { foundation: "Confidence", q: "I trust myself to make the hard calls, even when the outcome is uncertain." },
  { foundation: "Confidence", q: "I can handle setbacks without spiraling or losing momentum." },
  { foundation: "Confidence", q: "I feel confident asking for what I'm worth, in pricing, partnerships, and negotiations." },
];

const options = [
  { label: "Strongly disagree", value: 1 },
  { label: "Disagree", value: 2 },
  { label: "Neutral", value: 3 },
  { label: "Agree", value: 4 },
  { label: "Strongly agree", value: 5 },
];

type Phase = "email" | "assessment" | "results";

const ScoreAssessmentSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [phase, setPhase] = useState<Phase>("email");
  const [email, setEmail] = useState("");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      trackFormSubmission("founder_freedom_score", "email_submitted");
      setPhase("assessment");
    }
  };

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      const total = newAnswers.reduce((a, b) => a + b, 0);
      const finalPct = Math.round((total / maxScore) * 100);
      trackFormSubmission("founder_freedom_score", `assessment_completed_score_${finalPct}`);
      setPhase("results");
    }
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 5;
  const pct = Math.round((totalScore / maxScore) * 100);

  const foundationScores = ["Clarity", "Capacity", "Cashflow", "Confidence"].map((f) => {
    const indices = questions.map((q, i) => (q.foundation === f ? i : -1)).filter((i) => i >= 0);
    const sum = indices.reduce((a, i) => a + (answers[i] || 0), 0);
    return { name: f, score: sum, max: indices.length * 5, pct: Math.round((sum / (indices.length * 5)) * 100) };
  });

  const lowestFoundation = foundationScores.reduce((prev, curr) => (curr.pct < prev.pct ? curr : prev));

  const getLevel = () => {
    if (pct >= 75) return "high";
    if (pct >= 45) return "mid";
    return "low";
  };

  return (
    <section id="assessment" className="bg-card py-24 md:py-36 px-6">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {phase === "email" && (
          <div className="text-center">
            <h2 className="heading-display text-3xl md:text-4xl text-navy mb-6">
              Before we begin
            </h2>
            <p className="font-body text-base text-charcoal/70 mb-10 leading-relaxed">
              Enter your email to receive your personalized results and follow-up insights.
            </p>
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto flex flex-col gap-4">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 font-body text-base border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button type="submit" className="btn-gold w-full">
                Start the Assessment →
              </button>
            </form>
          </div>
        )}

        {phase === "assessment" && (
          <div>
            <div className="mb-8">
              <div className="flex justify-between font-body text-xs text-charcoal/50 mb-2">
                <span>Question {current + 1} of {questions.length}</span>
                <span>{questions[current].foundation}</span>
              </div>
              <Progress value={((current + 1) / questions.length) * 100} className="h-1 bg-border" />
            </div>
            <h3 className="heading-display text-2xl md:text-3xl text-navy mb-10 leading-snug">
              {questions[current].q}
            </h3>
            <div className="space-y-3">
              {options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(opt.value)}
                  className="w-full text-left px-6 py-4 font-body text-sm text-charcoal border border-border hover:border-gold hover:bg-off-white transition-all duration-200"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {phase === "results" && (
          <div className="text-center">
            <p className="font-body text-sm font-semibold tracking-[0.3em] text-gold uppercase mb-4">
              Your Founder Freedom Score™
            </p>
            <h2 className="heading-display text-6xl md:text-8xl text-navy mb-4">
              {pct}
            </h2>
            <p className="font-body text-base text-charcoal/60 mb-12">out of 100</p>

            <div className="grid grid-cols-2 gap-6 mb-16">
              {foundationScores.map((f) => (
                <div key={f.name} className="text-left">
                  <div className="flex justify-between font-body text-sm text-charcoal/70 mb-2">
                    <span>{f.name}</span>
                    <span>{f.pct}%</span>
                  </div>
                  <Progress value={f.pct} className="h-1.5 bg-border" />
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-12 mb-12">
              <h3 className="heading-display text-2xl text-navy mb-4">
                Your #1 Constraint: {lowestFoundation.name}
              </h3>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed max-w-lg mx-auto">
                {lowestFoundation.name} is the Foundation most limiting your progress right now. Strengthening this area will have the greatest impact on your overall readiness.
              </p>
            </div>

            {/* Conditional CTA */}
            <div className="section-navy py-12 px-8 -mx-6">
              {getLevel() === "high" && (
                <div>
                  <h3 className="heading-display text-2xl text-primary-foreground mb-4">
                    You're ready for the next step.
                  </h3>
                  <p className="font-body text-sm text-primary-foreground/70 mb-8 leading-relaxed">
                    Your score suggests you have the foundations in place. A strategy call will help you turn that readiness into action.
                  </p>
                  <a href="/book" className="btn-gold" onClick={() => trackCTA("Book a Strategy Call", "score_results_high", "/book")}>Book a Strategy Call →</a>
                </div>
              )}
              {getLevel() === "mid" && (
                <div>
                  <h3 className="heading-display text-2xl text-primary-foreground mb-4">
                    You're building momentum.
                  </h3>
                  <p className="font-body text-sm text-primary-foreground/70 mb-8 leading-relaxed">
                    Check your inbox for a follow-up series with targeted insights to help strengthen your weakest Foundation.
                  </p>
                  <a href="/program" className="btn-gold" onClick={() => trackCTA("Learn About ON", "score_results_mid", "/program")}>Learn About Founder ON™ →</a>
                </div>
              )}
              {getLevel() === "low" && (
                <div>
                  <h3 className="heading-display text-2xl text-primary-foreground mb-4">
                    Every founder starts somewhere.
                  </h3>
                  <p className="font-body text-sm text-primary-foreground/70 mb-8 leading-relaxed">
                    We've sent you resources tailored to your current stage. Start with Clarity, it changes everything else.
                  </p>
                  <a href="/about" className="btn-outline-light" onClick={() => trackCTA("Learn About Thriving Founder", "score_results_low", "/about")}>Learn About Thriving Founder™ →</a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScoreAssessmentSection;
