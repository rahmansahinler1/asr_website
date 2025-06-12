import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Trial - FAQ | AI Search Refs",
  description: "Learn about AI Search Refs free trial options and how to get started with our platform",
};

const FreeTrialPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Free Trial"
        description="Getting started with our free trial offer"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                Do you offer a <span className="text-[#FFD66B]">free trial</span>?
              </h1>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  Yes! AI Search Refs offers a comprehensive 14-day free trial that gives you full access to our platform features, allowing you to experience the value of AI search tracking before committing to a paid plan.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    What's Included:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Full Platform Access:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Complete dashboard functionality</li>
                        <li>• All AI search engine monitoring</li>
                        <li>• Keyword tracking and analysis</li>
                        <li>• Brand visibility reporting</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Premium Features:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Competitor analysis tools</li>
                        <li>• Automated report generation</li>
                        <li>• Custom alert configuration</li>
                        <li>• Expert onboarding support</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Getting Started:
                  </h3>
                  <ol className="space-y-2 text-base text-gray-600 font-helvetica">
                    <li>1. Sign up for your free trial account</li>
                    <li>2. Complete the guided onboarding process</li>
                    <li>3. Add your initial keywords and competitors</li>
                    <li>4. Explore features and generate your first reports</li>
                  </ol>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>No Credit Card Required:</strong> Start your free trial immediately without providing payment information. Upgrade to a paid plan only when you're ready to continue.
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
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeTrialPage; 