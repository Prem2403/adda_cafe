import React from 'react';
import { Sunrise, Tv, Wine, Armchair, ShoppingBag, MoonStar } from 'lucide-react';

export const AmenitiesGrid: React.FC = () => {
  const amenities = [
    {
      icon: Sunrise,
      title: 'Early Starts',
      highlight: 'Opens 6:30 AM',
      description: 'Kickstart your morning in Jhargram with freshly brewed coffee, hot tea, and breakfast snacks.',
    },
    {
      icon: Tv,
      title: 'Giant HD Screen',
      highlight: 'Live Match Days',
      description: 'Experience high-octane cricket and football screenings with friends in stadium-like energy.',
    },
    {
      icon: Wine,
      title: 'Handcrafted Mojitos',
      highlight: 'Chilled & Fresh',
      description: 'Fresh mint, zesty limes, fruit fusions, and decadent cold coffees with vanilla ice cream.',
    },
    {
      icon: Armchair,
      title: 'Cosy Interiors',
      highlight: 'Aesthetic Ambience',
      description: 'Warm ambient pendant lighting, comfortable wood seating, and photogenic corners for your memories.',
    },
    {
      icon: ShoppingBag,
      title: 'Takeaway & Dine-In',
      highlight: 'Speedy Service',
      description: 'Enjoy leisurely table dining or grab quick packaging for your home, dorm, or office gatherings.',
    },
    {
      icon: MoonStar,
      title: 'Late Evenings',
      highlight: 'Open Till 9:30 PM',
      description: 'The premier evening hangout in Jhargram. Relax after work or study with friends and hearty food.',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-700">
            Thoughtfully Crafted
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight mt-1">
            Comfort, Flavour &amp; Hospitality
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            Every detail at Original Adda is curated to give Jhargram a refined yet welcoming cafe culture.
          </p>
        </div>

        {/* 6 Amenities Grid with clean line icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-7 rounded-2xl bg-stone-50/60 hover:bg-stone-50 border border-stone-200/70 hover:border-amber-300 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-amber-600 group-hover:text-white transition-all">
                  <Icon className="w-6 h-6 stroke-[1.6]" />
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-amber-700 uppercase tracking-wider mb-1">
                  <span>{item.highlight}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
