import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* -------------------------------------------------------------------------- */
/*  Privacy Policy. Real site page (includes Navbar + Footer) and uses the     */
/*  shared design system (heading-display, font-body, navy/gold, bg-card).     */
/*                                                                             */
/*  PLACEHOLDER still to confirm:                                              */
/*    [MAILING ADDRESS] – business mailing address (Aaron to provide)          */
/* -------------------------------------------------------------------------- */

const LAST_UPDATED = "June 18, 2026";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="heading-display text-2xl md:text-3xl text-navy mt-12 mb-4">
    {children}
  </h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="font-body text-base md:text-lg text-charcoal/80 leading-relaxed mb-4">
    {children}
  </p>
);

const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc pl-6 space-y-2 mb-4 font-body text-base md:text-lg text-charcoal/80 leading-relaxed">
    {children}
  </ul>
);

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy — Thriving Founder™";
  }, []);

  return (
    <>
      <div className="min-h-screen relative z-10 bg-background">
        <Navbar bg="#1F3F78" hideGoldButton />

        {/* Header */}
        <section className="section-navy">
          <div className="max-w-3xl mx-auto pt-40 pb-16 md:pt-48 md:pb-20 px-6 md:px-8">
            <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
              Legal
            </p>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.1] mb-6">
              Privacy Policy
            </h1>
            <p className="font-body text-base md:text-lg text-primary-foreground/70">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="bg-card py-16 md:py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <P>
              This Privacy Policy explains how Thriving Founder&trade;
              (&ldquo;Thriving Founder,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
              or &ldquo;our&rdquo;) collects, uses, and protects your personal
              information when you visit our website, register for events such
              as Founder ON&trade; Live, complete the Founder Freedom
              Score&trade;, or otherwise interact with us. By using our site and
              submitting your information, you agree to the practices described
              here.
            </P>

            <H2>Information we collect</H2>
            <P>We collect the following types of information:</P>
            <UL>
              <li>
                <strong>Information you provide.</strong> When you register for
                a webinar, request information, or sign up for updates, we
                collect details such as your first name and email address.
              </li>
              <li>
                <strong>Assessment responses.</strong> When you complete the
                Founder Freedom Score, we collect the answers you submit and the
                results generated from them.
              </li>
              <li>
                <strong>Information collected automatically.</strong> When you
                visit our site, we may automatically collect technical and usage
                information such as your device type, browser, pages viewed, and
                referring links, through cookies and similar technologies.
              </li>
            </UL>

            <H2>How we use your information</H2>
            <P>We use the information we collect to:</P>
            <UL>
              <li>
                Confirm your registration and send you the link, reminders, and
                details for events you sign up for, including Founder ON&trade;
                Live.
              </li>
              <li>
                Generate and deliver your Founder Freedom Score results and
                tailor live sessions to your situation.
              </li>
              <li>
                Send you occasional Founder ON&trade; updates, resources, and
                related communications where you have consented to receive them.
              </li>
              <li>
                Operate, maintain, analyze, and improve our website and
                services.
              </li>
              <li>Comply with our legal obligations.</li>
            </UL>

            <H2>Consent and your choices</H2>
            <P>
              We collect and use your personal information with your consent,
              which you provide when you submit your details through our forms.
              Marketing and update emails are sent only where you have opted in,
              and every such email includes an unsubscribe link. You can
              withdraw your consent or unsubscribe at any time, and doing so will
              not affect the lawfulness of any processing carried out before
              your withdrawal.
            </P>

            <H2>Cookies and analytics</H2>
            <P>
              We use cookies and similar technologies, including Google
              Analytics, to understand how visitors use our site and to improve
              it. These tools may collect information such as your IP address,
              device information, and browsing activity. You can control cookies
              through your browser settings; disabling them may affect how the
              site functions.
            </P>

            <H2>How we share your information</H2>
            <P>
              We do not sell your personal information. We share it only as
              needed with trusted third-party service providers who help us
              operate our business, such as website hosting, email delivery, and
              analytics providers. These providers are permitted to use your
              information only to provide services to us. We may also disclose
              information where required by law or to protect our legal rights.
            </P>

            <H2>Data retention</H2>
            <P>
              We retain your personal information for as long as needed to
              fulfil the purposes described in this policy, to comply with our
              legal obligations, resolve disputes, and enforce our agreements.
              When information is no longer required, we take reasonable steps to
              delete or anonymize it.
            </P>

            <H2>Your rights</H2>
            <P>
              Depending on where you live, you may have the right to access,
              correct, update, or delete the personal information we hold about
              you, to object to or restrict certain processing, and to withdraw
              consent. To exercise any of these rights, contact us using the
              details below. We will respond in accordance with applicable law.
            </P>

            <H2>Data security</H2>
            <P>
              We use reasonable administrative, technical, and organizational
              measures to protect your personal information against loss, misuse,
              and unauthorized access. No method of transmission or storage is
              completely secure, however, and we cannot guarantee absolute
              security.
            </P>

            <H2>International data transfers</H2>
            <P>
              Your information may be stored and processed in countries other
              than the one in which you reside. Where we transfer personal
              information across borders, we take steps to ensure it remains
              protected in accordance with this policy and applicable law.
            </P>

            <H2>Children&rsquo;s privacy</H2>
            <P>
              Our website and services are intended for adults and are not
              directed to children. We do not knowingly collect personal
              information from children. If you believe a child has provided us
              with information, please contact us and we will take appropriate
              steps to delete it.
            </P>

            <H2>Changes to this policy</H2>
            <P>
              We may update this Privacy Policy from time to time. When we do, we
              will revise the &ldquo;Last updated&rdquo; date above. We encourage
              you to review this page periodically to stay informed about how we
              protect your information.
            </P>

            <H2>Contact us</H2>
            <P>
              If you have questions about this Privacy Policy or how we handle
              your personal information, contact us at{" "}
              <a
                href="mailto:aaron@thrivingfounder.com"
                className="text-gold underline underline-offset-2 transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
              >
                aaron@thrivingfounder.com
              </a>
              , or by mail at [MAILING ADDRESS]. This policy is governed by the
              laws of Canada.
            </P>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
