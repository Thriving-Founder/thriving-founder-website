import { useScrollReveal } from "@/hooks/useScrollReveal";
import GoldLineIcon from "@/components/GoldLineIcon";

const phases = [
{
  icon: "empower" as const,
  name: "EMPOWER",
  weeks: "Weeks 1–4",
  question: "Who am I as a founder, and what does freedom actually look like?",
  description:
  "The first phase is about clarity. Before building anything, you need to understand who you are, what you want, and what's been holding you back.",
  happens: [
  "Deep-dive discovery sessions to uncover values, strengths, and vision",
  "Founder Reset Sessions to clear mental blocks and restore focus",
  "Personal brand narrative development"],

  built: [
  "Foundation Profile",
  "Personal Vision & Values document",
  "Founder identity framework"],

  milestones: ["Foundation Profile Complete (Week 1)", "Personal Vision & Values Locked (Week 4)"]
},
{
  icon: "build" as const,
  name: "BUILD",
  weeks: "Weeks 5–10",
  question: "What am I offering, and how do I present it to the world?",
  description:
  "With your foundation set, we design and validate your offer, then co-build the brand and digital presence that brings it to life.",
  happens: [
  "Ideal client profile and offer design workshops",
  "Brand identity co-creation with the production team",
  "Website design and development alongside the client"],

  built: [
  "ICP & Offer framework",
  "Full brand identity (logo, palette, guidelines)",
  "Professional website with booking system"],

  milestones: ["ICP & Offer Finalized (Week 7)", "Brand Identity Live (Week 9)"]
},
{
  icon: "operate" as const,
  name: "OPERATE",
  weeks: "Weeks 11–18",
  question: "How do I get clients, and deliver consistently?",
  description:
  "This is where you go live. We build your acquisition engine, launch your marketing, and help you enroll your first client.",
  happens: [
  "Marketing system setup (email, social, content)",
  "Client acquisition strategy and execution",
  "Delivery system design and documentation"],

  built: [
  "Live website and booking system",
  "Email sequences and lead generation tools",
  "Client delivery infrastructure"],

  milestones: [
  "Website & Booking System Live (Week 12)",
  "First Client Enrolled (Week 16–20)",
  "Operational Systems Complete (Week 18)"]

},
{
  icon: "thrive" as const,
  name: "THRIVE",
  weeks: "Weeks 19–24",
  question: "How do I scale, without losing myself?",
  description:
  "With your business running, we optimize, document, and build the growth plan that lets you scale sustainably.",
  happens: [
  "Performance review and optimization",
  "Growth planning and revenue modeling",
  "Leadership development and sustainability design"],

  built: [
  "Growth Plan document",
  "Transformation Scorecard",
  "Post-graduation roadmap"],

  milestones: ["Growth Plan Documented (Week 22)", "Transformation Scorecard Complete (Week 24)"]
}];


const PhaseSection = ({
  phase,
  index



}: {phase: (typeof phases)[0];index: number;}) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const isAlt = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`py-20 md:py-28 px-6 ${isAlt ? "section-offwhite" : "bg-card"}`}>
      
      <div
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        
        {/* Left */}
        <div className="flex flex-col items-start">
          <div className="w-14 h-14 mb-6">
            <GoldLineIcon type={phase.icon} size={56} />
          </div>
          <p className="font-body text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-2">
            {phase.weeks}
          </p>
          <h3 className="heading-display text-3xl md:text-4xl text-navy">
            {phase.name}
          </h3>
        </div>

        {/* Right */}
        <div>
          <p className="font-body text-lg font-semibold text-navy mb-4 italic">
            "{phase.question}"
          </p>
          <p className="font-body text-sm text-charcoal/80 leading-relaxed mb-8">
            {phase.description}
          </p>

          <div className="space-y-6">
            <div>
              <p className="font-body text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-3">
                What Happens
              </p>
              <ul className="space-y-2">
                {phase.happens.map((item, i) =>
                <li key={i} className="font-body text-sm text-charcoal/70 leading-relaxed pl-4 border-l border-gold/30">
                    {item}
                  </li>
                )}
              </ul>
            </div>

            <div>
              <p className="font-body text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-3">
                What Gets Built
              </p>
              <ul className="space-y-2">
                {phase.built.map((item, i) =>
                <li key={i} className="font-body text-sm text-charcoal/70 leading-relaxed pl-4 border-l border-gold/30">
                    {item}
                  </li>
                )}
              </ul>
            </div>

            <div>
              <p className="font-body text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-3">
                Milestones
              </p>
              <ul className="space-y-2">
                {phase.milestones.map((item, i) =>
                <li key={i} className="font-body text-sm text-navy font-medium leading-relaxed pl-4 border-l-2 border-gold">
                    {item}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>);

};

const ProgramONMethodSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section>
      {/* Header */}
      <div className="bg-card py-20 md:py-28 px-6">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          
          

          
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-6">
            The four phases of the Founder ON™ partnership.
          </h2>
          {/* Phase indicator */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {["EMPOWER", "BUILD", "OPERATE", "THRIVE"].map((name, i) =>
            <span key={name} className="flex items-center gap-3">
                <span className="font-body text-xs font-semibold tracking-[0.2em] text-navy/60 uppercase">
                  {name}
                </span>
                {i < 3 &&
              <span className="text-gold text-sm">→</span>
              }
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Phases */}
      {phases.map((phase, i) =>
      <PhaseSection key={phase.name} phase={phase} index={i} />
      )}
    </section>);

};

export default ProgramONMethodSection;