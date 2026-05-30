import { LegalPage } from '@/components/LegalPage';

const anchors = [
  { id: 'acceptance', label: 'Acceptance of Terms' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'description', label: 'Description of Services' },
  { id: 'not-medical-device', label: 'Not a Medical Device' },
  { id: 'not-medical-advice', label: 'Not Medical Advice' },
  { id: 'horizon', label: 'Horizon System' },
  { id: 'ai-content', label: 'AI-Generated Content' },
  { id: 'acceptable-use', label: 'Acceptable Use' },
  { id: 'intellectual-property', label: 'Intellectual Property' },
  { id: 'disclaimers', label: 'Disclaimers' },
  { id: 'limitation', label: 'Limitation of Liability' },
  { id: 'dispute', label: 'Dispute Resolution' },
  { id: 'governing-law', label: 'Governing Law' },
  { id: 'contact', label: 'Contact' },
];

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="May 11, 2026" anchors={anchors}>

      <h2 id="acceptance">1. Acceptance of Terms</h2>
      <p>Welcome to Chronos by Mynd &amp; Bodi Institute ("MBI," "we," "our," or "us").</p>
      <p>By accessing or using the Chronos application, beta platform, or related services (collectively, the "Services"), you agree to these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Services.</p>

      <h2 id="eligibility">2. Eligibility</h2>
      <p>You must be at least 18 years old to use Chronos. By using the Services, you represent and warrant that you are at least 18 years of age, have the legal authority to enter into these Terms, and that all information you provide is accurate and truthful. Chronos is not intended for use by minors.</p>

      <h2 id="description">3. Description of Services</h2>
      <p>Chronos is a preventative wellness and health intelligence platform designed to interpret wearable and behavioral wellness data, provide educational and wellness-oriented insights, support habit formation and recovery awareness, and help users understand long-term wellness trends.</p>
      <p>The Services may include wearable integrations, AI-generated summaries, wellness scores, behavioral observations, trend analysis, and personalized wellness recommendations. Features may evolve over time as the platform develops.</p>

      <h2 id="not-medical-device">4. Not a Medical Device</h2>
      <p>Chronos is <strong>not a medical device</strong>.</p>
      <p>Chronos has not been evaluated, cleared, or approved by the U.S. Food and Drug Administration (FDA). The Services are intended solely for general wellness, educational, behavioral, and informational purposes.</p>
      <p>Chronos does <strong>not</strong> diagnose diseases or medical conditions, prescribe treatment, monitor medical emergencies, provide clinical decision-making support, or replace licensed healthcare professionals.</p>

      <h2 id="not-medical-advice">5. Not Medical Advice</h2>
      <p>Information provided through Chronos — including scores, insights, AI-generated summaries, behavioral observations, wellness trends, and notifications — does <strong>not</strong> constitute medical advice. The Services are <strong>not</strong> a substitute for professional medical advice, diagnosis, treatment, mental health care, or emergency medical services.</p>
      <p><strong>Always consult a qualified healthcare professional regarding any medical concerns.</strong></p>
      <p><strong>If you believe you are experiencing a medical emergency, contact your local emergency services immediately. Do not use Chronos as an emergency monitoring tool.</strong></p>

      <h2 id="horizon">6. The Horizon Monitoring System</h2>
      <p>Chronos includes a feature called Horizon. If your Chronos Resilience Score remains below a defined wellness threshold for three or more consecutive days, a member of the MBI team may personally reach out to you to check in.</p>
      <p>You acknowledge and agree that this is a human wellness check-in, not an automated clinical service; it is based solely on the duration and level of the trend you are tracking; it does not constitute a diagnosis, clinical assessment, or recommendation for medical treatment; and you may disable this feature at any time via Account → Privacy → Horizon Check-ins.</p>

      <h2 id="ai-content">7. AI-Generated Content &amp; Automated Insights</h2>
      <p>Chronos may use artificial intelligence and automated analysis tools to generate wellness summaries, trend observations, behavioral suggestions, and adaptive recommendations. These outputs are probabilistic and informational in nature, experimental during the beta phase, and not validated clinical assessments.</p>
      <p>AI-generated outputs may be incomplete, contain inaccuracies, fail to identify important conditions, or generate incorrect interpretations. <strong>You use such outputs at your own discretion and risk.</strong></p>

      <h2 id="acceptable-use">8–10. Health Data &amp; Acceptable Use</h2>
      <p>Certain functionality requires access to Apple HealthKit and wearable data. You control all HealthKit permissions directly through your Apple device settings. You may revoke access at any time via Apple Health → Sharing → Apps → Chronos.</p>
      <p>You agree not to misuse the Services or use them for unlawful purposes, attempt unauthorized access to the platform or other users' data, interfere with platform operations or security, reverse engineer or exploit the software, upload malicious code or harmful content, impersonate another person or submit false information, use Chronos for clinical decision-making or as a replacement for licensed care, or use Chronos in connection with emergency medical situations.</p>
      <p>You are responsible for maintaining the confidentiality of your login credentials and all activity occurring under your account.</p>

      <h2 id="intellectual-property">11–14. Beta Features &amp; Intellectual Property</h2>
      <p>We reserve the right to suspend, restrict, or terminate access to the Services at our discretion. Portions of Chronos may be released as beta features that may contain bugs, experience outages, or change substantially without notice.</p>
      <p>If Chronos offers a data export or summary feature, any document produced is a <strong>consumer-generated wellness tracking summary</strong> — not a medical record, not validated clinical testing, and not intended to serve as a clinical document.</p>
      <p>All platform content, software, branding, logos, designs, scoring systems, interfaces, and proprietary methodologies are owned by Mynd &amp; Bodi Institute or its licensors. You may not reproduce, distribute, modify, copy, scrape, or commercially exploit any portion of the Services without prior written permission.</p>

      <h2 id="disclaimers">15–16. Privacy &amp; Disclaimer of Warranties</h2>
      <p>Your use of the Services is also governed by our Privacy Policy. By using Chronos, you acknowledge that you have reviewed and understood the Privacy Policy.</p>
      <p>THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." TO THE MAXIMUM EXTENT PERMITTED BY LAW, MBI DISCLAIMS ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, RELIABILITY, AND AVAILABILITY.</p>

      <h2 id="limitation">17. Limitation of Liability</h2>
      <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, MYND &amp; BODI INSTITUTE, ITS FOUNDERS, OPERATORS, EMPLOYEES, CONTRACTORS, AFFILIATES, AND SERVICE PROVIDERS SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF DATA, LOSS OF PROFITS, PERSONAL INJURY, OR HEALTH-RELATED OUTCOMES, ARISING FROM USE OF THE SERVICES, RELIANCE ON AI-GENERATED OUTPUTS, WEARABLE DATA INACCURACIES, OR INTERRUPTION OF SERVICE. YOUR USE OF THE SERVICES IS AT YOUR OWN RISK.</p>

      <h2 id="dispute">18–19. Indemnification &amp; Dispute Resolution</h2>
      <p>You agree to indemnify and hold harmless Mynd &amp; Bodi Institute and its affiliates from any claims, damages, liabilities, losses, and expenses arising from your use of the Services, your violation of these Terms, or your misuse of the platform.</p>
      <p>Before filing any formal legal claim, you agree to first contact MBI at <a href="mailto:MyndBodiInstitute@gmail.com">MyndBodiInstitute@gmail.com</a> and provide a written description of the dispute. We will attempt to resolve the matter informally within 30 days.</p>

      <h2 id="governing-law">20. Governing Law</h2>
      <p>These Terms shall be governed by and construed under the laws of the State of Louisiana, without regard to conflict of law principles. Any disputes arising from these Terms or the Services shall be resolved in the appropriate courts located within Louisiana, unless otherwise required by applicable law.</p>

      <h2 id="contact">21–22. Changes &amp; Contact</h2>
      <p>We may update these Terms periodically. Changes become effective upon posting the revised version. Continued use of Chronos after updates constitutes acceptance of the revised Terms.</p>
      <p><strong>Mynd &amp; Bodi Institute (MBI)</strong><br />Email: <a href="mailto:MyndBodiInstitute@gmail.com">MyndBodiInstitute@gmail.com</a></p>

    </LegalPage>
  );
}
