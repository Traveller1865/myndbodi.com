import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import { Divider } from '@/components/Divider';

const steps = [
  {
    number: '01',
    label: 'SIGNAL',
    title: 'Your body speaks first.',
    body: 'Chronos captures data across five systems: heart rate variability, sleep, heart rate, respiration, and activity. Passively, continuously, in the background.',
  },
  {
    number: '02',
    label: 'BASELINE',
    title: 'Context is everything.',
    body: 'We map your current readings against your personal baseline — built from your own history, not population averages. This is what makes the score meaningful.',
  },
  {
    number: '03',
    label: 'INTERPRETATION',
    title: 'Meaning, not just numbers.',
    body: 'Two drivers explain every score: the primary factor pulling it up or down, and the secondary. Never more than two. Never a list.',
  },
  {
    number: '04',
    label: 'PATTERN',
    title: 'See what\'s building.',
    body: 'Trend detection surfaces patterns before they become problems. The Horizon view shows what is building upstream — early enough to be reversible.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col bg-void">

      {/* Section 1 — Intro */}
      <Section className="bg-void">
        <div className="max-w-2xl flex flex-col gap-6">
          <Heading size="xl">From signal to understanding.</Heading>
          <p className="font-body text-[17px] leading-relaxed text-text-muted">
            Chronos turns wearable data into daily clarity — four steps that reveal what your body is trying to tell you.
          </p>
        </div>
      </Section>

      <div className="max-w-[1280px] mx-auto px-5 md:px-8 w-full">
        <Divider />
      </div>

      {/* Section 2 — Four steps */}
      <Section className="bg-void">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span
                  className="font-display font-semibold text-[13px]"
                  style={{ color: '#B8946A' }}
                >
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
              <h3 className="font-display font-medium text-[20px] text-parchment leading-snug">
                {step.title}
              </h3>
              <p className="font-body text-[13px] leading-[1.6] text-text-muted">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <div className="max-w-[1280px] mx-auto px-5 md:px-8 w-full">
        <Divider />
      </div>

      {/* Section 3 — The daily loop */}
      <Section className="bg-void">
        <div className="max-w-2xl flex flex-col gap-6">
          <Heading size="lg">One nudge. Every day.</Heading>
          <p className="font-body text-[15px] leading-[1.7] text-text-muted">
            Each morning, Chronos produces one score, two drivers, and one nudge. Not a dashboard.
            Not a to-do list. One clear signal, so you know what your body needs today.
          </p>
        </div>
      </Section>

      <div className="max-w-[1280px] mx-auto px-5 md:px-8 w-full">
        <Divider />
      </div>

      {/* Section 4 — Beta CTA */}
      <section className="w-full py-[56px] md:py-[80px]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
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
