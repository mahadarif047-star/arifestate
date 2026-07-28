import { useState } from "react";
import { Home, Search, Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  onBuyClick?: () => void;
  onRentClick?: () => void;
  onSellClick?: () => void;
  onAgentsClick?: () => void;
  onAboutClick?: () => void;
  onLogoClick?: () => void;
}

export default function Navbar({
  onBuyClick,
  onRentClick,
  onSellClick,
  onAgentsClick,
  onAboutClick,
  onLogoClick,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Buy", hasDropdown: true },
    { label: "Rent", hasDropdown: true },
    { label: "Sell", hasDropdown: false },
    { label: "Agents", hasDropdown: false },
    { label: "About", hasDropdown: false },
  ];

  return (
    <nav className="bg-white border-b border-purple-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={onLogoClick}
            className="flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <div className="bg-purple-100 p-2 rounded-xl">
              <Home className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-xl font-semibold text-gray-800">
              Arif Estate<span className="text-purple-500"> Advisor</span>
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={
                  link.label === "Buy"
                    ? onBuyClick
                    : link.label === "Rent"
                    ? onRentClick
                    : link.label === "Sell"
                    ? onSellClick
                    : link.label === "Agents"
                    ? onAgentsClick
                    : link.label === "About"
                    ? onAboutClick
                    : undefined
                }
                className="flex items-center gap-1 text-gray-600 hover:text-purple-600 font-medium text-sm transition-colors"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
          </div>

          {/* Search + CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button className="flex items-center gap-2 bg-purple-50 hover:bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              <Search className="w-4 h-4" />
              Search
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm shadow-purple-200">
              List Property
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-purple-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-purple-100 px-4 pb-4">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  if (link.label === "Buy" && onBuyClick) onBuyClick();
                  if (link.label === "Rent" && onRentClick) onRentClick();
                  if (link.label === "Sell" && onSellClick) onSellClick();
                  if (link.label === "Agents" && onAgentsClick) onAgentsClick();
                  if (link.label === "About" && onAboutClick) onAboutClick();
                  setIsOpen(false);
                }}
                className="flex items-center justify-between text-gray-600 hover:text-purple-600 hover:bg-purple-50 font-medium text-sm px-3 py-3 rounded-lg transition-colors"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
            <button className="flex items-center gap-2 bg-purple-50 text-purple-600 px-3 py-3 rounded-lg text-sm font-medium mt-2">
              <Search className="w-4 h-4" />
              Search
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-3 rounded-lg text-sm font-medium mt-1">
              List Property
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
