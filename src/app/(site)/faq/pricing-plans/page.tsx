import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing Plans - FAQ | AI Search Refs",
  description: "Overview of AI Search Refs pricing plans and features for different business needs",
};

const PricingPlansPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pricing Plans"
        description="Understanding our pricing plans and features"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                What <span className="text-[#FFD66B]">pricing plans</span> do you offer?
              </h1>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  AI Search Refs offers flexible pricing plans designed to meet the needs of businesses of all sizes, from startups to enterprise organizations, with transparent pricing and no hidden fees.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Available Plans:
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-black font-helvetica">Starter Plan</h4>
                        <span className="text-sm text-green-600 font-helvetica font-semibold">$49/month</span>
                      </div>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Perfect for small businesses and startups. Includes basic tracking for up to 25 keywords across all major AI engines.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-black font-helvetica">Professional Plan</h4>
                        <span className="text-sm text-blue-600 font-helvetica font-semibold">$149/month</span>
                      </div>
                      <p className="text-sm text-gray-600 font-helvetica">
                        Ideal for growing businesses. Includes advanced analytics, competitor tracking, and up to 100 keywords.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-black font-helvetica">Enterprise Plan</h4>
                        <span className="text-sm text-purple-600 font-helvetica font-semibold">Custom Pricing</span>
                      </div>
                      <p className="text-sm text-gray-600 font-helvetica">
                        For large organizations with custom requirements. Unlimited keywords, white-label options, and dedicated support.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    All Plans Include:
                  </h3>
                  <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                    <li>• Real-time AI search engine monitoring</li>
                    <li>• Brand visibility tracking and analytics</li>
                    <li>• Automated reporting and alerts</li>
                    <li>• Customer support and onboarding</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>Flexible Billing:</strong> Choose monthly or annual billing with significant savings on annual plans. All plans include a 14-day free trial and 30-day money-back guarantee.
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

export default PricingPlansPage; 