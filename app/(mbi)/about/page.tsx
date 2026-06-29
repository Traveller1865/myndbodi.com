import { EyebrowLabel } from '@/components/EyebrowLabel';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import { Divider } from '@/components/Divider';

const beliefs = [
  {
    statement: '"Within-user, always.',
    body: 'Your score compares you to you. Population norms tell you nothing useful about your body."',
  },
  {
    statement: '"Deterministic before narrative.',
    body: 'Every score is computed by rule. Language explains the output — it does not produce it."',
  },
  {
    statement: '"Wellness framing, earned.',
    body: 'We do not use clinical language. We surface signals. You decide what to do with them."',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Section 1 — What MBI is */}
      <Section className="bg-white" eyebrow={{ text: 'About MBI', variant: 'rule' }}>
        <div className="max-w-2xl flex flex-col gap-6">
          <Heading size="xl">Mynd &amp; Bodi Institute.</Heading>
          <p className="font-body text-[16px] leading-relaxed" style={{ color: '#5A6B85' }}>
            MBI is an early-stage health intelligence company. We are building the tools and methods
            to help people understand their own biology — clearly, privately, and without hype.
            Chronos is our first product. It is a narrow, deliberate start. We believe trust is
            built one honest signal at a time, not promised in advance.
          </p>
          <p className="font-body text-[16px] leading-relaxed" style={{ color: '#5A6B85' }}>
            We are based in the United States. Mynd Bodi Institute, LLC is the legal entity. We do
            not have academic partnerships to announce. We do not have clinical affiliations to
            display. What we have is a working system, a founding team, and a commitment to proving
            the loop before expanding it.
          </p>
        </div>
      </Section>

      <Divider />

      {/* Section 2 — What we believe */}
      <Section className="bg-white">
        <div className="max-w-2xl flex flex-col gap-10">
          <Heading size="lg">What we believe.</Heading>
          <div className="flex flex-col gap-8">
            {beliefs.map((b) => (
              <div key={b.statement} className="flex gap-5">
                <div className="w-[3px] flex-shrink-0 rounded-full mt-1" style={{ backgroundColor: '#B8946A', minHeight: '100%' }} />
                <p className="font-body text-[15px] leading-[1.7]" style={{ color: '#15233B' }}>
                  <span className="font-semibold">{b.statement}</span>{' '}
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Divider />

      {/* Section 3 — Contact */}
      <section className="w-full py-[56px] md:py-[80px]" style={{ backgroundColor: '#EEF2F8' }}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
          <p className="font-body text-[15px]" style={{ color: '#5A6B85' }}>
            Questions or press inquiries:{' '}
            <a
              href="mailto:Hello@myndbodi.com"
              className="underline hover:opacity-80 transition-opacity"
              style={{ color: '#0A2A5E' }}
            >
              Hello@myndbodi.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
