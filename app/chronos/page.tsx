import { EyebrowLabel } from '@/components/EyebrowLabel';
import { Heading } from '@/components/Heading';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';

function Sparkline({ color }: { color: 'green' | 'gold' }) {
  const stroke = color === 'green' ? '#6FB07E' : '#B8946A';
  const points = color === 'green'
    ? '0,14 10,10 20,12 30,7 40,9 50,5 60,8 70,4 80,6 90,3'
    : '0,6 10,8 20,5 30,10 40,8 50,12 60,9 70,13 80,11 90,14';
  return (
    <svg viewBox="0 0 90 18" className="w-full h-[28px]" preserveAspectRatio="none">
      <polyline
        points={points}
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TodayCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div
      className="rounded-[10px] px-4 py-3 border"
      style={{ background: '#15151B', borderColor: '#26262F' }}
    >
      <p className="font-body text-[10px] uppercase tracking-[0.16em] text-text-muted mb-1">{label}</p>
      <p className="font-display font-medium text-[22px] text-parchment leading-none">{value}</p>
      <p className="font-body text-[11px] text-text-muted mt-1">{sub}</p>
    </div>
  );
}

const signalCards = [
  {
    title: 'Patterns worth watching',
    body: 'Light, consistent movement with deliberate rest is preserving your capacity.',
    sparkline: 'green' as const,
  },
  {
    title: 'Sleep recovery in your favor',
    body: 'Your recovery pattern shows strong quality and duration.',
    sparkline: 'green' as const,
  },
  {
    title: 'Activity load flagged',
    body: 'Your movement trend is elevated. Consider dialing back intensity.',
    sparkline: 'gold' as const,
  },
  {
    title: 'All systems calm',
    body: 'No active signals. Your momentum has softened slightly.',
    sparkline: 'green' as const,
  },
];

const trustPoints = [
  {
    title: 'Personal baseline.',
    body: 'Your score is relative to you. We only measure meaningful change against your baseline, not against others.',
  },
  {
    title: 'Deterministic scoring.',
    body: 'Every score is reproducible, based on defined rules, peer-reviewed science, and signal quality.',
  },
  {
    title: 'AI explains.',
    body: 'Language summarizes what matters, in plain terms — with context, not conclusions.',
  },
];

export default function ChronosPage() {
  return (
    <div className="flex flex-col bg-void">

      {/* Section 1 — Hero */}
      <section
        className="w-full"
        style={{ background: 'radial-gradient(140% 120% at 80% 0%, #14141c 0%, #0A0A0A 55%)' }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div className="flex flex-col gap-7">
              <EyebrowLabel text="Today's signals, noticed" variant="dot" />
              <Heading size="xl">Chronos noticed…</Heading>
              <p className="font-body text-[17px] leading-relaxed text-text-muted">
                Signals surfaced early. Patterns taking shape. Your body&apos;s story, told with clarity.
              </p>
              <div>
                <Button variant="ghost" href="mailto:Hello@myndbodi.com">
                  Join the Beta →
                </Button>
              </div>
            </div>

            {/* Right: Today view illustration */}
            <div className="grid grid-cols-2 gap-3">
              <TodayCard label="HRV" value="62 ms" sub="↑ Above baseline" />
              <TodayCard label="Sleep" value="84" sub="Strong quality" />
              <TodayCard label="Heart Rate" value="58 bpm" sub="Resting, calm" />
              <TodayCard label="Activity" value="91" sub="On target" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Four signal cards */}
      <Section
        eyebrow={{ text: 'What Chronos surfaces', variant: 'dot' }}
        className="bg-void"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {signalCards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              body={card.body}
              sparkline={<Sparkline color={card.sparkline} />}
            />
          ))}
        </div>
      </Section>

      {/* Section 3 — Trust architecture */}
      <section className="w-full py-[56px] md:py-[80px]" style={{ backgroundColor: '#101014' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <EyebrowLabel text="Built on trust" variant="dot" />
            <Heading size="lg">Trust is the architecture.</Heading>
          </div>

          <div className="flex flex-col gap-7 max-w-2xl">
            {trustPoints.map((p) => (
              <div key={p.title} className="flex gap-4 items-start">
                <span className="w-[6px] h-[6px] rounded-full bg-gold flex-shrink-0 mt-[7px]" />
                <p className="font-body text-[15px] leading-[1.7] text-text-muted">
                  <span className="font-semibold text-parchment">{p.title}</span>{' '}
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <p className="font-body text-[13px] text-text-muted max-w-xl leading-relaxed">
            Chronos is currently in private beta. A broader beta is coming. To be considered,
            contact{' '}
            <a
              href="mailto:Hello@myndbodi.com"
              className="underline hover:opacity-80 transition-opacity"
              style={{ color: '#9A968E' }}
            >
              Hello@myndbodi.com
            </a>
            .
          </p>
        </div>
      </section>

    </div>
  );
}
