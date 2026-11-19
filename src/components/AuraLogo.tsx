import React from 'react';

interface AuraLogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export const AuraLogo: React.FC<AuraLogoProps> = ({
  variant = 'dark',
  className = '',
}) => {
  const primaryText = variant === 'light' ? 'text-white' : 'text-[#202020]';
  const subText = variant === 'light' ? 'text-white/75' : 'text-[#777777]';

  return (
    <span
      className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 select-none ${className}`}
    >
      {/* Subtle architectural botanical / horizon mark echoing Aura's organic & orange identity */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M5 24C10.5 14 17.5 8 27 7C25.5 16.5 19.5 22.5 9 24.5"
          stroke="#D35400"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M5 24C11 20.5 16.5 16.5 23 11"
          stroke={variant === 'light' ? '#F0A06A' : '#354A36'}
          strokeWidth="1.35"
          strokeLinecap="round"
        />
        <line
          x1="4"
          y1="27"
          x2="28"
          y2="27"
          stroke="#D35400"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={`font-editorial italic font-semibold tracking-tight text-[1.65rem] leading-[0.88] ${primaryText}`}
        >
          Aura
        </span>
        <span
          className={`text-[0.58rem] font-medium tracking-[0.28em] uppercase mt-0.5 ${subText}`}
        >
          Landscaping
        </span>
      </span>
    </span>
  );
};
