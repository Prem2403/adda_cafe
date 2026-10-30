import React, { useState } from 'react';
import { Coffee, Utensils, Image as ImageIcon } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  category?: string;
  skeletonClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
  category,
  skeletonClassName = 'bg-stone-900 animate-pulse',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Return fallback block if error happens
  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 text-amber-100 overflow-hidden ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-12 h-12 mb-3 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            {category === 'Drinks' ? (
              <Coffee className="w-5 h-5" />
            ) : category === 'Food' || category === 'Pizzas' || category === 'Tacos' ? (
              <Utensils className="w-5 h-5" />
            ) : (
              <ImageIcon className="w-5 h-5" />
            )}
          </div>
          <span className="text-xs uppercase tracking-widest text-amber-400/80 font-medium mb-1">
            {category || 'Original Adda'}
          </span>
          <p className="text-sm font-serif text-stone-200 max-w-[200px] line-clamp-2">
            {fallbackTitle || alt}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton / Ambient backdrop while loading */}
      {!isLoaded && (
        <div className={`absolute inset-0 ${skeletonClassName}`} />
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />
    </div>
  );
};
