import { EyebrowLabel } from '@/components/EyebrowLabel';
import { Heading } from '@/components/Heading';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { ChronosPreview } from '@/components/ChronosPreview';

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

const loopSteps = [
  {
    number: '01',
    label: 'SYNC',
    body: 'Chronos reads your Apple Watch data overnight: HRV, resting heart rate, sleep, and activity.',
  },
  {
    number: '02',
    label: 'SCORE',
    body: 'A deterministic algorithm computes your score (0–100) against your personal baseline. No population norms. No guesswork.',
  },
  {
    number: '03',
    label: 'EXPLAIN',
    body: 'Two drivers surface: the signals that moved your score most today. Always two. Never a list.',
  },
  {
    number: '04',
    label: 'NUDGE',
    body: 'One clear action, calibrated to what your data actually shows. One per day. Not a to-do list.',
  },
];

export default function ChronosPage() {
  return (
    <div className="flex flex-col bg-void">

      {/* Section 1 — Hero */}
      <section
        className="w-full flex items-center lg:min-h-[85vh]"
        style={{ background: 'radial-gradient(140% 120% at 80% 0%, #14141c 0%, #0A0A0A 55%)' }}
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 py-20 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-8 lg:gap-12 items-center">
            {/* Copy + desktop CTA */}
            <div className="order-1 flex flex-col gap-7">
              <EyebrowLabel text="Today's signals, noticed" variant="dot" />
              <Heading size="xl">Chronos noticed…</Heading>
              <p className="font-body text-[17px] leading-relaxed text-text-muted">
                Signals surfaced early. Patterns taking shape. Your body&apos;s story, told with clarity.
              </p>
              <div className="hidden lg:flex flex-row gap-4">
                <Button variant="ghost" href="mailto:Hello@myndbodi.com">
                  Join the Beta →
                </Button>
              </div>
            </div>

            {/* Card + caption */}
            <div className="order-2 flex flex-col items-center lg:items-end gap-3">
              <ChronosPreview />
              <p className="font-body text-[12px] leading-relaxed text-text-muted max-w-[460px]">
                Illustrative. Your score reflects your own data, compared only to you.
              </p>
            </div>

            {/* Mobile CTA */}
            <div className="order-3 flex lg:hidden flex-col gap-3">
              <Button variant="ghost" href="mailto:Hello@myndbodi.com">
                Join the Beta →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Trust architecture */}
      <section className="w-full py-[56px] md:py-[80px]" style={{ backgroundColor: '#101014' }}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col gap-10">
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

      {/* Section 3 — The daily loop */}
      <Section
        eyebrow={{ text: 'How It Works', variant: 'dot' }}
        heading={{ text: 'The same loop, every morning.', size: 'lg' }}
        className="bg-void"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loopSteps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-display font-semibold text-[13px]" style={{ color: '#B8946A' }}>
                  {step.number}
                </span>
                <span
                  className="font-body font-semibold text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: '#B8946A' }}
                >
                  · {step.label}
                </span>
              </div>
              <div
                className="w-full h-px"
                style={{ background: 'linear-gradient(to right, #B8946A, transparent)' }}
              />
              <p className="font-body text-[13px] leading-[1.6] text-text-muted">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

    </div>
  );
}
