type LegalPageProps = {
  title: string;
  lastUpdated: string;
  anchors?: { id: string; label: string }[];
  children: React.ReactNode;
};

export function LegalPage({ title, lastUpdated, anchors, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-pearl font-body">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="flex gap-16">
          {/* Sticky anchor sidebar — desktop only */}
          {anchors && anchors.length > 0 && (
            <aside className="hidden lg:block w-52 flex-shrink-0">
              <nav className="sticky top-24 flex flex-col gap-2">
                {anchors.map((a) => (
                  <a
                    key={a.id}
                    href={`#${a.id}`}
                    className="text-[13px] text-ink-muted hover:text-ink transition-colors py-1 border-l-2 border-border-light pl-3 hover:border-gold"
                  >
                    {a.label}
                  </a>
                ))}
              </nav>
            </aside>
          )}

          {/* Document body */}
          <div className="flex-1 max-w-[70ch]">
            <p className="font-body text-[13px] text-ink-muted mb-4">
              Last updated: {lastUpdated}
            </p>
            <h1 className="font-display font-semibold text-[40px] text-royal leading-tight mb-10">
              {title}
            </h1>
            <div className="legal-content text-[15px] leading-[1.7] text-ink">
              {children}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .legal-content h2 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 24px;
          font-weight: 600;
          color: #0A2A5E;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          padding-left: 12px;
          border-left: 3px solid #B8946A;
        }
        .legal-content h3 {
          font-family: var(--font-jost), system-ui, sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #15233B;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .legal-content p {
          margin-bottom: 1rem;
        }
        .legal-content ul {
          list-style: disc;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .legal-content li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}
