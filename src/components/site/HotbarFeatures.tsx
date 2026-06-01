interface Feature {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
}

interface HotbarFeaturesProps {
  features: Feature[];
}

export function HotbarFeatures({ features }: HotbarFeaturesProps) {
  return (
    <section className="relative z-10 container mx-auto px-6 lg:px-12 -mt-8 md:-mt-16">
      <div className="rounded-2xl border border-border bg-card/95 backdrop-blur p-6 md:p-10 shadow-xl shadow-black/10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 md:divide-x md:divide-border">
          {features.map(({ icon: Icon, title }) => (
            <div key={title} className="md:px-4 text-center">
              <Icon className="mx-auto h-8 w-8 text-primary" strokeWidth={1.5} />
              <h3 className="mt-3 text-sm font-semibold text-foreground leading-tight">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
