import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";

export const metadata: Metadata = {
  title: "Privacy Policy | AI Search Refs",
  description: "Learn how AI Search Refs collects, uses, and protects your personal information and data privacy",
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="Privacy Policy"
        description="Your privacy matters. Learn how we collect, use, and protect your information"
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
                This Privacy Policy describes how AI Search Refs collects, uses, and protects your personal information when you use our platform and services.
              </p>
              
              <p className="text-base text-gray-600 font-helvetica mt-4">
                Effective date: January 2025 | Last updated: January 2025
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Information We Collect */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  1. Information We Collect
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-6">
                  We collect information that you provide directly to us, information we obtain automatically when you use our Services, and information from third-party sources.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Information You Provide
                    </h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Account registration details (name, email, company)</li>
                      <li>• Payment and billing information</li>
                      <li>• Keywords and search terms you track</li>
                      <li>• Customer support communications</li>
                      <li>• Survey responses and feedback</li>
                      <li>• Profile settings and preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Automatically Collected
                    </h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Device and browser information</li>
                      <li>• IP address and location data</li>
                      <li>• Usage patterns and interactions</li>
                      <li>• Performance and error logs</li>
                      <li>• Cookies and tracking technologies</li>
                      <li>• Access times and session duration</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  2. How We Use Your Information
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-6">
                  We use the information we collect to provide, maintain, and improve our Services, process transactions, and communicate with you.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Service Provision
                    </h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Deliver AI search tracking and monitoring services</li>
                      <li>• Generate reports and analytics dashboards</li>
                      <li>• Process keyword tracking requests</li>
                      <li>• Provide customer support and technical assistance</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Account Management
                    </h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Create and maintain your account</li>
                      <li>• Process payments and billing</li>
                      <li>• Send service-related communications</li>
                      <li>• Verify your identity and prevent fraud</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Service Improvement
                    </h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Analyze usage patterns to improve features</li>
                      <li>• Develop new products and services</li>
                      <li>• Conduct research and analytics</li>
                      <li>• Ensure platform security and stability</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Information Sharing */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  3. Information Sharing and Disclosure
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the limited circumstances described below.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black font-helvetica">
                      Service Providers
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      We may share information with trusted third-party service providers who assist us in operating our platform, conducting business, or serving our users. These providers are bound by confidentiality agreements and data protection requirements.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black font-helvetica">
                      Legal Requirements
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      We may disclose your information when required by law, court order, or government request, or when we believe disclosure is necessary to protect our rights, property, or safety, or that of our users or others.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black font-helvetica">
                      Business Transfers
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the acquiring entity, subject to the same privacy protections.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  4. Data Security and Protection
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-6">
                  We implement industry-standard security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Technical Safeguards
                    </h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• SSL/TLS encryption for data transmission</li>
                      <li>• AES-256 encryption for data at rest</li>
                      <li>• Multi-factor authentication options</li>
                      <li>• Regular security audits and assessments</li>
                      <li>• Secure cloud infrastructure</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Operational Safeguards
                    </h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Limited access on need-to-know basis</li>
                      <li>• Employee background checks</li>
                      <li>• Data access logging and monitoring</li>
                      <li>• Incident response procedures</li>
                      <li>• Regular staff security training</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-6 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-base text-gray-700 font-helvetica">
                    <strong>Important:</strong> While we implement robust security measures, no system is completely secure. We cannot guarantee absolute security of your information, but we continuously work to enhance our security practices.
                  </p>
                </div>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  5. Data Retention
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-6">
                  We retain your information for as long as necessary to provide our Services and fulfill the purposes outlined in this Privacy Policy.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black font-helvetica">
                      Account Data
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      We retain your account information and tracking data for the duration of your subscription and for 30 days after cancellation to allow for potential reactivation. After this period, data is securely deleted.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black font-helvetica">
                      Legal and Business Records
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      We may retain certain information for longer periods when required by law, for legal proceedings, or for legitimate business purposes such as fraud prevention and security.
                    </p>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  6. Your Privacy Rights
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-6">
                  Depending on your location and applicable laws, you may have certain rights regarding your personal information.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Access and Control
                    </h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Access your personal information</li>
                      <li>• Update or correct your data</li>
                      <li>• Download your data (data portability)</li>
                      <li>• Delete your account and data</li>
                      <li>• Restrict processing activities</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Communication Preferences
                    </h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Opt out of marketing emails</li>
                      <li>• Manage notification settings</li>
                      <li>• Control cookie preferences</li>
                      <li>• Request information about data use</li>
                      <li>• File complaints with authorities</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cookies and Tracking */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  7. Cookies and Tracking Technologies
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-6">
                  We use cookies and similar technologies to enhance your experience, analyze usage patterns, and improve our Services.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black font-helvetica">
                      Types of Cookies We Use
                    </h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• <strong>Essential cookies:</strong> Required for basic platform functionality</li>
                      <li>• <strong>Performance cookies:</strong> Help us understand how users interact with our platform</li>
                      <li>• <strong>Functional cookies:</strong> Remember your preferences and settings</li>
                      <li>• <strong>Analytics cookies:</strong> Provide insights into platform usage and performance</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black font-helvetica">
                      Managing Cookies
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      You can control cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of our platform.
                    </p>
                  </div>
                </div>
              </div>

              {/* International Transfers */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  8. International Data Transfers
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  AI Search Refs operates globally, and your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for international transfers.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  When transferring data internationally, we use mechanisms such as standard contractual clauses, adequacy decisions, or other legally approved transfer mechanisms to protect your information.
                </p>
              </div>

              {/* Updates to Privacy Policy */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  9. Updates to This Privacy Policy
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  When we make material changes, we will notify you by email or through our platform. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                </p>
              </div>

              {/* Contact Section */}
              <div className="mt-16 p-8 bg-white rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-4 font-canela">
                  Privacy Questions or Concerns?
                </h3>
                <p className="text-lg text-gray-600 font-helvetica mb-6">
                  If you have questions about this Privacy Policy, want to exercise your privacy rights, or have concerns about how we handle your information, please contact our privacy team.
                </p>
                <div className="flex flex-wrap gap-4">
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