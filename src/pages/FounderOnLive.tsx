import { useEffect, useState, type ReactNode } from "react";
import LiveNavbar from "@/components/founder-on-live/LiveNavbar";
import Reveal from "@/components/founder-on-live/Reveal";
import SignupCard from "@/components/founder-on-live/SignupCard";
// Hero background photo.
import heroPhoto from "@/assets/hero-woman-laptop-sofa.jpg";
// Mid-page CTA background photo.
import ctaMidBg from "@/assets/cta-mountains.jpg";
// Host portrait.
import aaronPhoto from "@/assets/aaron-mclean.jpg";

/* -------------------------------------------------------------------------- */
/*  Brand tokens (exact hex values from the Founder ON™ Live brand system)    */
/*    Navy #1B2A4A · Gold #C9A84C · White #FFFFFF · Off-White #F5F3EF          */
/*    Charcoal #2D2D2D · Light Gold #E8D5A0                                    */
/*  Fonts match the main site: Jost (font-display) for headings, Figtree       */
/*  (font-body) for everything else.                                           */
/* -------------------------------------------------------------------------- */

const Eyebrow = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <p
    className={`inline-block rounded-md border border-gold/60 bg-gold/10 px-3 py-1 font-body text-sm uppercase tracking-[0.12em] text-gold ${className}`}
  >
    {children}
  </p>
);

/**
 * Webinar start time. PLACEHOLDER — update once the slot is confirmed
 * ([TIME + TIMEZONE]). Month is 0-indexed, so 5 = June. Currently set to
 * June 30, 2026 at 12:00 local time.
 */
const WEBINAR_START = new Date(2026, 5, 30, 12, 0, 0);

const getCountdown = () => {
  const diff = Math.max(0, WEBINAR_START.getTime() - Date.now());
  const totalMinutes = Math.floor(diff / 60000);
  return {
    days: Math.floor(totalMinutes / (60 * 24)),
    hours: Math.floor((totalMinutes % (60 * 24)) / 60),
    minutes: totalMinutes % 60,
  };
};

const Countdown = () => {
  const [time, setTime] = useState(getCountdown);

  useEffect(() => {
    const id = setInterval(() => setTime(getCountdown()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
  ];

  return (
    <div
      className="flex gap-3 sm:gap-4"
      role="timer"
      aria-label="Time remaining until the Live begins"
    >
      {units.map((u) => (
        <div
          key={u.label}
          className="flex min-w-[4.75rem] flex-col items-center rounded-lg border border-white/10 bg-white/[0.07] px-4 py-3 sm:min-w-[5.25rem] sm:py-4"
        >
          <span className="font-body text-3xl font-semibold tabular-nums text-white sm:text-4xl">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="mt-1 font-body text-[0.65rem] font-medium uppercase tracking-[0.15em] text-[#E8D5A0]">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
};

/** Gold dot used for affirmative / "what you leave with" lists. */
const GoldDot = () => (
  <span
    aria-hidden
    className="mt-[0.55rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]"
  />
);

/** A repeated navy band that lifts the shared SignupCard, exactly like the hero. */
const SignupBand = ({ backgroundImage }: { backgroundImage?: string }) => (
  <section className="relative overflow-hidden bg-[#1B2A4A]">
    {backgroundImage && (
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="h-full w-full object-cover"
          style={{ objectPosition: "center top" }}
        />
        {/* Navy at the bottom, fading to fully transparent at the top so the
            mountains stay visible. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #1B2A4A 0%, rgba(27,42,74,0.5) 45%, rgba(27,42,74,0) 100%)",
          }}
        />
      </div>
    )}
    <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
      <Reveal className="mx-auto max-w-md">
        <SignupCard showDetail />
      </Reveal>
    </div>
  </section>
);

const FounderOnLive = () => {
  useEffect(() => {
    document.title = "Founder ON™ Live · June 30 — Thriving Founder";
  }, []);

  return (
    <main className="font-body text-[#2D2D2D] antialiased">
      {/* ================================================================== */}
      {/*  HERO                                                              */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden bg-[#1B2A4A]">
        {/* Background photo. Full-width on mobile; on desktop it occupies only
            the right half, while the left half stays solid navy. Decorative. */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 lg:left-1/2">
            <img
              src={heroPhoto}
              alt=""
              className="h-full w-full object-cover"
              style={{ objectPosition: "center" }}
            />
            {/* 50% navy overlay across the photo. */}
            <div className="absolute inset-0 bg-[#1B2A4A]/50" />
            {/* Blend the photo's left edge into the navy at the seam (desktop). */}
            <div
              className="absolute inset-0 hidden lg:block"
              style={{
                background:
                  "linear-gradient(to right, #1B2A4A 0%, rgba(27,42,74,0.85) 18%, rgba(27,42,74,0.4) 42%, rgba(27,42,74,0) 70%)",
              }}
            />
          </div>
          {/* Extra wash on mobile so the headline and card stay readable. */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(to bottom, rgba(27,42,74,0.45) 0%, rgba(27,42,74,0.35) 100%)",
            }}
          />
        </div>

        <LiveNavbar />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-28 lg:pt-40">
          {/* Left column — message */}
          <Reveal>
            <Eyebrow className="text-sm sm:text-base">
              Founder ON&trade; Live
            </Eyebrow>

            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl">
              Should you build your own business?
            </h1>

            <p
              className="mt-6 max-w-xl font-body text-lg leading-relaxed md:text-xl text-white/80"
              style={{ textWrap: "balance" }}
            >
              You&rsquo;ve got the experience. The question is whether to build
              something with it.
            </p>
            <p
              className="mt-4 max-w-xl font-body text-lg leading-relaxed md:text-xl text-white/80"
              style={{ textWrap: "balance" }}
            >
              This webinar is built to help you work through it honestly:
              whether this becomes a business, what it would even be, and which
              path makes sense for you.
            </p>

            <div className="mt-8">
              <p className="font-body text-sm font-medium tracking-wide text-[#E8D5A0] sm:text-base">
                June 30 &middot; [TIME + TIMEZONE] &middot; Free &middot; Live
                online
              </p>
              <div className="mt-6">
                <Countdown />
              </div>
            </div>
          </Reveal>

          {/* Right column — signup card */}
          <Reveal delay={0.1} className="lg:pl-6">
            <SignupCard />
          </Reveal>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  SECTION 2 — THE PATTERN (emotional center)                        */}
      {/* ================================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <Eyebrow>The real question</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-[#1B2A4A] sm:text-4xl">
              You have the expertise.
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed md:text-xl text-[#2D2D2D]">
              What stops most people from doing something of their own
              isn&rsquo;t ability. It&rsquo;s three questions that keep circling,
              and until they&rsquo;re answered, the idea just stays an idea:
            </p>
          </Reveal>

          {/* Three named questions as restrained items — not cards. */}
          <div className="mt-12">
            {[
              {
                q: "Should this even become a business?",
                a: "You can be good at something without it being something people will pay for. Knowing the difference is the first honest step.",
              },
              {
                q: "What would the offer actually be?",
                a: "There’s a gap between “I know things” and “here is a specific thing I do for a specific person.” Most people never close it.",
              },
              {
                q: "What path makes sense for me?",
                a: "Full leap, side business, something slower — the right answer depends on your life, not on someone else’s success story.",
              },
            ].map((item, i) => (
              <Reveal key={item.q} delay={i * 0.08}>
                <div className="border-t border-[#E8D5A0] py-7">
                  <h3 className="font-body text-xl font-semibold text-[#1B2A4A]">
                    {item.q}
                  </h3>
                  <p className="mt-3 font-body text-base leading-relaxed text-[#2D2D2D]/85">
                    {item.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 font-body text-lg leading-relaxed md:text-xl text-[#2D2D2D]">
              These aren&rsquo;t small questions. They&rsquo;re the ones that
              decide whether you ever begin. Answering them honestly is where it
              starts.{" "}
              <span className="font-display font-bold text-[#1B2A4A]">
                That is Clarity.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  SECTION 4 — WHAT THE LIVE IS                                      */}
      {/* ================================================================== */}
      <section className="bg-[#F5F3EF]">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <Eyebrow>What the Live is</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-[#1B2A4A] sm:text-4xl">
              This is a working session, not a pitch.
            </h2>
            <div className="mt-6 space-y-6 font-body text-lg leading-relaxed md:text-xl text-[#2D2D2D]">
              <p>
                We&rsquo;ll work through the question you came here with: should
                you build your own business, and if the answer is yes, what
                would it actually be. No generic blueprint, no pressure to do
                anything. Just an honest look at where you stand and what makes
                sense for you.
              </p>
              <p className="font-body text-xl font-semibold text-[#1B2A4A]">
                You&rsquo;ll walk away with a clearer read on three things:
              </p>
            </div>

            <ul className="mt-6 space-y-4">
              {[
                "Whether your experience points to a business, or to something else",
                "What a first offer could look like, in concrete terms",
                "Which path fits your life, and what a real first step would be",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <GoldDot />
                  <span className="font-body text-lg leading-relaxed md:text-xl text-[#2D2D2D]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 font-display text-xl italic text-[#1B2A4A]">
              That clarity is worth having whether your answer turns out to be
              yes or no.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Signup repeated — instance 2 (mid-page, photo background) */}
      <SignupBand backgroundImage={ctaMidBg} />

      {/* ================================================================== */}
      {/*  SECTION 5 — WHO IT'S FOR / WHO IT'S NOT FOR                       */}
      {/* ================================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <Eyebrow>Who it&rsquo;s for</Eyebrow>
          </Reveal>
          {/* For you */}
          <Reveal className="mt-10">
            <h2 className="font-display text-3xl font-bold leading-tight text-[#1B2A4A] sm:text-4xl">
              This is for you if:
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "You’re mid-career with real expertise and experience behind you",
                "You’ve had the thought “maybe I should build something of my own” more than once",
                "You’re genuinely undecided — and want to think it through with someone who’s done it",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <GoldDot />
                  <span className="font-body text-lg leading-relaxed md:text-xl text-[#2D2D2D]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Not for you */}
          <Reveal delay={0.08} className="mt-14">
            <h2 className="font-display text-3xl font-bold leading-tight text-[#1B2A4A] sm:text-4xl">
              This probably isn&rsquo;t the right fit if:
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "You’re looking for a get-rich-quick system or passive income",
                "You want someone to hand you a finished plan to copy",
                "You’ve already decided and just need tactics",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-[0.8rem] h-px w-3 flex-shrink-0 bg-[#2D2D2D]/30"
                  />
                  <span className="font-body text-lg leading-relaxed md:text-xl text-[#2D2D2D]/70">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  SECTION 6 — WHO'S HOSTING                                         */}
      {/* ================================================================== */}
      <section className="bg-[#1B2A4A]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left — portrait */}
          <Reveal>
            <img
              src={aaronPhoto}
              alt="Aaron McLean"
              className="w-full rounded-lg object-cover"
              style={{ aspectRatio: "4 / 5", objectPosition: "center top" }}
            />
          </Reveal>

          {/* Right — bio */}
          <Reveal delay={0.1}>
            <Eyebrow>Who&rsquo;s hosting</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
              Aaron McLean
            </h2>
            <p className="mt-1 font-body text-base text-[#E8D5A0]">
              Founder, Thriving Founder&trade;
            </p>
            <div className="mt-6 space-y-5 font-body text-lg leading-relaxed md:text-xl text-white/80">
              <p>
                Aaron has spent over two decades building products, companies,
                and people. He has led product strategy and creative work
                connected to brands like Nintendo, Tim Hortons, and Boston
                Pizza, and helped build a platform later acquired by Box (NYSE:
                BOX).
              </p>
              <p>
                He has also lived the harder side of it: starting again after a
                decade-long company came apart. That experience is why this Live
                isn&rsquo;t a motivational pitch. The question of whether to
                build something of your own deserves more than that, and Aaron
                has been on both sides of it, the years of wondering and the
                work of actually building.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  SECTION 7 — DETAILS + FINAL CTA                                   */}
      {/* ================================================================== */}
      <section className="bg-[#F5F3EF]">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <Eyebrow>The details</Eyebrow>

            <dl className="mt-8 divide-y divide-[#E8D5A0] border-y border-[#E8D5A0]">
              {[
                ["Date", "June 30"],
                ["Time", "[TIME + TIMEZONE]"],
                ["Length", "90 minutes"],
                ["Where", "Live online — [PLATFORM / link sent after you register]"],
                ["Cost", "Free"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[7rem_1fr] gap-4 py-4 sm:grid-cols-[9rem_1fr]"
                >
                  <dt className="font-body text-base font-semibold uppercase tracking-wide text-[#1B2A4A]">
                    {label}
                  </dt>
                  <dd className="font-body text-lg text-[#2D2D2D]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-10 font-display text-2xl font-bold leading-snug text-[#1B2A4A]">
              If you&rsquo;ve got the experience but you&rsquo;re still not sure
              being a founder is right for you, this is a useful place to start.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Signup repeated — instance 3 (final) */}
      <SignupBand />
    </main>
  );
};

export default FounderOnLive;
