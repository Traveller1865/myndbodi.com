'use client';

import { EyebrowLabel } from './EyebrowLabel';
import { Heading } from './Heading';

type SectionProps = {
  eyebrow?: { text: string; variant: 'dot' | 'rule' };
  heading?: { text: React.ReactNode; size: 'xl' | 'lg' | 'md' };
  subheading?: string;
  children?: React.ReactNode;
  className?: string;
};

export function Section({ eyebrow, heading, subheading, children, className = '' }: SectionProps) {
  return (
    <section className={`w-full py-[56px] md:py-[80px] ${className}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        {(eyebrow || heading || subheading) && (
          <div className="flex flex-col gap-4 mb-12">
            {eyebrow && <EyebrowLabel text={eyebrow.text} variant={eyebrow.variant} />}
            {heading && <Heading size={heading.size}>{heading.text}</Heading>}
            {subheading && (
              <p className="font-body text-[15px] text-ink-muted max-w-2xl leading-relaxed">
                {subheading}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
