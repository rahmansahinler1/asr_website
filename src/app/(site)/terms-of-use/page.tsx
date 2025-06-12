import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Use | AI Search Refs",
  description: "Read our Terms of Use to understand how to properly use AI Search Refs platform and services",
};

const TermsOfUsePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms of Use"
        description="Guidelines and terms for using AI Search Refs platform and services"
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
                These Terms of Use govern your access to and use of AI Search Refs platform, services, and website. Please read these terms carefully before using our services.
              </p>
              
              <p className="text-base text-gray-600 font-helvetica mt-4">
                Last updated: January 2025
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Acceptance of Terms */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  1. Acceptance of Terms
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  By accessing or using AI Search Refs ("the Service"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our service.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  These terms apply to all users, including visitors, registered users, and premium subscribers. We reserve the right to modify these terms at any time with notice to users.
                </p>
              </div>

              {/* Platform Usage */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  2. Platform Usage
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  AI Search Refs provides AI search tracking and brand monitoring services. You may use our platform to monitor your brand's visibility, track keyword performance, and analyze competitor activity in AI search engines.
                </p>
                <div className="space-y-3">
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                    • Use the service for legitimate business purposes only
                  </p>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                    • Do not attempt to reverse engineer or copy our technology
                  </p>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                    • Respect rate limits and usage quotas for your plan
                  </p>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                    • Do not use the service for any illegal or unauthorized purposes
                  </p>
                </div>
              </div>

              {/* Account Responsibilities */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  3. Account Responsibilities
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  When you create an account with AI Search Refs, you are responsible for maintaining the security of your account and all activities that occur under your account.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Your Responsibilities
                    </h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Keep your login credentials secure</li>
                      <li>• Provide accurate account information</li>
                      <li>• Notify us of unauthorized access</li>
                      <li>• Comply with usage limitations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Our Responsibilities
                    </h3>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Maintain service availability</li>
                      <li>• Protect your account data</li>
                      <li>• Provide customer support</li>
                      <li>• Honor our privacy commitments</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data and Privacy */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  4. Data and Privacy
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  Your privacy is important to us. Our collection and use of your data is governed by our Privacy Policy. By using our service, you consent to the collection and use of information as outlined in our Privacy Policy.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  You retain ownership of any data you provide to our service. We use this data solely to provide you with our AI search tracking and monitoring services.
                </p>
              </div>

              {/* Service Availability */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  5. Service Availability
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  We strive to maintain high service availability, but we cannot guarantee uninterrupted access to our platform. We may temporarily suspend service for maintenance, updates, or technical issues.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  We are not responsible for any damages or losses resulting from service interruptions, though we will make reasonable efforts to minimize downtime and notify users of planned maintenance.
                </p>
              </div>

              {/* Prohibited Uses */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  6. Prohibited Uses
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  You agree not to use AI Search Refs for any prohibited activities, including but not limited to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                    <li>• Violating any applicable laws or regulations</li>
                    <li>• Infringing on intellectual property rights</li>
                    <li>• Transmitting malicious code or content</li>
                    <li>• Attempting to gain unauthorized access</li>
                  </ul>
                  <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                    <li>• Overloading our systems with requests</li>
                    <li>• Reselling our services without permission</li>
                    <li>• Using the service to harm competitors</li>
                    <li>• Violating third-party terms of service</li>
                  </ul>
                </div>
              </div>

              {/* Termination */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  7. Termination
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-4">
                  Either party may terminate this agreement at any time. You may cancel your account through your account settings or by contacting our support team.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  We reserve the right to suspend or terminate accounts that violate these terms of use. Upon termination, your access to the service will be discontinued, though you may retain access to any exported data.
                </p>
              </div>

              {/* Contact Section */}
              <div className="mt-16 p-8 bg-white rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-4 font-canela">
                  Questions About These Terms?
                </h3>
                <p className="text-lg text-gray-600 font-helvetica mb-6">
                  If you have any questions about these Terms of Use, please contact our legal team. We're here to help clarify any aspects of our terms and your rights as a user.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 font-helvetica"
                  >
                    Contact Legal Team
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