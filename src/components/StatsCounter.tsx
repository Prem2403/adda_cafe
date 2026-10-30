import React, { useState, useEffect, useRef } from 'react';
import { Star, MessageSquareHeart, Clock8, CalendarDays } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const StatsCounter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Animate Rating (0 to 4.4)
    const duration = 1600;
    const steps = 30;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // easeOutQuad
      const eased = 1 - (1 - progress) * (1 - progress);

      setRating(parseFloat((eased * CAFE_INFO.googleRating).toFixed(1)));
      setReviews(Math.round(eased * CAFE_INFO.totalReviews));
      setHours(Math.round(eased * 15));
      setDays(Math.round(eased * 7));

      if (step >= steps) {
        clearInterval(timer);
        setRating(CAFE_INFO.googleRating);
        setReviews(CAFE_INFO.totalReviews);
        setHours(15);
        setDays(7);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={containerRef} className="py-16 bg-stone-900 text-white relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-stone-800">
          {/* Stat 1: Google Rating */}
          <div className="pt-6 md:pt-0 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
              <Star className="w-5 h-5 fill-amber-400" />
            </div>
            <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white tabular-nums mb-1">
              {rating.toFixed(1)}
              <span className="text-xl sm:text-2xl text-amber-400 font-sans font-light">★</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-stone-400 font-medium">
              Google Rating
            </p>
          </div>

          {/* Stat 2: Verified Reviews */}
          <div className="pt-6 md:pt-0 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
              <MessageSquareHeart className="w-5 h-5" />
            </div>
            <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white tabular-nums mb-1">
              {reviews}
              <span className="text-xl sm:text-2xl text-amber-400 font-sans font-light">+</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-stone-400 font-medium">
              Google Reviews
            </p>
          </div>

          {/* Stat 3: Hours Open Daily */}
          <div className="pt-6 md:pt-0 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
              <Clock8 className="w-5 h-5" />
            </div>
            <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white tabular-nums mb-1">
              {hours}
              <span className="text-xl sm:text-2xl text-amber-400 font-sans font-light"> hrs</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-stone-400 font-medium">
              Open Daily (6:30 AM – 9:30 PM)
            </p>
          </div>

          {/* Stat 4: 7 Days a Week */}
          <div className="pt-6 md:pt-0 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
              <CalendarDays className="w-5 h-5" />
            </div>
            <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white tabular-nums mb-1">
              {days}
              <span className="text-xl sm:text-2xl text-amber-400 font-sans font-light"> / 7</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-stone-400 font-medium">
              Days A Week Open
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
