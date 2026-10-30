import React, { useState } from 'react';
import { Calendar, Clock, Users, User, ArrowRight, MessageSquare, Star, Utensils } from 'lucide-react';
import { CAFE_INFO, PHOTOS } from '../data/cafeData';
import { SafeImage } from './SafeImage';

export const HeroSection: React.FC = () => {
  // Today's date as default (YYYY-MM-DD)
  const todayStr = new Date().toISOString().split('T')[0];

  const [date, setDate] = useState(todayStr);
  const [time, setTime] = useState('18:30');
  const [guests, setGuests] = useState('2 Guests');
  const [name, setName] = useState('');

  const handleWhatsAppReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const guestName = name.trim() || 'A Guest';
    const message = `Hello Original Adda Gourmet Cafe! I would like to reserve a table.

Details:
• Name: ${guestName}
• Date: ${date}
• Preferred Time: ${time}
• Party Size: ${guests}

Please confirm table availability. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${CAFE_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section className="relative isolate min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-16 lg:pb-24 bg-stone-950 overflow-hidden">
      {/* Background Image with Dark Gradient Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <SafeImage
          src={PHOTOS.hero}
          alt="Original Adda Gourmet Cafe Interior Ambience"
          className="w-full h-full object-cover scale-105 opacity-55"
          skeletonClassName="bg-stone-950"
        />
        {/* Multi-layered dark gradient overlay for crystal-clear readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/85 to-stone-950/75" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto text-center pt-8 pb-12">
        {/* Unboxed refined kicker */}
        <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber-300 drop-shadow-md mb-6 px-4 py-1.5 rounded-full bg-stone-900/80 border border-amber-500/40 backdrop-blur-md">
          <span>Gourmet Cafe</span>
          <span aria-hidden="true">·</span>
          <span>Jhargram, West Bengal</span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1 text-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            4.4 (237 reviews)
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.08] mb-6 text-balance max-w-4xl mx-auto drop-shadow-lg">
          Every evening <br className="hidden sm:inline" />
          is <span className="italic font-normal text-amber-400 underline decoration-amber-500/40 decoration-wavy decoration-2">adda</span>.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-stone-100 font-normal max-w-2xl mx-auto leading-relaxed mb-10 text-balance drop-shadow-md">
          Artisanal stone-baked pizzas, Jhargram’s only authentic tacos, hand-crafted mint mojitos, and cold coffee with ice cream. Settle into cosy booths and cheer live match days on our giant screen.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#reservation-bar"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-full shadow-2xl transition-all cursor-pointer"
          >
            <span>Reserve a Table</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#menu"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white hover:text-amber-300 bg-stone-900/80 hover:bg-stone-800/90 backdrop-blur-md border border-stone-500/80 rounded-full shadow-xl transition-all cursor-pointer"
          >
            <Utensils className="w-4 h-4 text-amber-400" />
            <span>View Menu</span>
          </a>
        </div>
      </div>

      {/* SECTION 2: RESERVATION BAR (Overlaps bottom of hero) */}
      <div id="reservation-bar" className="max-w-5xl mx-auto px-4 sm:px-6 w-full -mb-8 lg:-mb-16 z-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-stone-200/90 p-5 sm:p-7 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-stone-100">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-700">
                Direct Cafe Reservation
              </span>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900 mt-0.5">
                Reserve Your Table in Jhargram
              </h2>
            </div>
            <div className="text-xs text-stone-500 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>Open today: 6:30 AM – 9:30 PM · Instant WhatsApp Confirmation</span>
            </div>
          </div>

          <form onSubmit={handleWhatsAppReservation} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Field 1: Date */}
            <div className="space-y-1.5">
              <label htmlFor="res-date" className="block text-xs font-semibold text-stone-600 uppercase tracking-wider">
                Date
              </label>
              <div className="relative">
                <input
                  id="res-date"
                  type="date"
                  min={todayStr}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
                <Calendar className="w-4 h-4 text-stone-400 absolute left-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Field 2: Time */}
            <div className="space-y-1.5">
              <label htmlFor="res-time" className="block text-xs font-semibold text-stone-600 uppercase tracking-wider">
                Time
              </label>
              <div className="relative">
                <select
                  id="res-time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 appearance-none cursor-pointer"
                >
                  <option value="07:00">07:00 AM (Early Coffee)</option>
                  <option value="09:00">09:00 AM (Breakfast)</option>
                  <option value="12:00">12:00 PM (Lunch)</option>
                  <option value="14:00">02:00 PM (Afternoon Adda)</option>
                  <option value="16:30">04:30 PM (Evening Snacks)</option>
                  <option value="18:30">06:30 PM (Dinner & Matches)</option>
                  <option value="19:30">07:30 PM (Prime Adda)</option>
                  <option value="20:30">08:30 PM (Late Evening)</option>
                </select>
                <Clock className="w-4 h-4 text-stone-400 absolute left-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Field 3: Guests */}
            <div className="space-y-1.5">
              <label htmlFor="res-guests" className="block text-xs font-semibold text-stone-600 uppercase tracking-wider">
                Guests
              </label>
              <div className="relative">
                <select
                  id="res-guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 appearance-none cursor-pointer"
                >
                  <option value="1 Guest">1 Guest</option>
                  <option value="2 Guests">2 Guests (Couple / Pair)</option>
                  <option value="3-4 Guests">3-4 Guests (Friends / Family)</option>
                  <option value="5-8 Guests">5-8 Guests (Group Adda)</option>
                  <option value="8+ Party">8+ Guests (Celebration)</option>
                </select>
                <Users className="w-4 h-4 text-stone-400 absolute left-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Field 4: Name */}
            <div className="space-y-1.5">
              <label htmlFor="res-name" className="block text-xs font-semibold text-stone-600 uppercase tracking-wider">
                Your Name
              </label>
              <div className="relative">
                <input
                  id="res-name"
                  type="text"
                  placeholder="e.g. Sourav"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
                <User className="w-4 h-4 text-stone-400 absolute left-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Action: Book on WhatsApp */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] rounded-xl shadow-md transition-all cursor-pointer h-[42px]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book on WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
