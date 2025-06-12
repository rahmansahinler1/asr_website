import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Supported AI Search Engines - FAQ | AI Search Refs",
  description: "Complete list of AI search engines and platforms supported by AI Search Refs for brand monitoring and keyword tracking",
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
                  AI Search Refs monitors your brand across all major AI search engines and conversational AI platforms. Our comprehensive coverage ensures you never miss important mentions or opportunities across the AI search landscape.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Major AI Search Platforms:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-black font-helvetica flex items-center">
                          <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                          ChatGPT (OpenAI)
                        </h4>
                        <p className="text-sm text-gray-600 font-helvetica mt-2">Full tracking and monitoring capabilities</p>
                      </div>
                      
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-black font-helvetica flex items-center">
                          <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                          Claude (Anthropic)
                        </h4>
                        <p className="text-sm text-gray-600 font-helvetica mt-2">Comprehensive brand mention tracking</p>
                      </div>
                      
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-black font-helvetica flex items-center">
                          <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                          Perplexity AI
                        </h4>
                        <p className="text-sm text-gray-600 font-helvetica mt-2">Real-time search result monitoring</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-black font-helvetica flex items-center">
                          <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                          Bing Chat (Microsoft)
                        </h4>
                        <p className="text-sm text-gray-600 font-helvetica mt-2">Integrated search and chat monitoring</p>
                      </div>
                      
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-black font-helvetica flex items-center">
                          <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                          Google Bard/Gemini
                        </h4>
                        <p className="text-sm text-gray-600 font-helvetica mt-2">Advanced AI response tracking</p>
                      </div>
                      
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-black font-helvetica flex items-center">
                          <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                          You.com
                        </h4>
                        <p className="text-sm text-gray-600 font-helvetica mt-2">Beta integration - expanding coverage</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Emerging Platforms:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    We continuously expand our coverage to include new AI search platforms as they gain market adoption. Currently in development or beta:
                  </p>
                  <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                    <li>• Character.AI (conversational tracking)</li>
                    <li>• Phind (developer-focused search)</li>
                    <li>• Neeva AI (privacy-focused search)</li>
                    <li>• Kagi Search (premium search platform)</li>
                    <li>• SearchGPT (OpenAI search engine)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    What We Track on Each Platform:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Mentions</h4>
                      <ul className="text-sm text-gray-600 font-helvetica space-y-1">
                        <li>• Brand references</li>
                        <li>• Product mentions</li>
                        <li>• Context analysis</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Rankings</h4>
                      <ul className="text-sm text-gray-600 font-helvetica space-y-1">
                        <li>• Keyword positions</li>
                        <li>• Visibility metrics</li>
                        <li>• Trend analysis</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Quality</h4>
                      <ul className="text-sm text-gray-600 font-helvetica space-y-1">
                        <li>• Response accuracy</li>
                        <li>• Sentiment analysis</li>
                        <li>• Content quality</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>New Platform Request:</strong> Don't see an AI search engine you'd like us to support? Contact our team to request new platform integrations. We prioritize based on user demand and platform adoption.
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
                  href="/faq/ai-seo-optimization"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → How can I optimize my content for AI search engines?
                </Link>
                <Link
                  href="/faq/technical-support"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → How can I get technical support?
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