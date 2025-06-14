// src/components/Hero/index.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEarlyAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement early access signup
    console.log('Early access signup:', email);
    setIsSubscribed(true);
  };

  return (
    <>
      <section id="home" className="relative z-10 overflow-hidden bg-primary pb-10 pt-[85px] md:pb-[68px] md:pt-[102px] xl:pb-[85px] xl:pt-[119px] 2xl:pb-[102px] 2xl:pt-[136px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[700px]">
                {isSubscribed && (
                  <div className="mb-4 p-3 bg-white/20 text-white rounded-lg backdrop-blur-sm font-helvetica">
                    Thank you! We'll notify you when aisearchrefs launches.
                  </div>
                )}
                
                <h1 className="mb-5 text-5xl font-bold leading-tight text-white font-canela">
                  Stop losing on <span className="bg-[#FFD66B]/90 px-1 rounded">ai web search</span>
                </h1>
                
                <p className="mb-6 text-2xl !leading-relaxed text-white/90 font-helvetica">
                  Do you know how often you're mentioned in ChatGPT, Claude, Gemini, Grok, DeepSeek, and Perplexity? Get real data with <span className="bg-[#FFD66B]/90 px-1 rounded">*ai monitoring*</span>
                </p>
                
                <div className="flex flex-col gap-4">
                  <form onSubmit={handleEarlyAccess} className="flex w-full max-w-2xl gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email for early access"
                      className="flex-1 rounded-sm border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-3 text-base text-white placeholder-white/70 outline-none focus:border-white/40 focus:bg-white/20 font-helvetica"
                      required
                    />
                    <button
                      type="submit"
                      className="rounded-sm bg-[#F5F5F5] px-8 py-3 text-base font-semibold text-black duration-300 ease-in-out hover:bg-white whitespace-nowrap font-helvetica"
                    >
                      Join Waitlist
                    </button>
                  </form>
                </div>
                
                {/* AI Service Icons */}
                <div className="mt-6 flex items-center gap-4">
                  <Image
                    src="/images/hero/chatgpt-icon.png"
                    alt="ChatGPT"
                    width={24}
                    height={24}
                    className="opacity-80"
                  />
                  <Image
                    src="/images/hero/claude-ai-icon.png"
                    alt="Claude"
                    width={24}
                    height={24}
                    className="opacity-80"
                  />
                  <Image
                    src="/images/hero/deepseek-logo-icon.png"
                    alt="DeepSeek"
                    width={24}
                    height={24}
                    className="opacity-80"
                  />
                  <Image
                    src="/images/hero/google-gemini-icon.png"
                    alt="Gemini"
                    width={24}
                    height={24}
                    className="opacity-80"
                  />
                  <Image
                    src="/images/hero/grok-icon.png"
                    alt="Grok"
                    width={24}
                    height={24}
                    className="opacity-80"
                  />
                  <Image
                    src="/images/hero/perplexity-ai-icon.png"
                    alt="Perplexity"
                    width={24}
                    height={24}
                    className="opacity-80"
                  />
                </div>
              </div>
            </div>
            
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex items-center justify-center lg:justify-center">
                <div className="relative">
                  <Image
                    src="/images/hero/ai-web-search.svg"
                    alt="AI Search Representation"
                    width={400}
                    height={400}
                    className="h-64 w-64 md:h-80 md:w-80 lg:h-[400px] lg:w-[400px] xl:h-[450px] xl:w-[450px]"
                    priority
                  />
                  
                  {/* Decorative elements around the AI search illustration */}
                  <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm"></div>
                  <div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-white/5 backdrop-blur-sm"></div>
                  <div className="absolute top-1/2 -right-8 h-6 w-6 rounded-full bg-white/15 backdrop-blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;