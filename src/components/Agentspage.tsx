import { MessageCircle, BadgeCheck } from "lucide-react";
import kashifPhoto from "../assets/kashif.jpeg";
import mahadPhoto from "../assets/mahad.jpeg";
import nazirPhoto from "../assets/nazir.jpeg";

interface Agent {
  id: number;
  name: string;
  role: string;
  description: string;
  whatsapp: string; // international format, no + or spaces
  image: string;
}

const agents: Agent[] = [
  {
    id: 1,
    name: "Sheikh Kashif",
    role: "Rent & House Selling Specialist",
    description:
      "Brother of Sheikh Arif Manzoor. Specializes in rentals and house sales, helping clients find the right deal quickly and reliably.",
    whatsapp: "923004190283",
    image: kashifPhoto,
  },
  {
    id: 2,
    name: "Sheikh Mahad",
    role: "Property Consultant",
    description:
      "Son of Sheikh Arif Manzoor. Brings a fresh, client-first approach to property consultation across Lahore's top societies.",
    whatsapp: "923274332844",
    image: mahadPhoto,
  },
  {
    id: 3,
    name: "Nazir Multani",
    role: "Rent Specialist",
    description:
      "Works at Arif Estate Advisor. Focused on rental properties, matching tenants with the right home at the right price.",
    whatsapp: "923083622114",
    image: nazirPhoto,
  },
];

export default function AgentsPage() {
  return (
    <section className="bg-purple-50/40 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-purple-100 text-purple-600 text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-4">
            Meet Our Team
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
            Agents you can
            <span className="text-purple-500 italic"> trust</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Reach out directly to our specialists on WhatsApp — quick replies,
            honest advice.
          </p>
        </div>

        {/* Agents grid: 3 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="group bg-white rounded-2xl overflow-hidden border border-purple-100 shadow-sm hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-1 transition-all duration-500 text-center"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {agent.name}
                  </h3>
                  <BadgeCheck className="w-4 h-4 text-purple-500" />
                </div>

                <p className="text-sm font-medium text-purple-500 mb-3">
                  {agent.role}
                </p>

                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {agent.description}
                </p>

                <a
                  href={`https://wa.me/${agent.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-purple-50 group-hover:bg-green-500 text-purple-600 group-hover:text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-500"
                >
                  <MessageCircle className="w-4 h-4" />
                  Message on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
