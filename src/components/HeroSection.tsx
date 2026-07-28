import { Search, MapPin, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-purple-50">
      {/* Background image, blurred */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-sm"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop')",
        }}
      />

      {/* Soft white/purple overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-purple-100/70" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-purple-600 text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full shadow-sm border border-purple-100 mb-6">
          <MapPin className="w-3.5 h-3.5" />
          Find your place, effortlessly
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-800 leading-tight mb-4">
          A home that feels like
          <span className="block text-purple-500 italic">home again.</span>
        </h1>

        <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-xl">
          Discover handpicked properties in the neighborhoods you love —
          curated listings, honest pricing, and a search made simple.
        </p>

        {/* Search bar */}
        <div className="w-full max-w-2xl bg-white/90 backdrop-blur-md rounded-2xl shadow-lg shadow-purple-100 border border-purple-100 p-2 flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 flex-1 px-4 py-3">
            <Search className="w-5 h-5 text-purple-400 shrink-0" />
            <input
              type="text"
              placeholder="Search by city, neighborhood, or ZIP"
              className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl text-sm font-medium transition-colors shrink-0">
            Search Homes
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 mt-10 text-gray-700">
          <div className="text-center">
            <p className="text-2xl font-semibold text-purple-600">2,400+</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Listings</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold text-purple-600">150+</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Cities</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold text-purple-600">98%</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
