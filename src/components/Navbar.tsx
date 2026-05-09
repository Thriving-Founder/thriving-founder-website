import { useState, useEffect, useRef } from "react";
import logo from "@/assets/logo.webp";
import { trackCTA } from "@/lib/gtag";

const Navbar = ({ variant = "dark", bg, hideGoldButton = false }: { variant?: "dark" | "light"; bg?: string; hideGoldButton?: boolean }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isDark = variant === "dark";
  const textColor = isDark
    ? "text-primary-foreground/80"
    : "text-navy/80";
  const hoverColor = isDark
    ? "hover:text-primary-foreground"
    : "hover:text-navy";

  const onMethodLinks = [
    { href: "/founder-on", label: "What is Founder ON™" },
    { href: "/results", label: "Results" },
    { href: "/testimonials", label: "Testimonials" },
  ];

  return (
    <>
      <nav
        className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-6"
        style={bg ? { backgroundColor: bg } : undefined}
      >
        <a href="/">
          <img
            src={logo}
            alt="Thriving Founder"
            className="h-14 md:h-16"
            style={isDark ? undefined : { filter: "brightness(0) saturate(100%)" }}
          />
        </a>

        {/* Desktop nav */}
        <div className={`hidden lg:flex items-center gap-10 font-body text-base tracking-wide uppercase ml-auto mr-6 ${textColor}`}>
          <a href="/" className={`${hoverColor} transition-colors`}>Home</a>
          <a href="/about" className={`${hoverColor} transition-colors`}>About Us</a>

          {/* Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`${hoverColor} transition-colors flex items-center gap-1 uppercase`}
            >
              The Founder ON™ Method
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 pt-4 min-w-[180px]">
              <div
                className="py-2 rounded-md shadow-lg"
                style={{ backgroundColor: isDark ? "hsl(220, 40%, 20%)" : "#fff" }}
              >
                {onMethodLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`block px-5 py-2.5 text-base uppercase ${textColor} ${hoverColor} transition-colors`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              </div>
            )}
          </div>

        </div>
        {!hideGoldButton && (
          <a
            href="/founder-freedom-score"
            className="btn-gold text-sm px-6 py-3 hidden lg:inline-block"
            onClick={() => trackCTA("Take the Founder Freedom Score", "navbar")}
          >
            Take the Founder Freedom Score →
          </a>
        )}

        {/* Mobile hamburger / close */}
        <button
          className="lg:hidden relative flex items-center justify-center w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className="absolute flex flex-col justify-center items-center transition-opacity duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          >
            <span className="block w-6 h-0.5 bg-[hsl(43,50%,54%)]" />
            <span className="block w-6 h-0.5 bg-[hsl(43,50%,54%)] mt-1.5" />
            <span className="block w-6 h-0.5 bg-[hsl(43,50%,54%)] mt-1.5" />
          </div>
          <svg
            className="absolute transition-opacity duration-300"
            style={{ opacity: menuOpen ? 1 : 0 }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="hsl(43,50%,54%)"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <line x1="4" y1="4" x2="20" y2="20" />
            <line x1="20" y1="4" x2="4" y2="20" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center pt-32 lg:hidden transition-all duration-300"
        style={{
          backgroundColor: "#1F3F78",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <div className="flex flex-col items-center gap-8 font-body text-lg tracking-wide">
          <a href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={() => setMenuOpen(false)}>About Us</a>

          {/* Mobile dropdown */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-1"
            >
              The Founder ON™ Method
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: mobileDropdownOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {mobileDropdownOpen && (
              <div className="flex flex-col items-center gap-4 mt-4">
                {onMethodLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-base"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {!hideGoldButton && (
            <a
              href="/founder-freedom-score"
              className="btn-gold text-sm px-8 py-3 mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Take the Founder Freedom Score →
            </a>
          )}
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 lg:hidden"
        style={{
          backgroundColor: "hsl(var(--gold) / 0.5)",
          opacity: showScrollTop ? 1 : 0,
          pointerEvents: showScrollTop ? "auto" : "none",
          transform: showScrollTop ? "translateY(0)" : "translateY(16px)",
        }}
        aria-label="Scroll to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F3F78" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
};

export default Navbar;
