import { useEffect, useRef, useState } from "react";
import arifmanzoor from "../assets/arif-manzoor.jpeg";
import {
  Award,
  MapPinned,
  Home,
  Building2,
  LandPlot,
  KeyRound,
  ShieldCheck,
  Quote,
} from "lucide-react";

const societies = [
  "DHA Lahore",
  "Bahria Town",
  "Gulberg",
  "Johar Town",
  "Model Town",
  "Wapda Town",
  "Valencia Town",
  "Askari 10",
];

const specialties = [
  { label: "Residential Houses", icon: Home },
  { label: "Plots & Land", icon: LandPlot },
  { label: "Commercial Property", icon: Building2 },
  { label: "Rentals & Leasing", icon: KeyRound },
];

export default function AboutPage() {
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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-purple-50/40 min-h-screen">
      {/* Hero / intro block */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in-up">
            <div className="absolute -inset-3 bg-gradient-to-tr from-purple-200 to-purple-50 rounded-3xl rotate-2" />
           <img
  src={arifmanzoor}
  alt="Arif Manzoor - Owner, Arif Estate Advisor"
  className="relative w-full h-[420px] object-cover rounded-3xl shadow-xl shadow-purple-100"
/>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg shadow-purple-100 border border-purple-100 px-6 py-4 flex items-center gap-3">
              <div className="bg-purple-100 p-2.5 rounded-xl">
                <Award className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-800">20+</p>
                <p className="text-xs text-gray-500">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            <span className="inline-block bg-purple-100 text-purple-600 text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-4">
              About Us
            </span>
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-2">
              Arif Manzoor
            </h1>
            <p className="text-purple-500 font-medium mb-6">
              Owner, Arif Estate Advisor
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              With over <span className="font-semibold text-gray-800">20 years of experience</span> in
              the real estate industry, Arif Manzoor has built Arif Estate
              Advisor into a name that families and investors across Lahore
              trust. His journey has been driven by one simple principle —
              honest advice and a genuine commitment to finding clients the
              right property.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              From residential homes to commercial plots, from rentals to
              full property sales, Arif Manzoor's deep understanding of
              Lahore's real estate market has helped thousands of clients
              make confident, informed decisions.
            </p>

            <div className="flex items-start gap-3 bg-white border border-purple-100 rounded-2xl p-5 shadow-sm">
              <Quote className="w-6 h-6 text-purple-300 shrink-0" />
              <p className="text-sm text-gray-600 italic leading-relaxed">
                "Real estate isn't just about property — it's about trust. I've
                spent two decades making sure every client walks away
                confident in their decision."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / societies section */}
      <section ref={sectionRef} className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-block bg-purple-100 text-purple-600 text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-4">
              Two Decades of Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
              Experience across
              <span className="text-purple-500 italic"> every major society</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Arif Manzoor has worked extensively in Lahore's most sought-after
              societies, dealing in all types of real estate — houses, plots,
              commercial spaces, and rentals.
            </p>
          </div>

          {/* Specialties */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
            {specialties.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className={`group bg-white border border-purple-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-1 transition-all duration-500 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-500">
                    <Icon className="w-6 h-6 text-purple-500 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {s.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Societies worked in */}
          <div
            className={`bg-white border border-purple-100 rounded-3xl p-8 sm:p-10 shadow-sm transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Societies He Has Worked In
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  20 years of hands-on dealing across Lahore's top locations.
                </p>
              </div>
              <div className="flex items-center gap-2 text-purple-500 text-sm font-medium">
                <ShieldCheck className="w-4 h-4" />
                Trusted by Thousands
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {societies.map((society, i) => (
                <span
                  key={society}
                  className={`flex items-center gap-1.5 bg-purple-50 hover:bg-purple-500 hover:text-white text-purple-600 text-sm font-medium px-4 py-2 rounded-full border border-purple-100 transition-all duration-500 cursor-default ${
                    visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                  style={{ transitionDelay: `${400 + i * 80}ms` }}
                >
                  <MapPinned className="w-3.5 h-3.5" />
                  {society}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
}
