import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomCTASection from "@/components/BottomCTASection";
import { trackCTA } from "@/lib/gtag";
import aaronWorkingImg from "@/assets/angelina-sarycheva-a_DSYLkr9tc-unsplash.webp";
import gridPhoto1 from "@/assets/natalia-blauth-QJWcEnP9x10-unsplash.webp";
import gridPhoto2 from "@/assets/getty-images-dXR_QCJtQII-unsplash.webp";
import gridPhoto3 from "@/assets/molly-the-cat-TS4TIXJHmtc-unsplash.jpg";
import gridPhoto4 from "@/assets/Daylight studio Amsterdam for female entrepreneurs, coaches and creatives_.jpeg";
import gridPhoto5 from "@/assets/molly-the-cat-qP_ezdWEQEs-unsplash.jpg";
import gridPhoto6 from "@/assets/curated-lifestyle-d8FV5wLz8x4-unsplash.jpg";
import gridPhoto7 from "@/assets/getty-images--Z4GFAQ1HvA-unsplash.webp";
import gridPhoto8 from "@/assets/a-c-9jHHifbZlvg-unsplash.webp";
import premiumBgImg from "@/assets/tuvalum-kwlcKkMoPZU-unsplash.webp";
import blairPortraitImg from "@/assets/brooke-cagle-Ffh5_aiqUT0-unsplash.webp";
import foundersDuoImg from "@/assets/daiga-ellaby-yJ2KtO6Gwkk-unsplash.webp";
import pillarStrategyImg from "@/assets/getty-images-VMDKeRO351c-unsplash.webp";
import pillarFounderImg from "@/assets/rodrigo-rodrigues-wolf-r-t-_hvCRGeNrFo-unsplash.webp";
import pillarExecutionImg from "@/assets/paolo-resteghini-ZTooTRx5B_k-unsplash.webp";
import ctaBgImg from "@/assets/michael-t-_1Pmhe5ozNA-unsplash.webp";
import bannerBgImg from "@/assets/samsung-memory-m14vUTPKEEA-unsplash.webp";
import jamesImg from "@/assets/james-mcmillen.png";
import danImg from "@/assets/dan-fox.png";

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

const BulletMuted = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-4">
    <span
      aria-hidden
      className="flex-shrink-0 flex items-center justify-center rounded-full"
      style={{
        width: "1rem",
        height: "1rem",
        marginTop: "0.45rem",
        border: "1.5px solid hsl(var(--charcoal) / 0.35)",
      }}
    >
      <span
        className="rounded-full"
        style={{
          width: "0.4rem",
          height: "0.4rem",
          backgroundColor: "hsl(var(--charcoal) / 0.35)",
        }}
      />
    </span>
    <p className="font-body text-lg md:text-xl text-charcoal/70 leading-relaxed">
      {children}
    </p>
  </div>
);

const gridPhotos = [gridPhoto3, gridPhoto1, gridPhoto5, gridPhoto7, gridPhoto4, gridPhoto2, gridPhoto8, gridPhoto6];

const HeroPhotoGrid = () => (
  <section className="w-full">
    <div className="grid grid-cols-4 md:grid-cols-8">
      {gridPhotos.map((src, i) => (
        <img key={i} src={src} alt="" loading="lazy" className="w-full h-full object-cover block" style={{ aspectRatio: "3 / 4", borderRadius: 0 }} />
      ))}
    </div>
  </section>
);

const stages = [
  {
    label: "01",
    name: "Empower",
    heading: "We clarify the vision, truth, and foundations.",
    body: "This is where we assess where you are, what you are building, what is misaligned, and what must become clear before deeper execution begins.",
  },
  {
    label: "02",
    name: "Build",
    heading: "We shape the business model, offer, positioning, brand, and strategic architecture.",
    body: "This is where your expertise begins to take form as a real business with a clear market position, stronger message, and more professional foundation.",
  },
  {
    label: "03",
    name: "Operate",
    heading: "We develop the systems, structure, decision-making, and leadership required to run well.",
    body: "This is where the business becomes more than an idea or launch project. It begins to operate with clearer priorities, stronger rhythm, and more grounded founder leadership.",
  },
  {
    label: "04",
    name: "Thrive",
    heading: "We refine for growth, freedom, sustainability, and long-term success.",
    body: "This is where the business is prepared to support the life it was built to serve, with more clarity, autonomy, and capacity for what comes next.",
  },
];

const forItems = [
  "You have real expertise and want to turn it into a thriving business",
  "You want more freedom, but not at the cost of instability",
  "You are tired of fragmented approaches to entrepreneurship",
  "You want both strategic depth and execution support",
  "You are ready to invest in building something properly",
  "You want a business that supports your life instead of consuming it",
];

const notForItems = [
  "You are looking for a low-cost course or template library",
  "You want motivation without implementation",
  "You are not ready to make decisions or take ownership",
  "You want quick tactics instead of foundational business-building",
  "You are not interested in the founder development required to sustain the business",
  "You want someone else to build everything without your active participation",
];

const transformations = [
  { name: "Clarity", from: "scattered", to: "strategic", body: "You know what you are building, who you serve, and what deserves your focus, so you can move with conviction." },
  { name: "Capacity", from: "overwhelmed", to: "grounded", body: "You build the leadership, structure, and steadiness to move forward without constantly running from urgency, so you can actually enjoy building." },
  { name: "Confidence", from: "self-doubt", to: "self-trust", body: "You strengthen your decision-making, visibility, and ability to lead, so you can show up more fully as the founder you are becoming." },
  { name: "Cashflow", from: "financial uncertainty", to: "clearer commercial thinking", body: "You develop a stronger relationship with revenue, pricing, and value, so you can make better decisions as your business grows." },
  { name: "Integration", from: "fragmented", to: "whole", body: "The business and the founder stop feeling separate. The work becomes more aligned with who you are, how you lead, and the life you are trying to create." },
];

function StageScrollItem({ stage, index }: { stage: typeof stages[number]; index: number }) {
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
      className="flex flex-col justify-center"
      style={{ paddingTop: index === 0 ? "30vh" : "2rem", minHeight: "40vh" }}
    >
      <div
        style={{
          opacity: visible ? 1 : 0.15,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">{stage.label}</p>
        <h3 className="heading-display text-3xl md:text-4xl text-navy mb-3">{stage.name}</h3>
        <p className="font-body text-lg md:text-xl font-semibold text-charcoal leading-relaxed mb-2">{stage.heading}</p>
        <p className="font-body text-lg md:text-xl text-charcoal/75 leading-relaxed" style={{ maxWidth: "33rem" }}>{stage.body}</p>
      </div>
    </div>
  );
}

const FounderON = () => {
  return (
    <>
    <div className="min-h-screen relative z-10 bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="section-navy pt-40 pb-12 md:pt-48 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-4 select-none flex flex-col items-center relative">
            <span
              className="relative"
              style={{
                fontFamily: "'Figtree', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(1.25rem, 3.4vw, 2.85rem)",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "hsl(var(--gold))",
                marginBottom: "-0.3em",
                marginRight: "-0.22em",
              }}
            >
              Founder
              <span
                className="absolute"
                style={{
                  top: "-0.2em",
                  right: "-0.9em",
                  fontSize: "0.4em",
                  fontWeight: 600,
                  letterSpacing: 0,
                }}
              >
                ™
              </span>
            </span>
            <span
              style={{
                fontFamily: "'Figtree', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(5rem, 14vw, 12rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                WebkitTextStroke: "4px hsl(var(--gold))",
                color: "transparent",
              }}
            >
              ON
            </span>
          </div>
          <p className="heading-display text-3xl md:text-4xl text-primary-foreground mb-6">
            Build the business and the founder required to thrive.
          </p>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto mb-6">
            Founder ON™ is a proprietary 24-week founder development and business execution process for capable professionals ready to turn their expertise into a fully operational business, and become the founder required to lead it.
          </p>
          <a
            href="/founder-freedom-score"
            className="btn-gold"
            onClick={() => trackCTA("Discover Your Founder Freedom Score", "founder_on_hero")}
          >
            Discover Your Founder Freedom Pattern →
          </a>
        </div>
      </section>

      <HeroPhotoGrid />

      {/* Statement */}
      <section className="bg-card py-16 md:py-20 px-6 text-center">
        <p className="font-body text-xl md:text-2xl text-charcoal/80 leading-relaxed max-w-5xl mx-auto" style={{ textWrap: "balance" }}>
          This is not a course, a loose coaching container, or a stack of disconnected services. It is an integrated build partnership designed to bring strategy, founder development, and expert-led production into one coherent path.
        </p>
      </section>

      {/* ── WHAT FOUNDER ON IS ── */}
      <section className="bg-card pt-12 md:pt-16 pb-24 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="w-full">
            <img src={aaronWorkingImg} alt="Founder at work" loading="lazy" className="w-full object-cover aspect-[4/5]" style={{ transform: "scaleX(-1)" }} />
          </div>
          <div>
            <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
              What Founder ON™ Is
            </p>
            <h2 className="heading-display text-4xl md:text-5xl text-navy mb-8">
              Thriving Founder's flagship business-building experience.
            </h2>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
              It was created for capable professionals who have real expertise, but need the structure, strategy, support, and execution path to turn that expertise into a business that actually works.
            </p>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
              Most entrepreneurial paths are fragmented. One person gives you mindset. Another gives you strategy. Another gives you a website. Another gives you marketing. You are left trying to assemble a business, a brand, an offer, a revenue model, and a new founder identity on your own.
            </p>
            <p className="font-body text-lg md:text-xl font-bold text-charcoal leading-relaxed mb-6">
              Founder ON™ solves that by bringing the work together.
            </p>
            <div className="flex flex-col gap-3">
              <Bullet>It develops the business.</Bullet>
              <Bullet>It develops the founder.</Bullet>
              <Bullet>And it helps build the foundations for a business that supports more freedom, mastery, and long-term sustainability.</Bullet>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 4-STAGE PROCESS ── */}
      <section className="section-offwhite py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Sticky left column */}
            <div className="md:sticky md:top-28 self-start">
              <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
                The 4-Stage Process
              </p>
              <h2 className="heading-display text-4xl md:text-5xl text-navy mb-8" style={{ textWrap: "balance" }}>
                Founder ON™ moves through four stages.
              </h2>
              <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed" style={{ textWrap: "balance" }}>
                Each stage develops both the business and the founder required to lead it.
              </p>
            </div>

            {/* Scrolling right column */}
            <div className="flex flex-col gap-12 md:gap-16">
              {stages.map((s, i) => (
                <StageScrollItem key={i} stage={s} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW FOUNDER ON IS DELIVERED ── */}
      <section className="bg-card py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
              How Founder ON™ Is Delivered
            </p>
            <h2 className="heading-display text-4xl md:text-5xl text-navy mb-8">
              Three pillars of delivery.
            </h2>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed" style={{ textWrap: "balance" }}>
              The four stages create the journey. The three delivery pillars explain how the work is delivered.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 md:gap-12 items-stretch">
            {[
              { name: "Strategic Advisory", body: "We clarify the business model, offer, positioning, growth direction, and key decisions required to build with confidence. This is where we make the business sharper, more focused, and easier to explain, sell, and grow.", img: pillarStrategyImg },
              { name: "Founder Development", body: "We strengthen the leadership, self-trust, resilience, decision-making, and internal standards required to sustain what you are building. This is where the founder grows alongside the business, because the business can only mature as far as the founder is willing and able to lead.", img: pillarFounderImg },
              { name: "Expert-Led Production", body: "We help turn strategy into tangible assets, brand, website, messaging, and foundational systems, so the business is not left at the idea stage. This is where the work becomes real, visible, and usable.", img: pillarExecutionImg },
            ].map((p, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg" style={{ minHeight: "420px" }}>
                {/* Photo shown by default */}
                <img
                  src={p.img}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {/* Overlay with title on photo */}
                <div className="absolute inset-0 bg-navy/40 transition-opacity duration-500 group-hover:opacity-0" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 transition-opacity duration-500 group-hover:opacity-0">
                  <h3 className="heading-display text-2xl md:text-3xl text-primary-foreground">{p.name}</h3>
                </div>
                {/* Text revealed on hover */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="heading-display text-2xl md:text-3xl text-navy mb-4">{p.name}</h3>
                  <p className="font-body text-base md:text-lg text-charcoal/80 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU BUILD ── */}
      <section className="section-offwhite py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
              What You Build
            </p>
            <h2 className="heading-display text-4xl md:text-5xl text-navy mb-8" style={{ textWrap: "balance" }}>
              You are not leaving with inspiration.
            </h2>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed" style={{ textWrap: "balance" }}>
              We are building a real functioning business, with the structure, assets, and systems required to move forward with confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            {[
              { name: "A Clear Business Foundation", body: "A clarified business model, offer structure, positioning, pricing strategy, and path to revenue." },
              { name: "A Professional Brand and Digital Presence", body: "Brand direction, website presence, messaging, and core marketing assets that reflect the quality of your work." },
              { name: "Systems for Growth and Delivery", body: "Sales structure, client journey, onboarding flow, visibility rhythm, and foundational operating systems." },
              { name: "Founder Operating Tools", body: "Practical frameworks for decision-making, priorities, execution, and staying focused as the business develops." },
              { name: "Readiness Across the Four C's", body: "Greater Clarity, Capacity, Confidence, and Cashflow, so the business is not only launched, but supported." },
            ].map((d, i) => (
              <div key={i} className="bg-card rounded-lg p-6 md:p-8">
                <h3 className="heading-display text-xl md:text-2xl text-navy mb-3">{d.name}</h3>
                <p className="font-body text-base md:text-lg text-charcoal/80 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YOUR TRANSFORMATION ── */}
      <section className="bg-card py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            Your Transformation
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-6">
            Beyond the assets, a deeper shift.
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-12">
            Founder ON™ is designed to create a deeper shift in how you build, lead, make decisions, and live.
          </p>
          <div className="flex flex-col gap-10">
            {transformations.map((t, i) => (
              <div key={i} className="border-l-2 border-gold pl-6 md:pl-8" style={{ marginLeft: "4rem" }}>
                <h3 className="heading-display text-2xl md:text-3xl text-navy mb-2">{t.name}</h3>
                <p className="font-body text-sm text-charcoal/50 mb-3">
                  From {t.from} to {t.to}.
                </p>
                <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed" style={{ maxWidth: "40rem" }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW THE EXPERIENCE WORKS ── */}
      <section className="section-offwhite py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            How the Experience Works
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-8">
            A 24-week premium build partnership.
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
            The experience combines strategic sessions, founder development, and creative production support. You are guided through the major decisions, structures, and assets required to build the business with more clarity and momentum.
          </p>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
            This is not a passive course or a set of templates. It is an active build process.
          </p>
          <div className="flex flex-col gap-3 mb-8">
            <Bullet>You bring your expertise, vision, and commitment.</Bullet>
            <Bullet>We bring structure, strategy, coaching depth, and production support.</Bullet>
          </div>
          <p className="font-body text-base text-charcoal/60 leading-relaxed mb-10">
            The exact rhythm and scope are discussed during the Founder Freedom Pattern review or strategy call, based on your goals, stage, and build needs.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {stages.map((s, i) => (
              <div key={i} className="bg-card rounded-lg p-5 text-center">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-2">{s.label}</p>
                <h4 className="heading-display text-xl text-navy mb-2">{s.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATEMENT BANNER ── */}
      <section className="relative py-20 md:py-24 px-6 overflow-hidden">
        <div aria-hidden className="absolute inset-0" style={{ backgroundImage: `url(${bannerBgImg})`, backgroundSize: "cover", backgroundPosition: "center 40%" }} />
        <div aria-hidden className="absolute inset-0" style={{ backgroundColor: "hsl(var(--navy) / 0.75)" }} />
        <div className="relative max-w-6xl mx-auto text-left">
          <h3 className="heading-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground max-w-2xl" style={{ textWrap: "balance" }}>
            The goal is not just to launch your business.
          </h3>
          <p className="font-body text-xl md:text-2xl text-primary-foreground/85 leading-relaxed max-w-md ml-auto mt-16 md:mt-32" style={{ textWrap: "balance" }}>
            The goal is a business you can actually lead, grow, and sustain.
          </p>
        </div>
      </section>

      {/* ── BUILT WITH CREATIVE SUPPORT ── */}
      <section className="bg-card py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
              Built With Creative and Production Support
            </p>
            <h2 className="heading-display text-4xl md:text-5xl text-navy mb-8">
              Founder ON™ is not just guidance.
            </h2>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
              Blair Owens and the production team help translate strategy into real brand, website, and marketing assets, so your business is not left at the idea stage.
            </p>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
              That means the build is supported by both strategic direction and creative execution, helping your business feel clear, credible, and ready to be seen.
            </p>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
              Your brand identity, website presence, messaging, social media system, and marketing assets are not treated as templates. They are built from the strategy, vision, and positioning developed through the process.
            </p>
          </div>
          <div className="w-full">
            <img src={blairPortraitImg} alt="Creative production support" loading="lazy" className="w-full object-cover aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* ── WHO IT IS FOR / NOT FOR ── */}
      <section className="section-offwhite py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
              Who Founder ON™ Is For
            </p>
            <h3 className="heading-display text-3xl md:text-4xl text-navy mb-6">
              For capable professionals ready to build at a higher level.
            </h3>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-8">
              This is likely for you if:
            </p>
            <div className="flex flex-col gap-5">
              {forItems.map((t, i) => (<Bullet key={i}>{t}</Bullet>))}
            </div>
          </div>
          <div>
            <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
              Who Founder ON™ Is Not For
            </p>
            <h3 className="heading-display text-3xl md:text-4xl text-navy mb-6">
              Founder ON™ is not for everyone.
            </h3>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-8">
              It is likely not the right fit if:
            </p>
            <div className="flex flex-col gap-5">
              {notForItems.map((t, i) => (<BulletMuted key={i}>{t}</BulletMuted>))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INVESTMENT ── */}
      <section className="bg-card py-24 md:py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            Investment
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-10" style={{ textWrap: "balance" }}>
            Founder ON™ is a premium 24-week partnership.
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed" style={{ textWrap: "balance" }}>
            Investment is discussed on our first strategy call so we can understand your goals, stage, and fit before recommending the right path forward.
          </p>
        </div>
      </section>

      {/* ── PROOF ── */}
      <section className="section-offwhite py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            Proof
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-6">
            Built for founders who want more than advice.
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-16">
            Founder ON™ is designed for people who are ready to build something real, with more clarity, structure, and support than fragmented entrepreneurship usually provides.
          </p>

          <div className="flex flex-col gap-16">
            {/* James */}
            <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden flex-shrink-0">
                <img src={jamesImg} alt="James McMillen" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="border-l-2 border-gold pl-6 md:pl-8 mb-4">
                  <p className="font-body text-lg md:text-xl text-charcoal/85 leading-relaxed italic">
                    "Working with Aaron helped me turn the vision for The Vital Man into a clear, structured business and brand. I had the ideas, experience, and desire to serve, but needed help shaping it into a functioning business. Aaron helped me clarify the offer, define the audience, develop the brand, organize the growth strategy, and build the foundations to move forward with confidence. What stood out most was his ability to support both the practical side of business building and me as a founder. The process gave me structure, direction, and momentum, and helped me step more fully into this next stage on my entrepreneurial journey."
                  </p>
                </div>
                <p className="font-body text-lg font-semibold text-charcoal pl-6 md:pl-8">James McMillen</p>
                <p className="font-body text-base text-charcoal/60 pl-6 md:pl-8">Author and Founder of The Vital Man & Landscapes in Bloom</p>
              </div>
            </div>

            {/* Dan */}
            <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden flex-shrink-0">
                <img src={danImg} alt="Dan Fox" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="border-l-2 border-gold pl-6 md:pl-8 mb-4">
                  <p className="font-body text-lg md:text-xl text-charcoal/85 leading-relaxed italic">
                    "Aaron has supported me through multiple stages of building Dan Fox Coaching, helping me grow the business while also developing as a coach, entrepreneur, and leader. Over the course of our work together, he has helped me design my offers, build my brand, develop key business assets, and bring more clarity, structure, and direction to the business as it has evolved. What I value most is that Aaron understands the business and the founder grow together. Our work has helped me step forward with greater clarity and confidence in business."
                  </p>
                </div>
                <p className="font-body text-lg font-semibold text-charcoal pl-6 md:pl-8">Dan Fox</p>
                <p className="font-body text-base text-charcoal/60 pl-6 md:pl-8">Founder, Dan Fox Coaching</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-24 md:py-32 px-6 text-center overflow-hidden">
        <div aria-hidden className="absolute inset-0" style={{ backgroundImage: `url(${ctaBgImg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div aria-hidden className="absolute inset-0" style={{ backgroundColor: "hsl(var(--navy) / 0.8)" }} />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="heading-display text-4xl md:text-5xl text-primary-foreground mb-8">
            Ready to build with real support?
          </h2>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-6" style={{ textWrap: "balance" }}>
            Begin with the Founder Freedom Pattern to see where you stand across Clarity, Capacity, Cashflow, and Confidence.
          </p>
          <p className="font-body text-base text-primary-foreground/60 leading-relaxed mb-10" style={{ textWrap: "balance" }}>
            If there is strong alignment, the next step is a strategy call to explore whether Founder ON™ is the right fit for this stage of your business and life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/founder-freedom-score"
              className="btn-gold"
              onClick={() => trackCTA("Discover Your Founder Freedom Score", "founder_on_final_cta")}
            >
              Discover Your Founder Freedom Pattern →
            </a>
            <a href="/book" className="btn-outline-light" onClick={() => trackCTA("Apply for Founder ON", "founder_on_final_cta", "/book")}>
              Apply for Founder ON™ →
            </a>
          </div>
        </div>
      </section>

    </div>
    <Footer />
    </>
  );
};

export default FounderON;
