"use client"

import { memo, useState } from "react"
import { ChevronLeft, ChevronRight, Camera, MessageSquare, Keyboard, Sparkles } from "lucide-react"

const Features = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const features = [
    {
      title: "Track Your Way - Photo, Voice, or Manual",
      description: "Choose how you want to log: snap photos for instant AI recognition, speak naturally to our advanced voice AI, or type manually. Three flexible options that adapt to any situation or preference.",
      backgroundImage: "/screen2.png",
      icon: Camera,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Personalized Daily Guidance",
      description: "Wake up to customized fitness routines and nutrition suggestions from your AI health coach, perfectly tailored to your goals, progress, and lifestyle. Your personal health advisor available 24/7.",
      backgroundImage: "/screen1.png",
      icon: Sparkles,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Track Your Entire Health Journey",
      description: "Log workouts, meals, progress photos, and daily habits. Monitor your complete transformation with intelligent insights that show exactly how you're progressing toward your goals.",
      backgroundImage: "/screen4.png",
      icon: MessageSquare,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Your Personal AI Coach",
      description: "Get expert guidance, motivation, and support whenever you need it. Ask questions, get workout modifications, nutrition advice, and personalized coaching that grows with your journey.",
      backgroundImage: "/screen3.png",
      icon: Sparkles,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Discover Everything You Need",
      description: "Find the best gyms, healthy restaurants, and grocery stores near you. Get recommendations perfectly matched to your fitness goals and dietary preferences wherever you go.",
      icon: Keyboard,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Social Support & Engagement",
      description: "Connect with like-minded health enthusiasts, share your journey, celebrate victories together, and find accountability partners who understand your goals and challenges.",
      icon: MessageSquare,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Effortlessly Intuitive Interface",
      description: "Cutting-edge health technology wrapped in a beautifully modern, simple interface. So intuitive that anyone can master their health journey from day one, regardless of experience level.",
      icon: Sparkles,
      gradient: "from-yellow-500 to-orange-500"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="features" className="py-32 bg-gradient-to-b from-white via-[hsl(var(--primary-50))] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[hsl(var(--primary-200))] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[hsl(var(--primary-300))] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[hsl(var(--primary-200))] shadow-sm mb-8">
            <Sparkles className="w-4 h-4 text-[hsl(var(--primary))]" />
            <span className="text-sm font-heading font-semibold text-[hsl(var(--primary))]">Everything You Need</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 text-[hsl(var(--primary))] tracking-tight leading-tight">
            Your Complete Health
            <br />
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--primary-600))] to-[hsl(var(--primary-700))] bg-clip-text text-transparent">
              Companion Features
            </span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto px-12 sm:px-16 md:px-20">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-1 sm:-left-2 md:-left-6 top-1/2 -translate-y-1/2 z-30 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-700))] hover:shadow-xl text-white rounded-full p-3 md:p-4 hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label="Previous feature"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute -right-1 sm:-right-2 md:-right-6 top-1/2 -translate-y-1/2 z-30 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-700))] hover:shadow-xl text-white rounded-full p-3 md:p-4 hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label="Next feature"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/50 bg-white">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="w-full flex-shrink-0 relative">
                    <div 
                      className="relative h-[600px] md:h-[500px] bg-gradient-to-br from-white to-[hsl(var(--primary-50))] overflow-hidden"
                      style={feature.backgroundImage ? {
                        backgroundImage: `url(${feature.backgroundImage})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'right center',
                        backgroundRepeat: 'no-repeat'
                      } : {}}
                    >
                      {/* Clean overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/60"></div>
                      
                      {/* Content Container */}
                      <div className="relative z-10 h-full flex items-center">
                        <div className="max-w-xl px-8 md:px-12 py-16">
                          <div className="space-y-6">
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                              <Icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Title */}
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[hsl(var(--primary))] leading-tight">
                              {feature.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] font-body leading-relaxed max-w-lg">
                              {feature.description}
                            </p>
                            
                            {/* Feature Badge */}
                            {feature.backgroundImage && (
                              <div className="inline-flex items-center px-4 py-2 bg-[hsl(var(--primary-100))] text-[hsl(var(--primary))] rounded-full text-sm font-semibold border border-[hsl(var(--primary-200))]">
                                <span className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mr-2 animate-pulse"></span>
                                Live App Feature
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-10 h-3 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-700))] rounded-full shadow-lg' 
                    : 'w-3 h-3 bg-[hsl(var(--muted-foreground))]/30 hover:bg-[hsl(var(--primary))]/50 rounded-full hover:scale-110'
                }`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

Features.displayName = "Features"

export default Features
