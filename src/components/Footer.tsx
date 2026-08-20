import { useEffect, useRef, useState } from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      if (!footerRef.current) return;
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const footerHeight = footerRef.current.offsetHeight;
      const footerExposed = Math.max(0, scrollBottom - (docHeight - footerHeight));
      setProgress(Math.min(1, footerExposed / footerHeight));
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

  const translateY = (1 - progress) * 30;
  const opacity = 0.3 + progress * 0.7;

  return (
    <footer
      ref={footerRef}
      className="sticky bottom-0 pt-20 pb-4 px-6"
      style={{ backgroundColor: "#1F3F78" }}
    >
      <div
        className="max-w-6xl mx-auto text-center"
        style={{
          transform: `translateY(${translateY}px)`,
          opacity,
          willChange: "transform, opacity",
        }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img src={logo} alt="Thriving Founder" className="h-32 md:h-40" />
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
          <a href="/" className="font-body text-sm tracking-[0.15em] uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors">Home</a>
          <a href="/about" className="font-body text-sm tracking-[0.15em] uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors">About</a>
          <a href="/founder-on" className="font-body text-sm tracking-[0.15em] uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            Founder ON™ Experience
          </a>
          <a href="/founder-freedom-score" className="font-body text-sm tracking-[0.15em] uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors">Founder Freedom Pattern</a>
          <a href="/results" className="font-body text-sm tracking-[0.15em] uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors">Results</a>
          <a href="/testimonials" className="font-body text-sm tracking-[0.15em] uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors">Testimonials</a>
        </nav>

        {/* Socials */}
        <div className="flex items-center justify-center gap-5 mb-12">
          <a href="https://www.linkedin.com/company/thriving-founder/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <Linkedin size={22} strokeWidth={1.5} />
          </a>
          <a href="https://www.instagram.com/thriving_founder/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <Instagram size={22} strokeWidth={1.5} />
          </a>
          <a href="https://www.facebook.com/share/1DUjUPJzAs/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <Facebook size={22} strokeWidth={1.5} />
          </a>
        </div>

        <div className="border-t border-primary-foreground/10 pt-4 pb-0 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2026 Thriving Founder™. All rights reserved.
          </p>
          <div className="flex gap-6 font-body text-xs text-primary-foreground/40">
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
