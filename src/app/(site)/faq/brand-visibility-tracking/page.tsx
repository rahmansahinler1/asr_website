import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand Visibility Tracking - FAQ | AI Search Refs",
  description: "Learn how AI Search Refs tracks and measures your brand's visibility across AI search engines",
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
                  Brand visibility tracking monitors how often and in what context your brand appears in AI search results. We analyze mentions, rankings, and sentiment across all major AI platforms to provide comprehensive visibility insights.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    What We Track:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Brand Mentions:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Direct brand name references</li>
                        <li>• Product and service mentions</li>
                        <li>• Context and sentiment analysis</li>
                        <li>• Frequency and trending data</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Performance Metrics:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Visibility score calculations</li>
                        <li>• Ranking position tracking</li>
                        <li>• Competitor comparisons</li>
                        <li>• Historical trend analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>Real-time Monitoring:</strong> Our system continuously scans AI search engines to track changes in your brand's visibility, alerting you to significant shifts in performance or new mention patterns.
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

export default BrandVisibilityTrackingPage; 