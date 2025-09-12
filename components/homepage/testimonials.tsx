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
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-foreground">
            Real Health Transformations from Real People
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card/70 rounded-3xl p-8 backdrop-blur-sm border border-border shadow-lg">
              <blockquote className="text-lg leading-relaxed mb-6 font-body">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden">
                  <img src="/placeholder-user.jpg" alt={testimonial.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-heading font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
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
