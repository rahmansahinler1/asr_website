import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";

export const metadata: Metadata = {
  title: "Privacy Policy | aisearchrefs",
  description: "Privacy Policy for aisearchrefs platform - Early stage MVP with enterprise-level data protection and comprehensive privacy measures",
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="Privacy Policy"
        description="Comprehensive privacy protection for our early-stage AI search monitoring platform"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="mb-6 text-5xl font-bold leading-tight text-primary font-canela">
                Privacy <span className="text-[#FFD66B]">Policy</span>
              </h1>
              
              <p className="text-xl leading-relaxed text-primary/80 font-helvetica">
                Your privacy is fundamental to our mission. Despite being an early-stage MVP, we implement enterprise-level data protection to safeguard your information.
              </p>
              
              <p className="text-base text-gray-600 font-helvetica mt-4">
                Last updated: January 2025
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Privacy Commitment */}
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
                <h2 className="mb-4 text-2xl font-bold text-green-800 font-canela">
                  Our Privacy Commitment
                </h2>
                <p className="text-lg leading-relaxed text-green-700 font-helvetica mb-4">
                  As an early-stage MVP, we understand that trust is earned through action, not promises. We have implemented comprehensive data protection measures that exceed industry standards:
                </p>
                <ul className="space-y-2 text-base text-green-700 font-helvetica">
                  <li>• Dedicated encryption services protect all your data</li>
                  <li>• We collect only the minimum data necessary to provide our services</li>
                  <li>• Your data is never sold, shared, or used for advertising</li>
                  <li>• You maintain complete control over your information</li>
                  <li>• Transparent practices with no hidden data collection</li>
                </ul>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  1. Information We Collect
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  We collect only the information necessary to provide our AI search monitoring services effectively:
                </p>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Account Information</h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Email address (for account access and communication)</li>
                      <li>• Password (encrypted and never stored in plain text)</li>
                      <li>• Company name and basic profile information (optional)</li>
                      <li>• Billing information (processed securely through payment providers)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Service Data</h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Keywords and search terms you want to monitor</li>
                      <li>• Brand names and competitor information you specify</li>
                      <li>• Search results and AI platform responses (for analysis)</li>
                      <li>• Usage patterns and platform interactions (for service improvement)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Technical Information</h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• IP address and general location (for security and service delivery)</li>
                      <li>• Browser type and device information (for compatibility)</li>
                      <li>• Log files and error reports (for troubleshooting and improvement)</li>
                      <li>• Cookies and session data (essential for platform functionality)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  2. How We Use Your Information
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  We use your information exclusively to provide and improve our AI search monitoring services:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Service Delivery</h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Monitor AI search platforms for your specified keywords</li>
                      <li>• Generate reports and analytics dashboards</li>
                      <li>• Provide competitor analysis and benchmarking</li>
                      <li>• Send alerts and notifications about changes</li>
                      <li>• Enable data export and integration features</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Platform Improvement</h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Analyze usage patterns to improve user experience</li>
                      <li>• Identify and fix technical issues</li>
                      <li>• Develop new features based on user needs</li>
                      <li>• Optimize platform performance and reliability</li>
                      <li>• Enhance security measures and threat detection</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Protection & Security */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  3. Data Protection & Security
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  We implement enterprise-level security measures to protect your data, despite being an early-stage platform:
                </p>
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <h3 className="mb-3 text-xl font-bold text-blue-800 font-helvetica">
                    Our Security Infrastructure
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="mb-2 text-lg font-bold text-blue-700 font-helvetica">Encryption & Storage</h4>
                      <ul className="space-y-2 text-base text-blue-700 font-helvetica">
                        <li>• Dedicated encryption services for all data</li>
                        <li>• End-to-end encryption for data transmission</li>
                        <li>• Encrypted database storage with secure keys</li>
                        <li>• Regular encryption key rotation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-bold text-blue-700 font-helvetica">Access & Monitoring</h4>
                      <ul className="space-y-2 text-base text-blue-700 font-helvetica">
                        <li>• Multi-factor authentication requirements</li>
                        <li>• Limited access policies for team members</li>
                        <li>• Continuous security monitoring and alerts</li>
                        <li>• Regular security audits and assessments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Sharing & Third Parties */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  4. Data Sharing & Third Parties
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  We do not sell, rent, or share your personal information with third parties for marketing purposes. Limited sharing occurs only in these specific circumstances:
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Service Providers</h3>
                    <p className="text-base text-gray-600 font-helvetica mb-3">
                      We work with trusted service providers who help us deliver our services:
                    </p>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Payment processors (for billing and subscription management)</li>
                      <li>• Cloud infrastructure providers (for secure hosting and storage)</li>
                      <li>• Email service providers (for account notifications and support)</li>
                      <li>• Analytics providers (for platform performance monitoring)</li>
                    </ul>
                    <p className="text-sm text-gray-500 font-helvetica mt-3">
                      All service providers are bound by strict data protection agreements and can only use your data to provide services to us.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Legal Requirements</h3>
                    <p className="text-base text-gray-600 font-helvetica mb-3">
                      We may disclose information when required by law or to protect our rights:
                    </p>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• In response to valid legal requests or court orders</li>
                      <li>• To protect against fraud or security threats</li>
                      <li>• To enforce our terms of service or protect user safety</li>
                      <li>• In connection with business transfers (with user notification)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Your Privacy Rights */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  5. Your Privacy Rights
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  You have comprehensive control over your personal information and how we use it:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Data Access & Control</h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Access all personal data we have about you</li>
                      <li>• Update or correct your account information</li>
                      <li>• Export your data in standard formats</li>
                      <li>• Delete your account and associated data</li>
                      <li>• Opt out of non-essential communications</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Privacy Preferences</h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Control what data is collected and processed</li>
                      <li>• Manage notification and communication preferences</li>
                      <li>• Request restrictions on data processing</li>
                      <li>• Object to automated decision-making</li>
                      <li>• Withdraw consent for optional data uses</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-base text-yellow-800 font-helvetica">
                    <strong>Easy Access:</strong> Most privacy controls are available directly in your account settings. For additional requests, contact our support team and we'll respond within 48 hours.
                  </p>
                </div>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  6. Data Retention
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  We retain your data only as long as necessary to provide our services and comply with legal obligations:
                </p>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Retention Periods</h3>
                  <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                    <li>• Account information: Retained while your account is active</li>
                    <li>• Service data: Retained for the duration of your subscription plus 30 days</li>
                    <li>• Billing information: Retained for 7 years for tax and legal compliance</li>
                    <li>• Technical logs: Automatically deleted after 90 days</li>
                    <li>• Support communications: Retained for 2 years for service improvement</li>
                  </ul>
                  <p className="text-sm text-gray-500 font-helvetica mt-4">
                    When you delete your account, we immediately begin the data deletion process. Some information may be retained in encrypted backups for up to 30 days before permanent deletion.
                  </p>
                </div>
              </div>

              {/* International Data Transfers */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  7. International Data Transfers
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  As a global service, your data may be processed in different countries. We ensure appropriate protections are in place:
                </p>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Transfer Safeguards</h3>
                  <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                    <li>• All international transfers use standard contractual clauses</li>
                    <li>• Data is encrypted during transmission and storage</li>
                    <li>• We work only with providers that meet international privacy standards</li>
                    <li>• Regular assessments ensure ongoing protection adequacy</li>
                    <li>• Users can request information about where their data is processed</li>
                  </ul>
                </div>
              </div>

              {/* Cookies & Tracking */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  8. Cookies & Tracking
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  We use cookies and similar technologies to provide and improve our services:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Essential Cookies</h3>
                    <p className="text-base text-gray-600 font-helvetica mb-3">
                      Required for platform functionality:
                    </p>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Authentication and session management</li>
                      <li>• Security and fraud prevention</li>
                      <li>• Platform preferences and settings</li>
                      <li>• Load balancing and performance</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Analytics Cookies</h3>
                    <p className="text-base text-gray-600 font-helvetica mb-3">
                      Help us improve our services (optional):
                    </p>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Usage patterns and feature adoption</li>
                      <li>• Performance monitoring and optimization</li>
                      <li>• Error tracking and debugging</li>
                      <li>• User experience improvements</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base text-gray-600 font-helvetica mt-4">
                  You can control cookie preferences through your browser settings or our cookie management tools in your account.
                </p>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  9. Children's Privacy
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  Our services are designed for business use and are not intended for children under 18. We do not knowingly collect personal information from children.
                </p>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-base text-gray-600 font-helvetica">
                    If we become aware that we have collected personal information from a child under 18, we will take immediate steps to delete that information. Parents or guardians who believe their child has provided us with personal information should contact us immediately.
                  </p>
                </div>
              </div>

              {/* Changes to Privacy Policy */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  10. Changes to This Privacy Policy
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  As we develop our platform, we may need to update this privacy policy. We are committed to transparency in any changes:
                </p>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Our Update Process</h3>
                  <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                    <li>• We will notify users of significant changes via email</li>
                    <li>• Updated policies will be posted on our website with revision dates</li>
                    <li>• Users will have time to review changes before they take effect</li>
                    <li>• We welcome feedback and questions about policy updates</li>
                    <li>• Users who disagree with changes may cancel their service</li>
                  </ul>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-16 p-8 bg-white rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-4 font-canela">
                  Privacy Questions or Concerns?
                </h3>
                <p className="text-lg text-gray-600 font-helvetica mb-6">
                  We take your privacy seriously and are here to address any questions or concerns. Our team is committed to transparency and will respond to privacy inquiries within 48 hours.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="mb-2 text-lg font-bold text-black font-helvetica">Contact Methods</h4>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Email: privacy@aisearchrefs.com</li>
                      <li>• Support chat through your account</li>
                      <li>• Contact form on our website</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-bold text-black font-helvetica">What to Include</h4>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Your account email address</li>
                      <li>• Specific privacy concern or request</li>
                      <li>• Any relevant details or context</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-6">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 font-helvetica"
                  >
                    Contact Privacy Team
                  </a>
                  <a 
                    href="/terms" 
                    className="inline-flex items-center px-6 py-3 bg-[#FFD66B] text-black font-semibold rounded-lg hover:bg-[#FFD66B]/90 transition-colors duration-300 font-helvetica"
                  >
                    View Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;