"use client"

import { memo } from "react"
import { Icon } from "@iconify/react"
import { Button } from "@/components/ui/button"

const Community = memo(() => {
  const communityFeatures = [
    {
      title: "Share & Connect",
      description: "Share workout logs, meal photos, and voice notes with encouraging feedback from your community.",
      icon: "solar:share-outline"
    },
    {
      title: "Health Challenges",
      description: "Join comprehensive health challenges that cover fitness, nutrition, and wellness with your community.",
      icon: "mdi:arm-flex-outline"
    },
    {
      title: "Peer Support",
      description: "Get cooking tips, workout modifications, and health advice from peers who understand your journey.",
      icon: "formkit:people"
    },
    {
      title: "Accountability Partners",
      description: "Find accountability partners for complete lifestyle changes and celebrate daily wins together.",
      icon: "fluent:people-24-regular"
    },
    {
      title: "AI-Powered Wins",
      description: "Celebrate daily wins powered by AI recommendations and share your progress with the community.",
      icon: "mingcute:ai-line"
    },
    {
      title: "Learn & Grow",
      description: "Learn from others who are mastering their complete health transformation and share your own insights.",
      icon: "solar:book-outline"
    }
  ]

  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 text-[#050505] leading-tight">
            A Community That Supports Your Complete Health Journey
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-[#878787] leading-relaxed font-medium">
            Connect with thousands of health enthusiasts who understand that wellness is about more than just workouts or diet - it's about complete lifestyle transformation. Share your daily wins, whether it's your first voice-logged meal, a new workout PR, or a healthy restaurant discovery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {communityFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-[#EEEEEE] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                <Icon icon={feature.icon} className="w-8 h-8 text-[#1F005C]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#050505]">{feature.title}</h3>
              <p className="text-[#878787] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#878787] leading-relaxed font-medium mb-8">
            Find accountability partners who celebrate every aspect of your health journey and provide encouragement when you need it most.
          </p>
          <Button 
            size="lg" 
            className="bg-[#1F005C] hover:bg-[#1F005C]/90 text-white px-8 py-4 text-lg rounded-2xl h-auto"
          >
            Start your Journey
          </Button>
        </div>
      </div>
    </section>
  )
})

Community.displayName = "Community"

export default Community



