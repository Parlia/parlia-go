import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import PrivacySection from "@/components/PrivacySection";
import TechCrunchQuote from "@/components/TechCrunchQuote";
import JoinCTA from "@/components/JoinCTA";
import StatsSection from "@/components/StatsSection";
import GetStartedCTA from "@/components/GetStartedCTA";

export const metadata: Metadata = {
  title: "Opinion DNA™ - Discover Your Mind",
  description:
    "Map your thinking and transform your life, relationships, and work with Opinion DNA™. A diagnostic for understanding your personality, values, and thinking.",
  alternates: {
    canonical: "/opinion-dna",
  },
  openGraph: {
    title: "Opinion DNA™ - Discover Your Mind | Parlia",
    description:
      "Map your thinking and transform your life with Opinion DNA™. Understand your personality, values, and cognitive style.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Parlia's Purpose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Parlia is ALL about your self-discovery. We want to make the world a better, more empathetic place. We believe we can do this by helping individuals better understand themselves.",
      },
    },
    {
      "@type": "Question",
      name: "How can Premium transform my life?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can give you specific personal direction based on your Opinion DNA. These suggestions make actionable your new self-understanding.",
      },
    },
    {
      "@type": "Question",
      name: "What do you do with my data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We process the data ONLY to share it back to you. We will never sell your personal data. We will never use your data to target or spam you. Our whole goal is to help you discover your own thinking.",
      },
    },
  ],
};

export default function OpinionDNAPage() {
  return (
    <>
      {/* Safe: all values are hardcoded string literals, no user input */}
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} // eslint-disable-line react/no-danger -- safe: static data only
      />
      {/* Hero */}
      <section className="bg-parlia-cream py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Your Mind
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          Map your thinking
          <br />
          and transform your life, relationships, and work
          <br />
          with your complete Opinion DNA™
        </p>
        <a
          href="https://www.parlia.com/signup"
          className="inline-block mt-6 bg-parlia-purple text-white px-8 py-3 rounded-full font-semibold text-base hover:bg-purple-700 transition-colors"
        >
          Get Started Now - It&apos;s Free
        </a>

        {/* University logos */}
        <p className="text-xs tracking-widest text-gray-400 uppercase mt-10 mb-4">
          Developed with experts from
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 max-w-3xl mx-auto">
          <Image
            src="/images/upenn-logo.png"
            alt="University of Pennsylvania"
            width={120}
            height={34}
            className="h-8 w-auto object-contain"
          />
          <Image
            src="/images/oxford-logo.png"
            alt="University of Oxford"
            width={120}
            height={35}
            className="h-8 w-auto object-contain"
          />
          <Image
            src="/images/nyu-logo.png"
            alt="NYU"
            width={120}
            height={41}
            className="h-10 w-auto object-contain"
          />
          <Image
            src="/images/city-university-logo.svg"
            alt="City University London"
            width={120}
            height={37}
            className="h-8 w-auto object-contain"
          />
        </div>
      </section>

      {/* Reveal your thinking */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/self-discovery-sign.jpg"
              alt="Self-discovery neon sign"
              width={400}
              height={423}
              priority
              className="w-full rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Reveal your thinking</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-3">
              Want to improve your life? Be a better you? Transform yourself?
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-3">
              Start by understanding what drives your thinking, and reimagine
              the dynamics and possibilities of your family, relationships, and
              work.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Our <strong>Opinion DNA™ report</strong> and{" "}
              <strong>Opinion DNA™ e-book</strong> will help you get there.
            </p>
          </div>
        </div>
      </section>

      {/* What is Opinion DNA */}
      <section className="py-16 px-6 bg-parlia-light">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest text-gray-400 uppercase text-center mb-8">
            What is Opinion DNA?
          </p>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2">
              <Image
                src="/images/opinion-dna-model.png"
                alt="Opinion DNA Advanced Model"
                width={600}
                height={484}
                className="w-full rounded-sm"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                <strong>Opinion DNA™</strong> is an innovative diagnostic for
                understanding the complete picture of your personality, values,
                and thinking, allowing for a correlated and unprecedented look
                across these elements, and how they express across various
                topics.
              </p>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>
                  <strong className="text-amber-700">Core Personality</strong> –
                  Define your personality across key personality markers
                </li>
                <li>
                  <strong className="text-green-700">Core Values</strong> –
                  Understand the values driving your choices, from Morality to
                  Cooperation, and much more
                </li>
                <li>
                  <strong className="text-blue-700">Meta Thinking</strong> –
                  Explore the style and bias of your thinking
                </li>
                <li>
                  <strong className="text-purple-700">
                    Demographic Context
                  </strong>{" "}
                  – See how your place in the world impacts your opinions and
                  behavior
                </li>
                <li>
                  <strong className="text-red-700">Topic Expression</strong> –
                  Let&apos;s find out how these other factors of your Opinion
                  DNA™ drive your opinions across the critical topics and issues
                  of today
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How does it work */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest text-gray-400 uppercase text-center mb-12">
            How does it work?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Image
                src="/images/go-arrow-icon.png"
                alt="Share"
                width={68}
                height={68}
                className="mx-auto mb-4"
              />
              <h4 className="font-bold mb-2">1. Share</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Just respond to a series of simple statements, sharing how you
                feel about various topics and issues
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/images/icon-analyze.png"
                alt="Analyze"
                width={70}
                height={70}
                className="mx-auto mb-4"
              />
              <h4 className="font-bold mb-2">2. Analyze</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our proprietary Perspectives Engine (PE) analyzes your responses
                against +180 Million data points to create your personalized
                Opinion DNA™
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/images/icon-dna.png"
                alt="Discover"
                width={70}
                height={70}
                className="mx-auto mb-4"
              />
              <h4 className="font-bold mb-2">3. Discover</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                The results of your Opinion DNA™ help you understand what your
                opinions reveal about your deep personality and biases
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/images/icon-compass.png"
                alt="Act"
                width={66}
                height={70}
                className="mx-auto mb-4"
              />
              <h4 className="font-bold mb-2">4. Act</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Take action based on your personal Opinion DNA™ to improve your
                life, relationships, and work
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What People Are Saying */}
      <section className="bg-parlia-sky py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What People Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/testimonial-1.jpeg"
                alt="User testimonial"
                width={100}
                height={100}
                className="rounded-full w-20 h-20 object-cover mb-4"
              />
              <p className="text-white text-sm leading-relaxed">
                &ldquo;<strong>Deep self-discovery!</strong> I never thought I
                could understand myself in this way.&rdquo;
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/testimonial-2.jpg"
                alt="User testimonial"
                width={100}
                height={100}
                className="rounded-full w-20 h-20 object-cover mb-4"
              />
              <p className="text-white text-sm leading-relaxed">
                &ldquo;<strong>Life Changing!</strong> I got concrete actions I
                can take to improve. Thank you!&rdquo;
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/testimonial-3.jpg"
                alt="User testimonial"
                width={100}
                height={100}
                className="rounded-full w-20 h-20 object-cover mb-4"
              />
              <p className="text-white text-sm leading-relaxed">
                &ldquo;My Opinion DNA™ has revealed my{" "}
                <strong className="text-green-300">true personality</strong> in
                ways I didn&apos;t think possible!&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TechCrunch Quote */}
      <TechCrunchQuote />

      {/* Pricing Table */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 w-1/4"></th>
                  <th className="text-center py-4 px-4">
                    <span className="text-xl">⚡️🧠⚡️</span>
                    <div className="font-bold text-lg mt-1">Free Basics</div>
                    <div className="text-gray-500 text-xs">Discover you</div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="font-bold text-lg">Opinion DNA™</div>
                    <div className="text-gray-500 text-xs">
                      Transform yourself
                    </div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="font-bold text-lg">Opinion DNA™ Advanced</div>
                    <div className="text-gray-500 text-xs">
                      The complete picture
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Opinion DNA™ Elements", free: true, paid: true, advanced: true },
                  { feature: "My Opinion Vault", free: true, paid: true, advanced: true },
                  { feature: "My Opinion Feed", free: true, paid: true, advanced: true },
                  { feature: "My Insights Lab", free: true, paid: true, advanced: true },
                  { feature: "My Complete Opinion DNA™", free: false, paid: true, advanced: true },
                  { feature: "Opinion DNA™ e-Book", free: false, paid: true, advanced: true },
                  { feature: "Personalized AI Report", free: false, paid: false, advanced: true },
                ].map((row) => (
                  <tr key={row.feature} className="border-t border-gray-100">
                    <td className="py-4 px-4 font-medium">{row.feature}</td>
                    {[row.free, row.paid, row.advanced].map((val, i) => (
                      <td key={i} className="py-4 px-4 text-center">
                        {val ? (
                          <span
                            className={
                              row.free && i < 2
                                ? "text-gray-500"
                                : "inline-block bg-parlia-mint text-white w-8 h-8 leading-8 rounded"
                            }
                          >
                            ✔
                          </span>
                        ) : (
                          <span className="inline-block bg-gray-100 text-gray-400 w-8 h-8 leading-8 rounded">
                            ✕
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-parlia-purple text-center mb-12">
            What you get!
          </h2>

          {/* Report */}
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <Image
                src="/images/complete-dna-report.png"
                alt="Complete Opinion DNA Report"
                width={400}
                height={407}
                className="w-full rounded-sm"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">
                Your Complete Opinion DNA™ Report
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Your personal, 137 Spectrum, diagnostic report of ALL your
                opinion DNA elements. A complete picture of your Core
                Personality, Core Values, Meta-thinking, Demographic Context, and
                Topic Expressions.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                The best, and most complete picture of how you think and how that
                thinking expresses in the world.
              </p>
            </div>
          </div>

          {/* e-book */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <Image
                src="/images/opinion-dna-ebook.png"
                alt="Opinion DNA e-book"
                width={400}
                height={448}
                className="w-full rounded-sm"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">
                Opinion DNA™ e-book
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Your complete guide to understanding each of the elements of
                your Opinion DNA. Answer deeper questions about your core
                personality, core values, meta-thinking, demographics and topic
                expression by exploring what each element defines in you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Start today */}
      <section className="bg-parlia-cream py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start today!</h2>
        <p className="text-sm text-gray-600 mb-2">
          Get your Opinion DNA™ Report &amp; e-Book now.
        </p>
        <p className="text-sm text-gray-600 mb-8">
          Let&apos;s begin transforming your life with your Opinion DNA™
        </p>
        <a
          href="https://www.parlia.com/signup"
          className="inline-block bg-parlia-purple text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
        >
          Get Started Now
        </a>
      </section>

      {/* Privacy */}
      <PrivacySection />

      {/* Stats */}
      <StatsSection />

      {/* Not sure yet? */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Not sure yet?</h2>
        <p className="text-sm text-gray-600 mb-8">
          Try out some of the Opinion DNA™ Elements today! Completely FREE!
        </p>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            {
              title: "Climate Change",
              desc: "Find your tribe on the climate crisis",
              icon: "/images/climate-icon.png",
            },
            {
              title: "Woke",
              desc: "Exploring attitudes on key issues of the day",
              icon: "/images/woke-icon.png",
            },
            {
              title: "Religiosity",
              desc: "6 factors that breakdown belief",
              icon: "/images/religiosity-icon.png",
            },
            {
              title: "BIG5 Personality",
              desc: "The most popular core personality model",
              icon: "/images/opinion-list-icon.png",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between bg-white rounded-xl shadow-sm border border-gray-100 px-6 py-4"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
                <div className="text-left">
                  <h4 className="font-bold text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
              <a
                href="#"
                className="bg-parlia-mint text-black px-4 py-2 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Take the FREE Diagnostic
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-parlia-purple py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            FAQ
          </h2>
          <div className="space-y-8 text-white">
            <div>
              <h3 className="font-bold text-lg mb-2">
                What is Parlia&apos;s Purpose?
              </h3>
              <ul className="text-sm opacity-90 space-y-1">
                <li>Parlia is ALL about your self-discovery</li>
                <li>
                  We want to make the world a better, more empathetic place
                </li>
                <li>
                  We believe we can do this by helping individuals better
                  understand themselves
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">
                How can Premium transform my life?
              </h3>
              <ul className="text-sm opacity-90 space-y-1">
                <li>
                  We can give you specific personal direction based on your
                  Opinion DNA
                </li>
                <li>
                  These suggestions make actionable your new self-understanding
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">
                What do you do with my data?
              </h3>
              <ul className="text-sm opacity-90 space-y-1">
                <li>
                  We process the data, ONLY to share it back to you
                </li>
                <li>We will never sell your personal data</li>
                <li>
                  We will never use your data to target or spam you
                </li>
                <li>
                  Our whole goal of gathering this information is to help you
                  discover your own thinking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coach CTA */}
      <section className="bg-parlia-sky py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/images/people-grid.jpeg"
            alt="Community"
            width={300}
            height={300}
            className="rounded-3xl w-56 md:w-64"
          />
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm text-white leading-relaxed">
              Are you a life or business coach, or therapist who wants to use
              Opinion DNA™ to support your clients? Let&apos;s talk!
            </p>
          </div>
          <a
            href="#"
            className="bg-parlia-red text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-red-600 transition-colors whitespace-nowrap"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Bottom features */}
      <section className="bg-parlia-purple py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          <div>
            <h4 className="font-bold text-sm mb-2">
              Explore all the parts of you
            </h4>
            <p className="text-xs opacity-80">
              Let&apos;s break your thinking down for you in easy to understand
              elements
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-2">
              Find out where you sit in the world
            </h4>
            <p className="text-xs opacity-80">
              Find your people, your group, your tribe, people that see the
              world like you
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-2">
              Discover your personal direction
            </h4>
            <p className="text-xs opacity-80">
              From Living to Love &amp; Relationships to Work &amp; Career, we
              help you see the right path
            </p>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <GetStartedCTA />
    </>
  );
}
