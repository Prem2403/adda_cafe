import React, { useState } from 'react';
import { Pizza, UtensilsCrossed, Sparkles, Coffee, Flame, Info } from 'lucide-react';
import { MENU_DATA, MenuItem } from '../data/cafeData';

export const MenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pizzas' | 'burgers_tacos' | 'snacks' | 'drinks'>('pizzas');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'pizzas' as const, label: 'Loaded Pizzas', icon: Pizza, count: MENU_DATA.filter(m => m.category === 'pizzas').length },
    { id: 'burgers_tacos' as const, label: 'Burgers & Tacos', icon: UtensilsCrossed, count: MENU_DATA.filter(m => m.category === 'burgers_tacos').length },
    { id: 'snacks' as const, label: 'Wings & Snacks', icon: Flame, count: MENU_DATA.filter(m => m.category === 'snacks').length },
    { id: 'drinks' as const, label: 'Mojitos & Beverages', icon: Coffee, count: MENU_DATA.filter(m => m.category === 'drinks').length },
  ];

  const filteredItems = MENU_DATA.filter((item: MenuItem) => {
    const matchesTab = item.category === activeTab;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-[#FCFAF7] border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-amber-700 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisanal Kitchen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Our Gourmet Menu
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            Hand-kneaded pizza dough, freshly assembled tacos, crunchy wings, and chilled thirst-quenchers.
          </p>

          {/* Exclusive Tacos Callout Note */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs font-medium text-amber-900">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Guests say we are the <strong>only place in Jhargram</strong> serving authentic tacos!</span>
          </div>
        </div>

        {/* Tab Buttons (Segmented interactive controls) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-stone-200/70 rounded-2xl max-w-full overflow-x-auto gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-white text-stone-900 shadow-sm font-semibold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-600' : 'text-stone-500'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search input if guest wants to find a specific item */}
        <div className="max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="Search pizza, wings, tacos, mojito..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2.5 text-sm bg-white border border-stone-200 rounded-full text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-2xs"
          />
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-md">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-stone-500 bg-stone-100 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                    {item.priceNote}
                  </span>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                <span>Freshly prepared to order</span>
                <span className="text-amber-600 font-medium group-hover:translate-x-0.5 transition-transform">
                  Order at counter →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Counter Info Banner */}
        <div className="mt-12 text-center p-4 rounded-xl bg-amber-50/70 border border-amber-200/60 max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-amber-900">
          <Info className="w-4 h-4 text-amber-700 shrink-0" />
          <span>Fresh seasonal preparations. Please ask our service team at the counter for current daily specials &amp; prices.</span>
        </div>
      </div>
    </section>
  );
};
