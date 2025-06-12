import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Search Ranking Factors - FAQ | AI Search Refs",
  description: "Understanding the key factors that influence rankings in AI search engines and how to optimize for them",
};

const AISearchRankingFactorsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="AI Search Ranking Factors"
        description="Key factors that influence AI search engine rankings"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                What are the key <span className="text-[#FFD66B]">ranking factors</span> for AI search engines?
              </h1>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  AI search engines use different ranking factors than traditional search engines, focusing on content quality, accuracy, and contextual relevance rather than traditional SEO signals.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Primary Ranking Factors:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Content Quality:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Factual accuracy and reliability</li>
                        <li>• Comprehensive information coverage</li>
                        <li>• Clear and structured presentation</li>
                        <li>• Up-to-date and current content</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Authority & Trust:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Source credibility and reputation</li>
                        <li>• Expert authorship and credentials</li>
                        <li>• Citation and reference quality</li>
                        <li>• Domain authority and trustworthiness</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    AI-Specific Factors:
                  </h3>
                  <ul className="space-y-3 text-base text-gray-600 font-helvetica">
                    <li>• <strong>Contextual Relevance:</strong> How well content matches user intent and query context</li>
                    <li>• <strong>Natural Language Quality:</strong> Conversational tone and readability for AI processing</li>
                    <li>• <strong>Structured Data:</strong> Machine-readable content organization and markup</li>
                    <li>• <strong>Entity Recognition:</strong> Clear identification of brands, people, places, and concepts</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 border-l-4 border-red-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>Important Note:</strong> AI search ranking factors continue to evolve. Focus on creating high-quality, accurate content that genuinely helps users rather than trying to game the system.
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

export default AISearchRankingFactorsPage; 