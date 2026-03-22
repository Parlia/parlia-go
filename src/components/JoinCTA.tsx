import Image from "next/image";

export default function JoinCTA() {
  return (
    <section className="bg-parlia-sky text-white py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/images/people-grid.jpeg"
            alt="Community members"
            width={370}
            height={370}
            className="rounded-3xl w-64 md:w-80"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
          <p className="text-base font-medium">
            Join 12,000+ People better understanding themselves through deep
            self-discovery
          </p>
          <a
            href="https://www.parlia.com/signup"
            className="bg-parlia-red text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-red-600 transition-colors whitespace-nowrap flex-shrink-0"
          >
            Join now
          </a>
        </div>
      </div>
    </section>
  );
}
