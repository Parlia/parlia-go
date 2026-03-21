import Image from "next/image";

interface MissionFeaturesProps {
  variant?: "home" | "tour";
}

export default function MissionFeatures({
  variant = "home",
}: MissionFeaturesProps) {
  const features = [
    {
      icon: "/images/opinion-list-icon.png",
      title: "THE Opinion list",
      description:
        "Surf the best collection of opinions on the web, across all kinds of topics",
    },
    {
      icon: "/images/globe-world.png",
      title: "A worldwide view",
      description:
        "Discover what other people around the world believe, and how you compare",
    },
    {
      icon: "/images/scales-justice.png",
      title: "Fair & Balanced",
      description:
        "Parlia doesn\u2019t have an agenda. We only want to help you discover yourself",
    },
  ];

  const heading =
    variant === "tour"
      ? "Join us in our mission to help you better understand you"
      : "Join us in our mission to help the world\nbetter understand itself";

  return (
    <section className="bg-parlia-cream py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-parlia-purple mb-12 whitespace-pre-line">
          {heading}
        </h2>
        <div className="bg-purple-600 rounded-2xl py-10 px-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 text-left text-white"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="flex-shrink-0 mt-0.5"
                />
                <div>
                  <h4 className="font-bold text-base mb-1">{feature.title}</h4>
                  <p className="text-xs opacity-90 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
