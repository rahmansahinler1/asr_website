import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API Integration - FAQ | AI Search Refs",
  description: "Learn about AI Search Refs API integration options for developers and advanced users",
};

const APIIntegrationPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="API Integration"
        description="Integrating AI Search Refs data with your systems"
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
                  Yes! AI Search Refs provides a comprehensive RESTful API that allows developers to integrate our AI search tracking data directly into their applications, dashboards, and workflows.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    API Features:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Data Access:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Real-time keyword performance data</li>
                        <li>• Brand mention and visibility metrics</li>
                        <li>• Historical tracking data export</li>
                        <li>• Competitor analysis results</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Integration Tools:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• RESTful API endpoints</li>
                        <li>• Webhook notifications</li>
                        <li>• Rate limiting and authentication</li>
                        <li>• Comprehensive documentation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Common Use Cases:
                  </h3>
                  <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                    <li>• Custom dashboard development</li>
                    <li>• Automated reporting systems</li>
                    <li>• Marketing automation workflows</li>
                    <li>• Business intelligence integrations</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 border-l-4 border-purple-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>Developer Resources:</strong> Access detailed API documentation, code examples, and SDKs for popular programming languages to accelerate your integration process.
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

export default APIIntegrationPage; 