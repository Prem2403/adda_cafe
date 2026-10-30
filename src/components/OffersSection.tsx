import React from 'react';
import { Tag, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CAFE_INFO, PHOTOS } from '../data/cafeData';
import { SafeImage } from './SafeImage';

export const OffersSection: React.FC = () => {
  const offers = [
    {
      id: 'offer-friends',
      title: 'The Friends Adda Combo',
      badge: 'Most Popular for Groups',
      description: 'Ideal for 3 to 4 friends catching up. Loaded with our signature savory bestsellers.',
      includes: [
        '2 Large Loaded Pizzas (Cheese BBQ & Chicken Supreme)',
        '1 Crispy Peri-Peri Chicken Wings Platter',
        '2 Hand-Crafted Fresh Mint Virgin Mojitos',
      ],
      image: PHOTOS.offer1,
      whatsappMsg: 'Hello Original Adda Gourmet Cafe, I would like to book a table for the Friends Adda Combo special!'
    },
    {
      id: 'offer-match',
      title: 'Match Night Screening Feast',
      badge: 'Game Day Special',
      description: 'Cheer for every boundary in front of our giant HD screen with the ultimate comfort pairing.',
      includes: [
        '2 Gourmet Monster Burgers (Chicken or Veg)',
        '1 Loaded Cheddar & Jalapeño Fries Bucket',
        '2 Signature Cold Coffees with French Vanilla Ice Cream',
      ],
      image: PHOTOS.offer2,
      whatsappMsg: 'Hello Original Adda Gourmet Cafe, I would like to reserve a table for Match Night with the giant screen feast!'
    }
  ];

  return (
    <section id="offers" className="py-20 bg-stone-100/70 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-amber-700 mb-2">
            <Tag className="w-3.5 h-3.5" />
            <span>Featured Pairings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Curated Combos for Memorable Evenings
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            Handcrafted combinations designed to share. Reserve early for prime tables during evening rush and match days.
          </p>
        </div>

        {/* Two Large Photo Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offers.map((offer) => {
            const encodedMsg = encodeURIComponent(offer.whatsappMsg);
            const waUrl = `https://wa.me/${CAFE_INFO.whatsappNumber}?text=${encodedMsg}`;

            return (
              <div
                key={offer.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/80 flex flex-col group"
              >
                {/* Photo container with zoom on hover */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden image-zoom-container">
                  <SafeImage
                    src={offer.image}
                    alt={offer.title}
                    fallbackTitle={offer.title}
                    category="Food"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  
                  {/* Badge */}
                  <div className="absolute top-5 left-5 bg-stone-900/85 backdrop-blur-md text-amber-300 text-xs font-medium px-3.5 py-1.5 rounded-full border border-stone-700">
                    {offer.badge}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                      {offer.description}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {offer.includes.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Book Table Action */}
                  <div className="pt-5 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs text-stone-500 font-medium">
                      Table reservation on WhatsApp
                    </span>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 active:scale-[0.98] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
                    >
                      <span>Book a Table</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
