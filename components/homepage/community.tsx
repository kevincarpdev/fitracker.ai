"use client"

import { memo } from "react"

const Community = memo(() => {
  const communityFeatures = [
    {
      title: "Share & Connect",
      description: "Share workout logs, meal photos, and voice notes with encouraging feedback from your community."
    },
    {
      title: "Health Challenges",
      description: "Join comprehensive health challenges that cover fitness, nutrition, and wellness with your community."
    },
    {
      title: "Peer Support",
      description: "Get cooking tips, workout modifications, and health advice from peers who understand your journey."
    },
    {
      title: "Accountability Partners",
      description: "Find accountability partners for complete lifestyle changes and celebrate daily wins together."
    },
    {
      title: "AI-Powered Wins",
      description: "Celebrate daily wins powered by AI recommendations and share your progress with the community."
    },
    {
      title: "Learn & Grow",
      description: "Learn from others who are mastering their complete health transformation and share your own insights."
    }
  ]

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-muted to-muted/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-foreground">
            A Community That Supports Your Complete Health Journey
          </h2>
          <p className="text-xl max-w-4xl mx-auto text-muted-foreground leading-relaxed font-body">
            Connect with thousands of health enthusiasts who understand that wellness is about more than just workouts or diet - it's about complete lifestyle transformation. Share your daily wins, whether it's your first voice-logged meal, a new workout PR, or a healthy restaurant discovery. Find accountability partners who celebrate every aspect of your health journey and provide encouragement when you need it most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityFeatures.map((feature, index) => (
            <div key={index} className="bg-card/70 rounded-3xl p-8 backdrop-blur-sm border border-border shadow-lg">
              <h3 className="text-xl font-heading font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground font-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Community.displayName = "Community"

export default Community



