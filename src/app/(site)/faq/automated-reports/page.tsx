import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automated Reports - FAQ | AI Search Refs",
  description: "Learn about AI Search Refs automated reporting features and how to schedule regular performance updates",
};

const AutomatedReportsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Automated Reports"
        description="Setting up automated performance reports"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                Can I receive <span className="text-[#FFD66B]">automated reports</span>?
              </h1>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  Yes! AI Search Refs offers comprehensive automated reporting features that deliver regular performance updates directly to your inbox, keeping you informed about your brand's AI search performance without manual checking.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Report Types:
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Performance Summaries</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Weekly or monthly overviews of your brand's AI search performance, including key metrics and trends.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Keyword Reports</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Detailed analysis of keyword performance, ranking changes, and new opportunities.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Competitor Intelligence</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Regular updates on competitor performance and market positioning changes.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Customization Options:
                  </h3>
                  <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                    <li>• Choose report frequency (daily, weekly, monthly)</li>
                    <li>• Select specific metrics and data points</li>
                    <li>• Customize recipient lists and delivery times</li>
                    <li>• Include executive summaries or detailed analytics</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>Stay Informed:</strong> Automated reports ensure your team stays updated on AI search performance trends and can quickly respond to significant changes or opportunities.
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

export default AutomatedReportsPage; 