"use client"

import { memo } from "react"

const Testimonials = memo(() => {
  const testimonials = [
    {
      quote: "Fitracker is my complete health companion! I love that I can speak my meals when I'm rushing, snap photos when convenient, or type when I have time. The daily AI recommendations have completely transformed my routine - I actually look forward to my personalized workouts and meal suggestions!",
      author: "Sarah M.",
      title: "Lost 35 lbs & gained strength"
    },
    {
      quote: "The voice feature is a game-changer for busy professionals like me. I can tell Fitracker what I ate during my commute, log workouts while still at the gym, and get daily recommendations that actually fit my schedule. The community support keeps me accountable too.",
      author: "Marcus R.",
      title: "Executive who found work-life balance"
    },
    {
      quote: "I've never had such comprehensive health support in one app. The AI coach gives me daily nutrition and fitness guidance, I can track everything easily with photos or voice, and the community celebrates every win. Fitracker truly guides you through your entire health journey.",
      author: "Jennifer K.",
      title: "Complete lifestyle transformation"
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
