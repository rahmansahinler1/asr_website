import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";

export const metadata: Metadata = {
  title: "Terms of Service | AI Search Refs",
  description: "Read our comprehensive Terms of Service that govern your use of AI Search Refs platform and services",
};

const TermsOfServicePage = () => {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="Terms of Service"
        description="Comprehensive legal terms governing your use of AI Search Refs platform"
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
                These Terms of Service constitute a legal agreement between you and AI Search Refs regarding your use of our platform, services, and website.
              </p>
              
              <p className="text-base text-gray-600 font-helvetica mt-4">
                Effective date: January 2025 | Last updated: January 2025
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Agreement Overview */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  1. Agreement Overview
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  This Agreement governs your access to and use of AI Search Refs, including our website, platform, API, and any related services (collectively, "Services"). By accessing or using our Services, you agree to be bound by these Terms.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  If you are entering into this Agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these terms, in which case "you" refers to such entity.
                </p>
              </div>

              {/* Service Description */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  2. Service Description
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  AI Search Refs provides a comprehensive platform for tracking and monitoring brand visibility in AI search engines. Our services include keyword tracking, brand monitoring, competitor analysis, and performance analytics.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Core Features
                    </h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• AI search keyword tracking</li>
                      <li>• Brand mention monitoring</li>
                      <li>• Competitor analysis tools</li>
                      <li>• Performance dashboards</li>
                      <li>• Custom reports and alerts</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Platform Access
                    </h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Web-based dashboard</li>
                      <li>• API access (select plans)</li>
                      <li>• Mobile-responsive interface</li>
                      <li>• Data export capabilities</li>
                      <li>• Integration tools</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Account Registration */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  3. Account Registration and Security
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  To access certain features of our Services, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black font-helvetica">
                      Account Security
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      You are responsible for safeguarding the password and for all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your account or any other breach of security.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black font-helvetica">
                      Account Eligibility
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into this Agreement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Subscription and Billing */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  4. Subscription Plans and Billing
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  Our Services are offered through various subscription plans with different features and usage limits. Detailed information about plans, features, and pricing is available on our website.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Billing Terms
                    </h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Subscriptions are billed in advance</li>
                      <li>• Payments are non-refundable</li>
                      <li>• Auto-renewal unless cancelled</li>
                      <li>• Price changes with 30-day notice</li>
                      <li>• Late payments may suspend service</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Cancellation Policy
                    </h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Cancel anytime before renewal</li>
                      <li>• Access continues until period end</li>
                      <li>• No refunds for partial periods</li>
                      <li>• Data retention for 30 days</li>
                      <li>• Reactivation available during retention</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Acceptable Use Policy */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  5. Acceptable Use Policy
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  You agree to use our Services only for lawful purposes and in accordance with this Agreement. You agree not to use the Services in any way that could damage, disable, overburden, or impair our systems.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black font-helvetica">
                      Prohibited Activities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                        <li>• Violating any applicable laws</li>
                        <li>• Interfering with service operations</li>
                        <li>• Attempting unauthorized access</li>
                        <li>• Reverse engineering our technology</li>
                      </ul>
                      <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                        <li>• Distributing malware or viruses</li>
                        <li>• Violating intellectual property rights</li>
                        <li>• Creating false or misleading accounts</li>
                        <li>• Reselling services without authorization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  6. Intellectual Property Rights
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  The Services and all materials therein, including software, images, text, graphics, logos, patents, trademarks, service marks, copyrights, and other intellectual property, are owned by or licensed to AI Search Refs.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black font-helvetica">
                      Your Data Rights
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      You retain ownership of any data you provide to our Services. You grant us a limited license to use this data solely to provide our Services to you and as described in our Privacy Policy.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black font-helvetica">
                      Service License
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to access and use our Services for your internal business purposes during your subscription period.
                    </p>
                  </div>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  7. Limitation of Liability
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  To the maximum extent permitted by applicable law, AI Search Refs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
                <div className="p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <p className="text-base text-gray-700 font-helvetica">
                    <strong>Important:</strong> Our total liability to you for any damages arising from or related to this Agreement shall not exceed the amount paid by you to AI Search Refs during the twelve (12) months preceding the claim.
                  </p>
                </div>
              </div>

              {/* Termination */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  8. Termination
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  Either party may terminate this Agreement at any time. We may suspend or terminate your access immediately, without prior notice, for conduct that we believe violates this Agreement or is harmful to other users, us, or third parties.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  Upon termination, your right to use the Services will cease immediately. We may delete your account and all related data, though we may retain certain information as required by law or for legitimate business purposes.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  9. Governing Law and Disputes
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions. Any disputes arising under this Agreement will be subject to the exclusive jurisdiction of the courts in [Jurisdiction].
                </p>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  We encourage resolving disputes through direct communication. If informal resolution is not possible, we may require binding arbitration as specified in our dispute resolution procedures.
                </p>
              </div>

              {/* Contact Section */}
              <div className="mt-16 p-8 bg-white rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-4 font-canela">
                  Legal Questions or Concerns?
                </h3>
                <p className="text-lg text-gray-600 font-helvetica mb-6">
                  If you have questions about these Terms of Service or need legal clarification, our legal team is available to assist you. We're committed to transparency and clear communication.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 font-helvetica"
                  >
                    Contact Legal Team
                  </a>
                  <a 
                    href="/terms-of-use" 
                    className="inline-flex items-center px-6 py-3 bg-[#FFD66B] text-black font-semibold rounded-lg hover:bg-[#FFD66B]/90 transition-colors duration-300 font-helvetica"
                  >
                    View Terms of Use
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