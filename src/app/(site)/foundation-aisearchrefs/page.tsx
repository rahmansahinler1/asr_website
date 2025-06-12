import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Foundation | AI Search Refs",
  description: "Learn about the foundation and mission of AI Search Refs",
};

const FoundationPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Foundation"
        description="Discover our mission and foundation"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="mb-6 text-5xl font-bold leading-tight text-primary font-canela">
                Foundation of <span className="text-[#FFD66B]">AI Search Refs</span>
              </h1>
              
              <p className="text-2xl leading-relaxed text-primary/80 font-helvetica">
                This is a placeholder description for the Foundation page. Here you can add comprehensive information about the foundation, mission, values, and core principles that drive AI Search Refs forward in the evolving landscape of AI-powered search engines.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Mission Section */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  Our Mission
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* Vision Section */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  Our Vision
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>

              {/* Values Section */}
              <div>
                <h2 className="mb-4 text-3xl font-bold text-black font-canela">
                  Core Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Innovation
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      We continuously push the boundaries of AI search technology to provide cutting-edge solutions.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Transparency
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      We believe in clear, honest communication and transparent practices in all our operations.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Excellence
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      We strive for excellence in every aspect of our platform and customer service.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black font-helvetica">
                      Customer Success
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 font-helvetica">
                      Your success is our success. We are committed to helping you achieve your AI SEO goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FoundationPage; 