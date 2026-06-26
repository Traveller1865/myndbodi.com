import { EyebrowLabel } from '@/components/EyebrowLabel';
import { Heading } from '@/components/Heading';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';

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
          </div>
        </div>
      </section>

      {/* Section 2 — Trust architecture */}
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
