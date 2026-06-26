// ChronosPreview — an accurate, code-driven representation of what Chronos
// actually shows each morning: one score, two drivers, one narrative line.
// Intentionally rendered in the product's dark UI on both worlds. The values
// here are illustrative of the Recovering state, not real user data.

const GOLD = '#B8946A';
const RECOVERING_BLUE = '#5B93E8';
const PARCHMENT = '#F6F3EE';
const MUTED = '#9A968E';

// Gauge arc: ~200° sweep, opening at the bottom. Center (100,100), r=80.
// Angles measured clockwise from 12 o'clock; track runs -100°→+100°.
// The value arc fills 74% of that sweep.
const TRACK_PATH = 'M 21.21 113.89 A 80 80 0 1 1 178.79 113.89';
const VALUE_PATH = 'M 21.21 113.89 A 80 80 0 0 1 159.45 46.47';

function DriverChip({ rank, driver }: { rank: string; driver: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 border"
      style={{ background: '#1B1B22', borderColor: '#26262F' }}
    >
      <span
        className="font-body font-semibold text-[10px] uppercase tracking-[0.16em]"
        style={{ color: GOLD }}
      >
        {rank}
      </span>
      <span className="font-body text-[12px]" style={{ color: MUTED }}>
        ·
      </span>
      <span className="font-body text-[12.5px]" style={{ color: PARCHMENT }}>
        {driver}
      </span>
    </span>
  );
}

export function ChronosPreview() {
  return (
    <div
      className="w-full max-w-[480px] rounded-[20px] border p-6 md:p-7 flex flex-col gap-5"
      style={{ background: '#111111', borderColor: '#222228' }}
    >
      {/* Eyebrow */}
      <p
        className="font-body font-semibold text-[11px] uppercase tracking-[0.24em]"
        style={{ color: GOLD }}
      >
        Today&apos;s Score
      </p>

      {/* Gauge + state */}
      <div className="flex items-center gap-5">
        {/* Arc gauge with score number */}
        <div className="relative flex-shrink-0" style={{ width: 168, height: 132 }}>
          <svg viewBox="0 0 200 150" className="w-full h-full" aria-hidden="true">
            <path
              d={TRACK_PATH}
              fill="none"
              stroke="#26262F"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d={VALUE_PATH}
              fill="none"
              stroke={GOLD}
              strokeWidth="12"
              strokeLinecap="round"
            />
          </svg>
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ paddingTop: 30 }}
          >
            <span
              className="font-display leading-none"
              style={{ fontSize: 80, color: GOLD, fontWeight: 500 }}
            >
              74
            </span>
          </div>
        </div>

        {/* State */}
        <div className="flex flex-col gap-1">
          <span
            className="font-display font-medium leading-none"
            style={{ fontSize: 24, color: RECOVERING_BLUE }}
          >
            Recovering
          </span>
          <span className="font-body text-[13px]" style={{ color: MUTED }}>
            ↓ Down 8 from yesterday
          </span>
        </div>
      </div>

      {/* Narrative */}
      <p className="font-body text-[15px] leading-[1.6]" style={{ color: PARCHMENT }}>
        Your system is managing load, but headroom is moderate. Two signals
        pulled below your baseline this morning.
      </p>

      {/* Divider */}
      <div className="h-px w-full" style={{ background: '#222228' }} />

      {/* Drivers */}
      <div className="flex flex-wrap gap-2.5">
        <DriverChip rank="Primary" driver="Sleep" />
        <DriverChip rank="Secondary" driver="Steps" />
      </div>

      {/* Footer */}
      <p className="font-body text-[12.5px]" style={{ color: MUTED }}>
        One score. Two drivers. Every morning.
      </p>
    </div>
  );
}
