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
      <section id="home" className="relative z-10 overflow-hidden bg-primary pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[700px]">
                {isSubscribed && (
                  <div className="mb-4 p-3 bg-white/20 text-white rounded-lg backdrop-blur-sm font-helvetica">
                    Thank you! We'll notify you when AI Search Refs launches.
                  </div>
                )}
                
                <h1 className="mb-5 text-5xl font-bold leading-tight text-white font-canela">
                  Track Your Brand Mentions Across All Major AI Search Engines and Chatbots
                </h1>
                
                <p className="mb-8 text-2xl !leading-relaxed text-white/90 font-helvetica">
                  Monitor how AI search engines like ChatGPT, Claude, Gemini, Grok, DeepSeek, and Perplexity mention your brand in their responses. Get comprehensive analytics and actionable insights to improve your AI visibility, track brand reputation across different niches, and stay ahead of the AI-driven search landscape.
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
                    src="/images/hero/ai-search.svg"
                    alt="AI Search Representation"
                    width={500}
                    height={500}
                    className="h-80 w-80 md:h-96 md:w-96 lg:h-[500px] lg:w-[500px] xl:h-[550px] xl:w-[550px]"
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