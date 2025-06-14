import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team Collaboration - FAQ | aisearchrefs",
  description: "Learn about team collaboration features and multi-user access in aisearchrefs",
};

const TeamCollaborationPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Team Collaboration"
        description="Multi-user access and team collaboration features"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary font-canela">
                Can multiple team members access the <span className="text-[#FFD66B]">account</span>?
              </h1>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 font-helvetica">
                  Yes! aisearchrefs supports team collaboration with multi-user access, role-based permissions, and collaborative features designed to help teams work together effectively on AI search optimization.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Team Features:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">User Management:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Multiple user accounts</li>
                        <li>• Role-based access control</li>
                        <li>• Permission management</li>
                        <li>• Activity tracking and logs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-black font-helvetica">Collaboration Tools:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-helvetica">
                        <li>• Shared dashboards and reports</li>
                        <li>• Team comment system</li>
                        <li>• Notification preferences</li>
                        <li>• Collaborative keyword lists</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-black font-helvetica">
                    Available Roles:
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-black font-helvetica">Admin</h4>
                      <p className="text-sm text-gray-600 font-helvetica">Full access to all features, user management, and billing settings.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black font-helvetica">Editor</h4>
                      <p className="text-sm text-gray-600 font-helvetica">Can modify settings, add keywords, and access all data and reports.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black font-helvetica">Viewer</h4>
                      <p className="text-sm text-gray-600 font-helvetica">Read-only access to dashboards, reports, and data exports.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded">
                  <p className="text-sm text-gray-700 font-helvetica">
                    <strong>Scalable Teams:</strong> Add team members based on your plan limits. Upgrade anytime to accommodate larger teams and additional collaboration features.
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

export default TeamCollaborationPage; 