import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - FiTracker',
  description: 'FiTracker Privacy Policy - Learn how we collect, use, and protect your personal information and fitness data.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-center">FiTracker Privacy Policy</h1>
          
          <div className="text-center mb-8 text-muted-foreground">
            <p><strong>Effective Date:</strong> August 8, 2025</p>
            <p><strong>Last Updated:</strong> August 8, 2025</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. INTRODUCTION</h2>
            <p className="mb-4">
              FiTracker, Inc. ("FiTracker," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you use our mobile 
              application, website, and related services (collectively, the "Service").
            </p>
            <p className="mb-4">
              By using FiTracker, you consent to the data practices described in this Privacy Policy. If you do not agree 
              with this Privacy Policy, please do not use our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. INFORMATION WE COLLECT</h2>
            
            <h3 className="text-xl font-medium mb-3">2.1 Information You Provide Directly</h3>
            
            <h4 className="text-lg font-medium mb-2">Account Information:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and email address</li>
              <li>Username and password</li>
              <li>Date of birth</li>
              <li>Profile photo (optional)</li>
              <li>Phone number (optional)</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">Health and Fitness Information:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Height, weight, and body measurements</li>
              <li>Fitness goals and preferences</li>
              <li>Workout history and performance data</li>
              <li>Nutrition and meal information</li>
              <li>Water intake and sleep data</li>
              <li>Health conditions and injuries (optional)</li>
              <li>Progress photos (optional)</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">Payment Information:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Credit/debit card details (processed by secure third-party payment processors)</li>
              <li>Billing address</li>
              <li>Transaction history</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">User Content:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Posts, comments, and messages</li>
              <li>Challenge participation</li>
              <li>Social interactions</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">2.2 Information Collected Automatically</h3>
            
            <h4 className="text-lg font-medium mb-2">Device Information:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Device type and model</li>
              <li>Operating system and version</li>
              <li>Unique device identifiers</li>
              <li>Mobile network information</li>
              <li>IP address</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">Usage Information:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>App features used</li>
              <li>Interaction with AI coach</li>
              <li>Time spent in app</li>
              <li>Click paths and navigation</li>
              <li>Search queries</li>
              <li>Crash reports and performance data</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">Location Information:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>GPS location (with permission) for outdoor workout tracking</li>
              <li>Time zone information</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">2.3 Information from Third Parties</h3>
            
            <h4 className="text-lg font-medium mb-2">Connected Devices:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Data from fitness trackers (Fitbit, Garmin, etc.)</li>
              <li>Apple Health and Google Fit data</li>
              <li>Smart scale measurements</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">Social Media:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Basic profile information if you sign up via social login</li>
              <li>Friends list (with permission) for social features</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">Analytics Partners:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Aggregated demographic information</li>
              <li>Interest categories</li>
              <li>Behavioral insights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. HOW WE USE YOUR INFORMATION</h2>
            
            <h3 className="text-xl font-medium mb-3">3.1 To Provide and Improve Our Service</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Create and manage your account</li>
              <li>Provide personalized AI coaching</li>
              <li>Track your fitness progress</li>
              <li>Generate meal plans and workout recommendations</li>
              <li>Process payments and subscriptions</li>
              <li>Send service-related communications</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">3.2 To Personalize Your Experience</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Customize AI responses based on your goals</li>
              <li>Recommend relevant features and content</li>
              <li>Adjust difficulty based on performance</li>
              <li>Provide targeted motivation</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">3.3 For Research and Development</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Improve AI accuracy and relevance</li>
              <li>Develop new features</li>
              <li>Analyze usage patterns</li>
              <li>Conduct A/B testing</li>
              <li>Create aggregated insights</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">3.4 For Marketing and Communication</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Send promotional emails (with consent)</li>
              <li>Notify about new features</li>
              <li>Share fitness tips and content</li>
              <li>Conduct surveys and collect feedback</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">3.5 For Safety and Security</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Detect and prevent fraud</li>
              <li>Monitor for prohibited content</li>
              <li>Enforce Terms of Service</li>
              <li>Protect user safety</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. HOW WE SHARE YOUR INFORMATION</h2>
            
            <h3 className="text-xl font-medium mb-3">4.1 We DO NOT Sell Your Personal Information</h3>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
              <p className="font-semibold">FiTracker does not and will not sell your personal information to third parties.</p>
            </div>

            <h3 className="text-xl font-medium mb-3">4.2 Service Providers</h3>
            <p className="mb-2">We share information with trusted third-party service providers who assist us in:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Payment processing (Stripe)</li>
              <li>Cloud hosting (Amazon Web Services)</li>
              <li>Analytics (Google Analytics, Mixpanel)</li>
              <li>Email services (SendGrid)</li>
              <li>Customer support (Zendesk)</li>
            </ul>
            <p className="mb-4">
              These providers are contractually obligated to protect your information and use it only for the services 
              they provide to us.
            </p>

            <h3 className="text-xl font-medium mb-3">4.3 AI Technology Partners</h3>
            <p className="mb-4">
              We share limited data with AI providers (OpenAI, Anthropic) to power our coaching features. This data is 
              anonymized and subject to their privacy policies.
            </p>

            <h3 className="text-xl font-medium mb-3">4.4 Business Transfers</h3>
            <p className="mb-4">
              If FiTracker is acquired, merged, or sells assets, your information may be transferred as part of that 
              transaction. We will notify you of any such change.
            </p>

            <h3 className="text-xl font-medium mb-3">4.5 Legal Requirements</h3>
            <p className="mb-2">We may disclose information if required by law or if we believe disclosure is necessary to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Comply with legal process</li>
              <li>Protect our rights or property</li>
              <li>Prevent fraud or crime</li>
              <li>Protect user safety</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">4.6 Aggregated Information</h3>
            <p className="mb-4">
              We may share aggregated, non-identifiable information publicly or with partners for research, marketing, 
              or business purposes.
            </p>

            <h3 className="text-xl font-medium mb-3">4.7 With Your Consent</h3>
            <p className="mb-4">We may share information for other purposes with your explicit consent.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. DATA RETENTION</h2>
            <p className="mb-2">
              We retain your information for as long as necessary to provide our Service and fulfill the purposes 
              outlined in this Privacy Policy:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Active Account Data:</strong> Retained while account is active</li>
              <li><strong>Deleted Account Data:</strong> Removed within 30 days of deletion request</li>
              <li><strong>Backup Data:</strong> May persist in backups for up to 90 days</li>
              <li><strong>Legal Compliance:</strong> Retained as required by law</li>
              <li><strong>Aggregated Data:</strong> May be retained indefinitely</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. DATA SECURITY</h2>
            
            <h3 className="text-xl font-medium mb-3">6.1 Security Measures</h3>
            <p className="mb-2">We implement appropriate technical and organizational measures to protect your information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encryption in transit (TLS/SSL)</li>
              <li>Encryption at rest (AES-256)</li>
              <li>Secure data centers with physical access controls</li>
              <li>Regular security audits and penetration testing</li>
              <li>Employee access controls and training</li>
              <li>Incident response procedures</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">6.2 Your Responsibilities</h3>
            <p className="mb-2">You are responsible for:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Keeping your password secure</li>
              <li>Not sharing your account credentials</li>
              <li>Logging out of shared devices</li>
              <li>Notifying us of suspected unauthorized access</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">6.3 No Absolute Security</h3>
            <p className="mb-4">
              While we strive to protect your information, no method of transmission or storage is 100% secure. We 
              cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. YOUR PRIVACY RIGHTS</h2>
            
            <h3 className="text-xl font-medium mb-3">7.1 Access and Portability</h3>
            <p className="mb-4">
              You can access and download your data through account settings or by contacting support@fitracker.ai.
            </p>

            <h3 className="text-xl font-medium mb-3">7.2 Correction</h3>
            <p className="mb-4">
              You can update inaccurate information through your profile settings or contact us for assistance.
            </p>

            <h3 className="text-xl font-medium mb-3">7.3 Deletion</h3>
            <p className="mb-4">
              You can request account deletion through settings or by emailing privacy@fitracker.ai. Some information 
              may be retained for legal or legitimate business purposes.
            </p>

            <h3 className="text-xl font-medium mb-3">7.4 Opt-Out</h3>
            <p className="mb-2">You can opt-out of:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Marketing emails (via unsubscribe link)</li>
              <li>Push notifications (via device settings)</li>
              <li>Location tracking (via device permissions)</li>
              <li>Analytics tracking (via settings)</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">7.5 Do Not Track</h3>
            <p className="mb-4">Our Service does not currently respond to Do Not Track signals.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. CALIFORNIA PRIVACY RIGHTS (CCPA)</h2>
            <p className="mb-4">California residents have additional rights under the California Consumer Privacy Act:</p>
            
            <h3 className="text-xl font-medium mb-3">8.1 Right to Know</h3>
            <p className="mb-2">You can request information about:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Categories of personal information collected</li>
              <li>Sources of information</li>
              <li>Business purposes for collection</li>
              <li>Categories of third parties we share with</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">8.2 Right to Delete</h3>
            <p className="mb-4">You can request deletion of your personal information, subject to certain exceptions.</p>

            <h3 className="text-xl font-medium mb-3">8.3 Right to Non-Discrimination</h3>
            <p className="mb-4">We will not discriminate against you for exercising privacy rights.</p>

            <h3 className="text-xl font-medium mb-3">8.4 Sale of Personal Information</h3>
            <p className="mb-4">We do not sell personal information as defined by CCPA.</p>

            <p className="mb-4">To exercise these rights, contact privacy@fitracker.ai or call (513) 957-5001.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. EUROPEAN PRIVACY RIGHTS (GDPR)</h2>
            <p className="mb-4">If you are in the European Economic Area, you have additional rights:</p>
            
            <h3 className="text-xl font-medium mb-3">9.1 Legal Basis</h3>
            <p className="mb-2">We process personal data based on:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Consent:</strong> For marketing communications</li>
              <li><strong>Contract:</strong> To provide our Service</li>
              <li><strong>Legitimate Interests:</strong> For business operations and improvement</li>
              <li><strong>Legal Obligation:</strong> To comply with laws</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">9.2 Additional Rights</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Right to object to processing</li>
              <li>Right to restrict processing</li>
              <li>Right to lodge a complaint with supervisory authorities</li>
              <li>Right to withdraw consent</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">9.3 International Transfers</h3>
            <p className="mb-4">
              We transfer data to the US using appropriate safeguards including Standard Contractual Clauses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. CHILDREN'S PRIVACY</h2>
            
            <h3 className="text-xl font-medium mb-3">10.1 Age Requirements</h3>
            <p className="mb-4">FiTracker is not intended for children under 13. Users aged 13-18 require parental consent.</p>

            <h3 className="text-xl font-medium mb-3">10.2 Parental Rights</h3>
            <p className="mb-2">Parents can:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Review their child's information</li>
              <li>Request deletion of their child's data</li>
              <li>Revoke consent for data collection</li>
            </ul>
            <p className="mb-4">Contact privacy@fitracker.ai to exercise parental rights.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. THIRD-PARTY SERVICES</h2>
            
            <h3 className="text-xl font-medium mb-3">11.1 Third-Party Integrations</h3>
            <p className="mb-4">
              When you connect third-party services (Apple Health, Fitbit, etc.), their privacy policies apply to data they 
              collect.
            </p>

            <h3 className="text-xl font-medium mb-3">11.2 Social Features</h3>
            <p className="mb-4">
              Information shared through social features may be visible to other users and subject to their use.
            </p>

            <h3 className="text-xl font-medium mb-3">11.3 External Links</h3>
            <p className="mb-4">Our Service may contain links to external sites. We are not responsible for their privacy practices.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. COOKIES AND TRACKING TECHNOLOGIES</h2>
            
            <h3 className="text-xl font-medium mb-3">12.1 Types of Technologies</h3>
            <p className="mb-2">We use:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Essential Cookies:</strong> For Service functionality</li>
              <li><strong>Analytics Cookies:</strong> To understand usage</li>
              <li><strong>Preference Cookies:</strong> To remember settings</li>
              <li><strong>Marketing Cookies:</strong> For relevant advertising</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">12.2 Managing Cookies</h3>
            <p className="mb-4">
              You can control cookies through browser settings. Disabling cookies may limit Service functionality.
            </p>

            <h3 className="text-xl font-medium mb-3">12.3 Mobile Analytics</h3>
            <p className="mb-4">We use mobile analytics to understand app usage. You can opt-out through device settings.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. INTERNATIONAL DATA TRANSFERS</h2>
            <p className="mb-4">
              FiTracker is based in the United States. By using our Service, you consent to the transfer of your 
              information to the US and other countries where we operate.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. CHANGES TO THIS PRIVACY POLICY</h2>
            <p className="mb-2">We may update this Privacy Policy periodically. We will notify you of material changes by:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Email notification</li>
              <li>In-app notification</li>
              <li>Prominent notice on our website</li>
            </ul>
            <p className="mb-4">
              Your continued use after changes constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">15. DATA BREACH NOTIFICATION</h2>
            <p className="mb-2">
              In the event of a data breach that compromises your personal information, we will:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Notify affected users within 72 hours</li>
              <li>Provide information about the breach</li>
              <li>Offer guidance on protective measures</li>
              <li>Cooperate with regulatory authorities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">16. AI AND AUTOMATED DECISION-MAKING</h2>
            
            <h3 className="text-xl font-medium mb-3">16.1 How AI Uses Your Data</h3>
            <p className="mb-2">Our AI uses your data to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Generate personalized recommendations</li>
              <li>Predict fitness plateaus</li>
              <li>Customize coaching style</li>
              <li>Optimize workout difficulty</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">16.2 Human Oversight</h3>
            <p className="mb-4">Significant decisions affecting your account always involve human review.</p>

            <h3 className="text-xl font-medium mb-3">16.3 AI Data Minimization</h3>
            <p className="mb-4">
              AI processes only necessary data for specific functions and doesn't retain conversation history beyond 
              necessary periods.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">17. HEALTH INFORMATION SPECIAL PROVISIONS</h2>
            
            <h3 className="text-xl font-medium mb-3">17.1 Sensitive Data</h3>
            <p className="mb-2">Health and fitness data is treated as sensitive. We implement additional safeguards including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Enhanced encryption</li>
              <li>Strict access controls</li>
              <li>Regular audits</li>
              <li>Limited retention periods</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">17.2 Not Medical Records</h3>
            <p className="mb-4">
              FiTracker is not a covered entity under HIPAA. Information is not treated as protected health information 
              unless specifically required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">18. CONTACT INFORMATION</h2>
            <p className="mb-2">For privacy-related questions or to exercise your rights, contact us:</p>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 mb-4">
              <p><strong>Privacy Officer</strong></p>
              <p>FiTracker, Inc.</p>
              <p>Email: privacy@fitracker.ai</p>
              <p>Phone: (513) 957-5001</p>
              <p>Address: Cincinnati, OH 45202</p>
              <br />
              <p><strong>Data Protection Officer</strong></p>
              <p>Email: dpo@fitracker.ai</p>
              <br />
              <p><strong>General Support</strong></p>
              <p>Email: support@fitracker.ai</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">19. SPECIFIC STATE PRIVACY RIGHTS</h2>
            
            <h3 className="text-xl font-medium mb-3">19.1 Nevada</h3>
            <p className="mb-4">
              Nevada residents can opt-out of sale of personal information (though we don't sell personal information) 
              by emailing privacy@fitracker.ai.
            </p>

            <h3 className="text-xl font-medium mb-3">19.2 Virginia, Colorado, Connecticut, Utah</h3>
            <p className="mb-4">
              Residents of these states have rights similar to California residents. Contact privacy@fitracker.ai to 
              exercise your rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">20. PRIVACY POLICY ACCEPTANCE</h2>
            <p className="mb-4">
              By using FiTracker, you acknowledge that you have read and understood this Privacy Policy and agree to 
              its terms.
            </p>
          </section>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">YOUR PRIVACY MATTERS</h3>
            <p className="mb-4">
              At FiTracker, we believe your health data is yours. We're committed to transparency, security, and giving 
              you control over your information. If you have any questions or concerns about our privacy practices, 
              please don't hesitate to contact us.
            </p>
            <p className="text-muted-foreground">
              Last Updated: August 8, 2025 | Version: 1.0
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2025 FiTracker, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
