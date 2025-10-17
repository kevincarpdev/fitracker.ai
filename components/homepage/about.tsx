"use client"

import { memo } from "react"
import { Sparkles, Heart, Users, TrendingUp } from "lucide-react"

const About = memo(() => {
  const stats = [
    { 
      icon: Sparkles,
      value: "3 Ways", 
      label: "to track: photo, voice, or manual input",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      icon: TrendingUp,
      value: "AI-Powered", 
      label: "daily fitness and nutrition recommendations",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Heart,
      value: "24/7", 
      label: "personalized AI health coaching",
      gradient: "from-red-500 to-orange-500"
    },
    { 
      icon: Users,
      value: "Complete", 
      label: "health companion loved by beginners and pros",
      gradient: "from-green-500 to-emerald-500"
    },
  ]

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white via-[hsl(var(--primary-50))] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-[hsl(var(--primary-200))] rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-[hsl(var(--primary-300))] rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[hsl(var(--primary-200))] shadow-sm mb-8">
            <Sparkles className="w-4 h-4 text-[hsl(var(--primary))]" />
            <span className="text-sm font-heading font-semibold text-[hsl(var(--primary))]">Why Fitracker?</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 text-[hsl(var(--primary))] tracking-tight leading-tight">
            The Complete AI-Powered
            <br />
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--primary-600))] to-[hsl(var(--primary-700))] bg-clip-text text-transparent">
              Health Revolution
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-[hsl(var(--muted-foreground))] leading-relaxed font-body">
            Fitracker is the world's first complete AI health companion designed to support every aspect of your wellness journey. Combining advanced fitness tracking, intelligent nutrition guidance, vibrant community support, and personalized AI coaching - all in one beautifully simple app.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[hsl(var(--border))]"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl font-heading font-bold text-[hsl(var(--primary))] mb-3">
                  {stat.value}
                </div>
                
                <div className="text-base text-[hsl(var(--muted-foreground))] font-body leading-relaxed">
                  {stat.label}
                </div>

                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[hsl(var(--primary-50))]/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
})

About.displayName = "About"

export default About
