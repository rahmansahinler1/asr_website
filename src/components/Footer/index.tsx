"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [expandedSections, setExpandedSections] = useState({
    alternatives: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <>
      <footer className="relative z-10 bg-primary pt-12 md:pt-16 lg:pt-20 pb-6">
        <div className="container">
          <div className="flex flex-wrap items-start justify-between">
            {/* Left Section - Logo, Description, Copyright */}
            <div className="w-full lg:w-5/12 xl:w-6/12 mb-8 lg:mb-0">
              {/* Logo */}
              <Link href="/" className="mb-4 inline-block">
                <div className="text-3xl font-mono font-bold">
                  <span className="text-[#FFD66B]">ai</span>
                  <span className="text-white">searchrefs</span>
                </div>
              </Link>
              
              {/* Description */}
              <p className="mb-4 text-base leading-relaxed text-white font-helvetica max-w-[400px]">
                Track your visibility in AI search engines.
              </p>
              
              {/* Copyright */}
              <p className="text-base text-white/60 font-helvetica">
                © 2025, AI Search Refs. All rights reserved.
              </p>
            </div>

            {/* Right Section - Resources and Platform */}
            <div className="w-full lg:w-6/12 xl:w-5/12 flex flex-wrap">
              {/* Resources Column */}
              <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                <h2 className="mb-4 text-xl font-bold text-white font-helvetica">
                  Resources
                </h2>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/blogs"
                      className="text-base text-white/80 duration-300 hover:text-[#FFD66B] font-helvetica"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-base text-white/80 duration-300 hover:text-[#FFD66B] font-helvetica"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <div>
                      <button
                        onClick={() => toggleSection('alternatives')}
                        className="flex items-center text-base text-white/80 duration-300 hover:text-[#FFD66B] font-helvetica"
                      >
                        Alternatives
                        <svg
                          className={`ml-2 w-4 h-4 transform transition-transform ${
                            expandedSections.alternatives ? 'rotate-180' : ''
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      {expandedSections.alternatives && (
                        <ul className="mt-2 ml-4 space-y-2">
                          <li>
                            <Link href="/alternatives/semrush" className="text-sm text-white/60 duration-300 hover:text-[#FFD66B] font-helvetica">
                              vs SEMrush
                            </Link>
                          </li>
                          <li>
                            <Link href="/alternatives/ahrefs" className="text-sm text-white/60 duration-300 hover:text-[#FFD66B] font-helvetica">
                              vs Ahrefs
                            </Link>
                          </li>
                          <li>
                            <Link href="/alternatives/brightedge" className="text-sm text-white/60 duration-300 hover:text-[#FFD66B] font-helvetica">
                              vs BrightEdge
                            </Link>
                          </li>
                          <li>
                            <Link href="/alternatives/llmrefs" className="text-sm text-white/60 duration-300 hover:text-[#FFD66B] font-helvetica">
                              vs LLMrefs
                            </Link>
                          </li>
                          <li>
                            <Link href="/alternatives/chatrank" className="text-sm text-white/60 duration-300 hover:text-[#FFD66B] font-helvetica">
                              vs ChatRank
                            </Link>
                          </li>
                        </ul>
                      )}
                    </div>
                  </li>
                </ul>
              </div>

              {/* Platform Column */}
              <div className="w-full md:w-1/2 px-4">
                <h2 className="mb-4 text-xl font-bold text-white font-helvetica">
                  Platform
                </h2>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/about-aisearchrefs"
                      className="text-base text-white/80 duration-300 hover:text-[#FFD66B] font-helvetica"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-of-use"
                      className="text-base text-white/80 duration-300 hover:text-[#FFD66B] font-helvetica"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-base text-white/80 duration-300 hover:text-[#FFD66B] font-helvetica"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-base text-white/80 duration-300 hover:text-[#FFD66B] font-helvetica"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;