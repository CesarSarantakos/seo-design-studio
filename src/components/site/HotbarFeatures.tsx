interface Feature {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
}

interface HotbarFeaturesProps {
  features: Feature[];
}

export function HotbarFeatures({ features }: HotbarFeaturesProps) {
  return (
    <section className="bg-[#001f3f] border-y border-[#003d6b]">
      <div className="container mx-auto px-6 max-w-7xl py-8 md:py-10">
        <div className="flex flex-wrap justify-center md:justify-between items-stretch divide-x divide-[#003d6b]">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 px-4 md:px-6 py-4 flex-1 min-w-max md:min-w-0"
              >
                <Icon className="h-7 w-7 md:h-8 md:w-8 text-[#d4a574]" strokeWidth={1.5} />
                <h3 className="text-white font-semibold text-xs md:text-sm text-center leading-tight">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
