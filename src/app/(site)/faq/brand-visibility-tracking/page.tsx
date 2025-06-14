import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand Visibility Tracking - FAQ | aisearchrefs",
  description: "Learn how aisearchrefs tracks and measures your brand's visibility across AI search engines with niche tracking and discussion-type queries",
};

const BrandVisibilityTrackingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Brand Visibility Tracking"
        description="Understanding how we measure your brand's AI search presence"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                How does <span className="text-[#FFD66B]">brand visibility tracking</span> work?
              </h1>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  aisearchrefs tracks your brand visibility through niche-specific monitoring across AI search engines. Our system focuses on discussion-type queries rather than simple keyword tracking, providing comprehensive analytics about how your brand appears in AI conversations.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Niche Tracking Approach:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    We organize tracking around your specific niche or industry vertical. This targeted approach ensures we monitor the conversations and contexts that actually matter for your business, rather than generic keyword mentions.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700 font-helvetica">
                      <strong>Why Niche-Focused:</strong> AI search engines understand context and industry relationships. By tracking within your niche, we capture relevant brand mentions that traditional keyword monitoring might miss.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Discussion-Type Query Monitoring:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    Instead of tracking simple keywords, we propose and monitor representative discussion-type queries for your niche. This approach aligns with how people actually interact with AI search engines.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 border-l-4 border-[#FFD66B] bg-yellow-50 rounded">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Representative Query Selection</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        We identify and propose discussion-type queries that represent how your target audience naturally asks questions about your industry, products, or services.
                      </p>
                    </div>
                    
                    <div className="p-4 border-l-4 border-[#FFD66B] bg-yellow-50 rounded">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Conversational Context Tracking</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        We monitor how your brand appears in conversational AI responses, tracking context, positioning, and the quality of references across different discussion topics.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Comprehensive Analytics Reports:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    Our analytics go beyond basic mention counting. You receive detailed reports about how your brand appears across AI platforms, including context analysis and competitive positioning.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Reference Analysis:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Brand mention frequency and trends</li>
                        <li>• Context and sentiment evaluation</li>
                        <li>• Positioning within AI responses</li>
                        <li>• Competitive comparison metrics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Performance Insights:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Visibility scores across platforms</li>
                        <li>• Discussion topic performance</li>
                        <li>• AI traffic measurement data</li>
                        <li>• Opportunity identification</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Dual Reference Data Collection:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    We provide both traditional link-based data and AI-specific text references, giving you complete visibility into how your brand appears across different AI search contexts.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Direct Link Data</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Traditional reference tracking including source URLs, link context, and referral patterns when AI systems cite your content directly.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">AI Answer Text References</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Direct text analysis of how your brand is mentioned within AI-generated responses, including context, positioning, and the specific language used to describe your brand.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Platform Coverage:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    We track your brand visibility across ChatGPT, Claude, DeepSeek, Gemini, Grok, and Perplexity, providing comprehensive coverage of the AI search landscape.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Cross-Platform Analysis</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Compare your brand performance across different AI engines to identify platform-specific opportunities.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Unified Reporting</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Consolidated analytics that show your overall AI web search performance across all monitored platforms.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Trend Identification</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Spot emerging patterns and changes in how AI systems reference your brand over time.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Core Value Delivered:
                  </h3>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <ul className="space-y-3 text-base text-gray-700 font-helvetica">
                      <li>• <strong>Niche-Specific Tracking:</strong> Focused monitoring within your industry vertical for relevant insights</li>
                      <li>• <strong>Discussion-Type Queries:</strong> Representative queries that match real AI search behavior</li>
                      <li>• <strong>Comprehensive Analytics:</strong> Detailed reports on brand mentions, context, and competitive positioning</li>
                      <li>• <strong>Dual Data Sources:</strong> Both direct link references and AI answer text analysis</li>
                      <li>• <strong>Multi-Platform Coverage:</strong> Complete visibility across all major AI search engines</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>Professional AI Monitoring:</strong> Our brand visibility tracking provides the measurement foundation you need to understand your AI web search performance and make data-driven decisions about your AI presence.
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
                  href="/faq/how-to-track-keywords"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → How do I track my brand keywords in AI search engines?
                </Link>
                <Link
                  href="/faq/supported-ai-engines"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → Which AI search engines do you support?
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

export default BrandVisibilityTrackingPage; 