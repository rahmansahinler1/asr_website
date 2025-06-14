import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Do I Know This Is Working? - FAQ | aisearchrefs",
  description: "Learn how to verify that aisearchrefs AI monitoring is working correctly with our open source testing platform and transparent methodologies",
};

const GettingStartedGuidePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="How Do I Know This Is Working?"
        description="Verify the reliability and accuracy of your AI monitoring results"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Question */}
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                How do I know <span className="text-[#FFD66B]">this is working</span>?
              </h1>
            </div>

            {/* Answer */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  We understand your need to verify that our AI monitoring platform delivers accurate and reliable results. That's why we've built complete transparency into our measurement process with verifiable methodologies and open source testing.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Open Source Testing Platform:
                  </h3>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                    <p className="text-base text-gray-700 font-helvetica mb-4">
                      <strong>Complete Transparency:</strong> We provide an open source testing platform where you can see real AI monitoring results by yourself and verify our method implementations directly.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                      <li>• View live test queries and AI responses in real-time</li>
                      <li>• Examine our measurement algorithms and scoring methodologies</li>
                      <li>• Run your own test cases to verify accuracy</li>
                      <li>• Compare our results with your manual testing</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    How to Verify Results:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#FFD66B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-black">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black font-helvetica">Manual Cross-Checking</h4>
                        <p className="text-sm text-gray-600 font-helvetica">Test some queries yourself in ChatGPT, Claude, or Gemini and compare with our reported results. You'll see direct correlation with our AI traffic measurement data.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#FFD66B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-black">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black font-helvetica">Open Source Verification</h4>
                        <p className="text-sm text-gray-600 font-helvetica">Access our open testing platform to see exactly how we query AI systems and calculate scores. Our methodology is completely transparent and verifiable.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#FFD66B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-black">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black font-helvetica">Benchmark Against Competitors</h4>
                        <p className="text-sm text-gray-600 font-helvetica">Use AI competitor analysis data to validate patterns. If known market leaders score higher in our system, you know the measurements reflect reality.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#FFD66B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-black">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black font-helvetica">Track Pattern Changes</h4>
                        <p className="text-sm text-gray-600 font-helvetica">Monitor how your scores change over time. Reliable AI monitoring should show consistent patterns that align with your content updates and market activities.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Signs Our AI Monitoring Is Working:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-2 font-semibold text-black font-helvetica">Measurement Accuracy:</h4>
                      <ul className="space-y-1 text-sm text-gray-600 font-helvetica">
                        <li>• Scores align with manual testing</li>
                        <li>• Competitor rankings match market reality</li>
                        <li>• Trends correlate with business activities</li>
                        <li>• Data consistency across platforms</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-black font-helvetica">System Reliability:</h4>
                      <ul className="space-y-1 text-sm text-gray-600 font-helvetica">
                        <li>• Regular data updates and fresh results</li>
                        <li>• Transparent methodology documentation</li>
                        <li>• Open source code verification</li>
                        <li>• Predictable measurement patterns</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    What Makes Our Results Trustworthy:
                  </h3>
                  <ul className="space-y-3 text-base text-gray-600 font-helvetica">
                    <li>• <strong>Open Source Testing:</strong> Complete transparency in our measurement methods</li>
                    <li>• <strong>Real-Time Verification:</strong> You can test our results immediately with manual queries</li>
                    <li>• <strong>Consistent Methodology:</strong> Same measurement approach across all AI web search platforms</li>
                    <li>• <strong>Verifiable Data:</strong> All scoring algorithms available for inspection</li>
                    <li>• <strong>Cross-Platform Validation:</strong> Results validated across multiple AI engines</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>Confidence Guarantee:</strong> Our open source testing platform eliminates doubt about result accuracy. You can verify every measurement yourself and see exactly how we generate our AI monitoring scores.
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
                  href="/faq/what-is-ai-search-refs"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → What is aisearchrefs?
                </Link>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GettingStartedGuidePage; 