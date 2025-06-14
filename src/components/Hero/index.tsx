// src/components/Hero/index.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleEarlyAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setShowSuccess(true);
        setEmail(''); // Clear the input
        
        // Show success state for 2 seconds, then return to normal
        setTimeout(() => {
          setShowSuccess(false);
          setIsSubscribed(true);
        }, 2000);
      } else {
        // Handle error cases but still show success for better UX
        console.error('Waitlist signup error:', data.error);
        setShowSuccess(true);
        
        setTimeout(() => {
          setShowSuccess(false);
          setIsSubscribed(true);
        }, 2000);
      }
    } catch (error) {
      console.error('Error joining waitlist:', error);
      // Still show success message to user for better UX
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
        setIsSubscribed(true);
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section id="home" className="relative z-10 overflow-hidden bg-primary pb-10 pt-[85px] md:pb-[68px] md:pt-[102px] xl:pb-[85px] xl:pt-[119px] 2xl:pb-[102px] 2xl:pt-[136px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[700px]">

                
                <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white font-canela">
                  Stop losing on <span className="bg-[#FFD66B]/90 px-1 rounded">ai web search</span>
                </h1>
                
                <p className="mb-6 text-lg sm:text-xl md:text-2xl !leading-relaxed text-white/90 font-helvetica">
                  Do you know how often you're mentioned in ChatGPT, Claude, Gemini, Grok, DeepSeek, and Perplexity? Get real data with <span className="bg-[#FFD66B]/90 px-1 rounded">*ai monitoring*</span>
                </p>
                
                <div className="flex flex-col gap-4">
                  <form onSubmit={handleEarlyAccess} className="flex flex-col sm:flex-row w-full max-w-2xl gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email for early access"
                      className="flex-1 rounded-sm border border-white/20 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-3 text-sm sm:text-base text-white placeholder-white/70 outline-none focus:border-white/40 focus:bg-white/20 font-helvetica"
                      required
                    />
                    <button
                      type="submit"
                      disabled={isLoading || showSuccess}
                      className={`rounded-sm px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold duration-500 ease-in-out whitespace-nowrap font-helvetica transition-all ${
                        showSuccess 
                          ? 'bg-green-500 text-white' 
                          : 'bg-[#F5F5F5] text-black hover:bg-white'
                      } ${
                        isLoading ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {showSuccess ? (
                        <span className="flex items-center justify-center">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      ) : isLoading ? (
                        'Joining...'
                      ) : (
                        'Join Waitlist'
                      )}
                    </button>
                  </form>
                </div>
                
                {/* AI Service Icons */}
                <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                  <Image
                    src="/images/hero/chatgpt-icon.png"
                    alt="ChatGPT"
                    width={20}
                    height={20}
                    className="opacity-80 w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <Image
                    src="/images/hero/claude-ai-icon.png"
                    alt="Claude"
                    width={20}
                    height={20}
                    className="opacity-80 w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <Image
                    src="/images/hero/deepseek-logo-icon.png"
                    alt="DeepSeek"
                    width={20}
                    height={20}
                    className="opacity-80 w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <Image
                    src="/images/hero/google-gemini-icon.png"
                    alt="Gemini"
                    width={20}
                    height={20}
                    className="opacity-80 w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <Image
                    src="/images/hero/grok-icon.png"
                    alt="Grok"
                    width={20}
                    height={20}
                    className="opacity-80 w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <Image
                    src="/images/hero/perplexity-ai-icon.png"
                    alt="Perplexity"
                    width={20}
                    height={20}
                    className="opacity-80 w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
              </div>
            </div>
            
            <div className="w-full px-4 lg:w-1/2 mt-8 lg:mt-0">
              <div className="flex items-center justify-center lg:justify-center">
                <div className="relative">
                  <Image
                    src="/images/hero/ai-web-search.svg"
                    alt="AI Search Representation"
                    width={400}
                    height={400}
                    className="h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-[400px] lg:w-[400px] xl:h-[450px] xl:w-[450px]"
                    priority
                  />
                  
                  {/* Decorative elements around the AI search illustration */}
                  <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-white/10 backdrop-blur-sm"></div>
                  <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-white/5 backdrop-blur-sm"></div>
                  <div className="absolute top-1/2 -right-4 sm:-right-8 h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-white/15 backdrop-blur-sm"></div>
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