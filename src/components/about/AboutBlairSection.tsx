import { useScrollReveal } from "@/hooks/useScrollReveal";
import blairPortrait from "@/assets/blair-portrait.webp";

const AboutBlairSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-card py-24 md:py-36 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex justify-center md:order-2">
          <img loading="lazy"             src={blairPortrait}
            alt="Blair Owens"
            className="w-full max-w-md object-cover aspect-[3/4]"
          />
        </div>
        <div className="md:order-1">
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-10">
            The team behind the build.
          </h2>
          <div className="font-body text-base text-charcoal/80 leading-relaxed space-y-6">
            <p>
              Blair Owens is Thriving Founder's Creative Director and Brand Strategist, and the founder of Origin Creative. Blair leads all brand development, website design and build, social media strategy, and marketing asset production, both for Thriving Founder itself and for every client who goes through the program.
            </p>
            <p>
              Blair's own journey is part of the Thriving Founder story. As a former coaching client of Aaron's, Blair experienced the transformation firsthand, and then brought his creative expertise to the team. He understands the program from the inside, which means every brand he builds for a client is grounded in the same values and depth that define Thriving Founder.
            </p>
            <p>
              When you join Founder ON™, Blair and the production team co-build your business alongside you. Your brand identity, your website, your social media system, your marketing materials, they're not templates. They're custom-built assets created by a team that understands your vision because they helped you clarify it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBlairSection;
