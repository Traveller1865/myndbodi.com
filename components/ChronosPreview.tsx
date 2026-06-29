// ChronosPreview — high-fidelity mockup of the real Chronos morning view.
// An atmospheric dark card (road-landscape feel approximated with a CSS radial
// gradient), one gold score with an arc gauge, the state, two drivers, and one
// narrative line. Values are illustrative of a strong day; the card is always
// captioned "Illustrative" wherever it is placed.

const GOLD = '#B8946A';
const STRONG_GREEN = '#4CAF7D';
const PARCHMENT = '#F6F3EE';
const MUTED = '#9A968E';

// Arc gauge: ~200° sweep, opening at the bottom. Center (100,100), r=80.
// Angles measured clockwise from 12 o'clock; track runs -100°→+100°.
// The value arc fills 84% of that sweep (score 84).
const TRACK_PATH = 'M 21.21 113.89 A 80 80 0 1 1 178.79 113.89';
const VALUE_PATH = 'M 21.21 113.89 A 80 80 0 0 1 174.17 70.03';

function DriverChip({
  rank,
  driver,
  detail,
}: {
  rank: string;
  driver: string;
  detail: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 border"
      style={{ background: 'rgba(0,0,0,0.35)', borderColor: 'rgba(255,255,255,0.10)' }}
    >
      <span
        className="font-body font-semibold text-[10px] uppercase tracking-[0.16em]"
        style={{ color: GOLD }}
      >
        {rank}
      </span>
      <span className="font-body text-[12.5px]" style={{ color: PARCHMENT }}>
        {driver}
      </span>
      <span className="font-body text-[12px]" style={{ color: MUTED }}>
        · {detail}
      </span>
    </span>
  );
}

export function ChronosPreview() {
  return (
    <div
      className="w-full max-w-[460px] rounded-[20px] border p-6 md:p-7 flex flex-col gap-5"
      style={{
        background: 'radial-gradient(ellipse at 30% 60%, #1a2a3a 0%, #0d1117 50%, #0a0a0a 100%)',
        borderColor: 'rgba(255,255,255,0.08)',
        boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
      }}
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
        <div className="relative flex-shrink-0" style={{ width: 168, height: 132 }}>
          <svg viewBox="0 0 200 150" className="w-full h-full" aria-hidden="true">
            <path
              d={TRACK_PATH}
              fill="none"
              stroke="rgba(255,255,255,0.12)"
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
              84
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <span
            className="font-display font-medium leading-none"
            style={{ fontSize: 24, color: STRONG_GREEN }}
          >
            Strong
          </span>
          <span className="font-body text-[13px]" style={{ color: PARCHMENT }}>
            ↑ Up 12 from yesterday
          </span>
        </div>
      </div>

      {/* Narrative */}
      <p className="font-body text-[15px] leading-[1.6]" style={{ color: PARCHMENT }}>
        Your recovery signals are aligned. Sleep and HRV moved together — a
        pattern your baseline rarely produces.
      </p>

      {/* Divider */}
      <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.10)' }} />

      {/* Drivers */}
      <div className="flex flex-wrap gap-2.5">
        <DriverChip rank="Primary" driver="HRV" detail="above baseline" />
        <DriverChip rank="Secondary" driver="Sleep" detail="within range" />
      </div>

      {/* Footer */}
      <p className="font-body text-[12.5px]" style={{ color: MUTED }}>
        One score. Two drivers. Every morning.
      </p>
    </div>
  );
}
