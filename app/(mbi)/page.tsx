import { EyebrowLabel } from '@/components/EyebrowLabel';
import { Heading } from '@/components/Heading';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { Divider } from '@/components/Divider';
import { ChronosPreview } from '@/components/ChronosPreview';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F8FB 50%, #E8F0FA 100%)',
        }}
      >
        <div
          className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top right, rgba(10,42,94,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-7">
              <EyebrowLabel text="Preventative-first health intelligence" variant="rule" />
              <Heading size="xl">
                Your body keeps score.<br />
                <span style={{ color: '#B8946A' }}>Chronos reads it every morning.</span>
              </Heading>
              <p className="font-body text-[16px] leading-relaxed" style={{ color: '#5A6B85' }}>
                One score. Two drivers. One nudge. Built on your data — not population averages. Available for Apple Watch.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="primary" href="#foundation">
                  Explore MBI →
                </Button>
                <Button variant="ghost" href="/chronos">
                  Meet Chronos →
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <ChronosPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Three pillars */}
      <div id="foundation">
        <Section
          eyebrow={{ text: 'Our Foundation', variant: 'rule' }}
          heading={{ text: 'Built for trust. Designed for the future of health.', size: 'lg' }}
          className="bg-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              title="Science First"
              body="Every score is computed by rule, traceable to peer-reviewed inputs. No black boxes. No claims we can't support."
            />
            <Card
              title="Privacy by Design"
              body="Your data never leaves your control. We collect only what serves your score. We never sell it, and we never use population data to judge it."
            />
            <Card
              title="Within-User, Always"
              body="Your score compares you to you. Not to averages. Not to other users. What counts as 'good' is defined by your own established baseline."
            />
          </div>
          <p className="font-body text-[13px] text-ink-muted text-center mt-10">
            Built on science. Guided by evidence. Designed for humans.
          </p>
        </Section>
      </div>

      <Divider />

      {/* Section 3 — Bridge to Chronos */}
      <section className="w-full py-[56px] md:py-[80px]" style={{ backgroundColor: '#EEF2F8' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="flex flex-col gap-6 max-w-2xl">
            <EyebrowLabel text="Chronos · Private Beta" variant="rule" />
            <Heading size="lg">Our first product is ready for its first users.</Heading>
            <p className="font-body text-[15px] leading-relaxed" style={{ color: '#5A6B85' }}>
              Chronos is a daily wellness intelligence app for Apple Watch. It is currently in private beta. A broader beta is coming. To be considered, contact{' '}
              <a href="mailto:Hello@myndbodi.com" className="underline hover:opacity-80 transition-opacity">
                Hello@myndbodi.com
              </a>
              .
            </p>
            <div>
              <Button variant="ghost" href="/chronos">
                Meet Chronos →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
