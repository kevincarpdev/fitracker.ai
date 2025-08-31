"use client"

import { memo } from "react"

const About = memo(() => {
  const stats = [
    { value: "3", label: "ways to track: photo, voice, or manual input" },
    { value: "AI-powered", label: "daily fitness and nutrition recommendations" },
    { value: "24/7", label: "personalized AI health coaching" },
    { value: "Complete", label: "health companion loved by beginners and pros" },
  ]

  return (
    <section id="about" className="py-20 gradient-bg-1">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-foreground">
            The Complete AI-Powered Health Revolution
          </h2>
          <p className="text-xl max-w-4xl mx-auto text-muted-foreground leading-relaxed font-body">
            Fitracker is the world's first complete AI health companion designed to support every aspect of your wellness journey. Combining advanced fitness tracking, intelligent nutrition guidance, vibrant community support, and personalized AI coaching, Fitracker makes health and fitness achievable for everyone. Whether you prefer to snap photos, speak to our AI, or type manually, our cutting-edge technology adapts to your lifestyle. Get daily personalized recommendations, track workouts and nutrition effortlessly, and connect with a supportive community - all through our beautifully simple, modern interface.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-heading font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg text-muted-foreground font-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

About.displayName = "About"

export default About
