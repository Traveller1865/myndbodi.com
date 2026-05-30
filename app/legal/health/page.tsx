import { LegalPage } from '@/components/LegalPage';

const anchors = [
  { id: 'not-medical-advice', label: 'Not Medical Advice' },
  { id: 'wellness-only', label: 'Wellness Only' },
  { id: 'consult-professional', label: 'Consult a Professional' },
  { id: 'no-diagnosis', label: 'No Diagnosis' },
  { id: 'contact', label: 'Contact' },
];

export default function HealthPage() {
  return (
    <LegalPage
      title="Health Disclaimer"
      lastUpdated="May 2026"
      anchors={anchors}
    >
      {/* LEGAL CONTENT — PASTE FROM PolicyView.swift */}
    </LegalPage>
  );
}
