import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Export - FAQ | aisearchrefs",
  description: "Learn about data export options: CSV, Excel formats and email delivery available in aisearchrefs",
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
                Can I export my <span className="text-[#FFD66B]">tracking data</span>?
              </h1>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  Yes, you can export your tracking data and reports from aisearchrefs. We provide multiple export formats and delivery options to meet your data analysis and reporting needs.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Available Export Formats:
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-3">CSV Format</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Export your AI search tracking data in CSV (Comma-Separated Values) format. This format is compatible with most data analysis tools, spreadsheet applications, and business intelligence platforms.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-3">Excel Format</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Download your reports in Excel format (.xlsx) for immediate use in Microsoft Excel or other spreadsheet applications. This format preserves formatting and allows for advanced data manipulation.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Email Delivery Option:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    We can send your tracking reports directly to your email address. This feature is convenient for regular reporting, sharing data with team members, or maintaining automated backup copies of your AI search performance data.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-black font-helvetica mb-3">Email Report Features:</h4>
                    <ul className="space-y-2 text-base text-gray-700 font-helvetica">
                      <li>• Direct delivery to your specified email address</li>
                      <li>• Reports sent in your preferred format (CSV or Excel)</li>
                      <li>• Convenient for team sharing and collaboration</li>
                      <li>• Automated backup of your tracking data</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    What Data Can Be Exported:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Performance Data:</h4>
                      <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                        <li>• AI search ranking positions</li>
                        <li>• Performance scores and metrics</li>
                        <li>• Historical tracking data</li>
                        <li>• Trend analysis results</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Analysis Reports:</h4>
                      <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                        <li>• Brand mention analytics</li>
                        <li>• Competitor analysis results</li>
                        <li>• Reference traction data</li>
                        <li>• Direct link performance metrics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    How to Export Your Data:
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Dashboard Export</h4>
                      <ol className="space-y-2 text-base text-gray-600 font-helvetica ml-4">
                        <li>1. Navigate to the report or data section you want to export</li>
                        <li>2. Click the "Export" button in the dashboard interface</li>
                        <li>3. Select your preferred format (CSV or Excel)</li>
                        <li>4. Choose to download immediately or receive via email</li>
                      </ol>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Email Delivery Setup</h4>
                      <ol className="space-y-2 text-base text-gray-600 font-helvetica ml-4">
                        <li>1. Select the email delivery option during export</li>
                        <li>2. Confirm your email address for report delivery</li>
                        <li>3. Choose your preferred file format</li>
                        <li>4. Receive the report directly in your inbox</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Export Use Cases:
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Data Analysis</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Use exported CSV or Excel files for advanced data analysis, custom reporting, or integration with your existing business intelligence tools.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Team Collaboration</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Share AI search performance data with team members, stakeholders, or external consultants through email delivery or file sharing.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Record Keeping</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Maintain historical records of your AI search performance for compliance, auditing, or long-term trend analysis purposes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded">
                  <p className="text-base text-gray-700 font-helvetica">
                    <strong>Flexible Data Access:</strong> Export your AI search tracking data in CSV or Excel format, with the convenience of email delivery for seamless integration into your workflow and analysis processes.
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
                  href="/faq/reporting-dashboard"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → What does the reporting dashboard include?
                </Link>
                <Link
                  href="/faq/api-integration"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → Do you offer API integration?
                </Link>
                <Link
                  href="/faq/automated-reports"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → Can I schedule automated reports?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataExportPage; 