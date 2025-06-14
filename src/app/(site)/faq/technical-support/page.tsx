import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technical Support - FAQ | aisearchrefs",
  description: "Learn about technical support options: live chat scheduling, email support, documentation, and dedicated meetings",
};

const TechnicalSupportPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Technical Support"
        description="Getting help and technical support"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                How can I get <span className="text-[#FFD66B]">technical support</span>?
              </h1>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  We provide comprehensive technical support through multiple channels and are available for you all the time. You can get help through live chat scheduling, email support, documentation, or by scheduling a dedicated meeting with our team.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Available Support Channels:
                  </h3>
                  <div className="space-y-6">
                    <div className="p-6 border-2 border-blue-200 rounded-lg bg-blue-50">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-black font-helvetica">Live Chat Support</h4>
                        <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full font-helvetica">Schedule Required</span>
                      </div>
                      <p className="text-base text-gray-600 font-helvetica mb-3">
                        Get real-time assistance through our live chat system. Simply schedule a chat session and connect directly with our technical support team for immediate help with your AI search monitoring questions.
                      </p>
                      <div>
                        <h5 className="font-semibold text-black font-helvetica mb-2">Live Chat Features:</h5>
                        <ul className="space-y-1 text-base text-gray-600 font-helvetica">
                          <li>• Schedule live chat sessions at your convenience</li>
                          <li>• Real-time problem solving and guidance</li>
                          <li>• Screen sharing capabilities for complex issues</li>
                          <li>• Instant answers to technical questions</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-6 border-2 border-green-200 rounded-lg bg-green-50">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-black font-helvetica">Email Support</h4>
                        <span className="text-sm bg-green-600 text-white px-3 py-1 rounded-full font-helvetica">Always Available</span>
                      </div>
                      <p className="text-base text-gray-600 font-helvetica mb-3">
                        Send detailed questions and receive comprehensive support via email. Perfect for complex issues that require detailed explanations or when you need documentation of the support interaction.
                      </p>
                      <div>
                        <h5 className="font-semibold text-black font-helvetica mb-2">Email Support Benefits:</h5>
                        <ul className="space-y-1 text-base text-gray-600 font-helvetica">
                          <li>• Detailed technical explanations and solutions</li>
                          <li>• Written documentation of support interactions</li>
                          <li>• Ability to include screenshots and detailed descriptions</li>
                          <li>• Follow-up support for ongoing issues</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-6 border-2 border-purple-200 rounded-lg bg-purple-50">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-black font-helvetica">Documentation</h4>
                        <span className="text-sm bg-purple-600 text-white px-3 py-1 rounded-full font-helvetica">24/7 Access</span>
                      </div>
                      <p className="text-base text-gray-600 font-helvetica mb-3">
                        Access comprehensive documentation covering all aspects of our AI search monitoring platform. Find step-by-step guides, troubleshooting tips, and detailed explanations of features.
                      </p>
                      <div>
                        <h5 className="font-semibold text-black font-helvetica mb-2">Documentation Includes:</h5>
                        <ul className="space-y-1 text-base text-gray-600 font-helvetica">
                          <li>• Platform setup and configuration guides</li>
                          <li>• Feature explanations and best practices</li>
                          <li>• Troubleshooting and FAQ sections</li>
                          <li>• API documentation and integration guides</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-6 border-2 border-orange-200 rounded-lg bg-orange-50">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-black font-helvetica">Dedicated Meetings</h4>
                        <span className="text-sm bg-orange-600 text-white px-3 py-1 rounded-full font-helvetica">Schedule Anytime</span>
                      </div>
                      <p className="text-base text-gray-600 font-helvetica mb-3">
                        Schedule dedicated one-on-one meetings with our technical support team. Perfect for complex setup requirements, strategic discussions, or when you need personalized guidance for your AI search monitoring implementation.
                      </p>
                      <div>
                        <h5 className="font-semibold text-black font-helvetica mb-2">Dedicated Meeting Benefits:</h5>
                        <ul className="space-y-1 text-base text-gray-600 font-helvetica">
                          <li>• Personalized support tailored to your specific needs</li>
                          <li>• Strategic guidance for AI search monitoring implementation</li>
                          <li>• Complex problem-solving sessions</li>
                          <li>• Platform training and onboarding assistance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    We Are Available All the Time:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    Our commitment is to be available for you whenever you need support. While some channels require scheduling, we ensure that you can always get the help you need when you need it.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-black font-helvetica mb-3">How to Get Support:</h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-black font-helvetica mb-1">For Immediate Help:</h5>
                        <p className="text-base text-gray-700 font-helvetica">Schedule a live chat session or dedicated meeting through your account dashboard or contact us directly.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-black font-helvetica mb-1">For Detailed Questions:</h5>
                        <p className="text-base text-gray-700 font-helvetica">Send us an email with your questions, and we'll provide comprehensive support and documentation.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-black font-helvetica mb-1">For Self-Service:</h5>
                        <p className="text-base text-gray-700 font-helvetica">Access our documentation anytime for step-by-step guides and troubleshooting information.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Support for All Customers:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    All aisearchrefs customers receive priority support regardless of their plan. We believe in providing excellent support to everyone using our AI search monitoring platform.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-3">Starter Plan Customers:</h4>
                      <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                        <li>• Email support</li>
                        <li>• Documentation access</li>
                        <li>• Scheduled live chat</li>
                        <li>• Dedicated meeting scheduling</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-3">Pro Plan Customers:</h4>
                      <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                        <li>• All Starter plan support</li>
                        <li>• Priority scheduling for meetings</li>
                        <li>• Enhanced documentation access</li>
                        <li>• Strategic consultation sessions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Getting Started with Support:
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Step 1: Choose Your Support Channel</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Select the support method that best fits your needs - live chat for immediate help, email for detailed questions, or schedule a dedicated meeting for comprehensive assistance.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Step 2: Schedule or Contact</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Use your account dashboard to schedule live chat or meetings, send an email with your questions, or browse our documentation for immediate answers.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Step 3: Get Expert Help</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Connect with our technical support team who understand both the technical aspects and strategic implications of AI search monitoring.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded">
                  <p className="text-base text-gray-700 font-helvetica">
                    <strong>Always Here for You:</strong> We are available all the time through multiple support channels. Just schedule a dedicated meeting with us whenever you need personalized assistance with your AI search monitoring needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/faq"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 font-helvetica"
              >
                ← Back to FAQ
              </Link>
            </div>

            <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                Related Questions
              </h3>
              <div className="space-y-3">
                <Link
                  href="/faq/keyword-tracking-setup"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → How do I set up keyword tracking?
                </Link>
                <Link
                  href="/faq/pricing-plans"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → What pricing plans do you offer?
                </Link>
                <Link
                  href="/faq/how-do-i-know-this-is-working"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → How do I know this is working?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnicalSupportPage; 