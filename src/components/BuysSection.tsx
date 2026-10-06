import { useState } from "react";
import { Bed, Bath, Ruler, MapPin, ArrowRight, X } from "lucide-react";

interface House {
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

const houses: House[] = [
  {
    id: 1,
    title: "Modern Family Home",
    location: "DHA Lahore",
    price: "PKR 4.5 Crore",
    beds: 5,
    baths: 6,
    size: "1 Kanal",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description:
      "A beautifully designed modern family home with spacious rooms, elegant interiors and premium finishes.",
  },
  {
    id: 2,
    title: "Luxury Villa",
    location: "Bahria Town Lahore",
    price: "PKR 3.8 Crore",
    beds: 5,
    baths: 5,
    size: "10 Marla",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Luxury villa featuring modern architecture, spacious bedrooms and a beautiful living area.",
  },
  {
    id: 3,
    title: "Elegant Family House",
    location: "Valencia Town Lahore",
    price: "PKR 2.9 Crore",
    beds: 4,
    baths: 5,
    size: "10 Marla",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    description:
      "A spacious and elegant family house located in a peaceful and well-developed society.",
  },
  {
    id: 4,
    title: "Contemporary House",
    location: "Wapda Town Lahore",
    price: "PKR 2.5 Crore",
    beds: 4,
    baths: 4,
    size: "10 Marla",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Contemporary house with modern rooms, stylish interiors and excellent construction quality.",
  },
  {
    id: 5,
    title: "Beautiful Family Home",
    location: "DHA Rahbar Lahore",
    price: "PKR 2.2 Crore",
    beds: 4,
    baths: 4,
    size: "8 Marla",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
    description:
      "Beautiful family home with comfortable bedrooms, spacious kitchen and attractive elevation.",
  },
  {
    id: 6,
    title: "Modern Double Storey House",
    location: "Lake City Lahore",
    price: "PKR 5.2 Crore",
    beds: 5,
    baths: 6,
    size: "1 Kanal",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    description:
      "A premium double-storey house with luxurious interiors and excellent living spaces.",
  },
  {
    id: 7,
    title: "Spacious House",
    location: "Bahria Orchard Lahore",
    price: "PKR 1.9 Crore",
    beds: 4,
    baths: 4,
    size: "10 Marla",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
    description:
      "Spacious house with a beautiful front elevation and comfortable living areas.",
  },
  {
    id: 8,
    title: "Luxury Residential House",
    location: "Khyban e Amin Lahore",
    price: "PKR 2.7 Crore",
    beds: 5,
    baths: 5,
    size: "10 Marla",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    description:
      "Luxury residential property with modern design and premium construction.",
  },
  {
    id: 9,
    title: "Modern 5 Marla House",
    location: "TIP Housing Society Lahore",
    price: "PKR 1.45 Crore",
    beds: 3,
    baths: 4,
    size: "5 Marla",
    image:
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1200&q=80",
    description:
      "Modern 5 marla house suitable for a small family with all essential facilities.",
  },
  {
    id: 10,
    title: "Premium Family House",
    location: "Audit and Accounts Housing Society Lahore",
    price: "PKR 2.1 Crore",
    beds: 4,
    baths: 4,
    size: "10 Marla",
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Premium family house with spacious rooms and a peaceful residential environment.",
  },
  {
    id: 11,
    title: "Elegant Residential Home",
    location: "Fazaia Housing Society Lahore",
    price: "PKR 3.2 Crore",
    beds: 5,
    baths: 5,
    size: "1 Kanal",
    image:
      "https://images.unsplash.com/photo-1600585154201-9d4f7c6a6c2c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Elegant residential home with excellent construction, spacious rooms and premium location.",
  },
  {
    id: 12,
    title: "Classic Family House",
    location: "NFC Housing Society Lahore",
    price: "PKR 2.4 Crore",
    beds: 4,
    baths: 4,
    size: "10 Marla",
    image:
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1200&q=80",
    description:
      "Classic family house with comfortable living spaces and a convenient location.",
  },
];

interface BuyPageProps {
  searchTerm: string;
}

export default function BuyPage({ searchTerm }: BuyPageProps) {
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);

  const filteredHouses = houses.filter((house) =>
    `buy sale house ${house.title} ${house.location} ${house.price} ${house.size} ${house.description}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Houses for Sale
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find your perfect home from our collection of beautiful properties
            available for sale in Lahore.
          </p>
        </div>

        {filteredHouses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHouses.map((house) => (
              <div
                key={house.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={house.image}
                    alt={house.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute top-4 right-4 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {house.price}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {house.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{house.location}</span>
                  </div>

                  <div className="flex items-center gap-5 text-gray-600 mb-5">
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5" />
                      <span>{house.beds} Beds</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Bath className="w-5 h-5" />
                      <span>{house.baths} Baths</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Ruler className="w-5 h-5" />
                      <span>{house.size}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedHouse(house)}
                    className="flex items-center justify-center gap-2 w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-xl font-medium transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-800">
              No properties found
            </h2>
            <p className="text-gray-500 mt-2">
              Try searching for another property, location, or size.
            </p>
          </div>
        )}
      </div>

      {selectedHouse && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedHouse.image}
                alt={selectedHouse.title}
                className="w-full h-72 object-cover"
              />

              <button
                onClick={() => setSelectedHouse(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {selectedHouse.title}
              </h2>

              <div className="flex items-center gap-2 text-gray-500 mb-5">
                <MapPin className="w-5 h-5" />
                <span>{selectedHouse.location}</span>
              </div>

              <div className="text-2xl font-bold text-purple-600 mb-6">
                {selectedHouse.price}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <Bed className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Bedrooms</p>
                  <p className="font-semibold text-gray-900">
                    {selectedHouse.beds}
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <Bath className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Bathrooms</p>
                  <p className="font-semibold text-gray-900">
                    {selectedHouse.baths}
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <Ruler className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Size</p>
                  <p className="font-semibold text-gray-900">
                    {selectedHouse.size}
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Description
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {selectedHouse.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}