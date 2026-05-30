import { LegalPage } from '@/components/LegalPage';

const anchors = [
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'how-we-use', label: 'How We Use It' },
  { id: 'data-sharing', label: 'Data Sharing' },
  { id: 'data-retention', label: 'Data Retention' },
  { id: 'your-rights', label: 'Your Rights' },
  { id: 'contact', label: 'Contact' },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="May 2026"
      anchors={anchors}
    >
      {/* LEGAL CONTENT — PASTE FROM PolicyView.swift */}
    </LegalPage>
  );
}
