import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import Link from "next/link";

const FAQPage = () => {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="Frequently Asked Questions"
        description="Find answers to common questions about AI search tracking, brand monitoring, and our platform features"
      />

      <section className="pt-[120px] pb-[120px] bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-16 text-center">
              <h1 className="mb-6 text-5xl font-bold leading-tight text-primary font-canela">
                Frequently Asked <span className="text-[#FFD66B]">Questions</span>
              </h1>
              <p className="text-xl leading-relaxed text-primary/80 font-helvetica max-w-3xl mx-auto">
                Everything you need to know about AI search tracking, brand monitoring, and optimizing your visibility in AI search engines.
              </p>
            </div>

            {/* Getting Started */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-8 font-canela">
                Getting Started
              </h2>
              
              <div className="space-y-4">
                <Link 
                  href="/faq/what-is-ai-search-refs" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    What is AI Search Refs?
                  </h3>
                </Link>

                <Link 
                  href="/faq/how-to-track-keywords" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    How do I track my brand keywords in AI search engines?
                  </h3>
                </Link>

                <Link 
                  href="/faq/getting-started-guide" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    How do I get started with AI SEO tracking?
                  </h3>
                </Link>
              </div>
            </div>

            {/* AI Search Engines */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-8 font-canela">
                AI Search Engines
              </h2>
              
              <div className="space-y-4">
                <Link 
                  href="/faq/supported-ai-engines" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    Which AI search engines do you support?
                  </h3>
                </Link>

                <Link 
                  href="/faq/ai-seo-optimization" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    How can I optimize my content for AI search engines?
                  </h3>
                </Link>

                <Link 
                  href="/faq/ai-search-ranking-factors" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    What are the key ranking factors for AI search engines?
                  </h3>
                </Link>
              </div>
            </div>

            {/* Brand Monitoring */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-8 font-canela">
                Brand Monitoring
              </h2>
              
              <div className="space-y-4">
                <Link 
                  href="/faq/brand-visibility-tracking" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    How does brand visibility tracking work?
                  </h3>
                </Link>

                <Link 
                  href="/faq/competitor-analysis" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    Can I monitor competitor performance in AI search?
                  </h3>
                </Link>

                <Link 
                  href="/faq/brand-mention-alerts" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    Do you provide alerts for brand mentions?
                  </h3>
                </Link>
              </div>
            </div>

            {/* Keyword Tracking */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-8 font-canela">
                Keyword Tracking
              </h2>
              
              <div className="space-y-4">
                <Link 
                  href="/faq/keyword-tracking-setup" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    How do I set up keyword tracking?
                  </h3>
                </Link>

                <Link 
                  href="/faq/keyword-performance-metrics" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    What metrics do you track for keyword performance?
                  </h3>
                </Link>

                <Link 
                  href="/faq/keyword-recommendations" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    Do you provide keyword recommendations?
                  </h3>
                </Link>
              </div>
            </div>

            {/* Platform Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-8 font-canela">
                Platform Features
              </h2>
              
              <div className="space-y-4">
                <Link 
                  href="/faq/reporting-dashboard" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    What does the reporting dashboard include?
                  </h3>
                </Link>

                <Link 
                  href="/faq/api-integration" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    Do you offer API integration?
                  </h3>
                </Link>

                <Link 
                  href="/faq/data-export" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    Can I export my tracking data?
                  </h3>
                </Link>
              </div>
            </div>

            {/* Pricing & Plans */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-8 font-canela">
                Pricing & Plans
              </h2>
              
              <div className="space-y-4">
                <Link 
                  href="/faq/pricing-plans" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    What pricing plans do you offer?
                  </h3>
                </Link>

                <Link 
                  href="/faq/free-trial" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    Do you offer a free trial?
                  </h3>
                </Link>

                <Link 
                  href="/faq/plan-changes" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    Can I upgrade or downgrade my plan anytime?
                  </h3>
                </Link>
              </div>
            </div>

            {/* Technical Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-8 font-canela">
                Support
              </h2>
              
              <div className="space-y-4">
                <Link 
                  href="/faq/technical-support" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    How can I get technical support?
                  </h3>
                </Link>

                <Link 
                  href="/faq/implementation-help" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    Do you provide implementation assistance?
                  </h3>
                </Link>

                <Link 
                  href="/faq/custom-solutions" 
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50"
                >
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica">
                    Do you offer custom enterprise solutions?
                  </h3>
                </Link>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-16 p-8 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4 font-canela">
                Still have questions?
              </h3>
              <p className="text-lg text-gray-600 font-helvetica mb-6">
                Our AI search experts are ready to help you optimize your brand's visibility in AI search engines. Get personalized assistance for your specific use case.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 font-helvetica"
                >
                  Contact Support
                </Link>
                <Link 
                  href="/blogs" 
                  className="inline-flex items-center px-6 py-3 bg-[#FFD66B] text-black font-semibold rounded-lg hover:bg-[#FFD66B]/90 transition-colors duration-300 font-helvetica"
                >
                  Read Our Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;