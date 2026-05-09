import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import KnowingSection from "@/components/KnowingSection";
import PhotoVideoSection from "@/components/PhotoVideoSection";
import ExpertiseRequiresSection from "@/components/ExpertiseRequiresSection";
import FounderONProcessSection from "@/components/FounderONProcessSection";
import FreedomMasterySection from "@/components/FreedomMasterySection";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";
import MoreLifeCTASection from "@/components/MoreLifeCTASection";
import Footer from "@/components/Footer";
import pillarStrategyImg from "@/assets/getty-images-VMDKeRO351c-unsplash.webp";
import pillarFounderImg from "@/assets/rodrigo-rodrigues-wolf-r-t-_hvCRGeNrFo-unsplash.webp";
import pillarExecutionImg from "@/assets/paolo-resteghini-ZTooTRx5B_k-unsplash.webp";
import danImg from "@/assets/dan-fox.png";
import antoineImg from "@/assets/antoine-vaillant.jpeg";
import michaelImg from "@/assets/michael-sanders.png";
import jamesImg from "@/assets/james-mcmillen.png";

const TestimonialCard = ({ quote, name, role, image }: { quote: string; name: string; role: string; image: string }) => (
  <div>
    <div className="border-l-2 border-gold pl-6 md:pl-8 mb-8">
      <p className="font-body text-lg md:text-xl text-charcoal/85 leading-relaxed italic">
        "{quote}"
      </p>
    </div>
    <div className="flex items-center gap-4 pl-6 md:pl-8">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="font-body text-xl font-semibold text-charcoal">{name}</p>
        <p className="font-body text-base text-charcoal/60">{role}</p>
      </div>
    </div>
  </div>
);

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

const transformations = [
  { name: "Clarity", from: "scattered", to: "strategic", body: "You know what you are building, who you serve, and what deserves your focus, so you can move with conviction." },
  { name: "Capacity", from: "overwhelmed", to: "grounded", body: "You build the leadership, structure, and steadiness to move forward without constantly running from urgency, so you can actually enjoy building." },
  { name: "Confidence", from: "self-doubt", to: "self-trust", body: "You strengthen your decision-making, visibility, and ability to lead, so you can show up more fully as the founder you are becoming." },
  { name: "Cashflow", from: "financial uncertainty", to: "clearer commercial thinking", body: "You develop a stronger relationship with revenue, pricing, and value, so you can make better decisions about growth." },
  { name: "Integration", from: "fragmented", to: "whole", body: "The business and the founder stop feeling separate. The work becomes more aligned with who you are, how you lead, and the life you are trying to create." },
];

function RevealBox({ children, className, delay = 0, style }: { children: React.ReactNode; className?: string; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function DeliverableScrollItem({ item, index }: { item: { name: string; body: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-card rounded-lg p-6 md:p-8"
      style={{
        opacity: visible ? 1 : 0.15,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        marginTop: index === 0 ? "35vh" : undefined,
      }}
    >
      <h3 className="heading-display text-xl md:text-2xl text-navy mb-3">{item.name}</h3>
      <p className="font-body text-base md:text-lg text-charcoal/80 leading-relaxed">{item.body}</p>
    </div>
  );
}

const Index = () => {
  return (
    <>
    <div className="min-h-screen relative z-10 bg-background">
      <Navbar />

      {/* 1. HERO — Stay the Same */}
      <HeroSection />

      {/* 2. PROBLEM — Stay the Same */}
      <KnowingSection />
      <PhotoVideoSection />
      <ExpertiseRequiresSection />

      {/* 3. ON INTRO + 4. THE 4 STAGES — Stay the Same */}
      <FounderONProcessSection />

      {/* 5. 3 DELIVERY PILLARS */}
      <section className="bg-card py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
              The Founder ON™ Journey
            </p>
            <h2 className="heading-display text-4xl md:text-5xl text-navy mb-8" style={{ textWrap: "balance" }}>
              Three pillars of delivery.
            </h2>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed" style={{ textWrap: "balance" }}>
              The four stages create the journey. The three delivery pillars explain how the work is delivered.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 md:gap-12 items-stretch">
            {[
              { name: "Strategic Advisory", body: "We clarify the business model, offer, positioning, growth direction, and key decisions required to build with confidence.", img: pillarStrategyImg },
              { name: "Founder Development", body: "We strengthen the leadership, self-trust, resilience, decision-making, and internal standards required to sustain what you are building.", img: pillarFounderImg },
              { name: "Expert-Led Production", body: "We help turn strategy into tangible assets, brand, website, messaging, and foundational systems, so the business is not left at the idea stage.", img: pillarExecutionImg },
            ].map((p, i) => (
              <RevealBox key={i} className="group relative overflow-hidden rounded-lg" delay={i * 0.15} style={{ minHeight: "420px" }}>
                <img src={p.img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
                <div className="absolute inset-0 bg-navy/40 transition-opacity duration-500 group-hover:opacity-0" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 transition-opacity duration-500 group-hover:opacity-0">
                  <h3 className="heading-display text-2xl md:text-3xl text-primary-foreground" dangerouslySetInnerHTML={{ __html: p.name.replace(" ", "<br />") }} />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="heading-display text-2xl md:text-3xl text-navy mb-4" dangerouslySetInnerHTML={{ __html: p.name.replace(" ", "<br />") }} />
                  <p className="font-body text-base md:text-lg text-charcoal/80 leading-relaxed">{p.body}</p>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT YOU BUILD / KEY DELIVERABLES */}
      <section className="section-offwhite py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Sticky left column */}
            <div className="md:sticky md:top-28 self-start">
              <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
                What We Build Together
              </p>
              <h2 className="heading-display text-4xl md:text-5xl text-navy mb-8" style={{ textWrap: "balance" }}>
                Inside Founder ON™, the work becomes tangible.
              </h2>
              <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed" style={{ textWrap: "balance" }}>
                You are not leaving with inspiration alone. You are building a real business, and becoming the founder capable of leading it.
              </p>
            </div>

            {/* Scrolling right column */}
            <div className="flex flex-col gap-8">
              {[
                { name: "A Clear Business Foundation", body: "A clarified business model, offer structure, positioning, pricing strategy, and path to revenue." },
                { name: "A Professional Brand and Digital Presence", body: "Brand direction, website and social presence, messaging, and core marketing assets that reflect the quality of your work." },
                { name: "Systems for Growth and Delivery", body: "Sales structure, client journey, onboarding flow, visibility rhythm, and foundational operating systems." },
                { name: "Strength Across the Four C's", body: "Greater Clarity, Capacity, Confidence, and Cashflow, so the business is not only launched, but better supported." },
                { name: "Founder Capability and Life Alignment", body: "Stronger decision-making, self-trust, leadership capacity, and a business designed to support more freedom in how you work, earn, and live." },
              ].map((d, i) => (
                <DeliverableScrollItem key={i} item={d} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUTCOMES / TRANSFORMATION */}
      <section className="bg-card py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
              Your Transformation
            </p>
            <h2 className="heading-display text-4xl md:text-5xl text-navy mb-6" style={{ textWrap: "balance" }}>
              Beyond the assets, a deeper shift.
            </h2>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed" style={{ textWrap: "balance" }}>
              Founder ON™ is designed to create a deeper shift in how you build, lead, operate, and live.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {/* Row 1: Clarity + Capacity */}
            <RevealBox className="rounded-xl p-8 md:p-10 border border-border bg-off-white" delay={0}>
              <h3 className="heading-display text-2xl md:text-3xl text-navy mb-2">{transformations[0].name}</h3>
              <p className="font-body text-sm text-charcoal/50 mb-3">From {transformations[0].from} to {transformations[0].to}.</p>
              <p className="font-body text-base text-charcoal/80 leading-relaxed">{transformations[0].body}</p>
            </RevealBox>
            <RevealBox className="rounded-xl p-8 md:p-10 border border-border bg-off-white" delay={0.15}>
              <h3 className="heading-display text-2xl md:text-3xl text-navy mb-2">{transformations[1].name}</h3>
              <p className="font-body text-sm text-charcoal/50 mb-3">From {transformations[1].from} to {transformations[1].to}.</p>
              <p className="font-body text-base text-charcoal/80 leading-relaxed">{transformations[1].body}</p>
            </RevealBox>
            {/* Row 2: Confidence + Cashflow */}
            <RevealBox className="rounded-xl p-8 md:p-10 border border-border bg-off-white" delay={0.1}>
              <h3 className="heading-display text-2xl md:text-3xl text-navy mb-2">{transformations[2].name}</h3>
              <p className="font-body text-sm text-charcoal/50 mb-3">From {transformations[2].from} to {transformations[2].to}.</p>
              <p className="font-body text-base text-charcoal/80 leading-relaxed">{transformations[2].body}</p>
            </RevealBox>
            <RevealBox className="rounded-xl p-8 md:p-10 border border-border bg-off-white" delay={0.25}>
              <h3 className="heading-display text-2xl md:text-3xl text-navy mb-2">{transformations[3].name}</h3>
              <p className="font-body text-sm text-charcoal/50 mb-3">From {transformations[3].from} to {transformations[3].to}.</p>
              <p className="font-body text-base text-charcoal/80 leading-relaxed">{transformations[3].body}</p>
            </RevealBox>
            {/* Row 3: Integration — full width */}
            <RevealBox className="md:col-span-2 rounded-xl p-8 md:p-10 text-center bg-off-white border-4 border-gold" delay={0.2}>
              <h3 className="heading-display text-2xl md:text-3xl text-navy mb-2">{transformations[4].name}</h3>
              <p className="font-body text-sm text-charcoal/50 mb-3">From {transformations[4].from} to {transformations[4].to}.</p>
              <p className="font-body text-base text-charcoal/80 leading-relaxed max-w-2xl mx-auto">{transformations[4].body}</p>
            </RevealBox>
          </div>

          <div className="mt-12 text-center">
            <a href="/results" className="btn-gold">Explore Results →</a>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS / PROOF */}
      <section className="section-offwhite py-24 md:py-32 px-6">
        <h2 className="heading-display text-4xl md:text-5xl text-navy mb-16 max-w-4xl mx-auto" style={{ textWrap: "balance" }}>
          From Scattered Expertise to a Thriving Business
        </h2>
        <div className="max-w-4xl mx-auto flex flex-col gap-16 md:gap-20">
          <TestimonialCard
            quote="Aaron has supported me through building Dan Fox Coaching, helping me grow the business while also developing as a coach, entrepreneur, and leader. What I value most is that Aaron understands the business and the founder grow together. Our work has helped me move forward with greater clarity, confidence, and direction as a business owner."
            name="Dan Fox"
            role="Canadian Actor & Founder, Dan Fox Coaching"
            image={danImg}
          />
          <TestimonialCard
            quote="Working with Aaron helped me turn the vision for The Vital Man into a clear, structured business and brand. I had the ideas, experience, and desire to serve, but needed help shaping them into a functioning business. Aaron helped me clarify the offer, define the audience, develop the brand, organize the growth strategy, and build the foundations to move forward with confidence. What stood out most was his ability to support both the practical side of business building and me as a founder. The process gave me structure, direction, and momentum, and helped me step more fully into the next stage of my entrepreneurial journey."
            name="James McMillen"
            role="Author and Founder of The Vital Man & Landscapes in Bloom"
            image={jamesImg}
          />
          <TestimonialCard
            quote="When I started working with Aaron, I was rebuilding. His expertise, presence and mentorship became a constant through that process. I overcame addiction, rebuilt myself and my career, returned to professional bodybuilding, competed at Mr. Olympia twice, and am now stepping into a new chapter as a husband, father, and entrepreneur."
            name="Antoine Vaillant"
            role="IFBB Professional Bodybuilder, Entrepreneur"
            image={antoineImg}
          />
          <TestimonialCard
            quote="Aaron supported me through an important season as a founder, helping me navigate the immense pressures of leadership, scaling, transition, and the deeper process of coming into greater personal alignment. He brings a rare ability to hold both the strategic and deeply human sides of entrepreneurship, while understanding that how we build is inseparable from how we live. Our work created space for honest reflection, greater clarity, and more grounded, aligned direction for the next chapter of my life and leadership."
            name="Michael Sanders"
            role="Co-Founder of Sequence, Acquired by Polygon"
            image={michaelImg}
          />
        </div>
      </section>

      {/* 9. FREEDOM AND MASTERY — Stay the Same */}
      <FreedomMasterySection />

      {/* 10. WHO THIS IS FOR — Light Update */}
      <WhoThisIsForSection />

      {/* 11. FINAL CTA — Stay the Same */}
      <MoreLifeCTASection />

    </div>
    <Footer />
    </>
  );
};

export default Index;
