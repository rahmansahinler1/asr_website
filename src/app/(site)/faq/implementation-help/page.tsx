import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Implementation Assistance - FAQ | aisearchrefs",
  description: "Learn about our onboarding system with training content and additional assistance when needed",
};

const ImplementationHelpPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Implementation Assistance"
        description="Onboarding system and additional support when needed"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Question */}
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                Do you provide <span className="text-[#FFD66B]">implementation assistance</span>?
              </h1>
            </div>

            {/* Answer */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  We have a good onboarding system that can train you with comprehensive training content including videos and documentation. If you need any additional assistance beyond our training materials, we can provide that to you anytime.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Our Onboarding System:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    We've built a comprehensive onboarding system designed to get you up and running with AI search monitoring efficiently. Our training content covers everything you need to know to use the platform effectively.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Training Videos</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Step-by-step video tutorials that walk you through platform setup, feature usage, and best practices for AI search monitoring.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Comprehensive Documentation</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Detailed written guides covering all aspects of the platform, from initial setup to advanced features and troubleshooting.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Self-Paced Learning</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Learn at your own pace with our structured training content that you can access anytime and revisit as needed.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Training Content Includes:
                  </h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-black font-helvetica mb-3">Video Tutorials:</h4>
                        <ul className="space-y-2 text-base text-gray-700 font-helvetica">
                          <li>• Platform overview and navigation</li>
                          <li>• Setting up keyword tracking</li>
                          <li>• Understanding the dashboard</li>
                          <li>• Competitor analysis features</li>
                          <li>• Data export and reporting</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black font-helvetica mb-3">Documentation:</h4>
                        <ul className="space-y-2 text-base text-gray-700 font-helvetica">
                          <li>• Getting started guides</li>
                          <li>• Feature explanations</li>
                          <li>• Best practices and tips</li>
                          <li>• Troubleshooting guides</li>
                          <li>• FAQ and common questions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Additional Assistance When Needed:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    While our onboarding system and training content are designed to be comprehensive and self-sufficient, we understand that sometimes you might need additional help. We can provide that assistance anytime you need it.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">When You Might Need Additional Help</h4>
                      <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                        <li>• Specific questions not covered in training materials</li>
                        <li>• Complex setup scenarios unique to your business</li>
                        <li>• Technical issues or troubleshooting</li>
                        <li>• Strategic guidance for your specific use case</li>
                        <li>• Clarification on platform features or best practices</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">How to Get Additional Assistance</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Contact our support team through any of our available channels - email, live chat scheduling, or dedicated meetings. We're available to provide the additional assistance you need.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Our Implementation Approach:
                  </h3>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-black font-helvetica mb-2">Self-Service First</h4>
                        <p className="text-base text-gray-700 font-helvetica">
                          Our comprehensive training content (videos and documentation) is designed to get you started independently and efficiently.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-black font-helvetica mb-2">Support When Needed</h4>
                        <p className="text-base text-gray-700 font-helvetica">
                          If you need additional assistance beyond our training materials, we're available to help with specific questions or challenges.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-black font-helvetica mb-2">Flexible and Accessible</h4>
                        <p className="text-base text-gray-700 font-helvetica">
                          Access training content anytime, and get additional support whenever you need it - no rigid implementation schedules or mandatory sessions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Getting Started:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-semibold text-black font-helvetica mb-1">Access Training Content</h4>
                        <p className="text-base text-gray-600 font-helvetica">Start with our onboarding system, watch training videos, and review documentation.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-semibold text-black font-helvetica mb-1">Set Up Your Monitoring</h4>
                        <p className="text-base text-gray-600 font-helvetica">Follow the step-by-step guides to configure your AI search monitoring.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-semibold text-black font-helvetica mb-1">Get Additional Help If Needed</h4>
                        <p className="text-base text-gray-600 font-helvetica">Contact support for any additional assistance beyond the training materials.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-base text-gray-700 font-helvetica">
                    <strong>Simple and Effective:</strong> Our good onboarding system with training videos and documentation gets you started, and we provide additional assistance anytime you need it beyond our training materials.
                  </p>
                </div>
              </div>
            </div>

            {/* Back to FAQ */}
            <div className="mt-8 text-center">
              <Link
                href="/faq"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 font-helvetica"
              >
                ← Back to FAQ
              </Link>
            </div>

            {/* Related Questions */}
            <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                Related Questions
              </h3>
              <div className="space-y-3">
                <Link
                  href="/faq/technical-support"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → How can I get technical support?
                </Link>
                <Link
                  href="/faq/keyword-tracking-setup"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → How do I set up keyword tracking?
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

export default ImplementationHelpPage; 