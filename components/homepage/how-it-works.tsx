"use client"

import { memo } from "react"

const HowItWorks = memo(() => {
  const steps = [
    {
      number: "1",
      title: "Track Your Way - Photo, Voice, or Type",
      description: "Log meals and workouts however you prefer: snap photos for instant AI recognition, speak naturally to our voice AI, or type manually. Fitracker adapts to your lifestyle and preferences."
    },
    {
      number: "2", 
      title: "Get Daily AI Recommendations",
      description: "Receive personalized daily fitness routines and nutrition suggestions from your AI health coach, perfectly tailored to your goals, preferences, and progress level."
    },
    {
      number: "3",
      title: "Connect, Progress, & Thrive", 
      description: "Track your complete health journey, celebrate milestones with your community, discover healthy places nearby, and let Fitracker guide you every step toward your goals."
    }
  ]

  return (
    <section className="py-20 gradient-bg-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-foreground">
            Your Complete Health Journey in Three Simple Steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">{step.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-body">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

HowItWorks.displayName = "HowItWorks"

export default HowItWorks
