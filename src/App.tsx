/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ORIGINAL ADDA GOURMET CAFE - JHARGRAM
 * Ward 14, near Kumud Kumari School Gate, Raghunathpur, Jhargram, West Bengal 721507
 * Phone & WhatsApp: +91 83920 63748
 * Open Every Day: 6:30 AM – 9:30 PM
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceCards } from './components/ExperienceCards';
import { OffersSection } from './components/OffersSection';
import { AmenitiesGrid } from './components/AmenitiesGrid';
import { StatsCounter } from './components/StatsCounter';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { VisitUsSection } from './components/VisitUsSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

/**
 * =========================================================================
 * CAFE PHOTOS CONFIGURATION
 * Edit or replace these image URLs with your cafe's authentic photography.
 * =========================================================================
 */
export const PHOTOS = {
  hero: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=85",
  friends: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  date: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
  family: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80",
  match: "https://images.unsplash.com/photo-1574966739985-79a0b12bc55d?auto=format&fit=crop&w=1200&q=80",
  offer1: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80",
  offer2: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1000&q=80",
  nightExterior: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80", // Cozy interior
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80", // Loaded Pizza
    "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80", // Jhargram Tacos
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80", // Fresh Mojito
    "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80", // Cold Coffee Ice Cream
    "https://images.unsplash.com/photo-1527477378408-1bc09424e6ff?auto=format&fit=crop&w=1200&q=80", // Chicken Wings
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", // Night Exterior
    "https://images.unsplash.com/photo-1574966739985-79a0b12bc55d?auto=format&fit=crop&w=1200&q=80", // Giant TV Screen
  ]
};

export default function App() {
  const handleScrollToReservation = () => {
    const el = document.getElementById('reservation-bar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-stone-900 flex flex-col font-sans selection:bg-amber-200 selection:text-stone-900">
      {/* Sticky Header Navigation */}
      <Navbar onReserveClick={handleScrollToReservation} />

      <main className="flex-1">
        {/* 1. HERO + 2. RESERVATION BAR */}
        <HeroSection />

        {/* 3. WELCOME + EXPERIENCE CARDS */}
        <ExperienceCards />

        {/* 4. OFFERS */}
        <OffersSection />

        {/* 5. AMENITIES GRID */}
        <AmenitiesGrid />

        {/* 6. STATS (Animated Counters) */}
        <StatsCounter />

        {/* 7. MENU (Tabs: Pizzas, Burgers & Tacos, Snacks, Drinks) */}
        <MenuSection />

        {/* 8. PHOTO GALLERY + LIGHTBOX */}
        <GallerySection />

        {/* 9. REVIEWS (Google Rating + Pre-filled reviews + On-site review form with localStorage) */}
        <ReviewsSection />

        {/* 10. VISIT US (Real-time Open/Closed status, Hours table, Maps embed, Directions, Phone) */}
        <VisitUsSection />
      </main>

      {/* 11. FOOTER */}
      <Footer />

      {/* 12. FLOATING WHATSAPP BUTTON */}
      <FloatingWhatsApp />
    </div>
  );
}
