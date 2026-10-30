import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, CalendarCheck, Phone } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface NavbarProps {
  onReserveClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReserveClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Experiences', href: '#experience' },
    { label: 'Offers', href: '#offers' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit Us', href: '#visit' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3.5'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Exactly 3 Zones separated by gap-8 */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark (Single text element in display face) */}
            <a
              href="#"
              className={`text-xl sm:text-2xl font-serif font-bold tracking-tight whitespace-nowrap shrink-0 transition-colors ${
                isScrolled ? 'text-stone-900' : 'text-white'
              }`}
            >
              Original Adda
              <span className="text-amber-500 font-sans font-light text-base ml-1 tracking-wider uppercase">
                Cafe
              </span>
            </a>

            {/* Zone 2: 4-5 Nav Links (Single line, quiet hover) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-amber-500 ${
                    isScrolled
                      ? 'text-stone-600 hover:text-stone-950'
                      : 'text-stone-200 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 Primary Action (Reserve a Table) + Mobile Hamburger */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${CAFE_INFO.phone}`}
                className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-full border transition-colors ${
                  isScrolled
                    ? 'border-stone-300 text-stone-700 hover:bg-stone-50'
                    : 'border-white/30 text-white hover:bg-white/10'
                }`}
                title="Call Cafe"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>Call Us</span>
              </a>

              <button
                onClick={onReserveClick}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 active:scale-[0.98] rounded-full shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Reserve Table</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${
                  isScrolled
                    ? 'text-stone-800 hover:bg-stone-100'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-18 right-4 left-4 p-6 bg-white rounded-2xl shadow-2xl border border-stone-200 z-40 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-4">
              <div className="pb-3 border-b border-stone-100">
                <span className="text-xs uppercase tracking-widest text-amber-600 font-semibold">
                  Original Adda Gourmet Cafe
                </span>
                <p className="text-xs text-stone-500 mt-0.5">
                  Jhargram · 6:30 AM to 9:30 PM
                </p>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-stone-800 hover:text-amber-600 py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 border-t border-stone-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onReserveClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-600 text-white font-medium text-sm shadow-sm"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Reserve Table</span>
                </button>
                <a
                  href={CAFE_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-stone-200 text-stone-700 font-medium text-sm hover:bg-stone-50"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
