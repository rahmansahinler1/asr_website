import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Supported AI Search Engines - FAQ | aisearchrefs",
  description: "Complete list of AI search engines and platforms supported by aisearchrefs for brand monitoring and keyword tracking",
};

const SupportedAIEnginesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Supported AI Engines"
        description="Complete list of AI search engines and platforms we monitor"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Question */}
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                Which <span className="text-[#FFD66B]">AI search engines</span> do you support?
              </h1>
            </div>

            {/* Answer */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  aisearchrefs monitors your brand across all major AI search engines and conversational AI platforms. Our comprehensive coverage ensures you track your AI web search performance and competitor analysis across the most important platforms.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Supported AI Search Platforms:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-black font-helvetica flex items-center">
                          <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                          ChatGPT
                        </h4>
                        <p className="text-sm text-gray-600 font-helvetica mt-2">Complete AI monitoring and brand mention tracking across OpenAI's platform</p>
                      </div>
                      
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-black font-helvetica flex items-center">
                          <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                          Claude
                        </h4>
                        <p className="text-sm text-gray-600 font-helvetica mt-2">Comprehensive AI traffic measurement and competitor analysis on Anthropic's platform</p>
                      </div>
                      
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-black font-helvetica flex items-center">
                          <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                          DeepSeek
                        </h4>
                        <p className="text-sm text-gray-600 font-helvetica mt-2">Full brand monitoring and AI search performance tracking</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-black font-helvetica flex items-center">
                          <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                          Gemini
                        </h4>
                        <p className="text-sm text-gray-600 font-helvetica mt-2">Advanced AI web search monitoring and mention tracking across Google's AI platform</p>
                      </div>
                      
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-black font-helvetica flex items-center">
                          <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                          Grok
                        </h4>
                        <p className="text-sm text-gray-600 font-helvetica mt-2">Real-time AI monitoring and competitor analysis on X's AI platform</p>
                      </div>
                      
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-black font-helvetica flex items-center">
                          <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                          Perplexity
                        </h4>
                        <p className="text-sm text-gray-600 font-helvetica mt-2">Complete AI search tracking and brand mention monitoring</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Comprehensive AI Monitoring Coverage:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    Our platform provides complete coverage across these six major AI search engines, ensuring you never miss important brand mentions or AI traffic opportunities. We focus on the platforms that drive the most AI web search traffic.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700 font-helvetica">
                      <strong>Platform Selection:</strong> We monitor the AI search engines that matter most for business results. These six platforms represent the vast majority of AI web search traffic and competitive intelligence opportunities.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    What We Track on Each Platform:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Brand Mentions</h4>
                      <ul className="text-sm text-gray-600 font-helvetica space-y-1">
                        <li>• Direct brand references</li>
                        <li>• Product and service mentions</li>
                        <li>• Context and sentiment analysis</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-black font-helvetica mb-2">AI Traffic Metrics</h4>
                      <ul className="text-sm text-gray-600 font-helvetica space-y-1">
                        <li>• Keyword visibility scores</li>
                        <li>• Answer positioning</li>
                        <li>• Performance trends</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Competitor Analysis</h4>
                      <ul className="text-sm text-gray-600 font-helvetica space-y-1">
                        <li>• Competitive benchmarking</li>
                        <li>• Market share analysis</li>
                        <li>• Opportunity identification</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Why These Platforms Matter:
                  </h3>
                  <ul className="space-y-3 text-base text-gray-600 font-helvetica">
                    <li>• <strong>Market Coverage:</strong> These six platforms represent the majority of AI web search activity</li>
                    <li>• <strong>Business Impact:</strong> Most AI traffic and competitor intelligence comes from these engines</li>
                    <li>• <strong>Data Quality:</strong> Focused monitoring ensures accurate and actionable AI monitoring results</li>
                    <li>• <strong>Strategic Focus:</strong> Better to excel on major platforms than spread thin across many</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>Platform Focus:</strong> We concentrate on the AI search engines that drive real business results. Our selective approach ensures reliable data quality and actionable insights for your AI web search strategy.
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
                  href="/faq/how-to-track-keywords"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → How do I track my brand keywords in AI search engines?
                </Link>
                <Link
                  href="/faq/how-do-i-know-this-is-working"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → How do I know this is working?
                </Link>
                <Link
                  href="/faq/what-is-ai-search-refs"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → What is aisearchrefs?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportedAIEnginesPage; 