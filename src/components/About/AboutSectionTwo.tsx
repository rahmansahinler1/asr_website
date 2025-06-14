import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#F5F5F5]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left Data Dashboard Image */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-[600px] flex items-center justify-center">
                <img
                  src="/images/landing_about/data-dashboard.webp"
                  alt="Data insights dashboard showing AI search analytics"
                  className="w-full h-auto max-w-[600px]"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[600px]">
              {/* Explanation Text - In rounded box with black text */}
              <div className="mb-4 inline-block bg-white rounded-full px-4 py-2 border border-gray-200">
                <p className="text-sm font-medium text-black font-helvetica">
                  Measurement First, Insights Second
                </p>
              </div>
              
              {/* Main Header - One line, Canela font, 48px, bold */}
              <h2 className="mb-6 font-canela font-bold text-black leading-tight whitespace-nowrap" style={{ fontSize: '48px' }}>
                Data<span className="text-[#FFD66B]"> Insights</span>
              </h2>
              
              {/* Description - Helvetica Neue, 16px, 28px line height */}
              <p className="mb-8 font-helvetica text-black" style={{ fontSize: '16px', lineHeight: '28px' }}>
                You can't optimize what you can't measure. We track AI traffic, brand mentions, and competitor performance across all platforms.
              </p>

              {/* Feature sections */}
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-black font-helvetica">
                    Real data
                  </h3>
                  <p className="text-sm text-gray-700 font-helvetica" style={{ lineHeight: '20px' }}>
                    We don't optimize your AI traffic, we measure it. Nobody can optimize what they can't measure. Generating LLM answers is not real optimization.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold text-black font-helvetica">
                    Track everything
                  </h3>
                  <p className="text-sm text-gray-700 font-helvetica" style={{ lineHeight: '20px' }}>
                    Your niche, your brand, your competitor, your AI SEO score. We track it all.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold text-black font-helvetica">
                    Optimize for AI answers, not keywords
                  </h3>
                  <p className="text-sm text-gray-700 font-helvetica" style={{ lineHeight: '20px' }}>
                    Do you know that AI answers suggest brands in their discussions? Optimization is changing, and you need to change with it.
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
