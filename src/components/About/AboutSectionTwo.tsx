import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#F5F5F5]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left Data Dashboard Image */}
          <div className="w-full px-4 lg:w-1/2 mb-8 lg:mb-0">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-[600px] flex items-center justify-center">
                <img
                  src="/images/landing_about/data-dashboard.webp"
                  alt="Data insights dashboard showing AI search analytics"
                  className="w-full h-auto max-w-[600px] rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[600px]">
              {/* Explanation Text - In rounded box with black text */}
              <div className="mb-4 inline-block bg-white rounded-full px-4 py-2 border border-gray-200">
                <p className="text-xs sm:text-sm font-medium text-black font-helvetica">
                  Measurement First, Insights Second
                </p>
              </div>
              
              {/* Main Header - Responsive font sizes, removed whitespace-nowrap */}
              <h2 className="mb-6 font-canela font-bold text-black leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Data<span className="text-[#FFD66B]"> Insights</span>
              </h2>
              
              {/* Description - Responsive font sizes */}
              <p className="mb-8 font-helvetica text-black text-sm sm:text-base leading-relaxed">
                You can't optimize what you can't measure. We track AI traffic, brand mentions, and competitor performance across all platforms.
              </p>

              {/* Feature sections */}
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-base sm:text-lg font-semibold text-black font-helvetica">
                    Real data
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 font-helvetica leading-relaxed">
                    We don't optimize your AI traffic, we measure it. Nobody can optimize what they can't measure. Generating LLM answers is not real optimization.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-base sm:text-lg font-semibold text-black font-helvetica">
                    Track everything
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 font-helvetica leading-relaxed">
                    Your niche, your brand, your competitor, your AI SEO score. We track it all.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-base sm:text-lg font-semibold text-black font-helvetica">
                    Optimize for AI answers, not keywords
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 font-helvetica leading-relaxed">
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
