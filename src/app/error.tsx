'use client';

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="relative z-10 pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px] bg-[#F5F5F5]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[530px] text-center">
              {/* Error Icon */}
              <div className="mx-auto text-center mb-9">
                <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
              </div>
              
              {/* Error Message */}
              <h1 className="mb-4 text-3xl font-bold text-black font-canela sm:text-4xl">
                Something Went Wrong
              </h1>
              <p className="mb-10 text-base font-medium leading-relaxed text-gray-600 font-helvetica sm:text-lg sm:leading-relaxed">
                We encountered an unexpected error while processing your request. Our team has been notified and is working to fix this issue.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={reset}
                  className="px-8 py-3 text-base font-bold text-white duration-300 rounded-lg bg-primary hover:bg-primary/90 font-helvetica"
                >
                  Try Again
                </button>
                <Link
                  href="/"
                  className="px-8 py-3 text-base font-bold text-black duration-300 rounded-lg bg-[#FFD66B] hover:bg-[#FFD66B]/90 font-helvetica"
                >
                  Back to Homepage
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 text-base font-bold text-gray-700 duration-300 rounded-lg bg-gray-200 hover:bg-gray-300 font-helvetica"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 