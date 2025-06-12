import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#F5F5F5]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left Placeholder Image */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="flex items-center justify-center">
              <div className="h-[350px] w-full max-w-[450px] rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 h-16 w-16 mx-auto rounded-full bg-gray-200 flex items-center justify-center">
                    <svg 
                      className="h-8 w-8 text-gray-400" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm font-medium">Image Placeholder</p>
                  <p className="text-gray-400 text-xs mt-1">450 x 350</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[600px]">
              {/* Explanation Text - In rounded box with black text */}
              <div className="mb-4 inline-block bg-white rounded-full px-4 py-2 border border-gray-200">
                <p className="text-sm font-medium text-black font-helvetica">
                  Advanced Features
                </p>
              </div>
              
              {/* Main Header - One line, Canela font, 48px, bold */}
              <h2 className="mb-6 font-canela font-bold text-black leading-tight whitespace-nowrap" style={{ fontSize: '48px' }}>
                Powerful <span className="text-[#FFD66B]">AI Analytics</span> Suite
              </h2>
              
              {/* Description - Helvetica Neue, 16px, 28px line height */}
              <p className="mb-8 font-helvetica text-black" style={{ fontSize: '16px', lineHeight: '28px' }}>
                Advanced monitoring capabilities with detailed reporting, competitive analysis, and real-time alerts to keep you ahead of the competition in AI search results.
              </p>

              {/* Feature sections */}
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-black font-helvetica">
                    Real-time Alerts
                  </h3>
                  <p className="text-sm text-gray-700 font-helvetica" style={{ lineHeight: '20px' }}>
                    Get instant notifications when your brand is mentioned across AI platforms. Never miss an important mention again.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold text-black font-helvetica">
                    Competitive Analysis
                  </h3>
                  <p className="text-sm text-gray-700 font-helvetica" style={{ lineHeight: '20px' }}>
                    See how your brand compares to competitors in AI search results and identify opportunities for improvement.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold text-black font-helvetica">
                    Detailed Reporting
                  </h3>
                  <p className="text-sm text-gray-700 font-helvetica" style={{ lineHeight: '20px' }}>
                    Comprehensive analytics dashboard with insights, trends, and actionable recommendations for your brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
