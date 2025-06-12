import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is AI Search Refs? - FAQ | AI Search Refs",
  description: "Learn about AI Search Refs, our comprehensive platform for tracking and monitoring brand visibility in AI search engines",
};

const WhatIsAISearchRefsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="What is AI Search Refs?"
        description="Understanding our AI search tracking and brand monitoring platform"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Question */}
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                What is <span className="text-[#FFD66B]">AI Search Refs</span>?
              </h1>
            </div>

            {/* Answer */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  AI Search Refs is a comprehensive platform designed to help businesses track and monitor their brand visibility across AI-powered search engines. As AI search becomes increasingly important for online discovery, our platform provides the tools you need to understand, track, and optimize your brand's presence in this new landscape.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Key Features:
                  </h3>
                  <ul className="space-y-3 text-base text-gray-600 font-helvetica">
                    <li>• <strong>AI Search Tracking:</strong> Monitor how your brand appears in AI search results across multiple platforms</li>
                    <li>• <strong>Brand Visibility Analytics:</strong> Get detailed insights into your brand's performance and visibility metrics</li>
                    <li>• <strong>Competitor Analysis:</strong> Compare your brand's AI search performance against competitors</li>
                    <li>• <strong>Keyword Monitoring:</strong> Track specific keywords and phrases related to your brand or industry</li>
                    <li>• <strong>Real-time Alerts:</strong> Receive notifications when your brand is mentioned or when changes occur</li>
                    <li>• <strong>Performance Dashboards:</strong> Access comprehensive reporting and analytics tools</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Why AI Search Refs?
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                    As AI search engines like ChatGPT, Claude, Perplexity, and others reshape how people discover information, traditional SEO strategies need to evolve. AI Search Refs bridges this gap by providing specialized tools and insights for the AI search ecosystem, helping businesses maintain and improve their digital presence in this new era of search.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Perfect For:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Digital marketing teams</li>
                      <li>• SEO professionals</li>
                      <li>• Brand managers</li>
                      <li>• Content strategists</li>
                    </ul>
                    <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                      <li>• Business owners</li>
                      <li>• Marketing agencies</li>
                      <li>• Enterprise organizations</li>
                      <li>• Growth teams</li>
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