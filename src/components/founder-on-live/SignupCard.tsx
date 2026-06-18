import { useId, useState, type FormEvent } from "react";

interface SignupCardProps {
  className?: string;
  /** Show the date/detail line under the heading (used on the CTA bands). */
  showDetail?: boolean;
}

/**
 * The single source of truth for the Founder ON™ Live signup form.
 * Rendered in three places (hero, mid-page, final CTA) so the conversion
 * point stays identical everywhere. `useId` keeps field ids/labels unique
 * across the multiple instances on one page.
 *
 * Front-end only by design — see the TODO in `handleSubmit` for where to
 * wire this into the existing site's email-capture system.
 */
const SignupCard = ({ className = "", showDetail = false }: SignupCardProps) => {
  const uid = useId();
  const firstNameId = `${uid}-first-name`;
  const emailId = `${uid}-email`;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: Wire this up to the existing site's email-capture system.
    // This form intentionally has NO backend. Read the values and POST them
    // to your provider (ConvertKit / Mailchimp / HubSpot / etc.) here.
    //
    //   const data = new FormData(e.currentTarget);
    //   const firstName = data.get("first_name");
    //   const email = data.get("email");
    //   await fetch("/your-email-capture-endpoint", { method: "POST", body: data });

    setSubmitted(true);
  };

  return (
    <div
      className={`w-full rounded-lg border border-[#E8D5A0] bg-[#F5F3EF] p-7 sm:p-8 ${className}`}
    >
      <h3 className="font-display text-2xl font-bold text-[#1B2A4A]">
        Register now to reserve your seat
      </h3>

      {showDetail && (
        <p className="mt-2 font-body text-sm text-[#2D2D2D]/70">
          June 30 &middot; [TIME + TIMEZONE] &middot; Free &middot; Live online
        </p>
      )}

      {submitted ? (
        <p
          className="mt-4 text-[15px] leading-relaxed text-[#2D2D2D]"
          role="status"
          aria-live="polite"
        >
          You&rsquo;re on the list. Keep an eye on your inbox &mdash; your
          confirmation and the joining details are on the way.
          <span className="mt-3 block text-xs text-[#2D2D2D]/60">
            [Placeholder confirmation &mdash; final messaging handled by the
            connected email system.]
          </span>
        </p>
      ) : (
        <form className="mt-6" onSubmit={handleSubmit} noValidate={false}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor={firstNameId}
                className="mb-1.5 block text-sm font-medium text-[#1B2A4A]"
              >
                First name
              </label>
              <input
                id={firstNameId}
                name="first_name"
                type="text"
                autoComplete="given-name"
                required
                className="w-full rounded-md border border-[#E8D5A0] bg-white px-4 py-3 text-[15px] text-[#2D2D2D] placeholder:text-[#2D2D2D]/40 transition-colors focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/40"
              />
            </div>

            <div>
              <label
                htmlFor={emailId}
                className="mb-1.5 block text-sm font-medium text-[#1B2A4A]"
              >
                Email
              </label>
              <input
                id={emailId}
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md border border-[#E8D5A0] bg-white px-4 py-3 text-[15px] text-[#2D2D2D] placeholder:text-[#2D2D2D]/40 transition-colors focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/40"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#C9A84C] px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-[#1B2A4A] transition-colors hover:bg-[#bd9c40] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F3EF]"
          >
            Reserve your seat
          </button>

        </form>
      )}
    </div>
  );
};

export default SignupCard;
