import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2 } from 'lucide-react';
import { CAFE_INFO, WEEKLY_HOURS } from '../data/cafeData';

export const VisitUsSection: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      setCurrentDayIndex(now.getDay()); // 0 is Sunday, 1 is Monday, etc.

      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      const openMinutes = CAFE_INFO.openHour * 60 + CAFE_INFO.openMinute; // 6:30 AM = 390
      const closeMinutes = CAFE_INFO.closeHour * 60 + CAFE_INFO.closeMinute; // 9:30 PM = 1290

      setIsOpenNow(currentMinutes >= openMinutes && currentMinutes < closeMinutes);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="visit" className="py-24 bg-white border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-amber-700 mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Jhargram Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Visit Original Adda
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            Conveniently situated right near the Kumud Kumari School Gate in Raghunathpur, Jhargram.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Details Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-stone-50/80 p-7 sm:p-9 rounded-3xl border border-stone-200">
            <div>
              {/* Dynamic Live Status Badge */}
              <div className="mb-6">
                <div
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide ${
                    isOpenNow
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300/80'
                      : 'bg-amber-100 text-amber-800 border border-amber-300/80'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isOpenNow ? 'bg-emerald-600' : 'bg-amber-600'
                    }`}
                  />
                  <span>
                    {isOpenNow
                      ? 'Open Now · Closes at 9:30 PM'
                      : 'Closed Now · Opens at 6:30 AM'}
                  </span>
                </div>
              </div>

              {/* Address Block */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                      Address
                    </h3>
                    <p className="text-stone-900 font-medium text-sm sm:text-base leading-snug mt-0.5">
                      {CAFE_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Phone Tap-To-Call */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                      Phone &amp; WhatsApp
                    </h3>
                    <a
                      href={`tel:${CAFE_INFO.phone}`}
                      className="text-stone-900 font-medium text-base hover:text-amber-700 transition-colors inline-block mt-0.5"
                    >
                      {CAFE_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Weekly Hours Table with Today Highlighted */}
              <div className="mt-8 pt-6 border-t border-stone-200">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
                    Operating Hours
                  </h4>
                </div>

                <div className="space-y-1.5 text-xs">
                  {WEEKLY_HOURS.map((item) => {
                    const isToday = item.dayIndex === currentDayIndex;
                    return (
                      <div
                        key={item.day}
                        className={`flex items-center justify-between py-1.5 px-3 rounded-lg transition-colors ${
                          isToday
                            ? 'bg-amber-100/70 font-semibold text-stone-950 border border-amber-300/60'
                            : 'text-stone-600'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {item.day}
                          {isToday && (
                            <span className="text-[10px] text-amber-800 bg-amber-200 px-1.5 py-0.2 rounded font-bold">
                              TODAY
                            </span>
                          )}
                        </span>
                        <span className="tabular-nums">{item.hours}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Action Buttons: Directions & Call */}
            <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-800 font-medium text-xs sm:text-sm transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-stone-600" />
                <span>Call to Order</span>
              </a>
            </div>
          </div>

          {/* Google Maps Embed Column (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-stone-200/90 shadow-md min-h-[380px] lg:min-h-full relative">
            <iframe
              title="Original Adda Gourmet Cafe Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.665795811776!2d86.9871144!3d22.4533008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d7be83ae6154d%3A0xc7715b4a02c5c2e7!2sOriginal%20Adda%20Gourmet%20Cafe!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[420px] border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Quick Map Overlay Bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-stone-200/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-stone-700 font-medium line-clamp-1">
                  Near Kumud Kumari School Gate, Raghunathpur
                </span>
              </div>
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-amber-700 hover:text-amber-800 whitespace-nowrap ml-2"
              >
                Open in Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
