'use client';

import { useWorld } from './ThemeProvider';

type CardProps = {
  icon?: React.ReactNode;
  title: string;
  body: string;
  sparkline?: React.ReactNode;
};

export function Card({ icon, title, body, sparkline }: CardProps) {
  const world = useWorld();

  if (world === 'chronos') {
    return (
      <div
        className="rounded-[12px] p-[22px] border flex flex-col gap-3"
        style={{
          background: 'linear-gradient(160deg, #16161D 0%, #121218 100%)',
          borderColor: '#26262F',
        }}
      >
        {icon && (
          <div
            className="w-[30px] h-[30px] rounded-[7px] border flex items-center justify-center text-gold"
            style={{ borderColor: '#26262F' }}
          >
            {icon}
          </div>
        )}
        <h3
          className="font-display font-medium text-[20px] text-parchment leading-snug"
        >
          {title}
        </h3>
        <p className="font-body text-[12.5px] leading-[1.5] text-text-muted">
          {body}
        </p>
        {sparkline && <div className="mt-1">{sparkline}</div>}
      </div>
    );
  }

  // MBI light card
  return (
    <div
      className="rounded-[12px] p-[24px] border border-border-light bg-white flex flex-col gap-3"
      style={{ boxShadow: '0 2px 18px rgba(20,58,120,0.05)' }}
    >
      {icon && (
        <div className="w-[42px] h-[42px] rounded-full bg-blue-tint flex items-center justify-center text-gold-muted">
          {icon}
        </div>
      )}
      <div>
        <h3 className="font-display font-semibold text-[21px] text-royal leading-snug">
          {title}
        </h3>
        <div className="w-[26px] h-[2px] bg-gold mt-1" />
      </div>
      <p className="font-body text-[12.5px] leading-[1.55] text-ink-muted">
        {body}
      </p>
    </div>
  );
}
