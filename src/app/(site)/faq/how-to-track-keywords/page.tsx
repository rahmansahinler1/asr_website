import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Track Brand Keywords in AI Search - FAQ | aisearchrefs",
  description: "Learn step-by-step how to set up and track your brand keywords across AI search engines with aisearchrefs AI monitoring platform",
};

const HowToTrackKeywordsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="How to Track Keywords"
        description="Step-by-step guide to tracking your brand keywords in AI search engines"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Question */}
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                How do I track my brand <span className="text-[#FFD66B]">keywords</span> in AI search engines?
              </h1>
            </div>

            {/* Answer */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  Tracking your brand keywords in AI web search engines is essential for measuring your brand's visibility and performance. Here's a comprehensive guide to get started with AI monitoring using our platform aisearchrefs.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Step-by-Step Process:
                  </h3>
                  <ol className="space-y-4 text-base text-gray-600 font-helvetica">
                    <li>
                      <strong>1. Account Setup:</strong> Create your aisearchrefs account and complete the onboarding process. Choose the measurement plan that best fits your AI monitoring needs.
                    </li>
                    <li>
                      <strong>2. Add Your Keywords:</strong> Navigate to the AI monitoring dashboard and input your target keywords. Include your brand name, product names, and industry-related terms for comprehensive AI traffic measurement.
                    </li>
                    <li>
                      <strong>3. Select AI Engines:</strong> Choose which AI search platforms you want to monitor (ChatGPT, Claude, Gemini, Perplexity, etc.) for complete AI competitor analysis.
                    </li>
                    <li>
                      <strong>4. Configure Measurement:</strong> Set up tracking frequency, geographic targets, and notification preferences for your AI monitoring system.
                    </li>
                    <li>
                      <strong>5. Monitor Results:</strong> Access your dashboard to view keyword performance scores, mention analytics, and AI traffic measurement data. <strong>Note: Complete tracking results will be available within at least one month</strong> as our system builds comprehensive measurement baselines across all AI platforms.
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Best Practices for AI Monitoring:
                  </h3>
                  <ul className="space-y-3 text-base text-gray-600 font-helvetica">
                    <li>• Start with your most important brand keywords and expand gradually for better AI traffic scoring</li>
                    <li>• Include variations and common misspellings of your brand name for comprehensive coverage</li>
                    <li>• Track both branded and industry-specific keywords across AI web search platforms</li>
                    <li>• Monitor competitor keywords for effective AI competitor analysis insights</li>
                    <li>• Set up alerts for significant scoring changes or new AI mentions</li>
                    <li>• Review and adjust your keyword list regularly based on AI monitoring performance data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    What You'll Measure:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-2 font-semibold text-black font-helvetica">Brand Measurement:</h4>
                      <ul className="space-y-1 text-sm text-gray-600 font-helvetica">
                        <li>• Brand mention frequency scores</li>
                        <li>• AI traffic measurement data</li>
                        <li>• Context positioning analysis</li>
                        <li>• Visibility trend scoring</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-black font-helvetica">Performance Data:</h4>
                      <ul className="space-y-1 text-sm text-gray-600 font-helvetica">
                        <li>• AI search ranking positions</li>
                        <li>• Response quality scoring</li>
                        <li>• AI competitor analysis benchmarks</li>
                        <li>• Historical performance trends</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>Timeline Expectation:</strong> Our AI monitoring system requires at least one month to establish reliable tracking baselines and deliver comprehensive measurement results. This allows our platform to analyze patterns across multiple AI search engines and provide accurate scoring data.
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
                  href="/faq/keyword-tracking-setup"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → How do I set up keyword tracking?
                </Link>
                <Link
                  href="/faq/keyword-performance-metrics"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → What metrics do you track for keyword performance?
                </Link>
                <Link
                  href="/faq/supported-ai-engines"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → Which AI search engines do you support?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToTrackKeywordsPage; 