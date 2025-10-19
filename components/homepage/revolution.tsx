"use client"

import { memo } from "react"
import Image from "next/image"

const Revolution = memo(() => {
  return (
    <>
      {/* Revolution Section - Full Width with 20px padding */}
      <section className="w-full px-5 py-5 bg-[#ffffff]">
        <div className="w-full mx-auto">
          <div className="relative rounded-[12px] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <Image
                src="/heroBelow.jpg"
                alt=""
                fill
                className="object-cover object-center"
                priority
                quality={90}
              />
              {/* 30% black overlay */}
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 px-6 md:px-16 lg:px-24 py-16 md:py-24 lg:py-[166px]">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 max-w-[1200px] mx-auto">
                {/* Left Column - Text Content */}
                <div className="flex flex-col justify-center items-start gap-6 w-full lg:w-[560px] flex-shrink-0">
                  <h2 className="text-white font-medium text-3xl md:text-[40px] leading-tight md:leading-[44px] max-w-[500px]">
                    The Complete AI-Powered Health Revolution
                  </h2>
                  
                  <div className="flex flex-col items-start gap-6 w-full">
                    <p className="text-white font-medium text-base leading-5 max-w-[600px]">
                      Fitracker is the world's first complete AI health companion designed to support every aspect of your wellness journey. Combining advanced fitness tracking, intelligent nutrition guidance, vibrant community support, and personalized AI coaching, Fitracker makes health and fitness achievable for everyone.
                    </p>
                    
                    <p className="text-white font-medium text-base leading-5 max-w-[600px]">
                      Whether you prefer to snap photos, speak to our AI, or type manually, our cutting-edge technology adapts to your lifestyle. Get daily personalized recommendations, track workouts and nutrition effortlessly, and connect with a supportive community - all through our beautifully simple, modern interface.
                    </p>
                  </div>
                </div>

                {/* Right Column - Feature Cards (2 columns x 2 rows) */}
                <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
                  {/* First Column */}
                  <div className="flex flex-col items-start gap-6 w-full sm:flex-1 lg:w-[268px]">
                    {/* Card 1 - 3 */}
                    <div className="flex flex-col justify-center items-center p-6 sm:p-8 gap-3 sm:gap-4 bg-white rounded-[10px] w-full min-h-[140px] sm:h-[156px]">
                      <div className="text-[#050505] font-medium text-[28px] sm:text-[32px] leading-8 sm:leading-9 w-full text-center">
                        3
                      </div>
                      <p className="text-[#878787] font-medium text-sm sm:text-base leading-5 w-full text-center">
                        ways to track: photo, voice, or manual input
                      </p>
                    </div>

                    {/* Card 2 - AI Powered */}
                    <div className="flex flex-col justify-center items-center p-6 sm:p-8 gap-3 sm:gap-4 bg-white rounded-[10px] w-full min-h-[140px] sm:h-[156px]">
                      <div className="text-[#050505] font-medium text-[28px] sm:text-[32px] leading-8 sm:leading-9 w-full text-center">
                        AI - Powered
                      </div>
                      <p className="text-[#878787] font-medium text-sm sm:text-base leading-5 w-full text-center">
                        daily fitness and nutrition recommendations
                      </p>
                    </div>
                  </div>

                  {/* Second Column */}
                  <div className="flex flex-col items-start gap-6 w-full sm:flex-1 lg:w-[268px]">
                    {/* Card 3 - 24/7 */}
                    <div className="flex flex-col justify-center items-center p-6 sm:p-8 gap-3 sm:gap-4 bg-white rounded-[10px] w-full min-h-[140px] sm:h-[156px]">
                      <div className="text-[#050505] font-medium text-[28px] sm:text-[32px] leading-8 sm:leading-9 w-full text-center">
                        24/7
                      </div>
                      <p className="text-[#878787] font-medium text-sm sm:text-base leading-5 w-full text-center">
                        personalized AI health coaching
                      </p>
                    </div>

                    {/* Card 4 - Complete */}
                    <div className="flex flex-col justify-center items-center p-6 sm:p-8 gap-3 sm:gap-4 bg-white rounded-[10px] w-full min-h-[140px] sm:h-[156px]">
                      <div className="text-[#050505] font-medium text-[28px] sm:text-[32px] leading-8 sm:leading-9 w-full text-center">
                        Complete
                      </div>
                      <p className="text-[#878787] font-medium text-sm sm:text-base leading-5 w-full text-center">
                        health companion loved by beginners and pros
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section Start */}
      <section className="relative py-20 bg-[#F7F7F7]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#050505] mb-16 text-center max-w-[25ch] mx-auto">
            Your Complete Health Companion - All the Features You Need
          </h2>
          
          {/* Feature Sections Container */}
          <div className="flex flex-col gap-8">
            
            {/* Feature 1 - Track Your Way (Image Left) */}
            <div className="flex flex-col md:flex-row items-center gap-8 p-4 md:py-4 bg-white border border-[#EEEEEE] rounded-2xl">
              <div className="w-full md:w-1/2 relative h-[300px] md:h-[380px]">
                <Image
                  src="/companion1.jpg"
                  alt="Track Your Way"
                  fill
                  className="object-cover rounded-2xl"
                  quality={90}
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4 px-4 md:px-0">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#050505]">
                  Track Your Way - Photo, Voice, or Manual
                </h3>
                <p className="text-base md:text-lg text-[#878787] leading-relaxed">
                  Choose how you want to log: snap photos for instant AI recognition, speak naturally to our advanced voice AI, or type manually. Three flexible options that adapt to any situation or preference.
                </p>
              </div>
            </div>

            {/* Feature 2 - Personalized Daily Guidance (Image Right) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 p-4 md:py-4 bg-white border border-[#EEEEEE] rounded-2xl">
              <div className="w-full md:w-1/2 relative h-[300px] md:h-[380px]">
                <Image
                  src="/companion2.jpg"
                  alt="Personalized Daily Guidance"
                  fill
                  className="object-cover rounded-2xl"
                  quality={90}
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4 px-4 md:px-0">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#050505]">
                  Personalized Daily Guidance
                </h3>
                <p className="text-base md:text-lg text-[#878787] leading-relaxed">
                  Wake up to customized fitness routines and nutrition suggestions from your AI health coach, perfectly tailored to your goals, progress, and lifestyle. Your personal health advisor available 24/7.
                </p>
              </div>
            </div>

            {/* Feature 3 - Track Your Entire Health Journey (Image Left) */}
            <div className="flex flex-col md:flex-row items-center gap-8 p-4 md:py-4 bg-white border border-[#EEEEEE] rounded-2xl">
              <div className="w-full md:w-1/2 relative h-[300px] md:h-[380px]">
                <Image
                  src="/companion3.jpg"
                  alt="Track Your Entire Health Journey"
                  fill
                  className="object-cover rounded-2xl"
                  quality={90}
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4 px-4 md:px-0">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#050505]">
                  Track Your Entire Health Journey
                </h3>
                <p className="text-base md:text-lg text-[#878787] leading-relaxed">
                  Log workouts, meals, progress photos, and daily habits. Monitor your complete transformation with intelligent insights that show exactly how you're progressing toward your goals.
                </p>
              </div>
            </div>

            {/* Feature 4 - Your Personal AI Coach (Image Right) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 p-4 md:py-4 bg-white border border-[#EEEEEE] rounded-2xl">
              <div className="w-full md:w-1/2 relative h-[300px] md:h-[380px]">
                <Image
                  src="/companion4.jpg"
                  alt="Your Personal AI Coach"
                  fill
                  className="object-cover rounded-2xl"
                  quality={90}
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4 px-4 md:px-0">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#050505]">
                  Your Personal AI Coach
                </h3>
                <p className="text-base md:text-lg text-[#878787] leading-relaxed">
                  Get expert guidance, motivation, and support whenever you need it. Ask questions, get workout modifications, nutrition advice, and personalized coaching that grows with your journey.
                </p>
              </div>
            </div>

            {/* Feature 5 - AI Coaching Support (Image Left) */}
            <div className="flex flex-col md:flex-row items-center gap-8 p-4 md:py-4 bg-white border border-[#EEEEEE] rounded-2xl">
              <div className="w-full md:w-1/2 relative h-[300px] md:h-[380px]">
                <Image
                  src="/companion5.jpg"
                  alt="AI Coaching Support"
                  fill
                  className="object-cover rounded-2xl"
                  quality={90}
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4 px-4 md:px-0">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#050505]">
                  Always-On Health Support
                </h3>
                <p className="text-base md:text-lg text-[#878787] leading-relaxed">
                  Get expert guidance, motivation, and support whenever you need it. Ask questions, get workout modifications, nutrition advice, and personalized coaching that grows with your journey.
                </p>
              </div>
            </div>

            {/* Feature 6 - Social Support & Engagement (Image Right) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 p-4 md:py-4 bg-white border border-[#EEEEEE] rounded-2xl">
              <div className="w-full md:w-1/2 relative h-[300px] md:h-[380px]">
                <Image
                  src="/companion6.jpg"
                  alt="Social Support & Engagement"
                  fill
                  className="object-cover rounded-2xl"
                  quality={90}
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4 px-4 md:px-0">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#050505]">
                  Social Support & Engagement
                </h3>
                <p className="text-base md:text-lg text-[#878787] leading-relaxed">
                  Connect with like-minded health enthusiasts, share your journey, celebrate victories together, and find accountability partners who understand your goals and challenges.
                </p>
              </div>
            </div>

            {/* Feature 7 - Effortlessly Intuitive Interface (Image Left) */}
            <div className="flex flex-col md:flex-row items-center gap-8 p-4 md:py-4 bg-white border border-[#EEEEEE] rounded-2xl">
              <div className="w-full md:w-1/2 relative h-[300px] md:h-[380px]">
                <Image
                  src="/companion7.jpg"
                  alt="Effortlessly Intuitive Interface"
                  fill
                  className="object-cover rounded-2xl"
                  quality={90}
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4 px-4 md:px-0">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#050505]">
                  Effortlessly Intuitive Interface
                </h3>
                <p className="text-base md:text-lg text-[#878787] leading-relaxed">
                  Cutting-edge health technology wrapped in a beautifully modern, simple interface. So intuitive that anyone can master their health journey from day one, regardless of experience level.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
})

Revolution.displayName = "Revolution"

export default Revolution

