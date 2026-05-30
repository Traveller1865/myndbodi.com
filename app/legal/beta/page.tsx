import { LegalPage } from '@/components/LegalPage';

const anchors = [
  { id: 'beta-participation', label: 'Beta Participation' },
  { id: 'feedback', label: 'Feedback' },
  { id: 'confidentiality', label: 'Confidentiality' },
  { id: 'no-warranty', label: 'No Warranty' },
  { id: 'termination', label: 'Termination' },
  { id: 'contact', label: 'Contact' },
];

export default function BetaPage() {
  return (
    <LegalPage
      title="Beta Agreement"
      lastUpdated="May 2026"
      anchors={anchors}
    >
      {/* LEGAL CONTENT — PASTE FROM PolicyView.swift */}
    </LegalPage>
  );
}
