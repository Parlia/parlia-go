import Image from "next/image";
import Link from "next/link";
import AsSeenIn from "@/components/AsSeenIn";
import PrivacySection from "@/components/PrivacySection";
import TechCrunchQuote from "@/components/TechCrunchQuote";
import JoinCTA from "@/components/JoinCTA";
import MissionFeatures from "@/components/MissionFeatures";
import StatsSection from "@/components/StatsSection";
import GetStartedCTA from "@/components/GetStartedCTA";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-parlia-cream py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Parlia
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          Parlia is a radical new self-discovery engine,
          <br />
          and home of your Opinion DNA™
        </p>
        <p className="text-sm text-parlia-purple mb-8 leading-relaxed">
          Learn about who we are and our mission to improve the civil discourse,
          <br />
          and discover the thinking behind the creation of Opinion DNA™
        </p>
        <AsSeenIn />
      </section>

      {/* We want to change the world */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-parlia-purple text-center mb-16">
            We want to change the world
          </h2>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2">
              <Image
                src="/images/complexity-art.jpeg"
                alt="Abstract art representing complexity"
                width={500}
                height={529}
                className="rounded-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <div className="text-sm text-gray-600 leading-relaxed space-y-4">
                <p>
                  Why is the world so polarised today? What is driving this
                  division? Why do people do what they do? Say? Think? How can we
                  make sense of people&apos;s opinions?
                </p>
                <p>
                  We want to figure out what&apos;s really going on in the world
                  today, what is behind it all. We want to help discover
                  what&apos;s driving people&apos;s opinions and actions. We want
                  to help improve global understanding of our personality,
                  values, and bias. We believe that understanding the complex
                  underlying fundamentals of human opinion and behaviour can help
                  us radically improve civil discourse, improve group relations,
                  build teams, protect democracy, help us heal, and generally
                  improve communication in the world.
                </p>
                <p>
                  And this understanding can fundamentally change us as
                  individuals, in life, relationships, and work, helping us to
                  see the beauty in the complexity of our own thinking and
                  opinions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet our founders */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-parlia-purple text-center mb-16">
            Meet our founders
          </h2>

          {/* Turi Munthe */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="flex-shrink-0">
              <Image
                src="/images/turi-munthe.jpg"
                alt="Turi Munthe"
                width={200}
                height={200}
                className="rounded-full w-48 h-48 object-cover grayscale"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">Turi Munthe</h3>
              <p className="text-sm text-gray-500 mb-4">Founder &amp; CEO</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Turi Munthe is an entrepreneur and journalist who has dedicated
                the past few years of his life to understanding why polarization
                has accelerated in the world, and what we can do about it. He
                hosts the Parlia Podcast, &ldquo;On Opinion&rdquo; speaking to
                experts around the world on issues related to opinions,
                polarization, and human behaviour, etc, to uncover the truth
                behind our beliefs.
              </p>
              <div className="flex items-center gap-3">
                <a href="#">
                  <Image src="/images/globe-icon.png" alt="Website" width={20} height={20} />
                </a>
                <a href="#">
                  <Image src="/images/linkedin-logo.png" alt="LinkedIn" width={20} height={20} />
                </a>
                <a href="#">
                  <Image src="/images/twitter-logo.png" alt="Twitter" width={20} height={20} />
                </a>
              </div>
            </div>
          </div>

          {/* J. Paul Neeley */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="flex-shrink-0">
              <Image
                src="/images/j-paul-neeley.jpg"
                alt="J. Paul Neeley"
                width={200}
                height={200}
                className="rounded-full w-48 h-48 object-cover grayscale"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">J. Paul Neeley</h3>
              <p className="text-sm text-gray-500 mb-4">Co-founder &amp; Head of Design</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                J. Paul Neeley is a designer &amp; researcher dedicated to using
                emerging design methods to create meaningful impact in the world.
                He consults at design studio Neeley Worldwide, and teaches at the
                Royal College of Art.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                J. Paul leads product development, working directly with experts
                and our everyday users alike, to improve the experience Parlia
                delivers.
              </p>
              <div className="flex items-center gap-3">
                <a href="#">
                  <Image src="/images/globe-icon.png" alt="Website" width={20} height={20} />
                </a>
                <a href="#">
                  <Image src="/images/linkedin-logo.png" alt="LinkedIn" width={20} height={20} />
                </a>
                <a href="#">
                  <Image src="/images/twitter-logo.png" alt="Twitter" width={20} height={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-parlia-purple mb-12">
            See our Values...
          </h2>

          {/* Curiosity + Impact */}
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Curiosity + Impact</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                We are forever curious about how our opinions work, and how these
                thoughts impact our world. And the stakes are high! From trying
                to understand how Brexit happened, to understanding Climate
                Change denial, our opinions really matter. In different ways, and
                over years and years, threads of related inquiry have brought us
                to this point, where we feel we can build something (our Opinion
                DNA™) to actually help us make sense of how our opinions really
                work (how they form, what influences them, how they impact us),
                and what we can do with this knowledge to make this a better
                world for all of us.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/opinion-dna-model.png"
                alt="Opinion DNA Model"
                width={500}
                height={403}
                className="w-full"
              />
            </div>
          </div>

          {/* Self-discovery */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-4">Self-discovery</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              We realised to really understand ourselves and our opinions, we
              need to understand all the complex interactions of a number of
              important impacting factors that are behind what we believe. Too
              often people are viewed in a single spectrum or single personality
              element to make sense of their opinion, and we&apos;ve realized
              these approaches just don&apos;t go deep enough.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Our Opinion DNA™ is a radical new way to understand yourself, a
              kind of complete set of your values, personality, thinking, and
              context, and how these things interact with the world. It is this
              innovative wholistic view that we are looking to bring into the
              world, and we are excited about what this information can do for
              the individual, from improvements in living, and relationships, and
              careers.
            </p>
            <Link
              href="/opinion-dna"
              className="text-parlia-purple font-semibold text-sm hover:underline"
            >
              Learn more about your Opinion DNA™ →
            </Link>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <PrivacySection />

      {/* TechCrunch Quote */}
      <TechCrunchQuote />

      {/* Join CTA */}
      <JoinCTA />

      {/* Meet Our Network */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Meet Our Network!
          </h2>

          {/* Bloomberg Beta */}
          <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
            <div className="md:w-1/3">
              <Image
                src="/images/bloomberg-beta-logo.jpeg"
                alt="Bloomberg Beta"
                width={300}
                height={150}
                className="w-full"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-3">Bloomberg Beta</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                We are thrilled to be supported by the brilliant Roy Bahat and
                the amazing team at Bloomberg Beta, the Venture Capital fund of
                Bloomberg. They support some incredible startups and we love
                their investment focus, models and philanthropic support.
              </p>
              <a href="#" className="text-parlia-purple font-semibold text-sm hover:underline">
                Meet Bloomberg Beta →
              </a>
            </div>
          </div>

          {/* Tiny VC */}
          <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
            <div className="md:w-1/3">
              <Image
                src="/images/tinyvc-logo.png"
                alt="Tiny VC"
                width={300}
                height={150}
                className="w-full max-w-[200px]"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-3">Tiny VC</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                A &ldquo;tiny&rdquo; yet visionary crew, we are really grateful
                for the support and thinking from Philipp Moehring and Andy
                Chung.
              </p>
              <a href="#" className="text-parlia-purple font-semibold text-sm hover:underline">
                Meet Tiny VC →
              </a>
            </div>
          </div>

          {/* Research */}
          <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
            <div className="md:w-1/3">
              <Image
                src="/images/research-universities.png"
                alt="Research partners - Oxford, Penn, NYU"
                width={300}
                height={237}
                className="w-full rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-3">
                Cutting Edge Research, Applied
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                We work with researchers at top universities, and are constantly
                working to ensure that our Opinion DNA™ is reflecting
                state-of-the-art understanding of human opinion, personality,
                values, and cognition. If you are a researcher interested in the
                use of Opinion DNA™ or have thoughts that could contribute to the
                project, we&apos;d love to hear from you.
              </p>
              <a href="#" className="text-parlia-purple font-semibold text-sm hover:underline">
                Contact us about Research Collaborations →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Curious? / Careers */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-parlia-purple text-center mb-12">
            Curious? Want to learn more?
          </h2>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/smart-discovery-brain.jpg"
                alt="AI and self-discovery"
                width={400}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Work with us?</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                We are always interested in meeting talented people who share our
                vision for radical self-discovery, understanding opinions, and
                improving the world. We are currently looking for talent in:
              </p>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 mb-4">
                <li>Data-Science and Visualization</li>
                <li>Front-end developers with React &amp; TypeScript experience</li>
                <li>Back-end developers with Go &amp; Dgraph experience</li>
                <li>
                  Or if you have a background in Psychology, Cognitive Science,
                  or Evolutionary Psychology, we&apos;d love to speak with you.
                </li>
              </ul>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Something else? Tell us what we&apos;re missing!
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                We believe in 4 day work weeks. We&apos;re based in London, but
                support remote working. Reach out with your CV and tell us why
                you&apos;d like to work with us at Parlia.
              </p>
              <a href="#" className="text-parlia-purple font-semibold text-sm hover:underline">
                Contact us about career opportunities →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/demographic-splits.png"
              alt="Demographic splits data"
              width={400}
              height={528}
              className="rounded-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Press Inquiries?</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Sounds like a crazy dream right? Deep self-discovery by mapping
              someone&apos;s Opinion DNA™? Ending polarization by telling people
              about themselves? Global opinion Insights from Values &amp;
              Personality?
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              We can&apos;t wait to tell you our story, what we&apos;ve learned
              about how opinions work, and how we are working to create
              meaningful impact in the world.
            </p>
            <a href="#" className="text-parlia-purple font-semibold text-sm hover:underline">
              Contact us →
            </a>
          </div>
        </div>
      </section>

      {/* Mission Features */}
      <MissionFeatures variant="home" />

      {/* Stats */}
      <StatsSection />

      {/* Get Started */}
      <GetStartedCTA />
    </>
  );
}
