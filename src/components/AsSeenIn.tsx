import Image from "next/image";

export default function AsSeenIn() {
  return (
    <div className="py-6 px-6">
      <p className="text-center text-xs tracking-widest text-gray-400 uppercase mb-6">
        As Seen In
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
        <Image
          src="/images/elpais-logo.jpeg"
          alt="El País"
          width={100}
          height={100}
          className="h-8 w-auto object-contain grayscale opacity-60"
        />
        <Image
          src="/images/google-dni-logo.png"
          alt="Google Digital News Initiative"
          width={106}
          height={63}
          className="h-8 w-auto object-contain grayscale opacity-60"
        />
        <Image
          src="/images/spectator-logo.png"
          alt="The Spectator"
          width={193}
          height={128}
          className="h-8 w-auto object-contain grayscale opacity-60"
        />
        <Image
          src="/images/techcrunch-logo.png"
          alt="TechCrunch"
          width={106}
          height={19}
          className="h-4 w-auto object-contain grayscale opacity-60"
        />
        <Image
          src="/images/butterfly-logo.png"
          alt="Butterfly"
          width={100}
          height={100}
          className="h-10 w-auto object-contain grayscale opacity-60"
        />
        <Image
          src="/images/oii-logo.png"
          alt="Oxford Internet Institute"
          width={106}
          height={50}
          className="h-6 w-auto object-contain grayscale opacity-60"
        />
      </div>
    </div>
  );
}
