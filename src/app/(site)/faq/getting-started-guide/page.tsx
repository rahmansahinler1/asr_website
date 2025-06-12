import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Getting Started with AI SEO Tracking - FAQ | AI Search Refs",
  description: "Complete beginner's guide to getting started with AI SEO tracking and brand monitoring using AI Search Refs",
};

const GettingStartedGuidePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Getting Started Guide"
        description="Complete beginner's guide to AI SEO tracking and brand monitoring"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Question */}
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                How do I get started with <span className="text-[#FFD66B]">AI SEO tracking</span>?
              </h1>
            </div>

            {/* Answer */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  Getting started with AI SEO tracking is straightforward with AI Search Refs. This comprehensive guide will walk you through everything you need to know to begin monitoring your brand's performance in AI search engines effectively.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Quick Start Checklist:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#FFD66B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-black">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black font-helvetica">Create Your Account</h4>
                        <p className="text-sm text-gray-600 font-helvetica">Sign up for AI Search Refs and choose the plan that fits your needs. Start with our free trial to explore features.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#FFD66B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-black">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black font-helvetica">Set Up Your Brand Profile</h4>
                        <p className="text-sm text-gray-600 font-helvetica">Add your company information, website URL, and key brand details to optimize tracking accuracy.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#FFD66B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-black">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black font-helvetica">Add Your First Keywords</h4>
                        <p className="text-sm text-gray-600 font-helvetica">Start with 5-10 core keywords including your brand name, main products, and industry terms.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#FFD66B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-black">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black font-helvetica">Configure Tracking Settings</h4>
                        <p className="text-sm text-gray-600 font-helvetica">Choose AI engines to monitor, set tracking frequency, and configure alert preferences.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#FFD66B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-black">5</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black font-helvetica">Review Your Dashboard</h4>
                        <p className="text-sm text-gray-600 font-helvetica">Explore the analytics dashboard and familiarize yourself with key metrics and reports.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    First Week Goals:
                  </h3>
                  <ul className="space-y-3 text-base text-gray-600 font-helvetica">
                    <li>• Complete initial keyword setup and validation</li>
                    <li>• Establish baseline metrics for your brand's current AI visibility</li>
                    <li>• Set up essential alerts for brand mentions and ranking changes</li>
                    <li>• Explore competitor analysis features</li>
                    <li>• Schedule your first automated report</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Essential Features to Explore:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-2 font-semibold text-black font-helvetica">Core Tracking:</h4>
                      <ul className="space-y-1 text-sm text-gray-600 font-helvetica">
                        <li>• Keyword performance monitoring</li>
                        <li>• Brand mention tracking</li>
                        <li>• Visibility trend analysis</li>
                        <li>• Real-time alerts setup</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-black font-helvetica">Advanced Features:</h4>
                      <ul className="space-y-1 text-sm text-gray-600 font-helvetica">
                        <li>• Competitor benchmarking</li>
                        <li>• Custom reporting dashboards</li>
                        <li>• API integration options</li>
                        <li>• Data export capabilities</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>Pro Tip:</strong> Start small and gradually expand your tracking as you become more familiar with the platform. Focus on quality over quantity when selecting initial keywords.
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
                  href="/faq/what-is-ai-search-refs"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → What is AI Search Refs?
                </Link>
                <Link
                  href="/faq/keyword-tracking-setup"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → How do I set up keyword tracking?
                </Link>
                <Link
                  href="/faq/free-trial"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → Do you offer a free trial?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GettingStartedGuidePage; 