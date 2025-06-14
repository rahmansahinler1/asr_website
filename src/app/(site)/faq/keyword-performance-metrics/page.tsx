import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Keyword Performance Metrics - FAQ | aisearchrefs",
  description: "Overview of keyword performance metrics tracked by aisearchrefs including ranking positions, references, and AI SEO scoring",
};

const KeywordPerformanceMetricsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Keyword Performance Metrics"
        description="Understanding the metrics we track for keyword performance"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                What metrics do you track for <span className="text-[#FFD66B]">keyword performance</span>?
              </h1>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  We track essential keyword performance metrics to give you clear visibility into how your brand performs across AI search engines. Our metrics focus on the data that matters most for understanding your AI web search performance.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Keyword Ranking Positions:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    We track keyword ranking positions across your niche, showing you how your brand appears in AI responses for relevant discussion topics and queries within your industry vertical.
                  </p>
                  <div className="p-4 border-l-4 border-[#FFD66B] bg-yellow-50 rounded">
                    <h4 className="font-semibold text-black font-helvetica mb-2">Niche-Focused Rankings</h4>
                    <p className="text-sm text-gray-600 font-helvetica">
                      Track your position within your specific niche rather than generic keyword rankings, providing more relevant insights for your AI monitoring and competitive positioning.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Query Performance Metrics:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    We measure how your brand performs across different types of queries, particularly discussion-type queries that align with how people actually interact with AI search engines.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Query Types:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Discussion-type query performance</li>
                        <li>• Comparison query results</li>
                        <li>• Industry-specific question responses</li>
                        <li>• Brand mention contexts</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Performance Indicators:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Mention frequency per query type</li>
                        <li>• Response positioning</li>
                        <li>• Context quality assessment</li>
                        <li>• Competitive comparison</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    References and Reference Data:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    We track both direct references to your brand and the quality of those references, including historical data to show you how your reference patterns change over time.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Reference Tracking</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Monitor how often your brand is referenced in AI responses, the context of those references, and the quality of the mentions across different AI platforms.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Historical Reference Data</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Track reference patterns over time to understand trends in how AI systems mention your brand, helping you identify what content strategies are working.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Link Attractions and Traction:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    We measure link attractions to your brand and references, tracking both current link traction and historical data about link performance across AI platforms.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Link Attractions:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Direct link references in AI responses</li>
                        <li>• Source attribution patterns</li>
                        <li>• Link context analysis</li>
                        <li>• Reference quality scoring</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Historical Link Data:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Link traction trends over time</li>
                        <li>• Platform-specific link performance</li>
                        <li>• Seasonal link pattern analysis</li>
                        <li>• Competitive link comparison</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Overall AI SEO Score:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    We provide an overall AI SEO score that measures your content's optimization level for AI search engines. This score reflects how well your content is aligned for getting quality references from AI systems.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-black font-helvetica mb-3">Understanding AI SEO:</h4>
                    <p className="text-base text-gray-700 font-helvetica mb-3">
                      Even if you get high ranks in traditional search, to get qualified references from AI systems, you need to have content aligned specifically for AI understanding. That's why we call it AI SEO - it's about optimizing for AI reference quality, not just rankings.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                      <li>• Content alignment for AI understanding</li>
                      <li>• Reference quality optimization level</li>
                      <li>• AI-specific content scoring</li>
                      <li>• Improvement recommendations</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Platform Coverage:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    All metrics are tracked across ChatGPT, Claude, DeepSeek, Gemini, Grok, and Perplexity, giving you comprehensive visibility into your AI web search performance across major platforms.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Cross-Platform Metrics</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Consistent metric tracking across all major AI search engines.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Historical Tracking</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Time-based data to understand performance trends and patterns.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Actionable Insights</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Metrics designed to provide clear direction for improvement.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Core Metrics Summary:
                  </h3>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <ul className="space-y-3 text-base text-gray-700 font-helvetica">
                      <li>• <strong>Keyword Ranking Positions:</strong> Niche-specific ranking performance across AI platforms</li>
                      <li>• <strong>Query Performance:</strong> How your brand performs across different discussion-type queries</li>
                      <li>• <strong>References & Historical Data:</strong> Reference tracking with historical pattern analysis</li>
                      <li>• <strong>Link Attractions & Traction:</strong> Link performance metrics with historical trend data</li>
                      <li>• <strong>Overall AI SEO Score:</strong> Content optimization level for AI reference quality</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>Focused Metrics:</strong> Our keyword performance metrics are designed to give you the essential data you need to understand and improve your AI web search performance without overwhelming complexity.
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
                  href="/faq/brand-visibility-tracking"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → How does brand visibility tracking work?
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

export default KeywordPerformanceMetricsPage; 