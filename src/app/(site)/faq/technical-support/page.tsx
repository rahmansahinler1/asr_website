import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technical Support - FAQ | AI Search Refs",
  description: "Learn about technical support options and how to get help with AI Search Refs",
};

const TechnicalSupportPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Technical Support"
        description="Getting help and technical support"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                How can I get <span className="text-[#FFD66B]">technical support</span>?
              </h1>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  AI Search Refs provides comprehensive technical support through multiple channels to ensure you get the help you need quickly and efficiently.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Support Channels:
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Live Chat</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Instant help during business hours (9 AM - 6 PM EST). Get immediate assistance with urgent issues.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Email Support</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Detailed support via email with typical response times under 4 hours during business days.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-semibold text-black font-helvetica mb-2">Knowledge Base</h4>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Comprehensive documentation, tutorials, and troubleshooting guides available 24/7.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Support Levels:
                  </h3>
                  <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                    <li>• <strong>Standard Support:</strong> Included with all plans</li>
                    <li>• <strong>Priority Support:</strong> Available for Professional+ plans</li>
                    <li>• <strong>Dedicated Support:</strong> Enterprise customers get dedicated representatives</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>Expert Help:</strong> Our support team consists of AI search specialists who understand both the technical aspects and strategic implications of AI search optimization.
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

export default TechnicalSupportPage; 