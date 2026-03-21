import Image from "next/image";
import Link from "next/link";
import AsSeenIn from "@/components/AsSeenIn";
import PrivacySection from "@/components/PrivacySection";
import TechCrunchQuote from "@/components/TechCrunchQuote";
import JoinCTA from "@/components/JoinCTA";
import MissionFeatures from "@/components/MissionFeatures";
import StatsSection from "@/components/StatsSection";
import GetStartedCTA from "@/components/GetStartedCTA";

export const metadata = {
  title: "Tour | Parlia",
  description:
    "Improve your life, work, and relationships with real tools for self-discovery.",
};

export default function TourPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-parlia-cream py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Tools for Self-discovery
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Improve your life, work, and relationships
          <br />
          with real tools for self-discovery
        </p>
        <a
          href="https://www.parlia.com/signup"
          className="inline-block bg-parlia-red text-white px-8 py-3 rounded-full font-semibold text-base hover:bg-red-600 transition-colors"
        >
          Sign up now (It&apos;s FREE!)
        </a>
        <div className="mt-8">
          <AsSeenIn />
        </div>
      </section>

      {/* See what your Opinion DNA says */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <div className="md:w-1/2">
              <Image
                src="/images/opinion-dna-model.png"
                alt="Opinion DNA Model"
                width={400}
                height={322}
                priority
                className="w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                See what your Opinion DNA™ says about you
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                WHY do you do what you DO? SAY? THINK?
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Let&apos;s discover what&apos;s driving it all. Understand your
                true personality, values, and bias.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                All your beliefs, the full picture, in-one-place. A proper
                overview of you.
              </p>
              <Link
                href="/opinion-dna"
                className="text-parlia-purple font-semibold text-sm hover:underline"
              >
                Explore your Opinion DNA™ →
              </Link>
            </div>
          </div>

          {/* Go deeper */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-20">
            <div className="md:w-1/2">
              <Image
                src="/images/religiosity-screenshot.jpeg"
                alt="Explore the breakdown on topics like Religiosity"
                width={400}
                height={238}
                className="w-full rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Go deeper &amp; understand your thinking
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Are you progressive? Woke? Religious?
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Opinion DNA™ Elements break it all down for you.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                See what drives you. See your blind spots. And explore between
                the lines.
              </p>
              <a
                href="#"
                className="text-parlia-purple font-semibold text-sm hover:underline"
              >
                See Elements →
              </a>
            </div>
          </div>

          {/* Your view, your take, your vote */}
          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <div className="md:w-1/2">
              <Image
                src="/images/happiness-opinions.png"
                alt="Opinions on Happiness from Parlia"
                width={400}
                height={171}
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your view, your take, your vote!
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Tell us what you think. Share your view. Your opinions matter.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Make your voice heard. Across 1,000s of different opinions.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                And let&apos;s see what your opinions mean for you.
              </p>
              <a
                href="#"
                className="text-parlia-purple font-semibold text-sm hover:underline"
              >
                Check out the For You feed →
              </a>
            </div>
          </div>

          {/* Discover what makes you unique */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-20">
            <div className="md:w-1/2">
              <Image
                src="/images/opinion-screenshot.png"
                alt="Opinion Lab"
                width={400}
                height={120}
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Discover what makes you unique
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                You are unique. You are special. You are NOT an average!
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Your experience and views are different than everyone else.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Let&apos;s see how that plays out. And explore what ideas make
                you, you.
              </p>
              <a
                href="#"
                className="text-parlia-purple font-semibold text-sm hover:underline"
              >
                Explore the Opinion Lab →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <PrivacySection />

      {/* TechCrunch Quote */}
      <TechCrunchQuote />

      {/* Join CTA */}
      <JoinCTA />

      {/* And so much more */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-parlia-purple text-center mb-16">
            And so much more...
          </h2>

          {/* Dig into your opinions */}
          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <div className="md:w-1/2">
              <Image
                src="/images/opinion-discussion.png"
                alt="Dig into your opinions"
                width={400}
                height={410}
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">
                Dig into your opinions
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Want to say more? Explain your thinking? Discuss ideas?
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Tell us more, and explore all sides. Engage with other people
                from all sides, all over the political spectrum, all over the
                world.
              </p>
              <a
                href="#"
                className="text-parlia-purple font-semibold text-sm hover:underline"
              >
                Share your thoughts →
              </a>
            </div>
          </div>

          {/* Build your Opinion collection */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-20">
            <div className="md:w-1/2">
              <Image
                src="/images/parlia-profile.png"
                alt="Build your Opinion collection"
                width={400}
                height={390}
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">
                Build your Opinion collection
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Every vote captured. Securely stored. All for you.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                All of your thinking, in one place, for you to explore.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                We&apos;ll help you better understand yourself and the world in
                whole new ways.
              </p>
              <a
                href="#"
                className="text-parlia-purple font-semibold text-sm hover:underline"
              >
                Build your collection →
              </a>
            </div>
          </div>

          {/* Understand how other people see the world */}
          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <div className="md:w-1/2">
              <Image
                src="/images/opinion-collection.png"
                alt="Understand how other people see the world"
                width={400}
                height={374}
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">
                Understand how other people see the world
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Join our community of over 10,000 explorers.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Engage with people from all walks of life.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Better understand every side of every opinion, and find out where
                you fit in.
              </p>
              <a
                href="#"
                className="text-parlia-purple font-semibold text-sm hover:underline"
              >
                Check out the For You feed →
              </a>
            </div>
          </div>

          {/* Explore the splits */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-20">
            <div className="md:w-1/2">
              <Image
                src="/images/demographic-splits.png"
                alt="Explore the splits"
                width={400}
                height={528}
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Explore the splits</h3>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Curious where everyone lands? How it breaks down?
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Easily see the trends across gender, political beliefs, and age.
                On every opinion.
              </p>
              <a
                href="#"
                className="text-parlia-purple font-semibold text-sm hover:underline"
              >
                Check out the For You feed →
              </a>
            </div>
          </div>

          {/* Cutting edge research */}
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <Image
                src="/images/research-universities.png"
                alt="Research at top universities"
                width={400}
                height={316}
                className="w-full rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">
                Cutting edge research, just for you
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                We work with researchers at top universities.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                All to develop your Opinion DNA.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                So you can experience a revolution in self-discovery.
              </p>
              <Link
                href="/opinion-dna"
                className="text-parlia-purple font-semibold text-sm hover:underline"
              >
                Explore your Opinion DNA →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Features */}
      <MissionFeatures variant="tour" />

      {/* Stats */}
      <StatsSection />

      {/* Get Started */}
      <GetStartedCTA />
    </>
  );
}
