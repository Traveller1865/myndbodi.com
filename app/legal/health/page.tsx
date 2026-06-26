import { LegalPage } from '@/components/LegalPage';

const anchors = [
  { id: 'what-we-read', label: 'What We Read' },
  { id: 'how-data-is-used', label: 'How Data Is Used' },
  { id: 'where-data-goes', label: 'Where Your Data Goes' },
  { id: 'horizon', label: 'Horizon Feature' },
  { id: 'your-control', label: 'Your Control' },
  { id: 'important-reminder', label: 'Important Reminder' },
];

export default function HealthPage() {
  return (
    <LegalPage title="Health Disclaimer" lastUpdated="May 11, 2026" anchors={anchors}>

      <p>Chronos uses Apple Health and wearable data to help you better understand your personal recovery, stress, sleep, and wellness patterns over time.</p>
      <p>We only read the health categories you explicitly allow through Apple Health permissions. <strong>We never write data back to Apple Health.</strong></p>

      <h2 id="what-we-read">What We Read</h2>
      <p>Depending on your device and permissions, Chronos may access:</p>
      <ul>
        <li><strong>Heart Rate Variability (HRV)</strong> — to track your personal recovery patterns</li>
        <li><strong>Resting Heart Rate</strong> — to track cardiovascular baseline trends</li>
        <li><strong>Respiratory Rate</strong> — to monitor breathing patterns during rest</li>
        <li><strong>Sleep Duration and Sleep Quality</strong> — to understand your recovery cycles</li>
        <li><strong>Step Count and Activity</strong> — to track daily movement patterns</li>
        <li><strong>Active Energy Burned</strong> — to measure exertion over time</li>
        <li><strong>Exercise Minutes</strong> — to capture structured activity</li>
      </ul>
      <p>Chronos compares you only to your own historical baseline — <strong>not to other users</strong>.</p>

      <h2 id="how-data-is-used">How Your Data Is Used</h2>
      <p>Your health data is used exclusively to calculate your daily Chronos Resilience Score, generate personalized wellness insights and trend observations, and deliver adaptive recommendations based on your patterns.</p>
      <p>Your health data is <strong>never</strong> sold to third parties, used for advertising or targeting, shared with data brokers, shared with employers or insurers without your explicit permission, or used to build commercial profiles unrelated to your wellness experience.</p>

      <h2 id="where-data-goes">Where Your Data Goes</h2>
      <p>Your data may be processed locally on your device, and securely in your private Chronos account via Supabase cloud infrastructure hosted in the United States. Data is encrypted at rest and in transit. Access is protected by row-level security controls. Only you, secure system infrastructure, and authorized MBI operational personnel (when necessary for support or platform reliability) have access to your data.</p>

      <h2 id="horizon">About the Horizon Monitoring Feature</h2>
      <p>Chronos includes a feature called Horizon. If Chronos detects a sustained low-score trend, the MBI team may follow up with you directly. This occurs only if your data suggests you may benefit from support.</p>
      <p>This is a <strong>human wellness check-in</strong> — not automated clinical monitoring. It is based solely on the duration and pattern of your score trend, not a clinical assessment of your health. Any outreach is supportive in nature and carries no clinical authority.</p>
      <p>You can turn this off at any time: <strong>Account → Privacy → Horizon Check-ins</strong></p>

      <h2 id="your-control">Your Control</h2>
      <p>You can revoke Apple Health permissions at any time, disable Horizon check-ins via Account → Privacy, request deletion of your account and all associated data, or stop using Chronos whenever you choose.</p>
      <ul>
        <li><strong>To remove Health access:</strong> Apple Health → Sharing → Apps → Chronos</li>
        <li><strong>To request account deletion:</strong> Available in-app via Account → Delete Account, or contact <a href="mailto:Hello@myndbodi.com">Hello@myndbodi.com</a></li>
      </ul>
      <p>Deleted accounts and identifiable health data are scheduled for removal within approximately 30 days of a verified request.</p>

      <h2 id="important-reminder">Important Reminder</h2>
      <p>Chronos is a wellness and health intelligence platform. It is <strong>not a medical device</strong>, <strong>not a diagnostic tool</strong>, and <strong>not a substitute for professional medical advice</strong>.</p>
      <p>If you have medical concerns, consult a qualified healthcare professional. If you believe you are experiencing a medical emergency, contact your local emergency services immediately.</p>

    </LegalPage>
  );
}
