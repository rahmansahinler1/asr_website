import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API Integration - FAQ | aisearchrefs",
  description: "Learn about API integration availability and current platform focus at aisearchrefs",
};

const APIIntegrationPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="API Integration"
        description="API integration availability and platform development focus"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                Do you offer <span className="text-[#FFD66B]">API integration</span>?
              </h1>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  We do not currently offer API integration. Our development focus is concentrated on building and perfecting the core AI search monitoring platform and reporting dashboard functionality.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Current Platform Focus:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    At this stage, we are prioritizing the development of comprehensive AI search measurement capabilities, accurate data collection across AI platforms, and robust reporting features within our web-based dashboard.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Core Platform Development</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Our engineering resources are dedicated to ensuring accurate AI search tracking, reliable data collection, and comprehensive performance measurement across supported AI platforms.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Dashboard Functionality</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        We are building robust reporting and visualization features within the web dashboard to provide comprehensive AI search analytics and competitor analysis capabilities.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    What You Can Access Now:
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Web-Based Dashboard</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Access all AI search monitoring data, performance scores, historical tracking, and competitor analysis through our comprehensive web dashboard interface.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Data Export Options</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Export your tracking data and reports in standard formats for use in external systems and analysis tools.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Comprehensive Reporting</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Generate detailed reports on AI search performance, ranking changes, and competitive analysis directly from the platform.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Future Development Considerations:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    API integration may be considered for future development phases once the core platform capabilities are fully established and proven. Our current priority is ensuring accurate, reliable AI search measurement.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-black font-helvetica mb-3">Development Priorities:</h4>
                    <ul className="space-y-2 text-base text-gray-700 font-helvetica">
                      <li>• Accurate AI search data collection and measurement</li>
                      <li>• Comprehensive dashboard functionality and visualizations</li>
                      <li>• Reliable competitor analysis and benchmarking features</li>
                      <li>• Historical data tracking and trend analysis</li>
                      <li>• Platform stability and performance optimization</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Alternative Integration Options:
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Data Export Integration</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Use exported data files to integrate AI search performance metrics into your existing business intelligence tools and reporting systems.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Manual Data Transfer</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Access comprehensive reports and data visualizations through the web dashboard for manual integration into your workflow and analysis processes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 border-l-4 border-gray-400 rounded">
                  <p className="text-base text-gray-700 font-helvetica">
                    <strong>Current Focus:</strong> We are committed to delivering accurate, comprehensive AI search monitoring through our web platform. API integration will be evaluated based on user needs and platform maturity in future development cycles.
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

            <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                Related Questions
              </h3>
              <div className="space-y-3">
                <Link
                  href="/faq/data-export"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → Can I export my tracking data?
                </Link>
                <Link
                  href="/faq/reporting-dashboard"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → What does the reporting dashboard include?
                </Link>
                <Link
                  href="/faq/technical-support"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → How can I get technical support?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default APIIntegrationPage; 