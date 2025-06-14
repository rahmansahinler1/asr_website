import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is aisearchrefs? - FAQ | aisearchrefs",
  description: "Learn about aisearchrefs, our AI monitoring platform that measures and scores brand visibility across AI search engines",
};

const WhatIsAISearchRefsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="What is aisearchrefs?"
        description="Understanding our AI traffic measurement and scoring platform"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Question */}
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                What is <span className="text-[#FFD66B]">aisearchrefs</span>?
              </h1>
            </div>

            {/* Answer */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  Our platform aisearchrefs is an AI monitoring solution that measures and scores brand visibility across AI search engines. We track how often your brand appears in ChatGPT, Claude, Gemini, and other AI platforms, providing data-driven insights into your AI web search performance without offering optimization or content services.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    What We Measure:
                  </h3>
                  <ul className="space-y-3 text-base text-gray-600 font-helvetica">
                    <li>• <strong>AI Traffic Scoring:</strong> Quantify your brand's visibility across AI platforms with precise metrics</li>
                    <li>• <strong>AI Monitoring:</strong> Track mention frequency and context positioning in AI responses</li>
                    <li>• <strong>AI Competitor Analysis:</strong> Benchmark your performance against rivals in AI search results</li>
                    <li>• <strong>Platform Coverage:</strong> Measure visibility across ChatGPT, Claude, Gemini, Perplexity, and emerging AI engines</li>
                    <li>• <strong>Performance Scoring:</strong> Receive standardized scores that quantify your AI search presence</li>
                    <li>• <strong>Data Analytics:</strong> Access comprehensive measurement dashboards and trend analysis</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Why Choose aisearchrefs?
                  </h3>
                                      <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      Traditional analytics cannot track AI-driven discovery. When customers find brands through AI conversations, this traffic appears as direct visits with no attribution data. Our monitoring platform aisearchrefs fills this measurement gap by systematically tracking and scoring your AI web search visibility, providing the missing intelligence that conventional tools cannot capture.
                    </p>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Perfect For:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Brand managers tracking AI visibility</li>
                      <li>• Marketing teams measuring AI traffic</li>
                      <li>• Competitive intelligence analysts</li>
                      <li>• Digital strategists</li>
                    </ul>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Performance measurement teams</li>
                      <li>• Business intelligence professionals</li>
                      <li>• Market research specialists</li>
                      <li>• Data-driven marketers</li>
                    </ul>
                  </div>
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
                  href="/faq/getting-started-guide"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → How do I get started with AI SEO tracking?
                </Link>
                <Link
                  href="/faq/supported-ai-engines"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → Which AI search engines do you support?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatIsAISearchRefsPage; 