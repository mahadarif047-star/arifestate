import { useState } from "react";
import {
  Bed,
  Bath,
  Ruler,
  MapPin,
  ArrowRight,
  LandPlot,
  X,
} from "lucide-react";

interface Listing {
  id: number;
  title: string;
  location: string;
  price: string;
  size: string;
  image: string;
  beds?: number;
  baths?: number;
  description?: string;
}

const houses: Listing[] = [
  {
    id: 1,
    title: "Modern Family House",
    location: "DHA Lahore",
    price: "PKR 4.5 Crore",
    size: "1 Kanal",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    beds: 5,
    baths: 6,
    description:
      "A beautiful modern family house with spacious rooms and premium construction.",
  },
  {
    id: 2,
    title: "Luxury Villa",
    location: "Bahria Town Lahore",
    price: "PKR 3.8 Crore",
    size: "10 Marla",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    beds: 5,
    baths: 5,
    description:
      "Luxury villa with modern architecture, elegant interiors and spacious living areas.",
  },
  {
    id: 3,
    title: "Elegant Family Home",
    location: "Valencia Town Lahore",
    price: "PKR 2.9 Crore",
    size: "10 Marla",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    beds: 4,
    baths: 5,
    description:
      "Elegant family home located in a peaceful and well-developed residential area.",
  },
  {
    id: 4,
    title: "Contemporary House",
    location: "Wapda Town Lahore",
    price: "PKR 2.5 Crore",
    size: "10 Marla",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    beds: 4,
    baths: 4,
    description:
      "Contemporary house with modern rooms, stylish interiors and excellent construction.",
  },
  {
    id: 5,
    title: "Beautiful Family House",
    location: "DHA Rahbar Lahore",
    price: "PKR 2.2 Crore",
    size: "8 Marla",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
    beds: 4,
    baths: 4,
    description:
      "Beautiful family house with comfortable bedrooms and attractive elevation.",
  },
  {
    id: 6,
    title: "Modern Double Storey House",
    location: "Lake City Lahore",
    price: "PKR 5.2 Crore",
    size: "1 Kanal",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    beds: 5,
    baths: 6,
    description:
      "Premium double-storey house with luxurious interiors and excellent living spaces.",
  },
];

const plots: Listing[] = [
  {
    id: 1,
    title: "Residential Plot",
    location: "DHA Lahore",
    price: "PKR 1.8 Crore",
    size: "1 Kanal",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    description:
      "Prime residential plot available in a highly desirable location.",
  },
  {
    id: 2,
    title: "Premium Residential Plot",
    location: "Bahria Town Lahore",
    price: "PKR 1.2 Crore",
    size: "10 Marla",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    description:
      "Premium residential plot located in a developed and secure society.",
  },
  {
    id: 3,
    title: "Corner Plot",
    location: "Valencia Town Lahore",
    price: "PKR 95 Lakh",
    size: "10 Marla",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    description:
      "Excellent corner plot suitable for building a beautiful family home.",
  },
  {
    id: 4,
    title: "Residential Plot",
    location: "Wapda Town Lahore",
    price: "PKR 85 Lakh",
    size: "8 Marla",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
    description:
      "Residential plot in a peaceful and established housing society.",
  },
  {
    id: 5,
    title: "Prime Location Plot",
    location: "DHA Rahbar Lahore",
    price: "PKR 75 Lakh",
    size: "5 Marla",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    description:
      "Prime location plot suitable for residential construction.",
  },
  {
    id: 6,
    title: "Commercial Plot",
    location: "Lake City Lahore",
    price: "PKR 3.5 Crore",
    size: "1 Kanal",
    image:
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Excellent commercial plot with strong investment potential.",
  },
];

interface ListingCardProps {
  item: Listing;
  type: "house" | "plot";
  onViewDetails: () => void;
}

function ListingCard({
  item,
  type,
  onViewDetails,
}: ListingCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-4 right-4 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {item.price}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {item.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-500 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{item.location}</span>
        </div>

        <div className="flex items-center gap-5 text-gray-600 mb-5">
          {type === "house" && (
            <>
              <div className="flex items-center gap-2">
                <Bed className="w-5 h-5" />
                <span>{item.beds} Beds</span>
              </div>

              <div className="flex items-center gap-2">
                <Bath className="w-5 h-5" />
                <span>{item.baths} Baths</span>
              </div>
            </>
          )}

          <div className="flex items-center gap-2">
            {type === "plot" ? (
              <LandPlot className="w-5 h-5" />
            ) : (
              <Ruler className="w-5 h-5" />
            )}

            <span>{item.size}</span>
          </div>
        </div>

        <button
          onClick={onViewDetails}
          className="flex items-center justify-center gap-2 w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-xl font-medium transition-colors"
        >
          View Details
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

interface SellPageProps {
  searchTerm: string;
}

export default function SellPage({ searchTerm }: SellPageProps) {
  const [selectedListing, setSelectedListing] = useState<{
    item: Listing;
    type: "house" | "plot";
  } | null>(null);

  const filteredHouses = houses.filter((house) =>
    `sell sale house ${house.title} ${house.location} ${house.price} ${house.size} ${house.description}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const filteredPlots = plots.filter((plot) =>
    `sell sale plot ${plot.title} ${plot.location} ${plot.price} ${plot.size} ${plot.description}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sell Your Property
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find buyers for your houses and plots with our property selling
            services.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Houses for Sale
          </h2>

          {filteredHouses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredHouses.map((house) => (
                <ListingCard
                  key={house.id}
                  item={house}
                  type="house"
                  onViewDetails={() =>
                    setSelectedListing({
                      item: house,
                      type: "house",
                    })
                  }
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-800">
                No houses found
              </h3>
              <p className="text-gray-500 mt-2">
                Try searching for another property, location, or size.
              </p>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Plots for Sale
          </h2>

          {filteredPlots.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlots.map((plot) => (
                <ListingCard
                  key={plot.id}
                  item={plot}
                  type="plot"
                  onViewDetails={() =>
                    setSelectedListing({
                      item: plot,
                      type: "plot",
                    })
                  }
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-800">
                No plots found
              </h3>
              <p className="text-gray-500 mt-2">
                Try searching for another property, location, or size.
              </p>
            </div>
          )}
        </div>
      </div>

      {selectedListing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedListing.item.image}
                alt={selectedListing.item.title}
                className="w-full h-72 object-cover"
              />

              <button
                onClick={() => setSelectedListing(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {selectedListing.item.title}
              </h2>

              <div className="flex items-center gap-2 text-gray-500 mb-5">
                <MapPin className="w-5 h-5" />
                <span>{selectedListing.item.location}</span>
              </div>

              <div className="text-2xl font-bold text-purple-600 mb-6">
                {selectedListing.item.price}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {selectedListing.type === "house" && (
                  <>
                    <div className="bg-purple-50 rounded-xl p-4 text-center">
                      <Bed className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Bedrooms</p>
                      <p className="font-semibold text-gray-900">
                        {selectedListing.item.beds}
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-4 text-center">
                      <Bath className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Bathrooms</p>
                      <p className="font-semibold text-gray-900">
                        {selectedListing.item.baths}
                      </p>
                    </div>
                  </>
                )}

                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  {selectedListing.type === "plot" ? (
                    <LandPlot className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                  ) : (
                    <Ruler className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                  )}

                  <p className="text-sm text-gray-500">Size</p>
                  <p className="font-semibold text-gray-900">
                    {selectedListing.item.size}
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Description
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {selectedListing.item.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}