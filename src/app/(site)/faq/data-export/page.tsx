import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Export - FAQ | AI Search Refs",
  description: "Learn about data export options and formats available in AI Search Refs",
};

const DataExportPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Data Export"
        description="Exporting your tracking data and reports"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                Can I export my <span className="text-[#FFD66B]">data</span>?
              </h1>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  Absolutely! AI Search Refs provides comprehensive data export capabilities, allowing you to download your tracking data in multiple formats for analysis, reporting, or integration with other tools.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Export Options:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Available Formats:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• CSV (Excel compatible)</li>
                        <li>• JSON (API format)</li>
                        <li>• PDF (formatted reports)</li>
                        <li>• Excel (.xlsx) files</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Data Types:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Keyword performance data</li>
                        <li>• Brand mention reports</li>
                        <li>• Historical tracking data</li>
                        <li>• Competitor analysis results</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    How to Export:
                  </h3>
                  <ol className="space-y-2 text-base text-gray-600 font-helvetica">
                    <li>1. Navigate to the data or report you want to export</li>
                    <li>2. Click the "Export" button in the dashboard</li>
                    <li>3. Select your preferred format and date range</li>
                    <li>4. Download the file or receive it via email</li>
                  </ol>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>Flexible Data Access:</strong> Export data for specific date ranges, keywords, or AI engines. Schedule automatic exports or download on-demand as needed.
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

export default DataExportPage; 