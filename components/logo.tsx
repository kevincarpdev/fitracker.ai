import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'| 'xl';
  showText?: boolean;
  className?: string;
}

export function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const imageSizes = {
    sm: 24,
    md: 32,
    lg: 48,
    xl: 64
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image 
        src="/logo-icon.png" 
        alt="FiTracker" 
        width={imageSizes[size]} 
        height={imageSizes[size]}
        className={sizeClasses[size]}
      />
      {showText && <span className={`font-bold ${textSizes[size]}`}>FiTracker</span>}
    </div>
  );
}
