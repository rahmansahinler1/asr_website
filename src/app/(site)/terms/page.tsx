import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Service | aisearchrefs",
  description: "Terms of Service for aisearchrefs platform - Early stage MVP with comprehensive data protection and service agreements",
};

const TermsOfServicePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms of Service"
        description="Service agreements and terms for our early-stage AI search monitoring platform"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="mb-6 text-5xl font-bold leading-tight text-primary font-canela">
                Terms of <span className="text-[#FFD66B]">Service</span>
              </h1>
              
              <p className="text-xl leading-relaxed text-primary/80 font-helvetica">
                These Terms of Service outline our service commitments, your rights as a user, and our mutual responsibilities as we develop aisearchrefs together.
              </p>
              
              <p className="text-base text-gray-600 font-helvetica mt-4">
                Last updated: January 2025
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* MVP Status Notice */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                <h2 className="mb-4 text-2xl font-bold text-blue-800 font-canela">
                  Early Stage MVP Service
                </h2>
                <p className="text-lg leading-relaxed text-blue-700 font-helvetica mb-4">
                  aisearchrefs is currently an early-stage Minimum Viable Product (MVP). This means:
                </p>
                <ul className="space-y-2 text-base text-blue-700 font-helvetica">
                  <li>• We are actively developing and improving our services based on user feedback</li>
                  <li>• Service features and capabilities will evolve as we grow</li>
                  <li>• We prioritize user data protection and service reliability above all else</li>
                  <li>• Your participation helps us build a better platform for everyone</li>
                </ul>
              </div>

              {/* Service Description */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  1. Our Services
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  aisearchrefs provides AI search monitoring and brand visibility tracking services. We help businesses understand their presence across AI-powered search platforms.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      What We Provide
                    </h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• AI search visibility monitoring</li>
                      <li>• Brand mention tracking across AI platforms</li>
                      <li>• Competitor analysis and benchmarking</li>
                      <li>• Performance analytics and reporting</li>
                      <li>• Data export and integration capabilities</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Service Commitment
                    </h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Dedicated encryption for all user data</li>
                      <li>• Regular service updates and improvements</li>
                      <li>• Responsive customer support</li>
                      <li>• Transparent communication about changes</li>
                      <li>• Commitment to user privacy and security</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Protection Commitment */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  2. Data Protection & Security
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  Despite being an early-stage platform, we take data protection extremely seriously and have implemented enterprise-level security measures:
                </p>
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h3 className="mb-3 text-xl font-bold text-green-800 font-helvetica">
                    Our Security Infrastructure
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-base text-green-700 font-helvetica">
                      <li>• End-to-end encryption for all data transmission</li>
                      <li>• Dedicated encryption services for data storage</li>
                      <li>• Regular security audits and vulnerability assessments</li>
                      <li>• Multi-factor authentication and access controls</li>
                    </ul>
                    <ul className="space-y-2 text-base text-green-700 font-helvetica">
                      <li>• Compliance with international privacy regulations</li>
                      <li>• Secure backup and disaster recovery procedures</li>
                      <li>• Limited access policies for internal team members</li>
                      <li>• Continuous monitoring for security threats</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* User Responsibilities */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  3. User Responsibilities
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  As we build this platform together, we ask users to take responsibility for their account security and appropriate usage:
                </p>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Account Security</h3>
                    <p className="text-base text-gray-600 font-helvetica mb-3">
                      Users are responsible for maintaining the security of their accounts and should:
                    </p>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Use strong, unique passwords and enable available security features</li>
                      <li>• Immediately report any suspected unauthorized access</li>
                      <li>• Keep account information accurate and up-to-date</li>
                      <li>• Not share account credentials with unauthorized parties</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Appropriate Usage</h3>
                    <p className="text-base text-gray-600 font-helvetica mb-3">
                      Users agree to use our services responsibly and should:
                    </p>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Use the service for legitimate business purposes only</li>
                      <li>• Respect usage limits and platform guidelines</li>
                      <li>• Provide constructive feedback to help us improve</li>
                      <li>• Not attempt to reverse engineer or exploit our platform</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Service Availability */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  4. Service Availability & Performance
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  We are committed to providing reliable service while acknowledging the realities of operating an early-stage platform:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Our Commitments</h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Strive for maximum uptime and reliability</li>
                      <li>• Provide advance notice of planned maintenance</li>
                      <li>• Respond quickly to service issues</li>
                      <li>• Continuously improve platform performance</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Service Realities</h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Occasional downtime for updates and improvements</li>
                      <li>• Performance variations as we optimize systems</li>
                      <li>• Feature changes based on user feedback</li>
                      <li>• Dependency on third-party AI search platforms</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  5. Limitation of Liability
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  While we are committed to providing excellent service and protecting your data, users acknowledge these important limitations:
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg">
                  <h3 className="mb-3 text-xl font-bold text-orange-800 font-helvetica">Service Limitations</h3>
                  <ul className="space-y-2 text-base text-orange-700 font-helvetica">
                    <li>• aisearchrefs provides monitoring and analytics services only - we are not responsible for business decisions made based on our data</li>
                    <li>• We cannot guarantee the accuracy of third-party AI search engine results or their availability</li>
                    <li>• Users are responsible for maintaining their own data backups and business continuity plans</li>
                    <li>• Our total liability is limited to the amount paid for services in the preceding 12 months</li>
                    <li>• We are not liable for indirect, consequential, or punitive damages arising from service use</li>
                    <li>• Service interruptions, while minimized, may occur during our development and improvement process</li>
                  </ul>
                </div>
                <p className="text-base leading-relaxed text-gray-600 font-helvetica mt-4">
                  These limitations allow us to provide affordable, innovative services while continuing to develop and improve our platform for all users.
                </p>
              </div>

              {/* Payment Terms */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  6. Payment Terms
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  Our payment terms are designed to be fair and transparent for our early-stage service:
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Billing & Payments</h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Monthly or annual billing cycles available</li>
                      <li>• Payments processed securely through trusted payment providers</li>
                      <li>• Automatic renewal unless cancelled by user</li>
                      <li>• Pro-rated billing for plan upgrades</li>
                      <li>• 2-week money-back guarantee for new subscribers</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Cancellation & Refunds</h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Cancel anytime through account settings or by contacting support</li>
                      <li>• No cancellation fees or penalties</li>
                      <li>• Refunds processed within 5-7 business days</li>
                      <li>• Access continues until end of current billing period</li>
                      <li>• Data export available before account closure</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  7. Intellectual Property
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  We respect intellectual property rights and expect our users to do the same:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Our Rights</h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• aisearchrefs platform and technology are our intellectual property</li>
                      <li>• Users may not copy, reverse engineer, or redistribute our services</li>
                      <li>• Our brand, logos, and content are protected by trademark and copyright</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Your Rights</h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• You retain ownership of all data you provide to our service</li>
                      <li>• You grant us necessary rights to process your data for service delivery</li>
                      <li>• You can export your data at any time</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Changes to Service */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  8. Changes to Service & Terms
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  As an evolving platform, we may need to make changes to our service and terms:
                </p>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Our Commitment to Transparency</h3>
                  <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                    <li>• We will provide reasonable notice of significant service changes</li>
                    <li>• Terms of Service updates will be communicated to all users</li>
                    <li>• Major changes will include explanation of benefits to users</li>
                    <li>• Users who disagree with changes may cancel their service</li>
                    <li>• We welcome feedback on proposed changes</li>
                  </ul>
                </div>
              </div>

              {/* Termination */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  9. Termination
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  Either party may terminate this service agreement at any time:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">User Termination</h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Cancel anytime through account settings</li>
                      <li>• Contact support for assistance with cancellation</li>
                      <li>• Export data before account closure</li>
                      <li>• No penalties for early termination</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Service Termination</h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• We may terminate accounts that violate terms</li>
                      <li>• Advance notice provided when possible</li>
                      <li>• Data export opportunity before closure</li>
                      <li>• Refunds processed for unused service periods</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-16 p-8 bg-white rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-4 font-canela">
                  Questions About Our Service Terms?
                </h3>
                <p className="text-lg text-gray-600 font-helvetica mb-6">
                  We believe in transparent communication about our service commitments. If you have questions about these terms or need clarification about our services, please contact us.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 font-helvetica"
                  >
                    Contact Support
                  </a>
                  <a 
                    href="/privacy" 
                    className="inline-flex items-center px-6 py-3 bg-[#FFD66B] text-black font-semibold rounded-lg hover:bg-[#FFD66B]/90 transition-colors duration-300 font-helvetica"
                  >
                    View Privacy Policy
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

export default TermsOfServicePage;