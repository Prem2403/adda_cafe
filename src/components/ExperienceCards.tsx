import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, MessageSquare } from 'lucide-react';
import { CAFE_INFO, PHOTOS } from '../data/cafeData';
import { SafeImage } from './SafeImage';

interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  kicker: string;
  image: string;
  highlight: string;
  waNote: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-friends',
    title: 'With Friends',
    kicker: 'The Heart of Jhargram',
    subtitle: 'Hours disappear into animated debates, crispy chicken wings, and loaded cheese pizzas.',
    image: PHOTOS.friends,
    highlight: 'Pizzas & Wings',
    waNote: 'a table for Friends Adda Hangout',
  },
  {
    id: 'exp-date',
    title: 'Date Night',
    kicker: 'Intimate & Warm',
    subtitle: 'Soft acoustic playlists, ambient Edison glow, and handcrafted virgin mojitos made for two.',
    image: PHOTOS.date,
    highlight: 'Mojitos & Desserts',
    waNote: 'a cozy table for Date Night',
  },
  {
    id: 'exp-family',
    title: 'Family Time',
    kicker: 'Comfort for All',
    subtitle: 'From kids craving crunchy tacos to elders enjoying rich cold coffee with French vanilla scoops.',
    image: PHOTOS.family,
    highlight: 'Tacos & Cold Coffee',
    waNote: 'a family dining table',
  },
  {
    id: 'exp-match',
    title: 'Match Days',
    kicker: 'Stadium Atmosphere',
    subtitle: 'Watch every boundary and goal on our giant TV screen surrounded by passionate fans.',
    image: PHOTOS.match,
    highlight: 'Giant TV Screening',
    waNote: 'a table near the giant TV for Match Screening',
  },
];

export const ExperienceCards: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className="pt-28 pb-20 bg-[#FAF7F2] border-b border-stone-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-700 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Curated Ambiance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
              A table for every mood &amp; memory.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
              In Bengal, <em className="text-stone-900 font-medium">adda</em> is more than conversation — it is a ritual of genuine connection. We designed Original Adda with cosy nooks, warm woods, and the comfort of fine cafe cuisine.
            </p>
          </div>

          {/* Navigation Arrows for Carousel */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous experience"
              className="w-11 h-11 rounded-full border border-stone-300 bg-white hover:bg-stone-50 active:scale-95 text-stone-700 flex items-center justify-center transition-all cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next experience"
              className="w-11 h-11 rounded-full border border-stone-300 bg-white hover:bg-stone-50 active:scale-95 text-stone-700 flex items-center justify-center transition-all cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swipeable Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {EXPERIENCES.map((item) => {
            const waMsg = encodeURIComponent(
              `Hello Original Adda Gourmet Cafe, I would like to reserve ${item.waNote}. Please let me know available slots.`
            );
            const waUrl = `https://wa.me/${CAFE_INFO.whatsappNumber}?text=${waMsg}`;

            return (
              <div
                key={item.id}
                className="min-w-[280px] sm:min-w-[340px] md:min-w-[360px] max-w-[380px] flex-1 snap-start group flex flex-col"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/80 flex flex-col h-full">
                  {/* Photo Container - Dedicated, clear visual presence */}
                  <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-stone-900">
                    <SafeImage
                      src={item.image}
                      alt={`${item.title} at Original Adda Gourmet Cafe`}
                      fallbackTitle={item.title}
                      category={item.highlight}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                    />
                    
                    {/* Dark gradient overlay for bottom badge legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-black/20 pointer-events-none" />

                    {/* Floating pill badge */}
                    <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-stone-700/80 shadow-md">
                      {item.highlight}
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1.5">
                        {item.kicker}
                      </div>

                      <h3 className="text-2xl font-serif font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-stone-600 leading-relaxed font-light mt-2.5">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Direct WhatsApp Table Booking Link */}
                    <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-amber-700 hover:text-amber-900 group-hover:translate-x-1 transition-all"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Reserve for {item.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
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
