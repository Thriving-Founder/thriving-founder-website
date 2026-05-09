import { useEffect, useRef, useState } from "react";
import skyBg from "@/assets/getty-images-peZDxwZ1ZDI-unsplash.jpg";
import phase1Img from "@/assets/getty-images-DAv799uV1HA-unsplash.jpg";
import phase2Img from "@/assets/michael-t-_1Pmhe5ozNA-unsplash.jpg";
import phase3Img from "@/assets/yanhao-fang-RT1MiKWx840-unsplash.jpg";
import phase4Img from "@/assets/getty-images-CPbs-poV1hs-unsplash.jpg";

function OnLogoReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        } else if (entry.boundingClientRect.top > 0) {
          setRevealed(false);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className="absolute select-none leading-none"
      style={{
        bottom: 0,
        right: "0.5rem",
        display: "block",
        fontFamily: "'Figtree', sans-serif",
        fontWeight: 700,
        fontSize: "clamp(7rem, 16vw, 14rem)",
        WebkitTextStroke: "4px hsl(var(--gold))",
        color: "transparent",
        letterSpacing: "-0.04em",
        opacity: revealed ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    >
      ON
      <sup
        style={{
          fontSize: "0.18em",
          fontFamily: "'Figtree', sans-serif",
          fontWeight: 600,
          position: "relative",
          top: "-2.8em",
          marginLeft: "0.1em",
          letterSpacing: 0,
          WebkitTextStroke: "1px hsl(var(--gold))",
          color: "transparent",
        }}
      >
        ™
      </sup>
    </span>
  );
}

const phases = [
  {
    label: "Phase 1",
    name: "Empower",
    body: "Clarify the vision, truth, and foundations.",
    image: phase1Img,
    imagePosition: "center 35%",
  },
  {
    label: "Phase 2",
    name: "Build",
    body: "Shape the business, offer, brand, and strategic architecture.",
    image: phase2Img,
    imagePosition: "center 35%",
  },
  {
    label: "Phase 3",
    name: "Operate",
    body: "Develop the systems, structure, and leadership required to run well.",
    image: phase3Img,
    imagePosition: "center 60%",
  },
  {
    label: "Phase 4",
    name: "Thrive",
    body: "Refine for growth, freedom, sustainability, and long-term success.",
    image: phase4Img,
    imagePosition: "center 48%",
  },
];

function PhaseRow({
  p,
  index,
}: {
  p: (typeof phases)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const section = el.closest("section");
    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const trigger = window.innerHeight * 0.6;
      // Turn gold when row reaches 60% vh
      if (rect.top <= trigger) {
        setInView(true);
      }
      // Reset all when scrolled back above the entire section
      if (section) {
        const sectionRect = section.getBoundingClientRect();
        if (sectionRect.top > window.innerHeight) {
          setInView(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nameColor = inView ? "hsl(var(--gold))" : "";

  return (
    <div
      ref={rowRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border-t border-gold/30 last:border-b overflow-hidden transition-colors duration-500"
    >
      {/* Full-width photo background (fades in on hover, desktop only) */}
      <div
        aria-hidden
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none hidden md:block"
        style={{
          backgroundImage: `url(${p.image})`,
          backgroundSize: "cover",
          backgroundPosition: p.imagePosition || "center",
          opacity: hovered ? 1 : 0,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none hidden md:block"
        style={{
          backgroundColor: "rgba(12, 26, 49, 0.7)",
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Inner constrained content */}
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-[10rem_1fr_auto] grid-cols-[6rem_1fr] gap-8 md:gap-10 lg:gap-16 items-center py-10 md:py-14 px-6">
        {/* Number */}
        <span
          className="block leading-none select-none"
          style={{
            fontFamily: "'Figtree', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(5rem, 10vw, 9rem)",
            WebkitTextStroke: "1.5px hsl(var(--gold))",
            color: "transparent",
            letterSpacing: "-0.04em",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Mobile: name on top, body below / Desktop: body on top, name in right col */}
        <div className="pt-2 md:pt-4">
          <h3 className="heading-display text-3xl mb-3 md:hidden" style={{ color: nameColor || "hsl(var(--primary-foreground))", transition: "color 0.5s ease" }}>
            {p.name}
          </h3>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3 hidden md:block">
            {p.label}
          </p>
          <p className="font-body text-sm md:text-xl text-primary-foreground/80 leading-relaxed md:hidden">
            {p.body}
          </p>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed hidden md:block" style={{ maxWidth: "22rem" }}>
            {p.body}
          </p>
        </div>

        {/* Phase name, desktop only (right column) */}
        <h3 className="heading-display text-3xl md:text-4xl text-left md:min-w-[12rem] hidden md:block" style={{ color: nameColor || "hsl(var(--primary-foreground))", transition: "color 0.5s ease" }}>
          {p.name}
        </h3>
      </div>
    </div>
  );
}

const FounderONProcessSection = () => {
  const photoRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      if (!photoRef.current) return;
      const rect = photoRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh - rect.top) / (vh + rect.height);
      setProgress(p - 0.5);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const empowerOffset = progress * -22;
  const buildOffset = progress * 32;
  const thriveOffset = progress * -14;

  const introRef = useRef<HTMLElement>(null);
  const [introProgress, setIntroProgress] = useState(0);
  const [introVisible, setIntroVisible] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      if (!introRef.current) return;
      const rect = introRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh - rect.top) / (vh + rect.height);
      setIntroProgress(p - 0.5);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const el = introRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntroVisible(true);
        } else if (entry.boundingClientRect.top > 0) {
          setIntroVisible(false);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Big ON introduction */}
      <section
        ref={introRef}
        className="pt-16 md:pt-20 pb-10 md:pb-14 px-6 overflow-hidden"
        style={{ backgroundColor: "#1F3F78" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p
            className="heading-display text-2xl md:text-3xl tracking-[0.3em] uppercase text-white mb-3"
            style={{
              opacity: introVisible ? 1 : 0,
              transform: `translate3d(0, ${introProgress * -20}px, 0)`,
              transition: "opacity 0.8s ease",
              willChange: "transform, opacity",
            }}
          >
            Meet
          </p>
          <p
            className="block"
            style={{
              fontFamily: "'Figtree', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.4rem, 3.8vw, 3.2rem)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "hsl(var(--gold))",
              marginBottom: "-0.3em",
              marginRight: "-0.22em",
              opacity: introVisible ? 1 : 0,
              transition: "opacity 0.8s ease",
            }}
          >
            Founder
          </p>
          <h2
            className="leading-[1.05] mb-0"
            style={{
              fontFamily: "'Figtree', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(8rem, 18vw, 16rem)",
              letterSpacing: "-0.04em",
              WebkitTextStroke: "4px hsl(var(--gold))",
              color: "transparent",
              opacity: introVisible ? 1 : 0,
              transform: `translate3d(0, ${introProgress * 25}px, 0)`,
              transition: "opacity 1s ease 0.4s",
              willChange: "transform, opacity",
            }}
          >
            ON
            <sup
              className="text-base md:text-3xl"
              style={{
                position: "relative",
                top: "-4.5rem",
                marginLeft: "0.05em",
                letterSpacing: 0,
                fontFamily: "'Figtree', sans-serif",
                fontWeight: 600,
                WebkitTextStroke: "1px hsl(var(--gold))",
              }}
            >
              ™
            </sup>
          </h2>
          <p
            className="font-body text-xl md:text-2xl leading-snug max-w-3xl mx-auto"
            style={{
              color: "hsl(0, 0%, 100%, 0.9)",
              opacity: introVisible ? 1 : 0,
              transition: "opacity 1s ease 0.6s",
              textWrap: "balance",
            }}
          >
            Thriving Founder's proprietary 4-stage founder development and business execution process.
          </p>
        </div>
      </section>

      {/* "Designed for capable...", 2-column section */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="grid lg:grid-cols-2 items-stretch">
          <div ref={photoRef} className="relative overflow-hidden" style={{ minHeight: "55vh" }}>
            <img loading="lazy"               src={skyBg}
              alt="A thriving founder at ease"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                borderRadius: 0,
                objectPosition: "center top",
                transform: `translate3d(0, ${progress * 60}px, 0) scale(1.12, 1.12)`,
                willChange: "transform",
              }}
            />

            {/* <OnLogoReveal /> */}
          </div>
          <div className="flex items-end py-10 md:py-16 px-8 md:px-16">
            <p className="font-body text-lg md:text-xl lg:text-2xl leading-relaxed" style={{ color: "#2D2D2D" }}>
              Designed for capable professionals who want more than advice, coaching, or disconnected services. Founder ON™ helps you build a fully operational business, and become the founder required to lead it. Through four stages, Empower, Build, Operate, and Thrive, the process integrates strategy, founder development, and expert-led production into one coherent path.
            </p>
          </div>
        </div>
      </section>

    <section
      className="pt-0 pb-24 md:pb-32"
      style={{ backgroundColor: "#1F3F78" }}
    >
      <div className="flex flex-col">
        {phases.map((p, i) => (
          <PhaseRow key={i} p={p} index={i} />
        ))}
      </div>

      <div className="mt-20 mx-6 md:mx-12 lg:mx-auto max-w-3xl border-2 border-gold/40 bg-gold/10 rounded-lg p-8 md:p-10 relative text-center">
          <span
            aria-hidden
            className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 font-body text-xs tracking-[0.25em] uppercase text-gold"
            style={{ backgroundColor: "#1F3F78" }}
          >
            In other words
          </span>
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-6" style={{ textWrap: "balance" }}>
            This is not a course or a stack of separate services. It is a proprietary process for building the business, developing the founder, and creating a stronger path to freedom, mastery, and a more fully lived life.
          </p>
          <a href="/founder-on" className="btn-gold">Explore Founder ON™ →</a>
        </div>
    </section>
    </>
  );
};

export default FounderONProcessSection;
