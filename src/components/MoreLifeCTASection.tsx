import { useEffect, useRef, useState } from "react";
import ctaImg from "@/assets/samsung-memory-wz8HHE9kBgo-unsplash.webp";

const MoreLifeCTASection = () => {
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

  return (
    <section style={{ backgroundColor: "#FAF8F5" }}>
      <div className="grid md:grid-cols-2 items-stretch">
        <div
          ref={photoRef}
          className="relative min-h-[420px] md:min-h-[560px] overflow-hidden"
        >
          <img loading="lazy"             src={ctaImg}
            alt="A life that feels aligned"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              borderRadius: 0,
              objectPosition: "center 40%",
              transform: `translate3d(0, ${progress * 60}px, 0) scale(-1.12, 1.12)`,
              willChange: "transform",
            }}
          />
        </div>
        <div className="flex flex-col justify-center pt-16 md:pt-24 pb-16 md:pb-20 px-8 md:px-16">
          <h3 className="heading-display text-2xl md:text-3xl text-charcoal mb-8 max-w-xl">
            Ready to build a business that gives you more life, not less?
          </h3>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-10 max-w-xl">
            It takes 3 minutes. It is clear, useful, and designed to help you move forward with greater honesty.
          </p>
          <a
            href="/founder-freedom-score"
            className="btn-gold self-start"
          >
            Take the Founder Freedom Pattern →
          </a>
        </div>
      </div>
    </section>
  );
};

export default MoreLifeCTASection;
