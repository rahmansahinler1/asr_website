import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Keyword Performance Metrics - FAQ | AI Search Refs",
  description: "Comprehensive overview of all keyword performance metrics tracked by AI Search Refs",
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
                  AI Search Refs tracks comprehensive keyword performance metrics to give you complete visibility into how your keywords perform across AI search engines.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Core Metrics:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Performance Tracking:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Keyword ranking positions</li>
                        <li>• Mention frequency and volume</li>
                        <li>• Visibility score calculations</li>
                        <li>• Response quality ratings</li>
                        <li>• Context accuracy analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Trend Analysis:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Historical performance data</li>
                        <li>• Ranking change tracking</li>
                        <li>• Seasonal pattern identification</li>
                        <li>• Growth trajectory analysis</li>
                        <li>• Competitor comparison metrics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>Advanced Analytics:</strong> Access detailed sentiment analysis, geographic performance data, and AI engine-specific performance breakdowns for comprehensive keyword insights.
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

export default KeywordPerformanceMetricsPage; 