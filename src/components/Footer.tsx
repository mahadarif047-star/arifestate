import { Home, MapPin, Mail, Phone, MessageCircle } from "lucide-react";

// Instagram and Facebook were removed from lucide-react in v1.0 (brand icons),
// so we use small custom SVGs instead.
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const whatsappNumber = "923228439500"; // 03228439500 in international format
  const instagramHandle = "arifestateadvisor";

  const quickLinks = ["Buy", "Rent", "Sell", "Agents", "About Us"];
  const societies = ["DHA Lahore", "Bahria Town", "Gulberg", "Johar Town", "Model Town"];

  return (
    <footer className="relative bg-white border-t border-purple-100 pt-16 pb-8 px-6 overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-purple-100 p-2 rounded-xl">
                <Home className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-lg font-semibold text-gray-800">
                Arif<span className="text-purple-500">Estate</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              Helping you find the right home in Lahore's most trusted
              societies — honest advice, verified listings.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message us on WhatsApp"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-50 text-purple-600 hover:bg-green-500 hover:text-white transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`https://instagram.com/${instagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-50 text-purple-600 hover:bg-purple-500 hover:text-white transition-colors duration-300"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Visit our Facebook"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-50 text-purple-600 hover:bg-purple-500 hover:text-white transition-colors duration-300"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Societies */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-4">
              Popular Societies
            </h4>
            <ul className="space-y-3">
              {societies.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition-colors"
                >
                  <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                  0322 8439500
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                info@arifestate.com
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                 Valancia Town, Lahore
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} ArifEstate. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-gray-400">
            <a href="#" className="hover:text-purple-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
