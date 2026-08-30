import logo from "@/assets/logo.webp";

/**
 * Minimal header for the Founder ON™ Live registration page: the same
 * Thriving Founder logo treatment as the main site nav, top-left, with no
 * links or buttons — keeping the page distraction-free. Overlays the navy
 * hero, so the parent hero section must be `position: relative`.
 */
const LiveNavbar = () => (
  <nav className="absolute left-0 right-0 top-0 z-50 flex items-center px-6 py-6 md:px-16">
    <a
      href="/"
      aria-label="Thriving Founder home"
      className="inline-flex rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B2A4A]"
    >
      <img src={logo} alt="Thriving Founder" className="h-14 md:h-16" />
    </a>
  </nav>
);

export default LiveNavbar;
