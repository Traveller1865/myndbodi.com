import { LegalPage } from '@/components/LegalPage';

const anchors = [
  { id: 'acceptance', label: 'Acceptance of Terms' },
  { id: 'use-of-service', label: 'Use of Service' },
  { id: 'intellectual-property', label: 'Intellectual Property' },
  { id: 'disclaimers', label: 'Disclaimers' },
  { id: 'limitation', label: 'Limitation of Liability' },
  { id: 'governing-law', label: 'Governing Law' },
  { id: 'contact', label: 'Contact' },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="May 2026"
      anchors={anchors}
    >
      {/* LEGAL CONTENT — PASTE FROM PolicyView.swift */}
    </LegalPage>
  );
}
