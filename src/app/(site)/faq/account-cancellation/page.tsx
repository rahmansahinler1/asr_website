import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Account Cancellation | AI Search Refs FAQ",
  description: "Learn how to cancel your AI Search Refs account and what happens to your data.",
};

const AccountCancellationPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Account Cancellation"
        description="How to cancel your account and data handling"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <h1 className="mb-6 text-3xl font-bold text-black font-canela">
                Account Cancellation
              </h1>
              
              <div className="space-y-6 font-helvetica">
                <p className="text-gray-600">
                  We're sorry to see you go! If you need to cancel your AI Search Refs account, here's what you need to know.
                </p>
                
                <div>
                  <h2 className="text-xl font-semibold text-black mb-3">How to Cancel</h2>
                  <p className="text-gray-600">
                    Please contact our support team at support@aisearchrefs.com to request account cancellation. We'll process your request within 24 hours.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold text-black mb-3">Data Handling</h2>
                  <p className="text-gray-600">
                    Upon cancellation, your account data will be securely deleted within 30 days. You can request an export of your data before cancellation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountCancellationPage; 