import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Foundation | aisearchrefs - The Future of Internet Interaction",
  description: "Discover our foundation built on the fundamental shift from keyword-based search to discussion-based internet interaction. Our mission: help you adapt to this transformative change.",
};

const FoundationPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Foundation"
        description="The fundamental shift that defines our mission"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="mb-16 text-center">
              <h1 className="mb-8 text-6xl font-bold leading-tight text-primary font-canela">
                The <span className="text-[#FFD66B]">Foundation</span> of Change
              </h1>
              
              <p className="text-2xl leading-relaxed text-primary/80 font-helvetica max-w-4xl mx-auto">
                We stand at the threshold of the most fundamental transformation in how humans interact with information. This is our foundation story.
              </p>
            </div>

            {/* The Great Shift Section */}
            <div className="mb-20">
              <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
                <h2 className="mb-8 text-4xl font-bold text-black font-canela text-center">
                  The Great Shift
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="mb-4 text-2xl font-bold text-gray-800 font-canela">
                      From Keywords to Conversations
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-600 font-helvetica mb-6">
                      For decades, we searched the internet with fragments—keywords, phrases, hoping to find what we needed. We adapted our language to match algorithms, not the other way around.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                      But something profound is happening. People are no longer just searching. They're <span className="bg-[#FFD66B] px-2 py-1 rounded font-semibold">having conversations with the internet itself</span>.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500 font-helvetica">Old way:</p>
                        <p className="text-base font-semibold text-gray-800 font-helvetica">"best CRM software 2024"</p>
                      </div>
                      <div className="text-center">
                        <svg className="w-6 h-6 mx-auto text-[#FFD66B]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500 font-helvetica">New way:</p>
                        <p className="text-base font-semibold text-gray-800 font-helvetica">"I'm running a growing startup with 50 employees. We need a CRM that integrates well with our existing tools and won't break our budget. What would you recommend and why?"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Vision Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="mb-6 text-4xl font-bold text-black font-canela">
                  Our <span className="text-[#FFD66B]">Vision</span>
                </h2>
                <p className="text-xl leading-relaxed text-gray-600 font-helvetica max-w-3xl mx-auto">
                  We see a world where human behavior has fundamentally shifted toward discussion-based internet interaction—and this change is just the beginning.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary to-blue-800 rounded-2xl p-12 text-white">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="mb-6 text-3xl font-bold font-canela">
                    The Internet as a Conversation Partner
                  </h3>
                  <p className="text-xl leading-relaxed font-helvetica mb-8">
                    People no longer just extract information from the web. They engage with it, discuss with it, reason with it. They bring context, nuance, and complexity to their queries. The internet has become a thinking partner, not just a database.
                  </p>
                  <div className="bg-white/10 rounded-xl p-6">
                    <p className="text-lg font-helvetica italic">
                      "This isn't just a technological shift—it's a fundamental change in how humans relate to information itself."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Mission Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="mb-6 text-4xl font-bold text-black font-canela">
                  Our <span className="text-[#FFD66B]">Mission</span>
                </h2>
                <p className="text-xl leading-relaxed text-gray-600 font-helvetica max-w-3xl mx-auto">
                  We exist to help you understand this transformation and adapt to it with real, actionable data.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-[#FFD66B] rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-black font-canela">
                    Help You Understand
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                    We illuminate the patterns, behaviors, and shifts happening in AI-driven search. Knowledge is the first step to adaptation.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-[#FFD66B] rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-black font-canela">
                    Gather Real Data
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                    We provide concrete, measurable insights about your brand's performance in this new conversational landscape. Data drives adaptation.
                  </p>
                </div>
              </div>
            </div>

            {/* Foundation Pillars */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="mb-6 text-4xl font-bold text-black font-canela">
                  Built on Two <span className="text-[#FFD66B]">Pillars</span>
                </h2>
                <p className="text-xl leading-relaxed text-gray-600 font-helvetica max-w-3xl mx-auto">
                  Our foundation rests on understanding change and empowering adaptation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FFD66B] to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                    </svg>
                  </div>
                                     <h3 className="mb-4 text-2xl font-bold text-black font-canela">
                     Change
                   </h3>
                  <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                    We recognize that the fundamental nature of human-internet interaction is transforming. This change is our vision—the lens through which we see the future.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                    </svg>
                  </div>
                                     <h3 className="mb-4 text-2xl font-bold text-black font-canela">
                     Adaptation
                   </h3>
                  <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                    We empower you to not just survive this transformation, but to thrive in it. Through real data and actionable insights, we help you adapt and excel.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="mb-6 text-4xl font-bold text-black font-canela">
                  Our <span className="text-[#FFD66B]">Core Values</span>
                </h2>
                <p className="text-xl leading-relaxed text-gray-600 font-helvetica max-w-3xl mx-auto">
                  Three principles guide everything we do as we help you achieve your most excellent form in this changing landscape.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black font-canela">
                    Innovation
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                    We push boundaries to understand and measure what others can't yet see. Innovation is how we stay ahead of the change.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black font-canela">
                    Transparency
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                    We believe in clear, honest insights. No black boxes, no hidden agendas—just real data you can trust and act upon.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFD66B] to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black font-canela">
                    Customer Success
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                    Your success in this new landscape is our ultimate measure. We exist to help you achieve your most excellent form.
                  </p>
                </div>
              </div>
            </div>

                         {/* Call to Action */}
             <div className="text-center bg-gradient-to-r from-primary to-blue-800 rounded-2xl p-12 text-white">
               <h2 className="mb-6 text-3xl font-bold font-canela">
                 Ready to Embrace the Change?
               </h2>
               <p className="text-xl leading-relaxed font-helvetica max-w-3xl mx-auto">
                 <strong>The transformation is happening whether we're ready or not. The question is: will you lead the change or be left behind by it?</strong>
               </p>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FoundationPage; 