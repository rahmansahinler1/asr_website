import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Trial - FAQ | aisearchrefs",
  description: "Learn about our pricing policy and why we focus on quality service over free trials",
};

const FreeTrialPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Free Trial"
        description="Our approach to pricing and service quality"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                Do you offer a <span className="text-[#FFD66B]">free trial</span>?
              </h1>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  We don't offer free trials or freemium packages. This is a deliberate choice that allows us to focus on delivering quality service to our paying customers rather than supporting marketing-driven free usage.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Our Approach to Pricing:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    Similar to companies like Ahrefs, we believe in a straightforward approach: customers pay for what they use, not for our marketing needs. This philosophy helps us maintain focus on what matters most - providing excellent AI search monitoring service.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Quality Over Quantity</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        We've found that one paying customer typically contributes more value than a hundred unpaid users. This allows us to invest our resources in platform development, accurate data collection, and customer support rather than managing free accounts.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Focused Service Delivery</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Without the overhead of supporting free users, we can dedicate our engineering and support resources to improving the platform for customers who are actively using our AI search monitoring capabilities.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Why This Benefits You:
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Better Platform Performance</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Our servers and resources are optimized for paying customers, ensuring reliable performance and faster data processing for AI search monitoring.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Enhanced Support Quality</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        All customers receive priority support because we're not dividing our attention between free and paid users. Every customer gets the same high-quality assistance.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Continuous Platform Development</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Revenue from paying customers goes directly into platform improvements, new features, and maintaining accurate AI search data collection across all supported platforms.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    What We Offer Instead:
                  </h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-black font-helvetica mb-2">Transparent Pricing</h4>
                        <p className="text-base text-gray-700 font-helvetica mb-2">
                          Clear, straightforward pricing with no hidden costs. You know exactly what you're paying for and what you'll receive.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-black font-helvetica mb-2">Immediate Full Access</h4>
                        <p className="text-base text-gray-700 font-helvetica mb-2">
                          Once you subscribe, you get complete access to all features in your plan immediately - no limitations or gradual feature unlocking.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-black font-helvetica mb-2">Dedicated Onboarding</h4>
                        <p className="text-base text-gray-700 font-helvetica mb-2">
                          Personal assistance to help you set up your AI search monitoring effectively from day one, ensuring you get value immediately.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Making the Right Choice:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    We understand that choosing a paid service without a trial requires confidence in the platform. Here's how we help you make an informed decision:
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Detailed Platform Information</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Our FAQ, blog posts, and documentation provide comprehensive information about exactly what our AI search monitoring platform does and how it works.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Direct Support Consultation</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Contact our support team to discuss your specific needs and understand how our platform can address your AI search monitoring requirements.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black font-helvetica mb-2">Flexible Plan Options</h4>
                      <p className="text-base text-gray-600 font-helvetica mb-2">
                        Start with our Starter plan at $49.99/month to test the platform's value for your business, then upgrade as needed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded">
                  <p className="text-base text-gray-700 font-helvetica">
                    <strong>Our Commitment:</strong> We don't make customers pay for our marketing needs. Every dollar you spend goes toward providing accurate AI search monitoring, reliable platform performance, and quality customer support.
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
                  href="/faq/technical-support"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → How can I get technical support?
                </Link>
                <Link
                  href="/faq/keyword-tracking-setup"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → How do I set up keyword tracking?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeTrialPage; 