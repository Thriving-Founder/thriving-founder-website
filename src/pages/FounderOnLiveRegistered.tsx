import { useEffect } from "react";

/* -------------------------------------------------------------------------- */
/*  Post-registration bridge page for Founder ON™ Live.                        */
/*  Body only (no navbar/footer). Confirms the spot, then hands off into the   */
/*  existing Founder Freedom Score assessment. Styling is inherited from the   */
/*  FFS design system (heading-display, font-body, btn-gold, gold pill, the    */
/*  gold-ring Bullet) so the two feel like one continuous experience.          */
/* -------------------------------------------------------------------------- */

// Start of the existing Founder Freedom Score assessment (same target the FFS
// marketing page uses).
// TODO: Once the registration step and the FFS are wired together, append the
// visitor's captured first name + email as query params here (whatever params
// the assessment accepts, e.g. `?first_name=...&email=...`) so the assessment
// doesn't ask for them again.
const FFS_ASSESSMENT_URL = "https://founderfreedomscore.netlify.app/assessment";

// Quiet "I'll do it later" exit.
// TODO: Placeholder. Should trigger the email-reminder flow and/or return the
// visitor to the site. Currently sends them to the home page.
const DO_IT_LATER_URL = "/";

// Same gold-ring bullet the FFS uses for grouped lists (kept identical here so
// the visual treatment matches exactly).
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

const whatYouGet = [
  "Your Founder Freedom Score across the four foundations: Clarity, Capacity, Cashflow, and Confidence",
  "A clear read on where you actually stand right now",
  "A session built around your situation, not generic advice",
];

const FounderOnLiveRegistered = () => {
  useEffect(() => {
    document.title = "You're registered — Founder ON™ Live";
  }, []);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 py-20 md:py-28">
      <div className="w-full max-w-2xl mx-auto text-center">
        {/* Confirmation marker — quiet, FFS pill treatment */}
        <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1">
          You&rsquo;re registered &middot; June 30
        </p>

        {/* Headline */}
        <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.1] mt-8 text-balance">
          One quick thing before the webinar!
        </h1>

        {/* Intro */}
        <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mt-6 text-balance">
          Your spot for Founder ON Live is saved. Now complete your Founder
          Freedom Score. We&rsquo;ll walk through your
          results live, which is what makes the session personal instead of
          generic. Do it now while it&rsquo;s in front of you.{" "}
          <span className="font-semibold text-charcoal">
            It only takes five minutes.
          </span>
        </p>

        {/* What you'll get */}
        <div className="mt-10 max-w-xl mx-auto text-left">
          <p className="font-body text-lg md:text-xl font-semibold text-charcoal leading-relaxed mb-5">
            Here&rsquo;s what you&rsquo;ll get:
          </p>
          <div className="flex flex-col gap-5">
            {whatYouGet.map((item, i) => (
              <Bullet key={i}>{item}</Bullet>
            ))}
          </div>
        </div>

        {/* Primary action */}
        <div className="mt-12">
          <a href={FFS_ASSESSMENT_URL} className="btn-gold">
            Start the Founder Freedom Score &rarr;
          </a>
        </div>

        {/* Quiet secondary option */}
        <div className="mt-6">
          <a
            href={DO_IT_LATER_URL}
            className="font-body text-base text-charcoal/60 underline underline-offset-4 transition-colors hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
          >
            I&rsquo;ll do it later
          </a>
          <p className="font-body text-sm text-charcoal/60 leading-relaxed mt-3 max-w-md mx-auto">
            No problem, your spot is saved and we&rsquo;ll send you the link by
            email. Just have it done before June 30.
          </p>
        </div>
      </div>
    </main>
  );
};

export default FounderOnLiveRegistered;
