
import { useState } from "react";
import { Bed, Bath, Ruler, MapPin, ArrowRight, X } from "lucide-react";

interface RentalHouse {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  size: string;
  image: string;
  description: string;
}

const rentals: RentalHouse[] = [
  {
    id: 1,
    title: "Furnished Corner House",
    location: "Valencia Town, Lahore",
    price: "PKR 1,25,000 / month",
    beds: 3,
    baths: 3,
    size: "5 Marla",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    description:
      "A furnished corner house with comfortable living spaces, modern interiors, and a convenient layout, ideal for a family looking for a quality rental home.",
  },
  {
    id: 2,
    title: "Modern Studio Villa",
    location: "Valencia Town, Lahore",
    price: "PKR 65,000 / month",
    beds: 2,
    baths: 2,
    size: "10 Marla Upper Portion",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop",
    description:
      "A modern and comfortable upper portion featuring a practical layout, spacious rooms, and a peaceful residential environment.",
  },
  {
    id: 3,
    title: "Spacious Family Home",
    location: "DHA Rahbar Phase 11, Lahore",
    price: "PKR 1,15,000 / month",
    beds: 3,
    baths: 3,
    size: "5 Marla",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
    description:
      "A spacious family home with comfortable bedrooms, bathrooms, and living areas, suitable for a family seeking a convenient rental property.",
  },
  {
    id: 4,
    title: "Contemporary Bungalow",
    location: "UET, Lahore",
    price: "PKR 38,000 / month",
    beds: 1,
    baths: 1,
    size: "10 Marla Upper Portion",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    description:
      "A comfortable upper portion with a contemporary design and practical living space, suitable for individuals or a small family.",
  },
  {
    id: 5,
    title: "Luxury Front House",
    location: "Valencia Town, Lahore",
    price: "PKR 1,20,000 / month",
    beds: 3,
    baths: 3,
    size: "1 Kanal Upper Portion",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    description:
      "A spacious and elegant upper portion offering comfortable bedrooms, modern living areas, and a premium residential environment.",
  },
  {
    id: 6,
    title: "Cozy Suburban Home",
    location: "Valencia Town, Lahore",
    price: "PKR 80,000 / month",
    beds: 3,
    baths: 3,
    size: "10 Marla",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
    description:
      "A cozy suburban home with comfortable rooms, a welcoming design, and enough space for peaceful family living.",
  },
  {
    id: 7,
    title: "White Facade Residence",
    location: "Valencia Town, Lahore",
    price: "PKR 1,60,000 / month",
    beds: 4,
    baths: 3,
    size: "8 Marla",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
    description:
      "A beautiful residence featuring a clean exterior, comfortable interiors, and a practical layout for family living.",
  },
  {
    id: 8,
    title: "Grand Entrance Villa",
    location: "Askari 10, Lahore",
    price: "PKR 2,00,000 / month",
    beds: 5,
    baths: 4,
    size: "10 Marla",
    image:
      "https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=800&auto=format&fit=crop",
    description:
      "An elegant villa with a grand entrance, spacious rooms, and a refined design in a desirable residential location.",
  },
  {
    id: 9,
    title: "Sunlit Modern House",
    location: "DHA Phase 8, Lahore",
    price: "PKR 1,40,000 / month",
    beds: 3,
    baths: 3,
    size: "5 Marla",
    image:
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=800&auto=format&fit=crop",
    description:
      "A bright modern house with naturally lit rooms, contemporary interiors, and a comfortable layout for family living.",
  },
  {
    id: 10,
    title: "Elegant Double Storey",
    location: "Bahria Town, Lahore",
    price: "PKR 1,10,000 / month",
    beds: 3,
    baths: 2,
    size: "5 Marla",
    image:
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=800&auto=format&fit=crop",
    description:
      "An elegant double-storey home with a practical layout, comfortable bedrooms, and spacious living areas.",
  },
  {
    id: 11,
    title: "Stone Facade Estate",
    location: "Gulberg, Lahore",
    price: "PKR 3,00,000 / month",
    beds: 6,
    baths: 5,
    size: "1 Kanal",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop",
    description:
      "A premium estate with a distinctive stone facade, generous living spaces, multiple bedrooms, and a luxurious residential feel.",
  },
  {
    id: 12,
    title: "Warm Family Residence",
    location: "Johar Town, Lahore",
    price: "PKR 1,30,000 / month",
    beds: 3,
    baths: 3,
    size: "8 Marla",
    image:
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=800&auto=format&fit=crop",
    description:
      "A warm and welcoming family residence with comfortable interiors, a practical layout, and convenient access to local facilities.",
  },
];

export default function RentPage() {
  const [selectedHouse, setSelectedHouse] = useState<RentalHouse | null>(null);

  return (
    <section className="bg-purple-50/40 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-purple-100 text-purple-600 text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-4">
            Homes for Rent
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
            Find a house you'll
            <span className="text-purple-500 italic"> love to rent</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Browse verified rental listings across Lahore's most trusted societies.
          </p>
        </div>

        {/* Cards grid: 3 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rentals.map((house) => (
            <div
              key={house.id}
              className="group bg-white rounded-2xl overflow-hidden border border-purple-100 shadow-sm hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-1 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={house.image}
                  alt={house.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-purple-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  For Rent
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  {house.location}
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {house.title}
                </h3>

                <p className="text-xl font-semibold text-purple-500 mb-4">
                  {house.price}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-purple-50 pt-4">
                  <span className="flex items-center gap-1.5">
                    <Bed className="w-4 h-4 text-purple-400" />
                    {house.beds} Beds
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath className="w-4 h-4 text-purple-400" />
                    {house.baths} Baths
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Ruler className="w-4 h-4 text-purple-400" />
                    {house.size}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedHouse(house)}
                  className="w-full mt-5 flex items-center justify-center gap-2 bg-purple-50 group-hover:bg-purple-500 text-purple-600 group-hover:text-white text-sm font-medium py-2.5 rounded-xl transition-colors duration-500"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {selectedHouse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelectedHouse(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedHouse(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 text-gray-600 hover:text-purple-600 shadow-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedHouse.image}
              alt={selectedHouse.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                {selectedHouse.location}
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {selectedHouse.title}
              </h2>

              <p className="text-xl font-semibold text-purple-500 mb-5">
                {selectedHouse.price}
              </p>

              <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 border-y border-purple-50 py-4 mb-5">
                <span className="flex items-center gap-1.5">
                  <Bed className="w-4 h-4 text-purple-400" />
                  {selectedHouse.beds} Beds
                </span>

                <span className="flex items-center gap-1.5">
                  <Bath className="w-4 h-4 text-purple-400" />
                  {selectedHouse.baths} Baths
                </span>

                <span className="flex items-center gap-1.5">
                  <Ruler className="w-4 h-4 text-purple-400" />
                  {selectedHouse.size}
                </span>
              </div>

              <p className="text-gray-600 text-sm leading-6">
                {selectedHouse.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
