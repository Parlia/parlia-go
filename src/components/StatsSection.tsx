export default function StatsSection() {
  const stats = [
    { value: "+15k", label: "Members" },
    { value: "+1.2m", label: "Responses" },
    { value: "1.7k", label: "Opinions" },
    { value: "+180m", label: "Data Points" },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl md:text-6xl font-bold text-parlia-magenta">
              {stat.value}
            </p>
            <p className="text-lg md:text-xl font-bold mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
