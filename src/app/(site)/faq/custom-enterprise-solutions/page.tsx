import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Enterprise Solutions - FAQ | aisearchrefs",
  description: "Yes, we provide custom enterprise solutions. Book a call with us to discuss your specific needs and get a tailored solution within our platform.",
};

const CustomEnterpriseSolutionsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Custom Enterprise Solutions"
        description="Enterprise solutions and custom configurations"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                Do you offer <span className="text-[#FFD66B]">custom enterprise solutions</span>?
              </h1>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-400 p-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-green-700 font-medium font-helvetica">
                        <strong>Yes, we absolutely offer custom enterprise solutions.</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  We understand that enterprise organizations have unique <span className="bg-[#FFD66B] px-1 rounded">ai monitoring</span> needs that go beyond standard plans. That's why we provide fully customized solutions tailored to your specific requirements.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    How Our Custom Solutions Work
                  </h3>
                  
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    You can always <strong>book a call with us</strong> and we will understand your problem deeply and the data that you need. We then provide a custom solution within our platform that addresses your specific challenges.
                  </p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-blue-900 mb-3 font-helvetica">Our Custom Solution Process</h4>
                    <ul className="space-y-3 text-blue-800 font-helvetica">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                        <span><strong>Discovery Call:</strong> We dive deep into your specific <span className="bg-[#FFD66B] px-1 rounded">ai competitor analysis</span> and monitoring requirements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                        <span><strong>Data Assessment:</strong> We analyze what data you need and how it fits into your workflow</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                        <span><strong>Custom Configuration:</strong> We build a tailored solution within our platform</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                        <span><strong>Implementation:</strong> We ensure everything works perfectly for your team</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    What Makes Our Enterprise Solutions Different
                  </h3>
                  
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    Unlike one-size-fits-all approaches, we recognize that enterprise <span className="bg-[#FFD66B] px-1 rounded">ai web search</span> monitoring requires flexibility. Whether you need specialized tracking for multiple brands, custom reporting formats, or integration with your existing analytics stack, we build it specifically for you.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 font-helvetica">Custom Tracking Scope</h4>
                      <p className="text-base text-gray-700 font-helvetica">
                        Track multiple brands, product lines, or market segments with customized monitoring parameters that match your business structure.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 font-helvetica">Tailored Reporting</h4>
                      <p className="text-base text-gray-700 font-helvetica">
                        Get reports formatted exactly how your team needs them, with the metrics that matter most to your organization.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 font-helvetica">Advanced Analytics</h4>
                      <p className="text-base text-gray-700 font-helvetica">
                        Access deeper insights and custom analytics that align with your enterprise decision-making processes.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 font-helvetica">Dedicated Support</h4>
                      <p className="text-base text-gray-700 font-helvetica">
                        Work directly with our team to ensure your custom solution continues to meet your evolving needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Getting Started with Custom Solutions
                  </h3>
                  
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    Every enterprise has unique challenges when it comes to <span className="bg-[#FFD66B] px-1 rounded">ai traffic</span> attribution and competitive intelligence. We're here to understand your specific situation and build exactly what you need.
                  </p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-black font-helvetica mb-3">Ready to discuss your requirements?</h4>
                    <p className="text-base text-gray-700 font-helvetica mb-4">
                      Schedule a call with us to explore how we can create a custom solution that fits perfectly within your organization.
                    </p>
                    <Link 
                      href="/contact" 
                      className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-helvetica"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>

                <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded">
                  <p className="text-base text-gray-700 font-helvetica">
                    <strong>Bottom line:</strong> Yes, we can create custom enterprise solutions. Book a call with us to discuss your specific needs and we'll design a solution that works perfectly for your organization.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Questions */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-black mb-6 font-canela">Related Questions</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/faq/pricing-plans" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50">
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica mb-2">What pricing plans do you offer?</h3>
                  <p className="text-sm text-gray-600 font-helvetica">Learn about our standard pricing options and enterprise solutions.</p>
                </Link>
                <Link href="/faq/technical-support" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50">
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica mb-2">How can I get technical support?</h3>
                  <p className="text-sm text-gray-600 font-helvetica">Discover our comprehensive support options for all customers.</p>
                </Link>
                <Link href="/faq/implementation-help" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50">
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica mb-2">Do you provide implementation assistance?</h3>
                  <p className="text-sm text-gray-600 font-helvetica">Learn about our onboarding and training resources.</p>
                </Link>
                <Link href="/faq/api-integration" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-[#FFD66B]/50">
                  <h3 className="text-lg font-semibold text-black hover:text-[#FFD66B] transition-colors duration-300 font-helvetica mb-2">Do you offer API integration?</h3>
                  <p className="text-sm text-gray-600 font-helvetica">Find out about integration options and data access.</p>
                </Link>
              </div>
            </div>

            {/* Back to FAQ */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link href="/faq" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-helvetica">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to all FAQ questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomEnterpriseSolutionsPage; 