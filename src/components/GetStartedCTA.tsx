export default function GetStartedCTA() {
  return (
    <section className="bg-parlia-cream py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Get started now for FREE!
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://www.parlia.com/signup"
          className="bg-parlia-sky text-white px-10 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          See your Opinion DNA™ 🧬
        </a>
        <a
          href="https://www.parlia.com/signup"
          className="bg-parlia-mint text-black px-10 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          Sign up today
        </a>
      </div>
    </section>
  );
}
