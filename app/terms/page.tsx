import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - FiTracker',
  description: 'FiTracker Terms of Service - Read our terms and conditions for using the FiTracker fitness tracking platform.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-center">FiTracker Terms of Service</h1>
          
          <div className="text-center mb-8 text-muted-foreground">
            <p><strong>Effective Date:</strong> August 8, 2025</p>
            <p><strong>Last Updated:</strong> August 8, 2025</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. ACCEPTANCE OF TERMS</h2>
            <p className="mb-4">
              Welcome to FiTracker ("we," "our," or "us"). By accessing or using the FiTracker mobile application, 
              website, and related services (collectively, the "Service"), you agree to be bound by these Terms of Service 
              ("Terms"). If you do not agree to these Terms, do not use our Service.
            </p>
            <p className="mb-4">
              FiTracker, Inc. is a Delaware corporation with principal offices in Cincinnati, Ohio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. DESCRIPTION OF SERVICE</h2>
            <p className="mb-4">FiTracker provides an AI-powered fitness and nutrition tracking platform that includes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Personalized AI coaching and recommendations</li>
              <li>Nutrition and meal tracking</li>
              <li>Workout planning and tracking</li>
              <li>Social features and challenges</li>
              <li>Progress analytics and insights</li>
              <li>Integration with third-party devices and services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. ACCOUNT REGISTRATION</h2>
            
            <h3 className="text-xl font-medium mb-3">3.1 Eligibility</h3>
            <p className="mb-4">
              You must be at least 13 years old to use FiTracker. Users between 13-18 must have parental consent. By 
              registering, you represent that you meet these requirements.
            </p>

            <h3 className="text-xl font-medium mb-3">3.2 Account Security</h3>
            <p className="mb-2">You are responsible for:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Maintaining the confidentiality of your login credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">3.3 Account Accuracy</h3>
            <p className="mb-4">
              You agree to provide accurate, current, and complete information during registration and to update such 
              information to keep it accurate, current, and complete.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. SUBSCRIPTION AND PAYMENT TERMS</h2>
            
            <h3 className="text-xl font-medium mb-3">4.1 Free Tier</h3>
            <p className="mb-2">FiTracker offers a free tier with limited features, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Basic tracking functionality</li>
              <li>Limited AI interactions (3 per day)</li>
              <li>Community access</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">4.2 Premium Subscriptions</h3>
            <p className="mb-2">Premium subscriptions are available at the following rates:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Premium Plan: $9.99/month or $99.99/year</li>
              <li>Pro Plan: $19.99/month or $199.99/year</li>
            </ul>
            <p className="mb-4">Prices are in US dollars and subject to change with 30 days notice.</p>

            <h3 className="text-xl font-medium mb-3">4.3 Billing</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Subscriptions automatically renew unless cancelled</li>
              <li>Payment is charged to your selected payment method</li>
              <li>No refunds for partial months/years</li>
              <li>You may cancel anytime through account settings</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">4.4 Free Trials</h3>
            <p className="mb-4">
              We may offer free trials. At trial end, you'll be automatically charged unless you cancel before the trial 
              period expires.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. USER CONTENT</h2>
            
            <h3 className="text-xl font-medium mb-3">5.1 Your Content</h3>
            <p className="mb-4">
              You retain ownership of content you post ("User Content"). By posting, you grant FiTracker a worldwide, 
              non-exclusive, royalty-free license to use, reproduce, modify, and display your User Content for Service 
              operation and improvement.
            </p>

            <h3 className="text-xl font-medium mb-3">5.2 Content Standards</h3>
            <p className="mb-2">You agree not to post content that:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Violates any laws or regulations</li>
              <li>Infringes intellectual property rights</li>
              <li>Contains harmful, offensive, or discriminatory material</li>
              <li>Promotes dangerous fitness or nutrition practices</li>
              <li>Contains malware or spam</li>
              <li>Impersonates others</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">5.3 Content Removal</h3>
            <p className="mb-4">
              We reserve the right to remove any User Content that violates these Terms or is otherwise objectionable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. AI SERVICES AND HEALTH DISCLAIMER</h2>
            
            <h3 className="text-xl font-medium mb-3">6.1 AI Coaching Nature</h3>
            <p className="mb-4">
              FiTracker's AI coaching is for informational and motivational purposes only. It is not a substitute for 
              professional medical advice, diagnosis, or treatment.
            </p>

            <h3 className="text-xl font-medium mb-3">6.2 Medical Disclaimer</h3>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
              <p className="font-semibold mb-2">IMPORTANT:</p>
              <ul className="list-disc pl-6">
                <li>Always consult qualified healthcare providers before starting any fitness or nutrition program</li>
                <li>Never disregard professional medical advice because of something you read on FiTracker</li>
                <li>If you have a medical emergency, call your doctor or emergency services immediately</li>
              </ul>
            </div>

            <h3 className="text-xl font-medium mb-3">6.3 Fitness Risks</h3>
            <p className="mb-4">
              You acknowledge that physical exercise carries inherent risks. You voluntarily assume all risks associated 
              with following any fitness recommendations provided through the Service.
            </p>

            <h3 className="text-xl font-medium mb-3">6.4 Nutrition Information</h3>
            <p className="mb-4">
              Nutritional information is estimated and may not be accurate. Users with food allergies or dietary 
              restrictions should verify all information independently.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. INTELLECTUAL PROPERTY</h2>
            
            <h3 className="text-xl font-medium mb-3">7.1 FiTracker Property</h3>
            <p className="mb-4">
              The Service, including all content, features, and functionality, is owned by FiTracker and protected by 
              copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-medium mb-3">7.2 Limited License</h3>
            <p className="mb-4">
              We grant you a limited, non-exclusive, non-transferable license to access and use the Service for personal, 
              non-commercial purposes.
            </p>

            <h3 className="text-xl font-medium mb-3">7.3 Restrictions</h3>
            <p className="mb-2">You may not:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Copy, modify, or distribute our Service</li>
              <li>Reverse engineer or attempt to extract source code</li>
              <li>Use our trademarks without permission</li>
              <li>Scrape or data mine our Service</li>
              <li>Create derivative works</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. PRIVACY AND DATA USE</h2>
            
            <h3 className="text-xl font-medium mb-3">8.1 Privacy Policy</h3>
            <p className="mb-4">
              Your use of the Service is subject to our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>, which is incorporated by reference into these Terms.
            </p>

            <h3 className="text-xl font-medium mb-3">8.2 Data Processing</h3>
            <p className="mb-4">
              By using FiTracker, you consent to the collection, processing, and use of your data as described in our 
              Privacy Policy.
            </p>

            <h3 className="text-xl font-medium mb-3">8.3 Health Data</h3>
            <p className="mb-4">
              You acknowledge that fitness and nutrition data may be sensitive. We implement appropriate safeguards 
              but cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. THIRD-PARTY SERVICES</h2>
            
            <h3 className="text-xl font-medium mb-3">9.1 Integrations</h3>
            <p className="mb-4">
              FiTracker may integrate with third-party services (e.g., Apple Health, Google Fit, Fitbit). These integrations 
              are subject to third-party terms and policies.
            </p>

            <h3 className="text-xl font-medium mb-3">9.2 Third-Party Links</h3>
            <p className="mb-4">
              Our Service may contain links to third-party websites. We are not responsible for third-party content or 
              practices.
            </p>

            <h3 className="text-xl font-medium mb-3">9.3 In-App Purchases</h3>
            <p className="mb-4">
              In-app purchases are processed through app store providers (Apple, Google) and subject to their terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. PROHIBITED USES</h2>
            <p className="mb-2">You agree not to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Use the Service for any illegal purpose</li>
              <li>Violate any laws in your jurisdiction</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Create multiple accounts to abuse free trials</li>
              <li>Use automated systems to access the Service</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Attempt to gain unauthorized access</li>
              <li>Share accounts or login credentials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. TERMINATION</h2>
            
            <h3 className="text-xl font-medium mb-3">11.1 By You</h3>
            <p className="mb-4">
              You may terminate your account at any time through account settings or by contacting 
              support@fitracker.ai.
            </p>

            <h3 className="text-xl font-medium mb-3">11.2 By Us</h3>
            <p className="mb-4">
              We may terminate or suspend your account immediately, without prior notice, if you breach these Terms 
              or for any other reason at our sole discretion.
            </p>

            <h3 className="text-xl font-medium mb-3">11.3 Effect of Termination</h3>
            <p className="mb-2">Upon termination:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your right to use the Service ceases immediately</li>
              <li>We may delete your data after 30 days</li>
              <li>Paid subscriptions are non-refundable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. DISCLAIMERS</h2>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
              <p className="mb-4">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS 
                OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>MERCHANTABILITY</li>
                <li>FITNESS FOR A PARTICULAR PURPOSE</li>
                <li>NON-INFRINGEMENT</li>
                <li>ACCURACY OR RELIABILITY OF INFORMATION</li>
              </ul>
              <p className="mb-2">WE DO NOT WARRANT THAT:</p>
              <ul className="list-disc pl-6">
                <li>The Service will be uninterrupted or error-free</li>
                <li>Defects will be corrected</li>
                <li>The Service is free of viruses or harmful components</li>
                <li>Results from using the Service will meet your expectations</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. LIMITATION OF LIABILITY</h2>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
              <p className="mb-2">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
              <ul className="list-disc pl-6">
                <li>FiTracker shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Our total liability shall not exceed the amount you paid us in the past 12 months</li>
                <li>We are not liable for any health issues, injuries, or damages resulting from Service use</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. INDEMNIFICATION</h2>
            <p className="mb-2">
              You agree to indemnify, defend, and hold harmless FiTracker, its officers, directors, employees, and agents 
              from any claims, damages, losses, or expenses (including attorney fees) arising from:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Your User Content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">15. DISPUTE RESOLUTION</h2>
            
            <h3 className="text-xl font-medium mb-3">15.1 Arbitration</h3>
            <p className="mb-4">
              Any disputes shall be resolved through binding arbitration under the American Arbitration Association 
              rules, not through court proceedings.
            </p>

            <h3 className="text-xl font-medium mb-3">15.2 Class Action Waiver</h3>
            <p className="mb-4">
              You waive any right to bring claims on a class, consolidated, or representative basis.
            </p>

            <h3 className="text-xl font-medium mb-3">15.3 Governing Law</h3>
            <p className="mb-4">
              These Terms are governed by Delaware law, without regard to conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">16. INTERNATIONAL USE</h2>
            <p className="mb-4">
              FiTracker is based in the United States. If you access the Service from other regions, you are responsible 
              for compliance with local laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">17. MODIFICATIONS TO TERMS</h2>
            <p className="mb-4">
              We may modify these Terms at any time. We will notify you of material changes via email or in-app 
              notification. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">18. CHILDREN'S PRIVACY</h2>
            <p className="mb-4">
              Users under 13 require parental consent. We do not knowingly collect information from children under 13 
              without such consent. Parents may contact us to review or delete their child's information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">19. ACCESSIBILITY</h2>
            <p className="mb-4">
              We strive to make FiTracker accessible to all users. If you experience accessibility issues, please contact 
              support@fitracker.ai.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">20. GENERAL PROVISIONS</h2>
            
            <h3 className="text-xl font-medium mb-3">20.1 Entire Agreement</h3>
            <p className="mb-4">These Terms constitute the entire agreement between you and FiTracker.</p>

            <h3 className="text-xl font-medium mb-3">20.2 Severability</h3>
            <p className="mb-4">If any provision is found unenforceable, the remaining provisions continue in effect.</p>

            <h3 className="text-xl font-medium mb-3">20.3 Waiver</h3>
            <p className="mb-4">Our failure to enforce any right or provision is not a waiver of that right or provision.</p>

            <h3 className="text-xl font-medium mb-3">20.4 Assignment</h3>
            <p className="mb-4">
              You may not assign these Terms without our consent. We may assign our rights to any successor or 
              acquirer.
            </p>

            <h3 className="text-xl font-medium mb-3">20.5 Force Majeure</h3>
            <p className="mb-4">We are not liable for failures due to circumstances beyond our reasonable control.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">21. CONTACT INFORMATION</h2>
            <p className="mb-2">For questions about these Terms, contact us at:</p>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 mb-4">
              <p><strong>FiTracker, Inc.</strong></p>
              <p>Email: legal@fitracker.ai</p>
              <p>Phone: (513) 957-5001</p>
              <p>Address: Cincinnati, OH 45202</p>
              <p>For support issues: support@fitracker.ai</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">22. SPECIAL PROVISIONS FOR APP STORE</h2>
            
            <h3 className="text-xl font-medium mb-3">22.1 Apple App Store</h3>
            <p className="mb-2">Additional terms apply when downloading from Apple App Store:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Apple has no obligation to provide maintenance or support</li>
              <li>Apple is not responsible for product claims or legal compliance</li>
              <li>Apple is a third-party beneficiary with rights to enforce these Terms</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">22.2 Google Play Store</h3>
            <p className="mb-4">
              Additional terms apply when downloading from Google Play Store as specified in Google Play Terms of 
              Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">23. BETA FEATURES</h2>
            <p className="mb-4">
              We may offer beta features. Beta features are provided "as is" without warranties and may be 
              discontinued at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">24. COPYRIGHT POLICY</h2>
            <p className="mb-2">We respect intellectual property rights. To report copyright infringement, contact legal@fitracker.ai with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Description of copyrighted work</li>
              <li>Description of infringing material</li>
              <li>Your contact information</li>
              <li>Statement of good faith belief</li>
              <li>Statement of accuracy under penalty of perjury</li>
              <li>Your signature</li>
            </ul>
          </section>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
            <p className="text-lg font-semibold mb-2">
              BY USING FITRACKER, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE 
              TO BE BOUND BY THESE TERMS OF SERVICE.
            </p>
            <p className="text-muted-foreground">
              Last Updated: August 8, 2025 | Version 1.0
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
