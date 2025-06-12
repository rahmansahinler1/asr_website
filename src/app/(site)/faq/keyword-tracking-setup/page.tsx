import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Keyword Tracking Setup - FAQ | AI Search Refs",
  description: "Step-by-step guide to setting up keyword tracking for AI search engines with AI Search Refs",
};

const KeywordTrackingSetupPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Keyword Tracking Setup"
        description="Step-by-step guide to setting up keyword tracking"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                How do I set up <span className="text-[#FFD66B]">keyword tracking</span>?
              </h1>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  Setting up keyword tracking is simple with AI Search Refs. Follow these steps to start monitoring your brand's performance across AI search engines.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Setup Process:
                  </h3>
                  <ol className="space-y-4 text-base text-gray-600 font-helvetica">
                    <li><strong>1. Access Dashboard:</strong> Log into your AI Search Refs account and navigate to the keyword tracking section.</li>
                    <li><strong>2. Add Keywords:</strong> Input your target keywords, including brand names, products, and industry terms.</li>
                    <li><strong>3. Select Platforms:</strong> Choose which AI search engines to monitor (ChatGPT, Claude, Perplexity, etc.).</li>
                    <li><strong>4. Configure Settings:</strong> Set tracking frequency, geographic targets, and alert preferences.</li>
                    <li><strong>5. Activate Monitoring:</strong> Start tracking and access your performance dashboard.</li>
                  </ol>
                </div>

                <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>Quick Start:</strong> Begin with 5-10 core keywords and expand gradually. Focus on your most important brand terms first for optimal results.
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
          </div>
        </div>
      </section>
    </>
  );
};

export default KeywordTrackingSetupPage; 