import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Competitor Analysis - FAQ | AI Search Refs",
  description: "Learn how to compare your brand's AI search performance with competitors using AI Search Refs",
};

const CompetitorAnalysisPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Competitor Analysis"
        description="Comparing your AI search performance with competitors"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                Can I compare my brand's AI search performance with <span className="text-[#FFD66B]">competitors</span>?
              </h1>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  Absolutely! AI Search Refs provides comprehensive competitor analysis tools that allow you to benchmark your brand's AI search performance against competitors and identify opportunities for improvement.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    What You Can Compare:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Performance Metrics:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Brand mention frequency</li>
                        <li>• Keyword ranking positions</li>
                        <li>• Visibility scores across AI engines</li>
                        <li>• Response quality ratings</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Strategic Insights:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Competitor keyword gaps</li>
                        <li>• Market share analysis</li>
                        <li>• Trending topic identification</li>
                        <li>• Content strategy comparisons</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Analysis Features:
                  </h3>
                  <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                    <li>• Side-by-side performance comparisons</li>
                    <li>• Historical trend analysis vs competitors</li>
                    <li>• Competitive keyword opportunity identification</li>
                    <li>• Market positioning insights</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>Competitive Intelligence:</strong> Use competitor insights to identify content gaps, discover new keyword opportunities, and develop strategies to improve your AI search performance.
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

export default CompetitorAnalysisPage; 