import { Bed, Bath, Ruler, MapPin, ArrowRight, LandPlot } from "lucide-react";

interface Listing {
  id: number;
  title: string;
  location: string;
  price: string;
  size: string;
  image: string;
  beds?: number;
  baths?: number;
}

const houses: Listing[] = [
 {
    id: 1,
    title: "Elegant Corner House",
    location: "Valancia Town, Lahore",
    price: "PKR 5 Crore",
    beds: 5,
    baths: 5,
    size: "10 Marla",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Modern Minimalist Villa",
    location: "NFC Housing Society, Lahore",
    price: "PKR 8.5 Crore",
    beds: 5,
    baths: 5,
    size: "1 Kanal",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Classic Family Home",
    location: "UET, Lahore",
    price: "PKR 8.5 Crore",
    beds: 6,
    baths: 6,
    size: "2 Kanal",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Contemporary Bungalow",
    location: "Valancia Town, Lahore",
    price: "PKR 12 Crore",
    beds: 6,
    baths: 6,
    size: "1 Kanal",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Luxury Front House",
    location: "Valancia Town, Lahore",
    price: "PKR 19 Crore",
    beds: 6,
    baths: 6,
    size: "2 Kanal",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Cozy Suburban Home",
    location: "Valancia Town, Lahore",
    price: "PKR 8 Crore",
    beds: 5,
    baths: 5,
    size: "1 kanal",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
  },
];

const plots: Listing[] = [
  {
    id: 1,
    title: "Prime Residential Plot",
    location: "Valencia Town, Lahore",
    price: "PKR 13 Crore",
    size: "2 Kanal",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Corner Plot, Prime Location",
    location: "Valencia Town , Lahore",
    price: "PKR 9.5 Crore",
    size: "2 Kanal",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Wide Boulevard Plot",
    location: "Valencia Town, Lahore",
    price: "PKR 4 Crore",
    size: "1 Kanal",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Commercial Plot",
    location: "Valencia Town, Lahore",
    price: "PKR 4.5 Crore",
    size: "1 Kanal",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Ready to Construct Plot",
    location: "Bahria  Town, Lahore",
    price: "PKR 155 Lac",
    size: "8 Marla",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Investment Grade Plot",
    location: "Khyban e Amin, Lahore",
    price: "PKR 60 Lacs",
    size: "5 Marla",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
  },
];

function ListingCard({ item, type }: { item: Listing; type: "house" | "plot" }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-purple-100 shadow-sm hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-1 transition-all duration-500">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-purple-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          {type === "house" ? "House • For Sale" : "Plot • For Sale"}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
          <MapPin className="w-3.5 h-3.5 text-purple-400" />
          {item.location}
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
          {item.title}
        </h3>

        <p className="text-xl font-semibold text-purple-500 mb-4">{item.price}</p>

        <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-purple-50 pt-4">
          {type === "house" ? (
            <>
              <span className="flex items-center gap-1.5">
                <Bed className="w-4 h-4 text-purple-400" />
                {item.beds} Beds
              </span>
              <span className="flex items-center gap-1.5">
                <Bath className="w-4 h-4 text-purple-400" />
                {item.baths} Baths
              </span>
              <span className="flex items-center gap-1.5">
                <Ruler className="w-4 h-4 text-purple-400" />
                {item.size}
              </span>
            </>
          ) : (
            <span className="flex items-center gap-1.5">
              <LandPlot className="w-4 h-4 text-purple-400" />
              {item.size}
            </span>
          )}
        </div>

        <button className="w-full mt-5 flex items-center justify-center gap-2 bg-purple-50 group-hover:bg-purple-500 text-purple-600 group-hover:text-white text-sm font-medium py-2.5 rounded-xl transition-colors duration-500">
          View Details
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function SellPage() {
  return (
    <section className="bg-purple-50/40 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-purple-100 text-purple-600 text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-4">
            Properties for Sale
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
            Houses and plots
            <span className="text-purple-500 italic"> ready to sell</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Browse our latest houses and plots listed for sale across Lahore.
          </p>
        </div>

        {/* Houses */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Houses for Sale
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {houses.map((house) => (
              <ListingCard key={`house-${house.id}`} item={house} type="house" />
            ))}
          </div>
        </div>

        {/* Plots */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Plots for Sale
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {plots.map((plot) => (
              <ListingCard key={`plot-${plot.id}`} item={plot} type="plot" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
