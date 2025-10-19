"use client"

import { memo } from "react"

const Testimonials = memo(() => {
  const testimonials = [
    {
      quote: "Fitracker completely changed my relationship with health. The voice feature is incredible - I can log my breakfast while getting ready for work, and the AI coach gives me daily recommendations that actually fit my crazy schedule. The community support helped me stay consistent, and I've built healthy habits I never thought possible.",
      author: "Marie Cole",
      title: "Marketing Manager"
    },
    {
      quote: "As someone who'd never set foot in a gym, Fitracker made fitness approachable. I love that I can take photos of my home workouts, get daily suggestions tailored to my space, and connect with others who started where I did. The app's design is so clean and simple - it never feels overwhelming.",
      author: "David Chen",
      title: "Software Developer"
    },
    {
      quote: "The convenience is unmatched. Between surgeries, I can quickly voice-log my meals or snap photos of patient lunches. Fitracker's AI recommendations help me maintain energy throughout 12-hour shifts, and finding healthy options near the hospital has been a lifesaver. The community understands the healthcare lifestyle.",
      author: "Dr. Aisha Patel",
      title: "Emergency Physician"
    },
    {
      quote: "Fitracker taught me that fitness isn't just about the gym - it's about building a sustainable lifestyle. The AI coach helped me create realistic goals, the community celebrated my progress photos, and discovering healthy restaurants made social eating stress-free. I've never felt more confident about my health choices.",
      author: "James Thompson",
      title: "High School Teacher"
    },
    {
      quote: "Between three kids and running my own business, I thought getting healthy was impossible. Fitracker's voice tracking lets me log meals while multitasking, the AI gives me quick workout ideas for naptime, and the community provides the motivation I need. It's like having a personal trainer and nutritionist in my pocket.",
      author: "Rebecca Martinez",
      title: "Small Business Owner & Mom"
    }
  ]

  return (
    <section className="py-20 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-8 text-[#050505] leading-tight font-medium max-w-[25ch] mx-auto">
            Real Health Transformations from Real People
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:grid-rows-2">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl p-8 border border-[#EEEEEE] shadow-sm hover:shadow-md transition-shadow flex flex-col ${
                index === 0 ? 'md:row-span-2' : ''
              }`}
            >
              {index === 0 ? (
                // First testimonial: Author at top, quote at bottom
                <>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden flex items-center justify-center">
                      <img src="/testimonial-author.png" alt={testimonial.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#050505]">{testimonial.author}</div>
                      <div className="text-sm text-[#878787]">{testimonial.title}</div>
                    </div>
                  </div>
                  <div className="flex-grow flex flex-col justify-end">
                    <div className="mb-6">
                      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.8905 23.3748C16.7365 24.7938 16.3258 25.9268 15.6108 26.9315C14.652 28.2717 13.0442 29.5238 10.3858 30.8548C10.2153 30.9298 10.0618 31.0387 9.93457 31.1748C9.80737 31.3109 9.70916 31.4714 9.6459 31.6466C9.58264 31.8219 9.55564 32.0081 9.56655 32.1941C9.57746 32.3801 9.62604 32.5619 9.70935 32.7285C9.79267 32.8951 9.90897 33.0431 10.0512 33.1634C10.1934 33.2837 10.3586 33.3738 10.5368 33.4284C10.7149 33.4829 10.9023 33.5006 11.0875 33.4806C11.2727 33.4605 11.4519 33.403 11.6142 33.3115C14.4558 31.8925 16.5147 30.3947 17.8475 28.5265C19.206 26.6272 19.7083 24.4877 19.7083 21.9998V13.7498C19.7083 12.8989 19.3703 12.0829 18.7686 11.4812C18.167 10.8795 17.3509 10.5415 16.5 10.5415H9.16666C8.31576 10.5415 7.49971 10.8795 6.89803 11.4812C6.29635 12.0829 5.95833 12.8989 5.95833 13.7498V20.1665C5.95833 21.9375 7.39566 23.3748 9.16666 23.3748H16.8905ZM35.2238 23.3748C35.0698 24.7938 34.6592 25.9268 33.9442 26.9315C32.9853 28.2717 31.3775 29.5238 28.7192 30.8548C28.5486 30.9298 28.3951 31.0387 28.2679 31.1748C28.1407 31.3109 28.0425 31.4714 27.9792 31.6466C27.916 31.8219 27.889 32.0081 27.8999 32.1941C27.9108 32.3801 27.9594 32.5619 28.0427 32.7285C28.126 32.8951 28.2423 33.0431 28.3845 33.1634C28.5268 33.2837 28.692 33.3738 28.8701 33.4284C29.0482 33.4829 29.2356 33.5006 29.4208 33.4806C29.606 33.4605 29.7852 33.403 29.9475 33.3115C32.7892 31.8925 34.848 30.3947 36.1808 28.5265C37.5393 26.6272 38.0417 24.4877 38.0417 21.9998V13.7498C38.0417 12.8989 37.7036 12.0829 37.102 11.4812C36.5003 10.8795 35.6842 10.5415 34.8333 10.5415H27.5C26.6491 10.5415 25.833 10.8795 25.2314 11.4812C24.6297 12.0829 24.2917 12.8989 24.2917 13.7498V20.1665C24.2917 21.9375 25.729 23.3748 27.5 23.3748H35.2238Z" fill="#1F005C"/>
                      </svg>
                    </div>
                    <blockquote className="text-lg leading-relaxed font-semibold text-[#1F005C]">
                      {testimonial.quote}
                    </blockquote>
                  </div>
                </>
              ) : (
                // Other testimonials: Normal order
                <>
                  <div className="mb-4">
                    {index % 2 === 0 ? (
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.284 16.9998C12.172 18.0318 11.8733 18.8558 11.3533 19.5865C10.656 20.5612 9.48665 21.4718 7.55331 22.4398C7.42928 22.4944 7.31763 22.5735 7.22512 22.6725C7.13262 22.7715 7.06119 22.8883 7.01518 23.0157C6.96918 23.1431 6.94954 23.2786 6.95747 23.4138C6.96541 23.5491 7.00074 23.6813 7.06133 23.8025C7.12192 23.9237 7.20651 24.0313 7.30995 24.1188C7.41339 24.2063 7.53353 24.2718 7.66309 24.3115C7.79264 24.3511 7.9289 24.3641 8.06359 24.3494C8.19829 24.3348 8.32861 24.293 8.44665 24.2265C10.5133 23.1945 12.0106 22.1052 12.98 20.7465C13.968 19.3652 14.3333 17.8092 14.3333 15.9998V9.99984C14.3333 9.381 14.0875 8.78751 13.6499 8.34992C13.2123 7.91234 12.6188 7.6665 12 7.6665H6.66665C6.04781 7.6665 5.45432 7.91234 5.01673 8.34992C4.57915 8.78751 4.33331 9.381 4.33331 9.99984V14.6665C4.33331 15.9545 5.37865 16.9998 6.66665 16.9998H12.284ZM25.6173 16.9998C25.5053 18.0318 25.2066 18.8558 24.6866 19.5865C23.9893 20.5612 22.82 21.4718 20.8866 22.4398C20.7626 22.4944 20.651 22.5735 20.5585 22.6725C20.466 22.7715 20.3945 22.8883 20.3485 23.0157C20.3025 23.1431 20.2829 23.2786 20.2908 23.4138C20.2987 23.5491 20.3341 23.6813 20.3947 23.8025C20.4553 23.9237 20.5398 24.0313 20.6433 24.1188C20.7467 24.2063 20.8669 24.2718 20.9964 24.3115C21.126 24.3511 21.2622 24.3641 21.3969 24.3494C21.5316 24.3348 21.6619 24.293 21.78 24.2265C23.8466 23.1945 25.344 22.1052 26.3133 20.7465C27.3013 19.3652 27.6666 17.8092 27.6666 15.9998V9.99984C27.6666 9.381 27.4208 8.78751 26.9832 8.34992C26.5456 7.91234 25.9522 7.6665 25.3333 7.6665H20C19.3811 7.6665 18.7876 7.91234 18.3501 8.34992C17.9125 8.78751 17.6666 9.381 17.6666 9.99984V14.6665C17.6666 15.9545 18.712 16.9998 20 16.9998H25.6173Z" fill="#1F005C"/>
                      </svg>
                    ) : (
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3333 15.9998H6.66665C6.31302 15.9998 5.97389 15.8594 5.72384 15.6093C5.47379 15.3593 5.33331 15.0201 5.33331 14.6665V9.99984C5.33331 9.64622 5.47379 9.30708 5.72384 9.05703C5.97389 8.80698 6.31302 8.6665 6.66665 8.6665H12C12.3536 8.6665 12.6927 8.80698 12.9428 9.05703C13.1928 9.30708 13.3333 9.64622 13.3333 9.99984V15.9998ZM13.3333 15.9998C13.3333 19.3332 12 21.3332 7.99998 23.3332M26.6666 15.9998H20C19.6464 15.9998 19.3072 15.8594 19.0572 15.6093C18.8071 15.3593 18.6666 15.0201 18.6666 14.6665V9.99984C18.6666 9.64622 18.8071 9.30708 19.0572 9.05703C19.3072 8.80698 19.6464 8.6665 20 8.6665H25.3333C25.6869 8.6665 26.0261 8.80698 26.2761 9.05703C26.5262 9.30708 26.6666 9.64622 26.6666 9.99984V15.9998ZM26.6666 15.9998C26.6666 19.3332 25.3333 21.3332 21.3333 23.3332" stroke="#1F005C" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                  </div>
                  <blockquote className="text-base leading-relaxed mb-6 text-[#878787] flex-grow">
                    {testimonial.quote}
                  </blockquote>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full border-white border-2 overflow-hidden flex items-center justify-center">
                      <img src="/testimonial-author.png" alt={testimonial.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#050505]">{testimonial.author}</div>
                      <div className="text-sm text-[#878787]">{testimonial.title}</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Testimonials.displayName = "Testimonials"

export default Testimonials
