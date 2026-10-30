import React, { useState, useEffect, useCallback } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { PHOTOS } from '../data/cafeData';
import { SafeImage } from './SafeImage';

export const GallerySection: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = PHOTOS.gallery;

  const handleOpen = (index: number) => {
    setLightboxIndex(index);
  };

  const handleClose = () => {
    setLightboxIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  }, [lightboxIndex, images.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  }, [lightboxIndex, images.length]);

  // Keyboard navigation: Esc to close, Left/Right arrows to cycle
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  // Lock background scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-24 bg-white border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-amber-700 mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Glimpse</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Atmosphere &amp; Kitchen Moments
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            From evening ambient lights at Kumud Kumari gate to sizzling cheese crusts and vibrant tacos. Click any photo to expand.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {images.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpen(index)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-2xs hover:shadow-xl transition-all duration-300 border border-stone-200/60 image-zoom-container"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleOpen(index);
                }
              }}
              aria-label={`View ${item.title}`}
            >
              <SafeImage
                src={item.url}
                alt={item.title}
                fallbackTitle={item.title}
                category={item.category}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
              />

              {/* Hover overlay with title and maximize icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-amber-300">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-serif font-semibold mt-1 text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar: Counter & Close button */}
          <div
            className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-50 max-w-6xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs sm:text-sm font-medium tracking-widest uppercase text-stone-300">
              <span className="text-amber-400 font-serif text-base">{lightboxIndex + 1}</span> / {images.length}
            </div>

            <button
              onClick={handleClose}
              aria-label="Close Lightbox (Esc)"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white transition-all cursor-pointer z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white transition-all cursor-pointer z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Central Image & Caption */}
          <div
            className="relative max-w-4xl max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={images[lightboxIndex].url}
                alt={images[lightboxIndex].title}
                className="max-h-[70vh] w-auto object-contain select-none"
              />
            </div>

            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-amber-400">
                {images[lightboxIndex].category}
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white mt-0.5">
                {images[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 font-light">
                {images[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
