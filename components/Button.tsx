'use client';

import { useWorld } from './ThemeProvider';

type ButtonProps = {
  variant: 'primary' | 'ghost';
  href?: string;
  children: React.ReactNode;
};

export function Button({ variant, href, children }: ButtonProps) {
  const world = useWorld();

  let className =
    'inline-flex items-center justify-center font-body font-medium text-[14px] px-[26px] py-[13px] rounded-[6px] transition-opacity hover:opacity-80 ';

  if (world === 'chronos') {
    className +=
      variant === 'primary'
        ? 'bg-gold text-void border border-gold'
        : 'bg-transparent text-gold border border-gold';
  } else {
    // mbi or legal
    className +=
      variant === 'primary'
        ? 'bg-royal text-white border border-royal'
        : 'bg-transparent text-royal border border-border-light';
  }

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}
