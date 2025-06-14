import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "About aisearchrefs | Our Technical Journey & Story",
  description: "Meet the team behind aisearchrefs. From months of RAG and semantic search research to building a measurement-first approach for the AI search revolution.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Our story, our journey, and why we're here to guide you through the AI search transformation"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-16 text-center">
              <h1 className="mb-8 text-5xl font-bold leading-tight text-primary font-canela">
                Our <span className="text-[#FFD66B]">Story</span>
              </h1>
              
              <p className="text-2xl leading-relaxed text-primary/80 font-helvetica max-w-4xl mx-auto">
                We want to be your partners in navigating the most significant shift in search.
              </p>
            </div>

            {/* The Technical Journey */}
            <div className="mb-20">
              <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
                <h2 className="mb-8 text-4xl font-bold text-black font-canela text-center">
                  Where It All Started
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="mb-6 text-2xl font-bold text-gray-800 font-canela">
                      Months in the Trenches
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-6">
                      We come from a <span className="bg-[#FFD66B] px-2 py-1 rounded font-semibold">highly technical background</span>. For months, we've been deep in the world of Retrieval Augmented Generation (RAG) and semantic search, not as observers, but as builders.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                      We've spent countless hours trying to adapt, optimize, and understand how semantic search actually operates. We know its capabilities, its limits, and most importantly—the reality of what works and what doesn't.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 font-helvetica">RAG Implementation</h4>
                          <p className="text-sm text-gray-600 font-helvetica">Months of hands-on experience</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-[#FFD66B] rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 font-helvetica">Semantic Search Mastery</h4>
                          <p className="text-sm text-gray-600 font-helvetica">Deep understanding of operations</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 font-helvetica">Reality-Based Insights</h4>
                          <p className="text-sm text-gray-600 font-helvetica">What actually works vs. theory</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Realization */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="mb-6 text-4xl font-bold text-black font-canela">
                  The <span className="text-[#FFD66B]">Realization</span>
                </h2>
                <p className="text-xl leading-relaxed text-gray-600 font-helvetica max-w-3xl mx-auto">
                  Through our technical journey, we discovered something crucial that changed everything.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary to-blue-800 rounded-2xl p-12 text-white">
                <div className="max-w-4xl mx-auto">
                  <h3 className="mb-6 text-3xl font-bold font-canela text-center">
                    The Gap Between Promise and Reality
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="mb-4 text-xl font-bold font-helvetica">What Everyone Talks About</h4>
                      <ul className="space-y-3 text-lg font-helvetica">
                        <li>• "AI will revolutionize search"</li>
                        <li>• "Optimize for semantic understanding"</li>
                        <li>• "Traditional SEO is dead"</li>
                        <li>• "AI search is the future"</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-4 text-xl font-bold font-helvetica">What We Actually Found</h4>
                      <ul className="space-y-3 text-lg font-helvetica">
                        <li>• <strong>Measurement gaps everywhere</strong></li>
                        <li>• <strong>No reliable data on performance</strong></li>
                        <li>• <strong>Optimization without insights</strong></li>
                        <li>• <strong>Brands flying blind</strong></li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 p-6 bg-white/10 rounded-xl text-center">
                    <p className="text-xl font-helvetica italic">
                      "Everyone was talking about optimizing for AI search, but nobody could measure if it was actually working."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Mission Born */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="mb-6 text-4xl font-bold text-black font-canela">
                  Why We Built <span className="text-[#FFD66B]">aisearchrefs</span>
                </h2>
                <p className="text-xl leading-relaxed text-gray-600 font-helvetica max-w-3xl mx-auto">
                  Based on our fundamental understanding of the true reality, we knew what needed to be built.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <div className="w-16 h-16 bg-[#FFD66B] rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-black font-canela">
                    Measurement First
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                    We bring a <strong>measurement and real data first approach</strong> to this chaotic search engine transformation. You can't optimize what you can't measure.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                    </svg>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-black font-canela">
                    Partnership & Guidance
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                    We don't just provide tools—we <strong>partner with you and lead with you</strong> through this transformation. Your success is our mission.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Approach */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="mb-6 text-4xl font-bold text-black font-canela">
                  How We <span className="text-[#FFD66B]">Work</span> With You
                </h2>
                <p className="text-xl leading-relaxed text-gray-600 font-helvetica max-w-3xl mx-auto">
                  Our approach is built on technical expertise, real-world experience, and genuine partnership.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-black font-canela">
                    Data-Driven Insights
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 font-helvetica">
                    Real measurements from real AI search engines, not theoretical models or guesswork.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-black font-canela">
                    Continuous Innovation
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 font-helvetica">
                    We stay ahead because we understand the technology from the inside out.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-black font-canela">
                    Future-Ready Solutions
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 font-helvetica">
                    Built by people who understand where AI search is heading, not just where it is today.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFD66B] to-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                    </svg>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-black font-canela">
                    Customer-Centric Focus
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 font-helvetica">
                    We're not just vendors—we're your partners in navigating this transformation together.
                  </p>
                </div>
              </div>
            </div>

            {/* The Partnership Promise */}
            <div className="mb-16">
              <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
                <div className="text-center mb-8">
                  <h2 className="mb-6 text-4xl font-bold text-black font-canela">
                    Our <span className="text-[#FFD66B]">Promise</span> to You
                  </h2>
                </div>
                
                <div className="max-w-4xl mx-auto">
                  <p className="text-xl leading-relaxed text-gray-600 font-helvetica text-center mb-8">
                    We've been where you are—trying to understand this chaotic transformation, looking for reliable data, seeking real insights in a sea of speculation.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <h3 className="mb-3 text-xl font-bold text-black font-canela">Technical Honesty</h3>
                      <p className="text-base text-gray-600 font-helvetica">
                        We tell you what we know, what we don't know, and what the data actually shows—no marketing fluff.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-bold text-black font-canela">Real Partnership</h3>
                      <p className="text-base text-gray-600 font-helvetica">
                        We're in this journey with you, learning and adapting as the landscape evolves.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-bold text-black font-canela">Measurement Focus</h3>
                      <p className="text-base text-gray-600 font-helvetica">
                        Everything we build starts with the question: "How can we measure this accurately?"
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-gradient-to-r from-[#FFD66B]/20 to-yellow-100 rounded-xl text-center">
                    <p className="text-lg font-helvetica text-gray-800">
                      <strong>We're not just building a tool—we're pioneering the future of AI search visibility, and we want you to pioneer it with us.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Join Us */}
            <div className="text-center bg-gradient-to-r from-primary to-blue-800 rounded-2xl p-12 text-white">
              <h2 className="mb-6 text-3xl font-bold font-canela">
                Ready to Pioneer Together?
              </h2>
              <p className="text-xl leading-relaxed font-helvetica mb-8 max-w-3xl mx-auto">
                Join us in bringing measurement, clarity, and real insights to the AI search revolution. Let's navigate this transformation together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="inline-block bg-[#FFD66B] text-black font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors font-helvetica text-lg"
                >
                  Start the Conversation
                </a>
                <a 
                  href="/blogs" 
                  className="inline-block bg-white/10 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors font-helvetica text-lg border border-white/20"
                >
                  Read Our Insights
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage; 