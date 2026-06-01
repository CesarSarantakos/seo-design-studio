import { Users, ClipboardCheck, Handshake, CalendarClock } from "lucide-react";

interface Feature {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}

interface HotbarFeaturesProps {
  features: Feature[];
}

export function HotbarFeatures({ features }: HotbarFeaturesProps) {
  return (
    <section className="relative bg-gradient-to-r from-[#003366] to-[#0055aa] overflow-hidden">
      {/* Wavy divider at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        style={{ transform: "translateY(1px)" }}
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,20 Q300,0 600,20 T1200,20 L1200,60 L0,60 Z"
          fill="url(#wave-gradient)"
        />
      </svg>

      <div className="container mx-auto px-6 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-[#00d4ff]/20 flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-[#00d4ff]" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold text-sm md:text-base leading-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-[#cce7ff] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
