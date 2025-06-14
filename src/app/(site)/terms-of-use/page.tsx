import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Use | aisearchrefs",
  description: "Terms of Use for aisearchrefs platform - Early stage MVP with comprehensive data protection and user responsibilities",
};

const TermsOfUsePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms of Use"
        description="Guidelines and terms for using our early-stage AI search monitoring platform"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="mb-6 text-5xl font-bold leading-tight text-primary font-canela">
                Terms of <span className="text-[#FFD66B]">Use</span>
              </h1>
              
              <p className="text-xl leading-relaxed text-primary/80 font-helvetica">
                These Terms of Use govern your access to and use of aisearchrefs, an early-stage MVP platform for AI search monitoring. Please read these terms carefully.
              </p>
              
              <p className="text-base text-gray-600 font-helvetica mt-4">
                Last updated: January 2025
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Early Stage Notice */}
              <div className="bg-yellow-50 border-l-4 border-[#FFD66B] p-6 rounded-lg">
                <h2 className="mb-4 text-2xl font-bold text-black font-canela">
                  Important: Early Stage MVP Product
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 font-helvetica mb-4">
                  aisearchrefs is currently in early development as a Minimum Viable Product (MVP). While we are committed to providing valuable AI search monitoring services, users should understand that:
                </p>
                <ul className="space-y-2 text-base text-gray-700 font-helvetica">
                  <li>• Features and functionality may change as we develop the platform</li>
                  <li>• Service availability may be limited during development phases</li>
                  <li>• We appreciate your patience and feedback as we improve our services</li>
                  <li>• Users participate in our development journey and help shape the platform</li>
                </ul>
              </div>

              {/* Acceptance of Terms */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  1. Acceptance of Terms
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  By accessing or using aisearchrefs ("the Service"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree to these terms, please discontinue use of our service.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the updated terms.
                </p>
              </div>

              {/* Data Protection & Security */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  2. Data Protection & Security
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  We take data protection seriously and implement comprehensive security measures to protect your information:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Our Security Measures
                    </h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Dedicated encryption services for all data</li>
                      <li>• Secure data transmission protocols</li>
                      <li>• Regular security audits and updates</li>
                      <li>• Access controls and authentication</li>
                      <li>• Compliance with privacy regulations</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Your Data Rights
                    </h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• You retain ownership of your data</li>
                      <li>• Data export capabilities available</li>
                      <li>• Deletion requests honored promptly</li>
                      <li>• Transparent data usage policies</li>
                      <li>• No unauthorized data sharing</li>
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
                  As an early-stage platform, we rely on responsible user behavior to maintain service quality and security. Users are responsible for:
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Account Security</h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Maintaining secure login credentials</li>
                      <li>• Immediately reporting unauthorized access</li>
                      <li>• Using strong passwords and enabling available security features</li>
                      <li>• Not sharing account access with unauthorized parties</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Appropriate Usage</h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Using the service for legitimate business purposes only</li>
                      <li>• Respecting usage limits and platform guidelines</li>
                      <li>• Providing accurate information and feedback</li>
                      <li>• Not attempting to reverse engineer or exploit the platform</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Service Limitations */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  4. Service Limitations & Disclaimers
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  As an early-stage MVP, our service is provided "as is" and "as available." While we strive for excellence, users should understand the following limitations:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="mb-3 text-xl font-bold text-black font-helvetica">Service Availability</h3>
                  <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                    <li>• Service may be interrupted for maintenance, updates, or technical issues</li>
                    <li>• Features may be added, modified, or temporarily unavailable during development</li>
                    <li>• Data accuracy depends on third-party AI search engines and may vary</li>
                    <li>• Response times and performance may fluctuate as we optimize the platform</li>
                  </ul>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  5. Limitation of Liability
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  While we are committed to providing reliable service and protecting your data, users acknowledge the following limitations:
                </p>
                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                  <h3 className="mb-3 text-xl font-bold text-red-800 font-helvetica">Important Limitations</h3>
                  <ul className="space-y-2 text-base text-red-700 font-helvetica">
                    <li>• aisearchrefs is not liable for business decisions made based on platform data</li>
                    <li>• We are not responsible for third-party AI search engine changes or availability</li>
                    <li>• Users are responsible for backing up important data and maintaining their own records</li>
                    <li>• Our liability is limited to the amount paid for services in the preceding 12 months</li>
                    <li>• We are not liable for indirect, consequential, or punitive damages</li>
                  </ul>
                </div>
                <p className="text-base leading-relaxed text-gray-600 font-helvetica mt-4">
                  These limitations are necessary for an early-stage platform and help us continue developing and improving our services for all users.
                </p>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  6. Intellectual Property
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  The aisearchrefs platform, including its technology, design, and content, is protected by intellectual property rights. Users agree to:
                </p>
                <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                  <li>• Respect our intellectual property and not attempt to copy or reverse engineer our technology</li>
                  <li>• Use the service only as intended and not for competitive analysis of our platform</li>
                  <li>• Retain ownership of data they provide while granting us necessary rights to process it</li>
                  <li>• Not redistribute or resell our services without explicit written permission</li>
                </ul>
              </div>

              {/* Termination */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  7. Termination
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  Either party may terminate this agreement at any time. Users may cancel their accounts through account settings or by contacting support.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  We reserve the right to suspend or terminate accounts that violate these terms. Upon termination, users retain access to exported data but lose access to the platform and ongoing services.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  8. Governing Law
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  These terms are governed by applicable laws. Any disputes will be resolved through appropriate legal channels. We encourage users to contact us directly to resolve any concerns before pursuing legal action.
                </p>
              </div>

              {/* Contact Section */}
              <div className="mt-16 p-8 bg-white rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-4 font-canela">
                  Questions About These Terms?
                </h3>
                <p className="text-lg text-gray-600 font-helvetica mb-6">
                  As an early-stage platform, we value clear communication with our users. If you have questions about these terms or need clarification, please reach out to us.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 font-helvetica"
                  >
                    Contact Us
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

export default TermsOfUsePage;