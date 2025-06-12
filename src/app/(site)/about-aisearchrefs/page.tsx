import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "About Us | AI Search Refs",
  description: "Learn about AI Search Refs - our story, team, and commitment to helping brands succeed in AI search engines",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Discover who we are and how we're revolutionizing brand visibility in AI search engines"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="mb-6 text-5xl font-bold leading-tight text-primary font-canela">
                About <span className="text-[#FFD66B]">AI Search Refs</span>
              </h1>
              
              <p className="text-2xl leading-relaxed text-primary/80 font-helvetica">
                We're pioneering the future of brand visibility in AI search engines. Our platform empowers businesses to track, monitor, and optimize their presence across the rapidly evolving landscape of AI-powered search platforms.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Our Story Section */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  Our Story
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  Founded with the vision of helping brands navigate the new era of AI search, AI Search Refs emerged from the recognition that traditional SEO strategies need to evolve. As AI search engines reshape how people discover information, we saw the critical need for specialized tools that help businesses maintain and improve their digital visibility in this new landscape.
                </p>
              </div>

              {/* What We Do Section */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  What We Do
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  We provide comprehensive AI search tracking and brand monitoring solutions that give businesses unprecedented insight into their AI search performance. Our platform tracks keyword rankings, monitors brand mentions, analyzes competitor performance, and provides actionable recommendations for optimizing content in AI search engines.
                </p>
              </div>

              {/* Our Team Section */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  Our Team
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  Our team combines deep expertise in search engine optimization, artificial intelligence, and data analytics. We're passionate about helping businesses succeed in the evolving digital landscape and committed to providing the most accurate, actionable insights for AI search optimization.
                </p>
              </div>

              {/* Our Approach Section */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  Our Approach
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Data-Driven Insights
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      We leverage advanced analytics to provide precise, actionable data about your brand's performance in AI search engines.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Continuous Innovation
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      Our platform evolves with the AI search landscape, ensuring you always have access to the latest tracking capabilities.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Customer-Centric Focus
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      We prioritize user experience and provide dedicated support to help you maximize your AI search potential.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Future-Ready Solutions
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      We anticipate trends in AI search technology to keep your brand ahead of the competition.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us Section */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  Why Choose AI Search Refs
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black font-helvetica">
                      Industry Expertise
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      Deep understanding of both traditional SEO and emerging AI search technologies, giving you comprehensive visibility across all search platforms.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black font-helvetica">
                      Real-Time Monitoring
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      Stay informed with real-time tracking and alerts, ensuring you never miss important changes in your AI search performance.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black font-helvetica">
                      Actionable Recommendations
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      Beyond just tracking, we provide specific, actionable recommendations to improve your visibility and performance in AI search engines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-16 p-8 bg-white rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-4 font-canela">
                  Ready to Get Started?
                </h3>
                <p className="text-lg text-gray-600 font-helvetica mb-6">
                  Join forward-thinking brands that are already optimizing their presence in AI search engines. Let's discuss how AI Search Refs can help you stay ahead in the evolving search landscape.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 font-helvetica"
                  >
                    Contact Us
                  </a>
                  <a 
                    href="/blogs" 
                    className="inline-flex items-center px-6 py-3 bg-[#FFD66B] text-black font-semibold rounded-lg hover:bg-[#FFD66B]/90 transition-colors duration-300 font-helvetica"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage; 