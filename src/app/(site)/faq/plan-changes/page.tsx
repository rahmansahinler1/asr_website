import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plan Changes - FAQ | aisearchrefs",
  description: "Learn about upgrading or downgrading your aisearchrefs plan anytime and our 2-week money-back guarantee",
};

const PlanUpgradesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Plan Changes"
        description="Upgrading or downgrading your subscription plan anytime"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                Can I upgrade or downgrade my <span className="text-[#FFD66B]">plan anytime</span>?
              </h1>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  Yes, you can upgrade or downgrade your plan anytime. We offer complete flexibility with plan changes to match your evolving business needs, plus a 2-week money-back guarantee if you're not satisfied with our services.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Plan Change Flexibility:
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Upgrade Anytime</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Upgrade from Starter to Pro or to Enterprise custom solutions at any time. You'll get immediate access to new features and enhanced capabilities with prorated billing.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Downgrade Anytime</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Downgrade from Pro to Starter or adjust your plan based on changing needs. Changes take effect at your next billing cycle, and you'll retain access to current features until then.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">No Restrictions</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Change your plan as often as needed. There are no limitations on how frequently you can upgrade or downgrade your subscription.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    2-Week Money-Back Guarantee:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    If you don't like our services after you purchase them, you can always get your money back within two weeks. This guarantee applies to all our plans and gives you confidence to try our AI search monitoring platform.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="font-semibold text-black font-helvetica mb-3">Money-Back Guarantee Details:</h4>
                    <ul className="space-y-2 text-base text-gray-700 font-helvetica">
                      <li>• Full refund available within 2 weeks of purchase</li>
                      <li>• Applies to all Starter and Pro plan subscriptions</li>
                      <li>• No questions asked - simple refund process</li>
                      <li>• Contact support to request your refund</li>
                      <li>• Refund processed within 3-5 business days</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    How to Change Your Plan:
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Through Your Account Dashboard</h4>
                      <ol className="space-y-2 text-base text-gray-600 font-helvetica ml-4">
                        <li>1. Log into your aisearchrefs account</li>
                        <li>2. Navigate to account settings or billing section</li>
                        <li>3. Select "Change Plan" or "Manage Subscription"</li>
                        <li>4. Choose your new plan and confirm the changes</li>
                        <li>5. Billing adjustments are handled automatically</li>
                      </ol>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Contact Support</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Our support team can help you change your plan or discuss which plan best fits your needs. Contact us anytime for assistance with plan changes.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Billing and Prorations:
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Upgrade Billing</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        When you upgrade, you'll be charged the prorated difference immediately and get instant access to new features. Your billing cycle remains the same.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Downgrade Billing</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Downgrades take effect at your next billing cycle. You'll continue to have access to your current plan features until the billing period ends.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">No Hidden Fees</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        There are no fees for changing plans. You only pay for the service you're using, with transparent pricing and automatic billing adjustments.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Why We Offer This Flexibility:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    Your business needs change, and your AI search monitoring plan should adapt with you. We want you to have the right level of service for your current requirements without being locked into long-term commitments.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Business Growth</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Start with our Starter plan and upgrade to Pro as your AI search monitoring needs grow.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Seasonal Adjustments</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Adjust your plan based on seasonal business changes or varying monitoring requirements.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Risk-Free Testing</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Try different plan levels with confidence, knowing you can change anytime and get your money back within 2 weeks if not satisfied.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-base text-gray-700 font-helvetica">
                    <strong>Complete Flexibility:</strong> Upgrade or downgrade anytime with no restrictions, plus a 2-week money-back guarantee. We want you to have the right plan for your needs with complete confidence in your purchase.
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
                  href="/faq/pricing-plans"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → What pricing plans do you offer?
                </Link>
                <Link
                  href="/faq/free-trial"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → Do you offer a free trial?
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

export default PlanUpgradesPage; 