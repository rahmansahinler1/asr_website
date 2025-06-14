import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand Mention Alerts - FAQ | aisearchrefs",
  description: "Learn about brand mention alerts and AI monitoring notifications available through aisearchrefs for tracking AI web search performance",
};

const BrandMentionAlertsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Brand Mention Alerts"
        description="Stay informed about your brand mentions across AI search engines"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Question */}
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                Do you provide <span className="text-[#FFD66B]">alerts for brand mentions</span>?
              </h1>
            </div>

            {/* Answer */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  Yes, we provide alerts for brand mentions across AI search engines. aisearchrefs keeps you informed about changes in your AI web search performance and brand visibility through comprehensive alert systems and reporting.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="mb-3 text-lg font-bold text-black font-helvetica">
                    Comprehensive Brand Mention Monitoring:
                  </h3>
                  <p className="text-base text-gray-700 font-helvetica">
                    Our AI monitoring system tracks your brand mentions across ChatGPT, Claude, DeepSeek, Gemini, Grok, and Perplexity, providing alerts when significant changes occur in your AI traffic or competitive positioning.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Weekly Report Alerts:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    You can view brand mention alerts within your weekly reports, providing regular updates on your AI web search performance and any notable changes in how your brand appears across AI platforms.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 border-l-4 border-[#FFD66B] bg-yellow-50 rounded">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Integrated Reporting</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Brand mention alerts are seamlessly integrated into your weekly performance reports, giving you context alongside your overall AI monitoring metrics and competitor analysis data.
                      </p>
                    </div>
                    
                    <div className="p-4 border-l-4 border-[#FFD66B] bg-yellow-50 rounded">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Performance Context</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Alerts include context about what changed, why it matters, and how it impacts your overall AI search performance within your specific niche and industry vertical.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Customizable Alert Limits:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    You can set your limits within the platform to control when and how you receive brand mention alerts, ensuring you only get notified about changes that matter to your business.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Alert Thresholds:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Mention frequency changes</li>
                        <li>• Visibility score fluctuations</li>
                        <li>• Competitive positioning shifts</li>
                        <li>• New platform appearances</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Customization Options:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Sensitivity level settings</li>
                        <li>• Platform-specific alerts</li>
                        <li>• Niche-focused notifications</li>
                        <li>• Competitor alert preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Historical Change Tracking:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    You can know what is changed historically through our comprehensive tracking system that maintains a complete record of your brand mention patterns and AI search performance over time.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Historical Context</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Every alert includes historical context, showing you how current changes compare to past performance and helping you understand trends in your AI web search visibility.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Trend Analysis</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Track patterns in your brand mentions over time, identifying seasonal changes, campaign impacts, and long-term trends in how AI systems reference your brand.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Change Documentation</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Complete documentation of what changed, when it changed, and the potential impact on your AI monitoring metrics and competitive positioning.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Enhanced Alert Services:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    If you want to get some alerts beyond our standard reporting, there is a service we can provide about it. We offer enhanced alert services for businesses that need more immediate or detailed notification systems.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-black font-helvetica mb-3">Additional Alert Services:</h4>
                    <ul className="space-y-2 text-base text-gray-700 font-helvetica">
                      <li>• Real-time notification systems</li>
                      <li>• Custom alert frequency options</li>
                      <li>• Advanced threshold configurations</li>
                      <li>• Multi-channel alert delivery</li>
                      <li>• Priority alert categorization</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Alert Coverage Across AI Platforms:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    Our brand mention alerts cover all major AI search engines, ensuring you stay informed about changes in your AI traffic and competitor analysis across the complete AI search landscape.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Multi-Platform Monitoring</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Alerts for brand mention changes across ChatGPT, Claude, DeepSeek, Gemini, Grok, and Perplexity.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Contextual Alerts</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Notifications include context about sentiment, positioning, and competitive implications.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Actionable Insights</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Each alert provides actionable insights about what the changes mean for your AI search strategy.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Core Alert Features:
                  </h3>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <ul className="space-y-3 text-base text-gray-700 font-helvetica">
                      <li>• <strong>Weekly Report Integration:</strong> View brand mention alerts within your regular performance reports</li>
                      <li>• <strong>Customizable Limits:</strong> Set your own thresholds and preferences within the platform</li>
                      <li>• <strong>Historical Tracking:</strong> Know what changed historically with complete context and trend analysis</li>
                      <li>• <strong>Enhanced Services:</strong> Additional alert services available for businesses with specific notification needs</li>
                      <li>• <strong>Multi-Platform Coverage:</strong> Comprehensive alerts across all major AI search engines</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>Stay Informed:</strong> Our brand mention alert system ensures you never miss important changes in your AI web search performance, giving you the intelligence you need to respond quickly to opportunities and challenges.
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
                  href="/faq/brand-visibility-tracking"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → How does brand visibility tracking work?
                </Link>
                <Link
                  href="/faq/competitor-analysis"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → Can I monitor competitor performance in AI search?
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

export default BrandMentionAlertsPage; 