import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plan Upgrades - FAQ | AI Search Refs",
  description: "Learn about upgrading or downgrading your AI Search Refs plan and billing flexibility",
};

const PlanUpgradesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Plan Upgrades"
        description="Upgrading or downgrading your subscription plan"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                Can I upgrade or downgrade my <span className="text-[#FFD66B]">plan</span>?
              </h1>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  Yes! AI Search Refs offers complete flexibility with plan changes. You can upgrade or downgrade your subscription at any time to match your evolving business needs.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Plan Change Process:
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Upgrades</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Instant access to new features and increased limits. Prorated billing ensures you only pay for the time you use.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Downgrades</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Changes take effect at your next billing cycle. You'll retain access to current features until then.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    How It Works:
                  </h3>
                  <ol className="space-y-2 text-base text-gray-600 font-helvetica">
                    <li>1. Access your account settings dashboard</li>
                    <li>2. Select "Change Plan" option</li>
                    <li>3. Choose your new plan and confirm changes</li>
                    <li>4. Billing adjustments are handled automatically</li>
                  </ol>
                </div>

                <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>No Commitment:</strong> Change your plan as often as needed. No long-term contracts or penalties for plan modifications.
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

export default PlanUpgradesPage; 