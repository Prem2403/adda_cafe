import React from 'react';
import { Phone, MapPin, Clock, ArrowUp, Instagram, Facebook } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Brand info */}
          <div className="space-y-4">
            <a href="#" className="inline-block text-2xl font-serif font-bold text-white tracking-tight">
              Original Adda
              <span className="text-amber-500 font-sans font-light text-sm ml-1 uppercase tracking-widest">
                Gourmet Cafe
              </span>
            </a>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-light">
              Jhargram’s premier evening destination for loaded artisan pizzas, authentic crispy tacos, hand-crafted mojitos, cold coffee with ice cream, and giant-screen match screenings.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Gourmet Menu</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Cafe Experiences</a>
              </li>
              <li>
                <a href="#offers" className="hover:text-white transition-colors">Curated Combos</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Guest Reviews</a>
              </li>
              <li>
                <a href="#visit" className="hover:text-white transition-colors">Location &amp; Hours</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">
              Contact &amp; Bookings
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-400">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${CAFE_INFO.phone}`} className="hover:text-white transition-colors block">
                    {CAFE_INFO.phone}
                  </a>
                  <a
                    href={CAFE_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:underline text-xs"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-snug">{CAFE_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* Timings & Google Rating */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">
              Daily Hours
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-stone-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Open 7 Days a Week</span>
              </div>
              <p className="font-medium text-white pl-6">
                6:30 AM – 9:30 PM
              </p>
              <div className="mt-4 pt-3 border-t border-stone-800 text-xs">
                <span className="text-amber-400 font-bold">4.4 ★</span> on Google
                <span className="text-stone-500"> ({CAFE_INFO.totalReviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with Back to top and user requested disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Original Adda Gourmet Cafe, Jhargram. All rights reserved.</p>
          
          {/* Note requested in prompt: Concept website. Photos and reviews belong to their owners. */}
          <p className="text-[11px] text-stone-400 italic">
            Concept website. Photos and reviews belong to their owners.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="inline-flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
