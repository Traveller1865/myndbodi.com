import { LegalPage } from '@/components/LegalPage';

const anchors = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'scope', label: 'Scope' },
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'how-we-use', label: 'How We Use It' },
  { id: 'horizon', label: 'Horizon System' },
  { id: 'ai-processing', label: 'AI & Automated Processing' },
  { id: 'healthkit', label: 'HealthKit & Apple Health' },
  { id: 'data-storage', label: 'Data Storage' },
  { id: 'data-access', label: 'Who Has Access' },
  { id: 'data-retention', label: 'Data Retention' },
  { id: 'your-rights', label: 'Your Rights' },
  { id: 'security', label: 'Security' },
  { id: 'ftc', label: 'FTC Compliance' },
  { id: 'childrens-privacy', label: "Children's Privacy" },
  { id: 'contact', label: 'Contact' },
];

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="May 11, 2026" anchors={anchors}>

      <h2 id="introduction">1. Introduction</h2>
      <p>Welcome to Chronos by Mynd &amp; Bodi Institute ("MBI," "we," "our," or "us").</p>
      <p>Chronos is a preventative wellness and health intelligence platform that helps you understand your personal health patterns through wearable data, behavioral inputs, and adaptive wellness insights.</p>
      <p>This Privacy Policy explains what information we collect, how we use it, how it is stored and protected, and the rights you have regarding your data.</p>
      <p>Our philosophy is built around transparency, user trust, and prevention-first wellness. We believe your health data belongs to you.</p>

      <h2 id="scope">2. Scope of This Policy</h2>
      <p>This Privacy Policy applies to:</p>
      <ul>
        <li>the Chronos mobile application,</li>
        <li>associated web services,</li>
        <li>beta testing environments,</li>
        <li>and any related MBI-operated digital wellness services.</li>
      </ul>
      <p>This policy does not apply to third-party platforms, devices, or services that integrate with Chronos, including Apple Health, Apple Watch, or other wearable providers.</p>

      <h2 id="information-we-collect">3. Information We Collect</h2>
      <h3>A. Health &amp; Wellness Data (HealthKit)</h3>
      <p>With your explicit permission, Chronos accesses and processes the following Apple HealthKit data — read-only. We never write data back to Apple Health.</p>
      <ul>
        <li>Heart Rate Variability (HRV)</li>
        <li>Resting Heart Rate</li>
        <li>Respiratory Rate</li>
        <li>Sleep Duration and Sleep Quality</li>
        <li>Step Count</li>
        <li>Active Energy Burned</li>
        <li>Exercise Minutes</li>
      </ul>
      <p>Chronos only accesses the specific data categories you authorize through the Apple Health permissions screen.</p>
      <h3>B. User-Provided Information</h3>
      <p>You may also provide: name or display name, email address, date of birth, height and body profile details, mood inputs and journal reflections, wellness goals, and feedback and support submissions.</p>
      <h3>C. Usage &amp; Device Data</h3>
      <p>We collect operational analytics to maintain and improve the platform, including app opens and session duration, feature interactions and screen views, device type and operating system version, app version, error logs and crash diagnostics reported via Sentry, and push notification engagement.</p>
      <p>We do not collect precise GPS location data.</p>

      <h2 id="how-we-use">4. How We Use Your Information</h2>
      <p>We use collected data to calculate your daily Chronos Resilience Score, generate personalized wellness insights and trends, deliver adaptive recommendations and notifications, improve platform performance and reliability, provide customer support, maintain platform security, and produce aggregate, de-identified analytics.</p>
      <p>We do <strong>not</strong> use your health data to serve advertising, build advertising profiles, sell to data brokers, make automated decisions about your insurance, employment, or creditworthiness, or share with employers or insurers without your explicit authorization.</p>
      <p>Chronos is designed as a preventative wellness platform. It is <strong>not</strong> a diagnostic medical system.</p>

      <h2 id="horizon">5. The Horizon Monitoring System</h2>
      <p>Chronos includes an internal safety feature called Horizon. If your Chronos Resilience Score falls below a defined wellness threshold for three or more consecutive days, MBI may be notified so that a team member can personally reach out to check in.</p>
      <p>This is a human safety check — it is <strong>not</strong> automated clinical triage, diagnosis, or treatment. The outreach is supportive in nature.</p>
      <p>You can disable Horizon check-ins at any time via <strong>Account → Privacy → Horizon Check-ins</strong>.</p>
      <p>When Horizon triggers, the following information may be visible to MBI: your anonymized user identifier (not your name or email by default), your score values for the relevant days, and the dates of the low-score pattern. No health raw data is transmitted to the founder device as part of this alert.</p>

      <h2 id="ai-processing">6. AI &amp; Automated Processing</h2>
      <p>Chronos uses automated systems, including machine learning models and AI-generated narrative explanations, to interpret wellness trends, generate behavioral observations, summarize patterns, and personalize the user experience. These systems are intended to support wellness awareness and behavioral guidance only.</p>
      <p><strong>Chronos does not provide medical diagnoses, treatment plans, or emergency monitoring.</strong> Always consult a qualified healthcare professional for medical concerns.</p>

      <h2 id="healthkit">7. HealthKit &amp; Apple Health Data</h2>
      <p>Chronos integrates with Apple HealthKit solely to provide personalized wellness insights. HealthKit data is <strong>never sold</strong>, <strong>never used for advertising</strong> or advertising targeting, <strong>never shared with data brokers</strong>, and <strong>never used to build commercial profiles</strong> unrelated to your wellness experience.</p>
      <p>We do not disclose HealthKit data to third parties without your explicit consent, except where legally required. We comply with Apple's HealthKit developer policies and App Store guidelines in full.</p>

      <h2 id="data-storage">8. Data Storage &amp; Processing</h2>
      <h3>On-Device Processing</h3>
      <p>Certain temporary calculations may occur locally on your device.</p>
      <h3>Cloud Infrastructure</h3>
      <p>Chronos stores and processes data using Supabase-managed cloud infrastructure, hosted primarily in the United States. Data is encrypted at rest and in transit. Access is protected by row-level security controls.</p>

      <h2 id="data-access">9. Who Has Access to Your Data</h2>
      <p>Access to user data is limited to: you, authorized MBI operational personnel for platform support and security purposes, Supabase acting as a data processor under appropriate data handling obligations, and Sentry (sentry.io) acting as a crash reporting and performance monitoring processor. Sentry receives crash reports, app hang events, performance traces, and an opaque anonymous identifier for crash correlation. Sentry does not receive your name, email address, or any health data.</p>
      <p>We do not sell personal data. We do not share identifiable health data with employers, insurers, or third parties without your explicit authorization.</p>

      <h2 id="data-retention">10. Data Retention</h2>
      <h3>Active Accounts</h3>
      <p>We retain account and wellness data while your account remains active to support longitudinal wellness insights and personalized baselines.</p>
      <h3>Deleted Accounts</h3>
      <p>If you request account deletion, identifiable personal and wellness data will be deleted or anonymized within approximately 30 days, except where retention is legally required for security, fraud prevention, or compliance purposes. Encrypted backup systems may retain data for a limited period before automatic purge cycles complete.</p>

      <h2 id="your-rights">11. Your Rights &amp; Controls</h2>
      <p>Depending on your jurisdiction, you may have the right to access your personal data, correct inaccurate information, request deletion, withdraw permissions, export your data, or object to certain processing activities.</p>
      <ul>
        <li><strong>To revoke Apple Health permissions:</strong> Apple Health → Sharing → Apps → Chronos</li>
        <li><strong>To disable Horizon check-ins:</strong> Account → Privacy → Horizon Check-ins</li>
        <li><strong>To request account deletion:</strong> Available in-app via Account → Delete Account, or by contacting us below.</li>
      </ul>

      <h2 id="security">12. Security Measures</h2>
      <p>We implement reasonable technical and organizational safeguards including encrypted network communication (TLS), authenticated database access, row-level security controls in Supabase, secure credential handling, and restricted administrative access.</p>
      <p>No digital platform can guarantee absolute security. You are responsible for maintaining the confidentiality of your device credentials and authentication methods.</p>

      <h2 id="ftc">13. FTC Compliance</h2>
      <p>Although Chronos is a direct-to-consumer wellness app and is not subject to HIPAA as a covered entity, we recognize that the FTC Act and the FTC Health Breach Notification Rule may apply to our collection and handling of health-related information. We are committed to honoring our privacy representations and will notify affected users in the event of an unauthorized disclosure of health information as required by applicable law.</p>

      <h2 id="childrens-privacy">14. Children's Privacy</h2>
      <p>Chronos is not intended for individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that information has been collected from a child without appropriate authorization, we will take reasonable steps to delete it promptly.</p>

      <h2 id="contact">15–17. Changes &amp; Contact</h2>
      <p>We may update this Privacy Policy to reflect product changes, legal requirements, or operational improvements. Material changes will be communicated through the app or other appropriate channels. Continued use of Chronos after updates constitutes acceptance of the revised policy.</p>
      <p>For privacy requests, data access requests, or deletion inquiries:</p>
      <p><strong>Mynd &amp; Bodi Institute (MBI)</strong><br />Email: <a href="mailto:Hello@myndbodi.com">Hello@myndbodi.com</a></p>

    </LegalPage>
  );
}
