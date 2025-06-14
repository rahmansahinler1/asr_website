import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing Plans - FAQ | aisearchrefs",
  description: "Overview of aisearchrefs pricing plans: Starter, Pro, and custom Enterprise solutions for different business needs",
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
                  We offerr two main pricing plans plus custom enterprise solutions to meet different business needs. All plans include priority support and comprehensive AI search monitoring with transparent monthly pricing.
                </p>

                <div>
                  <h3 className="mb-6 text-xl font-bold text-black font-helvetica">
                    Available Pricing Plans:
                  </h3>
                  <div className="space-y-6">
                    <div className="p-6 border-2 border-green-200 rounded-lg bg-green-50">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-black font-helvetica mb-2">Starter Plan</h4>
                          <p className="text-base text-gray-600 font-helvetica">
                            Perfect for small businesses and individual professionals getting started with AI search monitoring.
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-green-600 font-helvetica">$49.99</span>
                          <p className="text-sm text-gray-500 font-helvetica">per month</p>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-black font-helvetica mb-2">Starter Plan Features:</h5>
                        <ul className="space-y-1 text-base text-gray-600 font-helvetica">
                          <li>• AI search monitoring across supported platforms</li>
                          <li>• Basic performance scoring and ranking tracking</li>
                          <li>• Historical data access and trend analysis</li>
                          <li>• Standard reporting dashboard</li>
                          <li>• Priority support</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-6 border-2 border-blue-200 rounded-lg bg-blue-50">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-black font-helvetica mb-2">Pro Plan</h4>
                          <p className="text-base text-gray-600 font-helvetica">
                            Ideal for growing businesses that need advanced analytics and competitor analysis capabilities.
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-blue-600 font-helvetica">$99.99</span>
                          <p className="text-sm text-gray-500 font-helvetica">per month</p>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-black font-helvetica mb-2">Pro Plan Features:</h5>
                        <ul className="space-y-1 text-base text-gray-600 font-helvetica">
                          <li>• All Starter plan features included</li>
                          <li>• Advanced competitor analysis and benchmarking</li>
                          <li>• Enhanced performance visualizations and AI search graphs</li>
                          <li>• Direct link and reference traction analytics</li>
                          <li>• Data export in CSV and Excel formats</li>
                          <li>• Email report delivery</li>
                          <li>• Priority support</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-6 border-2 border-purple-200 rounded-lg bg-purple-50">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-black font-helvetica mb-2">Enterprise Solutions</h4>
                          <p className="text-base text-gray-600 font-helvetica">
                            Custom solutions for large organizations with specific requirements and unique business needs.
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-purple-600 font-helvetica">Custom</span>
                          <p className="text-sm text-gray-500 font-helvetica">pricing</p>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-black font-helvetica mb-2">Enterprise Solutions Include:</h5>
                        <ul className="space-y-1 text-base text-gray-600 font-helvetica">
                          <li>• All Pro plan features included</li>
                          <li>• Custom solutions tailored to your specific needs</li>
                          <li>• Flexible implementation and integration options</li>
                          <li>• Dedicated account management and support</li>
                          <li>• Custom reporting and analytics configurations</li>
                          <li>• Scalable solutions for large-scale monitoring</li>
                          <li>• Priority technical support and consultation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    All Plans Include:
                  </h3>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-black font-helvetica mb-3">Core Features:</h4>
                        <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                          <li>• AI search monitoring across supported platforms</li>
                          <li>• Performance scoring and ranking system</li>
                          <li>• Historical data tracking and analysis</li>
                          <li>• Web-based reporting dashboard</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black font-helvetica mb-3">Support & Access:</h4>
                        <ul className="space-y-2 text-base text-gray-600 font-helvetica">
                          <li>• Priority support for all customers</li>
                          <li>• Customer onboarding assistance</li>
                          <li>• Regular platform updates and improvements</li>
                          <li>• Secure data handling and privacy protection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Plan Comparison Summary:
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left font-helvetica font-semibold">Feature</th>
                          <th className="border border-gray-300 p-3 text-center font-helvetica font-semibold">Starter<br/>$49.99/mo</th>
                          <th className="border border-gray-300 p-3 text-center font-helvetica font-semibold">Pro<br/>$99.99/mo</th>
                          <th className="border border-gray-300 p-3 text-center font-helvetica font-semibold">Enterprise<br/>Custom</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-helvetica">AI Search Monitoring</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">✓</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">✓</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">✓</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-helvetica">Competitor Analysis</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">Basic</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">✓</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">✓</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-helvetica">Data Export (CSV/Excel)</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">-</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">✓</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">✓</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-helvetica">Email Report Delivery</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">-</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">✓</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">✓</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-helvetica">Priority Support</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">✓</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">✓</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">✓</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-helvetica">Custom Solutions</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">-</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">-</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">✓</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-helvetica">Dedicated Account Management</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">-</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">-</td>
                          <td className="border border-gray-300 p-3 text-center font-helvetica">✓</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Enterprise Custom Solutions:
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica mb-4">
                    We provide custom solutions for enterprise-level needs without complex enterprise features. Our approach focuses on tailoring our core AI search monitoring capabilities to meet your specific requirements.
                  </p>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h4 className="font-semibold text-black font-helvetica mb-3">Custom Solutions Approach:</h4>
                    <ul className="space-y-2 text-base text-gray-700 font-helvetica">
                      <li>• Flexible implementation based on your specific needs</li>
                      <li>• Custom pricing based on requirements and scale</li>
                      <li>• Direct consultation to understand your unique use case</li>
                      <li>• Scalable monitoring solutions for large organizations</li>
                      <li>• Dedicated support and account management</li>
                      <li>• Custom reporting and integration assistance</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-base text-gray-700 font-helvetica">
                    <strong>Transparent Pricing:</strong> Starter and Pro plans are billed monthly with no hidden fees or setup costs. Enterprise solutions are priced based on your specific requirements. All customers receive priority support and can upgrade or downgrade anytime.
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
                  href="/faq/free-trial"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → Do you offer a free trial?
                </Link>
                <Link
                  href="/faq/plan-changes"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → Can I upgrade or downgrade my plan anytime?
                </Link>
                <Link
                  href="/faq/data-export"
                  className="block text-base text-primary hover:text-[#FFD66B] transition-colors duration-300 font-helvetica"
                >
                  → Can I export my tracking data?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPlansPage; 