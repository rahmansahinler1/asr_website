import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Keyword Recommendations - FAQ | AI Search Refs",
  description: "Learn about AI Search Refs keyword recommendation features and how to discover new opportunities",
};

const KeywordRecommendationsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Keyword Recommendations"
        description="Discovering new keyword opportunities with AI Search Refs"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                Do you provide <span className="text-[#FFD66B]">keyword recommendations</span>?
              </h1>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  Yes! AI Search Refs provides intelligent keyword recommendations based on AI search patterns, your industry, and competitor analysis to help you discover new opportunities for brand visibility.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Recommendation Types:
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">AI-Powered Suggestions</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Our AI analyzes search patterns across AI engines to suggest relevant keywords and phrases that could improve your brand visibility.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Competitor Analysis</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Discover keywords your competitors rank for but you don't, identifying potential gaps in your AI search strategy.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Trending Opportunities</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Get recommendations for emerging keywords and topics gaining traction in AI search results within your industry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 border-l-4 border-purple-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>Smart Recommendations:</strong> Our recommendation engine learns from your brand's performance and continuously suggests new keywords based on AI search trends and competitor intelligence.
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

export default KeywordRecommendationsPage; 