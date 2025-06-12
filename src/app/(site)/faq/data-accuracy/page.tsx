import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Accuracy - FAQ | AI Search Refs",
  description: "Understanding the accuracy and reliability of AI Search Refs tracking data and methodologies",
};

const DataAccuracyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Data Accuracy"
        description="Understanding our tracking data accuracy and reliability"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                How accurate is your <span className="text-[#FFD66B]">tracking data</span>?
              </h1>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  AI Search Refs maintains industry-leading accuracy through advanced monitoring technologies, multiple verification methods, and continuous system updates to ensure reliable tracking data.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Accuracy Standards:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Data Quality:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• 99.5% uptime and reliability</li>
                        <li>• Real-time data validation</li>
                        <li>• Multi-source verification</li>
                        <li>• Regular accuracy audits</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Quality Assurance:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Automated error detection</li>
                        <li>• Human verification processes</li>
                        <li>• Continuous system monitoring</li>
                        <li>• Regular algorithm updates</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    How We Ensure Accuracy:
                  </h3>
                  <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                    <li>• Advanced AI models for content analysis and classification</li>
                    <li>• Cross-platform verification and consistency checks</li>
                    <li>• Regular calibration against manual testing results</li>
                    <li>• Continuous monitoring of AI search engine changes</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>Commitment to Quality:</strong> We continuously invest in improving our tracking accuracy and provide transparent reporting on data quality metrics to ensure you can trust our insights.
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

export default DataAccuracyPage; 