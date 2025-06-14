import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="relative z-10 pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px] bg-[#F5F5F5]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[530px] text-center">
              {/* 404 SVG Image */}
              <div className="mx-auto text-center mb-9">
                <Image
                  src="/images/404.svg"
                  alt="404 Error - Page Not Found"
                  width={474}
                  height={210}
                  className="w-full max-w-[474px] mx-auto"
                />
              </div>
              
              {/* Error Message */}
              <h1 className="mb-4 text-3xl font-bold text-black font-canela sm:text-4xl">
                Page Not Found
              </h1>
              <p className="mb-10 text-base font-medium leading-relaxed text-gray-600 font-helvetica sm:text-lg sm:leading-relaxed">
                The page you're looking for doesn't exist or has been moved. Let's get you back to tracking your AI search visibility.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="px-8 py-3 text-base font-bold text-white duration-300 rounded-lg bg-primary hover:bg-primary/90 font-helvetica"
                >
                  Back to Homepage
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 text-base font-bold text-black duration-300 rounded-lg bg-[#FFD66B] hover:bg-[#FFD66B]/90 font-helvetica"
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