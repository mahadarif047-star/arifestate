import { useEffect, useRef, useState } from "react";
import { ShieldCheck, MapPinned, Users, Award } from "lucide-react";

const stats = [
  { label: "Years of Experience", value: 12, suffix: "+", icon: Award },
  { label: "Happy Clients", value: 3200, suffix: "+", icon: Users },
  { label: "Societies Covered", value: 20, suffix: "+", icon: MapPinned },
  { label: "Verified Listings", value: 98, suffix: "%", icon: ShieldCheck },
];

const cities = [
  "DHA Lahore",
  "Bahria Town",
  "Gulberg",
  "Johar Town",
  "Model Town",
  "Wapda Town",
  "Valencia Town",
  "Askari 10",
];

function useCountUp(target: number, shouldStart: boolean, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };

    requestAnimationFrame(step);
  }, [shouldStart, target, duration]);

  return value;
}

function StatCard({
  stat,
  visible,
  delay,
}: {
  stat: (typeof stats)[number];
  visible: boolean;
  delay: number;
}) {
  const count = useCountUp(stat.value, visible);
  const Icon = stat.icon;

  return (
    <div
      className={`group relative bg-white border border-purple-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-1 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-500">
        <Icon className="w-6 h-6 text-purple-500 group-hover:text-white transition-colors duration-500" />
      </div>
      <p className="text-3xl font-semibold text-gray-800">
        {count}
        <span className="text-purple-500">{stat.suffix}</span>
      </p>
      <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
    </div>
  );
}

export default function TrustSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 bg-gradient-to-b from-white to-purple-50 overflow-hidden"
    >
      {/* Decorative floating blobs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute -bottom-24 -right-10 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl animate-float-slower" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block bg-purple-100 text-purple-600 text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-4">
            Trusted Across Lahore
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
            Experience clients rely on,
            <span className="block text-purple-500 italic">
              in every society of Lahore.
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            With over a decade in the field, we've helped thousands of
            families and investors find the right property — backed by local
            expertise in Lahore's most sought-after societies.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} visible={visible} delay={i * 120} />
          ))}
        </div>

        {/* Cities we serve */}
        <div
          className={`bg-white border border-purple-100 rounded-3xl p-8 sm:p-10 shadow-sm transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                We work all over Lahore
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Local presence in every society — wherever your next home is.
              </p>
            </div>
            <div className="flex items-center gap-2 text-purple-500 text-sm font-medium">
              <ShieldCheck className="w-4 h-4" />
              100% Verified Agents
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {cities.map((city, i) => (
              <span
                key={city}
                className={`flex items-center gap-1.5 bg-purple-50 hover:bg-purple-500 hover:text-white text-purple-600 text-sm font-medium px-4 py-2 rounded-full border border-purple-100 transition-all duration-500 cursor-default ${
                  visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${400 + i * 80}ms` }}
              >
                <MapPinned className="w-3.5 h-3.5" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 30px); }
        }
        @keyframes floatSlower {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-25px, -20px); }
        }
        .animate-float-slow {
          animation: floatSlow 9s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: floatSlower 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
