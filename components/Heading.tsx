'use client';

import { useWorld } from './ThemeProvider';

type HeadingSize = 'xl' | 'lg' | 'md';

type HeadingProps = {
  size: HeadingSize;
  children: React.ReactNode;
};

export function Heading({ size, children }: HeadingProps) {
  const world = useWorld();
  const color = world === 'chronos' ? '#F6F3EE' : '#0A2A5E';

  const sizeClasses: Record<HeadingSize, string> = {
    xl: 'text-[36px] md:text-[52px] leading-[1.02] tracking-[-0.01em]',
    lg: 'text-[28px] md:text-[36px] leading-[1.05] tracking-[-0.01em]',
    md: 'text-[24px] leading-[1.05]',
  };

  return (
    <h2
      className={`font-display font-medium ${sizeClasses[size]}`}
      style={{ color }}
    >
      {children}
    </h2>
  );
}
