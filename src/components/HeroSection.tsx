import { useEffect, useRef, useState } from "react";

import heroVideo1 from "@/assets/7567275-hd_1920_1080_25fps.mp4";

const slides = [
  { text: "YOUR BUSINESS", video: heroVideo1 },
  { text: "YOUR FREEDOM", video: "/hero-bg-2.mp4" },
  { text: "BUILT WITH YOU", video: "/hero-bg-3.mp4" },
];

const HeroSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "in") {
      timeout = setTimeout(() => setPhase("hold"), 600);
    } else if (phase === "hold") {
      timeout = setTimeout(() => setPhase("out"), 2000);
    } else if (phase === "out") {
      timeout = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setPhase("in");
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [phase, currentSlide]);

  return (
    <>
      <style>{`
        @keyframes rollIn {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes rollOut {
          from { transform: translateY(0); opacity: 1; }
          to { transform: translateY(100%); opacity: 0; }
        }
      `}</style>
      <section className="relative">
        <div className="relative w-full overflow-hidden" style={{ height: "115vh" }}>
          {slides.map((slide, i) => (
            <video
              key={slide.video}
              ref={(el) => { videoRefs.current[i] = el; }}
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                opacity: i === currentSlide ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
              src={slide.video}
              autoPlay
              loop
              muted
              playsInline
            />
          ))}
          <div
            className="absolute inset-0 z-10"
            style={{ backgroundColor: "hsla(220, 16%, 12%, 0.7)" }}
          />
          <div
            ref={contentRef}
            className="relative z-20 flex w-full items-center justify-center will-change-transform"
            style={{ height: "100vh" }}
          >
            <div className="text-center px-[4%]">
              <div
                style={{ height: "clamp(2.5rem, 12vw, 5.5rem)" }}
                style={{
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1
                  key={`${currentSlide}-${phase}`}
                  className=""
                  style={{
                    fontSize: "clamp(2rem, 11vw, 5.5rem)",
                    lineHeight: 1.2,
                    color: "hsl(0, 0%, 100%)",
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 600,
                    margin: 0,
                    animation:
                      phase === "out"
                        ? "rollOut 0.5s ease-in forwards"
                        : phase === "in"
                        ? "rollIn 0.6s ease-out forwards"
                        : "none",
                  }}
                >
                  {slides[currentSlide].text}
                </h1>
              </div>
              <p
                className="mt-4 md:mt-10 mx-auto font-body text-xl md:text-2xl leading-snug"
                style={{
                  maxWidth: "45rem",
                  color: "hsl(0, 0%, 100%, 0.9)",
                  textWrap: "balance",
                }}
              >
                Founder ON™ is a 24-week build partnership designed to turn your expertise into a thriving business, while helping you grow into the founder who can sustain it.
              </p>
              <a
                href="/founder-freedom-score"
                className="btn-gold mt-8"
              >
                <span className="md:hidden">Take the Founder Freedom Score</span>
                <span className="hidden md:inline">Discover Your Founder Freedom Score</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
