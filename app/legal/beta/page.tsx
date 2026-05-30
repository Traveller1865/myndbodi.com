import { LegalPage } from '@/components/LegalPage';

const anchors = [
  { id: 'purpose', label: 'Purpose of Beta' },
  { id: 'confidentiality', label: 'Confidentiality' },
  { id: 'beta-software', label: 'Beta Software' },
  { id: 'health-disclaimer', label: 'Health Disclaimer' },
  { id: 'horizon', label: 'Horizon Feature' },
  { id: 'feedback', label: 'Feedback' },
  { id: 'no-compensation', label: 'No Compensation' },
  { id: 'data-rights', label: 'Data Rights' },
  { id: 'intellectual-property', label: 'Intellectual Property' },
  { id: 'limitation', label: 'Limitation of Liability' },
  { id: 'governing-law', label: 'Governing Law' },
  { id: 'contact', label: 'Contact' },
];

export default function BetaPage() {
  return (
    <LegalPage title="Beta Tester Agreement" lastUpdated="May 11, 2026" anchors={anchors}>

      <p>Thank you for participating in the Chronos beta program operated by Mynd &amp; Bodi Institute ("MBI," "we," "our," or "us").</p>
      <p>By installing, accessing, or using the Chronos beta application via TestFlight or any other pre-release distribution channel (collectively, the "Beta Program"), you agree to the terms below.</p>

      <h2 id="purpose">1. Purpose of the Beta Program</h2>
      <p>The Chronos Beta Program exists to evaluate platform functionality and stability, identify bugs and usability issues, test wellness insights and user experience, and gather feedback before broader public release. The software provided through this Beta Program is pre-release software and may not perform as intended.</p>

      <h2 id="confidentiality">2. Confidentiality &amp; Non-Disclosure</h2>
      <p>Chronos is currently a <strong>private beta product</strong>. You agree that all non-public aspects of the Beta Program are confidential, including app interfaces and user flows, features and onboarding screens, the Chronos scoring system and methodology, AI-generated outputs and narrative copy, screenshots, screen recordings, and videos, build version numbers and TestFlight identifiers, unreleased features and product roadmap details, internal documents and communications, and any information disclosed to you by MBI during the Beta Program.</p>
      <p>Without prior written permission from MBI, you agree <strong>not to</strong> publicly share screenshots or screen recordings of the app, post or livestream the application on any public platform, distribute TestFlight builds or invite links to others, discuss confidential product details in public forums or social media, or disclose unreleased features or product direction.</p>
      <p>This confidentiality obligation remains in effect until the relevant information is publicly released by MBI.</p>

      <h2 id="beta-software">3. Beta Software Acknowledgment</h2>
      <p>You understand and acknowledge that the software is experimental and pre-release, features may change or be removed, your data may be modified or reset during beta, services may become temporarily unavailable, and the app may contain bugs, inaccuracies, or incomplete functionality.</p>
      <p>You agree <strong>not</strong> to rely on the Beta Program for medical decisions, emergency monitoring, healthcare treatment or medication decisions, or any critical personal, professional, or health-related needs.</p>

      <h2 id="health-disclaimer">4. Health &amp; Wellness Disclaimer</h2>
      <p>Chronos is a wellness and health intelligence platform intended for <strong>informational and behavioral wellness purposes only</strong>. Chronos is <strong>not a medical device</strong>, <strong>not a diagnostic tool</strong>, <strong>not a substitute for professional medical advice</strong>, and not intended to diagnose, treat, cure, or prevent any disease or medical condition.</p>
      <p>AI-generated insights, wellness scores, and recommendations may be inaccurate or incomplete. <strong>Always consult a qualified healthcare professional regarding medical concerns.</strong> If you believe you are experiencing a medical emergency, contact your local emergency services immediately.</p>

      <h2 id="horizon">5. The Horizon Monitoring Feature</h2>
      <p>During this beta, Chronos includes a feature called Horizon. If your Chronos Resilience Score remains below a defined wellness threshold for three or more consecutive days, a member of the MBI team may personally reach out to you to check in.</p>
      <p>You acknowledge that this is a voluntary human wellness check-in from MBI, it is based solely on the duration and pattern of your score trend, it does <strong>not</strong> constitute a diagnosis or clinical recommendation, and you may disable Horizon check-ins at any time via Account → Privacy → Horizon Check-ins.</p>

      <h2 id="feedback">6. Feedback &amp; Suggestions</h2>
      <p>By submitting feedback, suggestions, bug reports, feature requests, ideas, comments, or recommendations ("Feedback"), you agree that MBI may use, modify, incorporate, build upon, commercialize, and distribute such Feedback without restriction; all Feedback becomes the sole property of MBI; no compensation, royalties, attribution, or ownership rights are owed to you in connection with Feedback; and MBI has no obligation to implement, acknowledge, or credit any Feedback.</p>

      <h2 id="no-compensation">7. No Compensation</h2>
      <p>Participation in the Beta Program is voluntary and unpaid. Unless explicitly agreed otherwise in a separate signed written agreement, you will not receive financial compensation, equity, royalties, ownership rights, or any future product entitlements in exchange for participation, testing, or Feedback.</p>

      <h2 id="data-rights">8. Data Rights During &amp; After Beta</h2>
      <p>During the Beta Program, your data is handled in accordance with the Chronos Privacy Policy. At the conclusion of the Beta Program or upon your removal from the program, your account and associated wellness data will remain subject to the Privacy Policy, and you may request deletion of your account and data at any time. Identifiable data will be deleted or anonymized within approximately 30 days of a verified deletion request.</p>
      <p>MBI may retain de-identified, aggregated analytics derived from beta usage to inform product development, provided such data cannot be linked back to you individually.</p>

      <h2 id="intellectual-property">9–10. Account Access &amp; Intellectual Property</h2>
      <p>MBI reserves the right to suspend, revoke, limit, or terminate beta access at any time and for any reason, including misuse of the platform, violation of this Agreement or the Privacy Policy, violation of confidentiality obligations, harmful or abusive behavior, or operational and security concerns.</p>
      <p>All Chronos software, branding, interfaces, systems, algorithms, scores, designs, and related materials remain the exclusive property of Mynd &amp; Bodi Institute. Participation in the Beta Program does not grant you ownership rights, licenses, patents, trademarks, or commercialization rights of any kind.</p>

      <h2 id="limitation">11. Limitation of Liability</h2>
      <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, MYND &amp; BODI INSTITUTE SHALL NOT BE LIABLE FOR DATA LOSS, SERVICE INTERRUPTIONS, SOFTWARE BUGS, DEVICE ISSUES, HEALTH OUTCOMES, OR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES RELATED TO THE BETA PROGRAM. YOUR USE OF THE BETA SOFTWARE IS AT YOUR OWN RISK.</p>

      <h2 id="governing-law">12. Governing Law</h2>
      <p>This Agreement shall be governed by the laws of the State of Louisiana, without regard to conflict of law principles. Any disputes arising from this Agreement shall be resolved in appropriate courts located within Louisiana, unless otherwise required by applicable law.</p>

      <h2 id="contact">13–14. Acceptance &amp; Contact</h2>
      <p>By installing, accessing, or using the Chronos beta application, you acknowledge that you have read this Agreement, understand it, and agree to be bound by its terms.</p>
      <p><strong>Mynd &amp; Bodi Institute (MBI)</strong><br />Email: <a href="mailto:MyndBodiInstitute@gmail.com">MyndBodiInstitute@gmail.com</a></p>

    </LegalPage>
  );
}
