import Image from "next/image";

const checkIcon = (
  <svg width="12" height="12" viewBox="0 0 20 20" className="fill-current">
    <path d="M8.6 14.7l-3.8-3.8a1 1 0 0 0-1.4 1.4l4.5 4.5a1 1 0 0 0 1.4 0l9.5-9.5a1 1 0 0 0-1.4-1.4L8.6 14.7z" />
  </svg>
);

const AboutSectionOne = () => {
  const benefits = [
    "Track every direct link and text mention",
    "Advanced filtering by niche, brand, or competitor",
    "Get your AI SEO score"
  ];

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-[#F5F5F5]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left Content */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[600px]">
              {/* Explanation Text - In rounded box with black text */}
              <div className="mb-4 inline-block bg-white rounded-full px-4 py-2 border border-gray-200">
                <p className="text-sm font-medium text-black font-helvetica">
                  AI Web Search Changes Everything
                </p>
              </div>
              
              {/* Main Header - One line, Canela font, 48px, bold */}
              <h2 className="mb-6 font-canela font-bold text-black leading-tight whitespace-nowrap" style={{ fontSize: '48px' }}>
                Monitor Your Brand's <span className="text-[#FFD66B]">AI Visibility</span>
              </h2>
              
              {/* Description - Helvetica Neue, 16px, 28px line height */}
              <p className="mb-8 font-helvetica text-black" style={{ fontSize: '16px', lineHeight: '28px' }}>
              AI answers are becoming the new search results. Call it Generative Engine Optimization (GEO) or AI SEO - the reality is customers are discovering brands through ChatGPT and Claude responses. We track every mention so you know exactly where you stand.
              </p>
              
              {/* Benefits - Side by side with smaller ticks, 12px font */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    {/* Yellow background circle with smaller black checkmark */}
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#FFD66B] flex-shrink-0">
                      <div className="text-black">
                        {checkIcon}
                      </div>
                    </div>
                    
                    {/* Benefit text - 12px font */}
                    <p className="font-helvetica text-gray-700" style={{ fontSize: '12px', lineHeight: '18px' }}>
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - AI Monitoring Image */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-[450px]">
                <Image
                  src="/images/landing_about/chatgpt_answer.webp"
                  alt="AI search monitoring visualization showing brand mentions across AI platforms"
                  width={450}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
