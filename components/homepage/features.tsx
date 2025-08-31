"use client"

import { memo } from "react"

const Features = memo(() => {
  const features = [
    {
      icon: "📸",
      title: "Track Your Way - Photo, Voice, or Manual",
      description: "Choose how you want to log: snap photos for instant AI recognition, speak naturally to our advanced voice AI, or type manually. Three flexible options that adapt to any situation or preference."
    },
    {
      icon: "🤖",
      title: "Personalized Daily Guidance",
      description: "Wake up to customized fitness routines and nutrition suggestions from your AI health coach, perfectly tailored to your goals, progress, and lifestyle. Your personal health advisor available 24/7."
    },
    {
      icon: "📊",
      title: "Track Your Entire Health Journey",
      description: "Log workouts, meals, progress photos, and daily habits. Monitor your complete transformation with intelligent insights that show exactly how you're progressing toward your goals."
    },
    {
      icon: "💬",
      title: "Your Personal AI Coach",
      description: "Get expert guidance, motivation, and support whenever you need it. Ask questions, get workout modifications, nutrition advice, and personalized coaching that grows with your journey."
    },
    {
      icon: "📍",
      title: "Discover Everything You Need",
      description: "Find the best gyms, healthy restaurants, and grocery stores near you. Get recommendations perfectly matched to your fitness goals and dietary preferences wherever you go."
    },
    {
      icon: "👥",
      title: "Social Support & Engagement",
      description: "Connect with like-minded health enthusiasts, share your journey, celebrate victories together, and find accountability partners who understand your goals and challenges."
    },
    {
      icon: "✨",
      title: "Effortlessly Intuitive Interface",
      description: "Cutting-edge health technology wrapped in a beautifully modern, simple interface. So intuitive that anyone can master their health journey from day one, regardless of experience level."
    }
  ]

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-foreground">
            Your Complete Health Companion - All the Features You Need
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card/70 rounded-3xl p-8 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground font-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Features.displayName = "Features"

export default Features
