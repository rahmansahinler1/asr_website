import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reporting Dashboard - FAQ | aisearchrefs",
  description: "Learn about the features included in the aisearchrefs reporting dashboard: ranking system, scores, historical data, and competitor analysis",
};

const ReportingDashboardPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Reporting Dashboard"
        description="Features and capabilities of the aisearchrefs reporting dashboard"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Question */}
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                What does the <span className="text-[#FFD66B]">reporting dashboard</span> include?
              </h1>
            </div>

            {/* Answer */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  The aisearchrefs reporting dashboard provides comprehensive AI search performance analytics through a structured ranking system, performance scores, historical data tracking, and competitor analysis visualizations.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Core Dashboard Features:
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-3">Ranking System</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Track your brand's position across AI search engines with systematic ranking measurements. The dashboard displays your current rankings for tracked keywords and monitors position changes over time.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-3">Performance Scores</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Access dedicated AI SEO scores that measure your content's optimization for AI reference quality. These scores are calculated based on actual performance data across supported AI platforms.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-3">Historical Data</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        View comprehensive historical tracking of your AI search performance. The dashboard maintains records of ranking changes, score fluctuations, and performance trends over time.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Traction Analytics:
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-3">Direct Link Tractions</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Monitor direct link performance when your content is referenced by AI systems. Track which links generate the most traction and measure their impact on your AI search visibility.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-3">Reference Tractions</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Analyze how your brand and content are referenced within AI-generated responses. Measure the quality and frequency of mentions across different AI platforms and query types.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Visualizations and Analytics:
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">AI Search Graphs</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Interactive graphs display your AI search performance trends, ranking movements, and score changes over time. These visualizations help identify patterns and performance correlations.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Performance Visualizations</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Charts and graphs illustrate the relationship between different metrics, including ranking positions, reference quality, and traction performance across AI platforms.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Competitor Analysis Integration:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    The dashboard includes competitor analysis features within the first version, allowing you to benchmark your performance against competitors in your niche.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Comparative Rankings</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        View your rankings alongside competitor positions for the same keywords and topics. Track relative performance changes and identify competitive opportunities.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Competitive Intelligence</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Access insights into competitor AI search strategies, reference patterns, and performance trends. Compare your traction metrics against industry benchmarks.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Dashboard Organization:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Data Structure:</h4>
                      <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                        <li>• Ranking system overview</li>
                        <li>• Performance score summaries</li>
                        <li>• Historical trend analysis</li>
                        <li>• Traction measurement panels</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Visual Elements:</h4>
                      <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                        <li>• Interactive AI search graphs</li>
                        <li>• Comparative analysis charts</li>
                        <li>• Performance visualization panels</li>
                        <li>• Competitor benchmarking displays</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-base text-gray-700 font-helvetica">
                    <strong>Dashboard Focus:</strong> The reporting dashboard concentrates on providing clear, actionable data about your AI search performance through systematic measurement, historical tracking, and competitive analysis within a professional interface.
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
                  href="/faq/keyword-performance-metrics"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → What metrics do you track for keyword performance?
                </Link>
                <Link
                  href="/faq/competitor-analysis"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → Can I monitor competitor performance in AI search?
                </Link>
                <Link
                  href="/faq/data-export"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → Can I export my tracking data?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportingDashboardPage; 