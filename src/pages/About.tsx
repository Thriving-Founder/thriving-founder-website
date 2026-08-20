import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomCTASection from "@/components/BottomCTASection";
import whyImg from "@/assets/spenser-sembrat-BBtlAlhUeT4-unsplash.webp";
import heroImg from "@/assets/derek-coleman-EvZOXp8os5s-unsplash.jpg";
import believeImg from "@/assets/adhd-creative-co-ltd-7ImP-qO93RY-unsplash.jpg";
import aaronImg from "@/assets/DK8A4000.jpg";
import blairImg from "@/assets/Headshot2022-2.jpg";

const About = () => {
  return (
    <>
    <div className="min-h-screen relative z-10 bg-background">
      <Navbar bg="#1F3F78" />

      {/* Hero */}
      <section className="section-navy">
        <div className="grid md:grid-cols-2 items-stretch">
          {/* Left content */}
          <div className="flex flex-col justify-center pt-40 pb-24 md:pt-48 md:pb-32 px-8 md:px-16">
            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-8">
              Thriving Founder
              <sup
                style={{
                  fontSize: "0.2em",
                  position: "relative",
                  top: "-2.5em",
                  marginLeft: "0.1em",
                  verticalAlign: "baseline",
                  fontWeight: 500,
                }}
              >
                ™
              </sup>
            </h1>
            <p className="font-body text-xl md:text-2xl text-primary-foreground/90 leading-snug" style={{ textWrap: "balance" }}>
              A brand built on the belief that business should create more life, not less.
            </p>
          </div>

          {/* Right photo */}
          <div className="hidden md:block relative min-h-[600px]">
            <img
              src={heroImg}
              alt="Founders collaborating"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ borderRadius: 0 }}
            />
          </div>
        </div>
      </section>

      {/* Intro statement */}
      <section className="bg-card pt-24 md:pt-20 lg:pt-32 pb-12 md:pb-12 lg:pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-xl md:text-2xl text-charcoal leading-relaxed">
            Thriving Founder exists for professionals who want to build with ambition, integrity, and greater freedom, without recreating the pressure, fragmentation, or emptiness they wanted to leave behind.
          </p>
        </div>
      </section>

      {/* Why Thriving Founder Exists */}
      <section className="bg-card pt-12 md:pt-12 lg:pt-16 pb-24 md:pb-20 lg:pb-32 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="w-full hidden lg:block">
            <img
              src={whyImg}
              alt="A different standard for building"
              loading="lazy"
              className="w-full object-cover aspect-[4/5]"
            />
          </div>
          <div>
            <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
              Why Thriving Founder Exists
            </p>
            <h2 className="heading-display text-4xl md:text-5xl text-navy mb-10">
              There are many ways to build a business.
            </h2>
            <div className="w-full overflow-hidden mb-10 lg:hidden" style={{ height: "50vh" }}>
              <img
                src={whyImg}
                alt="A different standard for building"
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 75%" }}
              />
            </div>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
              Some produce money but cost people their health. Some create movement without substance. Some sound inspiring but never become real.
            </p>
            <p className="font-body text-lg md:text-xl font-bold text-charcoal leading-relaxed mb-6">
              Thriving Founder was created to hold a different standard.
            </p>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
              One where business growth and personal depth are not treated as separate worlds. One where strategy and execution still leave room for humanity. One where success is measured not only by commercial traction, but by the quality of the life it makes possible.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="section-offwhite py-24 md:py-20 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_auto] gap-12 md:gap-16">
          <div>
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            Meet the Founder
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-10">
            Meet the founder behind Thriving Founder.
          </h2>
          <div className="w-full overflow-hidden mb-10 lg:hidden" style={{ height: "50vh" }}>
            <img
              src={aaronImg}
              alt="Aaron McLean"
              loading="lazy"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 25%" }}
            />
          </div>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
            Aaron McLean has spent over two decades building products, companies, and people. He has led product strategy and creative development for work connected to brands like Nintendo, Tim Hortons, Boston Pizza, and HeartMath, reaching millions of users globally. He also helped build a platform later acquired by Box (NYSE: BOX). Over the years, he has advised startups, innovation teams, and creative businesses through high-stakes decisions around growth, positioning, product, and reinvention.
          </p>
          <p className="font-body text-lg md:text-xl font-bold text-charcoal leading-relaxed mb-6">
            But Thriving Founder was not built from professional success alone.
          </p>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
            It was shaped by loss, rebuilding, and the experience of having to start again after a decade-long company came apart. That chapter forced a deeper question: what actually matters when you rebuild yourself and your business?
          </p>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
            What emerged was a more integrated way of working, one that brings together strategic rigor, creative execution, and the human depth that comes from living through the full cycle of building, breaking, and rebuilding.
          </p>
          <p className="font-body text-lg md:text-xl font-bold text-charcoal leading-relaxed mb-6">
            That integration is what Thriving Founder is built on.
          </p>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
            Alongside his business career, Aaron has spent more than twenty years supporting people through pivotal personal and professional transitions. He has worked with entrepreneurs, executives, restaurateurs, athletes, and creatives, people who may look successful from the outside, but know that something deeper needs to change for the next chapter to work.
          </p>
          <p className="font-body text-lg md:text-xl font-bold text-charcoal leading-relaxed mb-6">
            Thriving Founder is where both sides of that experience come together.
          </p>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
            The business depth means your brand, website, positioning, and core systems get built to a professional standard, on a real timeline. The coaching depth means the internal work, the leadership, clarity, resilience, and self-trust required to sustain a business, does not get ignored.
          </p>
          <p className="font-body text-lg md:text-xl font-bold text-charcoal leading-relaxed">
            This is not just about building a business. It is about becoming the founder capable of leading one.
          </p>
          </div>
          <div className="hidden lg:block w-full max-w-sm">
            <img
              src={aaronImg}
              alt="Aaron McLean"
              loading="lazy"
              className="w-full object-cover aspect-[3/4] sticky top-28"
            />
          </div>
        </div>
      </section>

      {/* The Team Behind the Build */}
      <section className="bg-card py-24 md:py-20 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[auto_1fr] gap-12 md:gap-16">
          <div className="hidden lg:block w-full max-w-sm">
            <img
              src={blairImg}
              alt="Blair Owens"
              loading="lazy"
              className="w-full object-cover aspect-[3/4]"
            />
          </div>
          <div>
            <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
              The Team Behind the Build
            </p>
            <h2 className="heading-display text-4xl md:text-5xl text-navy mb-10">
              The team behind the build.
            </h2>
            <div className="w-full overflow-hidden mb-10 lg:hidden" style={{ height: "50vh" }}>
              <img
                src={blairImg}
                alt="Blair Owens"
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />
            </div>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
              Blair Owens is Thriving Founder's Creative Director and Brand Strategist, and the founder of Origin Creative. He leads brand development, website design and build, social media strategy, and marketing asset production, both for Thriving Founder itself and for clients inside Founder ON™.
            </p>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
              Blair's connection to the work is personal as well as professional. As a former coaching client of Aaron's, he experienced the transformation firsthand before bringing his creative expertise into the business. That gives him an unusual perspective: he does not just understand the brand visually, he understands the work from the inside.
            </p>
            <p className="font-body text-lg md:text-xl font-bold text-charcoal leading-relaxed">
              When you join Founder ON™, Blair and the production team help co-build the business with you. Your brand identity, website, social media system, and marketing assets are not off-the-shelf templates. They are custom-built by a team that understands your vision because they helped you clarify it.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters in Practice */}
      <section className="section-offwhite py-24 md:py-20 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            Why This Matters in Practice
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-10">
            This philosophy is not abstract.
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
            It shapes how we build, how we guide, what we prioritize, and what we refuse to glamorize.
          </p>
          <p className="font-body text-lg md:text-xl font-bold text-charcoal leading-relaxed">
            We are not here to help you chase growth that hollows you out. We are here to help you build something stronger, cleaner, more aligned, and more sustaining.
          </p>
        </div>
      </section>

      {/* The Experience Behind the Method */}
      <section className="bg-card py-24 md:py-20 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            The Experience Behind the Method
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-16">
            The experience behind the method.
          </h2>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            <div className="border-t-2 border-gold pt-6">
              <h3 className="heading-display text-2xl md:text-3xl text-navy mb-4">
                Product &amp; Business
              </h3>
              <p className="font-body text-base md:text-lg text-charcoal/80 leading-relaxed">
                20+ years in product strategy, creative direction, and business development. Work connected to Nintendo, Tim Hortons, Boston Pizza, and HeartMath. Platform acquisition by Box (NYSE: BOX). Advisory work with startups, innovation teams, and creative businesses.
              </p>
            </div>
            <div className="border-t-2 border-gold pt-6">
              <h3 className="heading-display text-2xl md:text-3xl text-navy mb-4">
                Coaching
              </h3>
              <p className="font-body text-base md:text-lg text-charcoal/80 leading-relaxed">
                20+ years of transformational coaching, personal development, and addiction recovery support, working with a diverse range of people, from those rebuilding their lives to entrepreneurs, athletes, and high-performing professionals, through career transitions, business launches, and meaningful personal transformation.
              </p>
            </div>
            <div className="border-t-2 border-gold pt-6">
              <h3 className="heading-display text-2xl md:text-3xl text-navy mb-4">
                Creative
              </h3>
              <p className="font-body text-base md:text-lg text-charcoal/80 leading-relaxed">
                Musician, visual artist, and award-winning creative director. Aaron's creative practice informs the work, bringing an unusual ability to see patterns, hold complexity, and support the whole person behind the business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Freedom and Mastery */}
      <section className="section-navy py-24 md:py-20 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            Freedom and Mastery
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-primary-foreground mb-6">
            The standard behind the brand.
          </h2>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-12">
            Freedom without mastery collapses. Mastery without freedom suffocates. Thriving Founder is built on the belief that meaningful entrepreneurship requires both.
          </p>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div className="border-t-2 border-gold pt-6">
              <h3 className="heading-display text-3xl md:text-4xl text-primary-foreground mb-4">
                Freedom
              </h3>
              <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Not the absence of responsibility. The capacity to direct your work and life with greater ownership, flexibility, and truth.
              </p>
            </div>
            <div className="border-t-2 border-gold pt-6">
              <h3 className="heading-display text-3xl md:text-4xl text-primary-foreground mb-4">
                Mastery
              </h3>
              <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Not self-optimization for its own sake. The steady cultivation of capability, integrity, and depth.
              </p>
            </div>
          </div>

          <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mt-12 max-w-3xl">
            Together, they describe the kind of founder we believe is worth becoming, and the kind of business we believe is worth building.
          </p>
        </div>
      </section>

      <BottomCTASection
        heading="If this feels aligned, begin with the Founder Freedom Pattern."
        paragraph="A short, honest diagnostic to help you see where you stand, in about 3 minutes."
        ctaText="Discover Your Founder Freedom Pattern →"
        ctaHref="/founder-freedom-score"
      /></div>
      <Footer />
      </>
  );
};

export default About;
