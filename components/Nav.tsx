'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useWorld } from './ThemeProvider';

type NavLink = { label: string; href: string };

const CHRONOS_LINKS: NavLink[] = [
  { label: 'How It Works', href: '/chronos/how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Legal', href: '/legal/privacy' },
];

const MBI_LINKS: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Chronos', href: '/chronos' },
  { label: 'Legal', href: '/legal/privacy' },
];

export function Nav() {
  const world = useWorld();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isChronos = world === 'chronos';
  const links = isChronos ? CHRONOS_LINKS : MBI_LINKS;

  const monogramColor = isChronos ? '#B8946A' : '#0A2A5E';
  const inactiveColor = isChronos ? '#9A968E' : '#5A6B85';
  const activeColor = isChronos ? '#F6F3EE' : '#0A2A5E';
  const bgClass = isChronos ? 'bg-void border-b border-card-dark-border' : 'bg-white border-b border-border-light';
  const mobileMenuBg = isChronos ? 'bg-void' : 'bg-white';

  function isActive(href: string) {
    if (href === '/legal/privacy') {
      return pathname.startsWith('/legal');
    }
    return pathname === href || pathname.startsWith(href + '/');
  }

  return (
    <nav className={`w-full ${bgClass} sticky top-0 z-50`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 h-[64px] flex items-center justify-between">
        {/* Left: monogram + rule + title */}
        <div className="flex items-center gap-3">
          <Link href={isChronos ? '/chronos' : '/'} className="font-display font-semibold text-[26px]" style={{ color: monogramColor }}>
            MBI
          </Link>
          <span className="h-[26px] w-px opacity-70" style={{ backgroundColor: '#B8946A' }} />
          <div className="flex flex-col leading-none">
            <span className="font-body font-medium uppercase tracking-[0.14em] text-[13px]" style={{ color: activeColor }}>
              {isChronos ? 'CHRONOS' : 'MYND & BODI'}
            </span>
            <span className="font-body text-[11px]" style={{ color: inactiveColor }}>
              {isChronos ? 'by Mynd & Bodi Institute' : 'Institute'}
            </span>
          </div>
        </div>

        {/* Desktop: links + CTA */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-body text-[14px] pb-1 transition-colors"
                style={{
                  color: active ? activeColor : inactiveColor,
                  fontWeight: active ? 500 : 400,
                }}
              >
                {link.label}
                {active && (
                  <span
                    className="absolute left-1/2 -translate-x-1/2 -bottom-[3px] w-[5px] h-[5px] rounded-full bg-gold"
                  />
                )}
              </Link>
            );
          })}
          <a
            href="mailto:Hello@myndbodi.com"
            className="font-body font-medium text-[14px] px-[18px] py-[8px] rounded-[6px] border transition-opacity hover:opacity-80"
            style={
              isChronos
                ? { color: '#B8946A', borderColor: '#B8946A', background: 'transparent' }
                : { color: '#15233B', borderColor: '#B8946A', background: 'transparent' }
            }
          >
            Join Beta
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="w-5 h-px block" style={{ backgroundColor: monogramColor }} />
          <span className="w-5 h-px block" style={{ backgroundColor: monogramColor }} />
          <span className="w-5 h-px block" style={{ backgroundColor: monogramColor }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`md:hidden w-full ${mobileMenuBg} border-t border-card-dark-border px-5 py-6 flex flex-col gap-5`}>
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-[15px]"
                style={{ color: active ? activeColor : inactiveColor, fontWeight: active ? 500 : 400 }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="mailto:Hello@myndbodi.com"
            className="font-body font-medium text-[14px] px-[18px] py-[10px] rounded-[6px] border text-center mt-2 transition-opacity hover:opacity-80"
            style={
              isChronos
                ? { color: '#B8946A', borderColor: '#B8946A', background: 'transparent' }
                : { color: '#15233B', borderColor: '#B8946A', background: 'transparent' }
            }
          >
            Join Beta
          </a>
        </div>
      )}
    </nav>
  );
}
