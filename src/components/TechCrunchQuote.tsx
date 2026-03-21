import Image from "next/image";

export default function TechCrunchQuote() {
  return (
    <section className="py-16 px-6 text-center">
      <Image
        src="/images/quotation.svg"
        alt="Quote"
        width={58}
        height={54}
        className="mx-auto mb-6"
      />
      <h3 className="text-3xl md:text-4xl font-bold text-parlia-purple mb-6">
        Highly appropriate for this era
      </h3>
      <Image
        src="/images/techcrunch-logo.png"
        alt="TechCrunch"
        width={200}
        height={35}
        className="mx-auto"
      />
    </section>
  );
}
