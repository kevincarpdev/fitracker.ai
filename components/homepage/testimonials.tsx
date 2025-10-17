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
          <h2 className="text-4xl md:text-5xl mb-8 text-[#050505] leading-tight max-w-[25ch] mx-auto">
            Real Health Transformations from Real People
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-[#EEEEEE] shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <svg className="w-10 h-10 text-[#1F005C] opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <blockquote className="text-base leading-relaxed mb-6 text-[#050505]">
                {testimonial.quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden flex items-center justify-center">
                  <img src="/placeholder-user.jpg" alt={testimonial.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-[#050505]">{testimonial.author}</div>
                  <div className="text-sm text-[#878787]">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Testimonials.displayName = "Testimonials"

export default Testimonials
