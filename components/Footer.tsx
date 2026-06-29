'use client';

import { useWorld } from './ThemeProvider';
import { Divider } from './Divider';

const LEGAL_LINKS = [
  { label: 'Privacy', href: '/legal/privacy' },
  { label: 'Terms', href: '/legal/terms' },
  { label: 'Beta', href: '/legal/beta' },
  { label: 'Health', href: '/legal/health' },
];

export function Footer() {
  const world = useWorld();
  const isChronos = world === 'chronos';

  const bgColor = isChronos ? '#0A0A0A' : '#0A2A5E';
  const textColor = isChronos ? '#F6F3EE' : '#FFFFFF';
  const mutedColor = isChronos ? '#9A968E' : 'rgba(255,255,255,0.6)';

  return (
    <footer>
      <Divider />
      <div style={{ backgroundColor: bgColor }}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Wordmark */}
            <span className="font-display font-semibold text-[22px]" style={{ color: textColor }}>
              Mynd &amp; Bodi Institute
            </span>

            {/* Legal links */}
            <div className="flex items-center gap-5 flex-wrap">
              {LEGAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-[13px] transition-opacity hover:opacity-80"
                  style={{ color: mutedColor }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Email */}
            <a
              href="mailto:Hello@myndbodi.com"
              className="font-body text-[13px] transition-opacity hover:opacity-80"
              style={{ color: mutedColor }}
            >
              Hello@myndbodi.com
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-6 border-t" style={{ borderColor: isChronos ? '#26262F' : 'rgba(255,255,255,0.12)' }}>
            <p className="font-body text-[12px]" style={{ color: mutedColor }}>
              © 2026 Mynd Bodi Institute, LLC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
