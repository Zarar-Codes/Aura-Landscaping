import React, { useState } from 'react';
import { Mountain } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fallbackTitle?: string;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  fallbackTitle,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#203328] via-[#354A36] to-[#202020] text-white/85 p-6 text-center ${className}`}
      >
        <Mountain className="w-7 h-7 text-[#F0A06A] mb-2" strokeWidth={1.3} />
        <span className="font-editorial italic text-lg tracking-wide">
          {fallbackTitle || 'Aura Landscaping'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
