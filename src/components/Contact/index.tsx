"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ""
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" }); // Reset form
        
        // Show success state for 2 seconds, then return to normal
        setTimeout(() => {
          setShowSuccess(false);
          setStatus({ loading: false, success: true, error: "" });
        }, 2000);
      } else {
        throw new Error(data.error || 'Failed to submit');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus({
        loading: false,
        success: false,
        error: error.message || "Failed to send message. Please try again."
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="overflow-hidden py-12 md:py-16 lg:py-20 bg-[#F5F5F5]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 rounded-sm bg-white px-6 py-8 sm:px-8 sm:py-11 shadow-three hover:shadow-one dark:bg-gray-dark lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-6 font-canela font-bold text-black dark:text-white leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Share Your <span className="text-[#FFD66B]">Wishes</span>
              </h2>
              
              <p className="mb-8 sm:mb-12 font-helvetica text-black dark:text-body-color-dark max-w-[800px] text-sm sm:text-base leading-relaxed">
                Tell us about your AI search tracking needs and challenges. We're building solutions for the future and want to hear what matters most to you.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6 sm:mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-black dark:text-white font-helvetica"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-4 sm:px-6 py-3 text-sm sm:text-base text-body-color outline-none focus:border-[#FFD66B] dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-[#FFD66B] dark:focus:shadow-none font-helvetica"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6 sm:mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-black dark:text-white font-helvetica"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-4 sm:px-6 py-3 text-sm sm:text-base text-body-color outline-none focus:border-[#FFD66B] dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-[#FFD66B] dark:focus:shadow-none font-helvetica"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-6 sm:mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-black dark:text-white font-helvetica"
                      >
                        Your Wish
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your AI search tracking needs, challenges, or feature wishes..."
                        required
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-4 sm:px-6 py-3 text-sm sm:text-base text-body-color outline-none focus:border-[#FFD66B] dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-[#FFD66B] dark:focus:shadow-none font-helvetica"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={status.loading || showSuccess}
                      className={`rounded-sm px-6 sm:px-9 py-3 sm:py-4 text-sm sm:text-base font-medium shadow-submit duration-500 dark:shadow-submit-dark font-helvetica transition-all ease-in-out ${
                        showSuccess 
                          ? 'bg-green-500 text-white' 
                          : 'bg-[#FFD66B] text-black hover:bg-[#FFD66B]/90'
                      } ${
                        status.loading ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {showSuccess ? (
                        <span className="flex items-center justify-center">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      ) : status.loading ? (
                        'Sending...'
                      ) : (
                        'Send Your Wish'
                      )}
                    </button>

                    
                    {status.error && (
                      <p className="mt-4 text-red-500 font-helvetica text-sm sm:text-base">{status.error}</p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;