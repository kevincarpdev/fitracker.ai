"use client"

import { memo, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Features = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const features = [
    {
      title: "Track Your Way - Photo, Voice, or Manual",
      description: "Choose how you want to log: snap photos for instant AI recognition, speak naturally to our advanced voice AI, or type manually. Three flexible options that adapt to any situation or preference.",
      backgroundImage: "/screen2.png"
    },
    {
      title: "Personalized Daily Guidance",
      description: "Wake up to customized fitness routines and nutrition suggestions from your AI health coach, perfectly tailored to your goals, progress, and lifestyle. Your personal health advisor available 24/7.",
      backgroundImage: "/screen1.png"
    },
    {
      title: "Track Your Entire Health Journey",
      description: "Log workouts, meals, progress photos, and daily habits. Monitor your complete transformation with intelligent insights that show exactly how you're progressing toward your goals.",
      backgroundImage: "/screen4.png"
    },
    {
      title: "Your Personal AI Coach",
      description: "Get expert guidance, motivation, and support whenever you need it. Ask questions, get workout modifications, nutrition advice, and personalized coaching that grows with your journey.",
      backgroundImage: "/screen3.png"
    },
    {
      title: "Discover Everything You Need",
      description: "Find the best gyms, healthy restaurants, and grocery stores near you. Get recommendations perfectly matched to your fitness goals and dietary preferences wherever you go."
    },
    {
      title: "Social Support & Engagement",
      description: "Connect with like-minded health enthusiasts, share your journey, celebrate victories together, and find accountability partners who understand your goals and challenges."
    },
    {
      title: "Effortlessly Intuitive Interface",
      description: "Cutting-edge health technology wrapped in a beautifully modern, simple interface. So intuitive that anyone can master their health journey from day one, regardless of experience level."
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
    <section id="features" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-foreground">
            Your Complete Health Companion - All the Features You Need
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto px-12 sm:px-16 md:px-20">
          {/* Navigation Buttons - Outside the slides */}
          <button
            onClick={prevSlide}
            className="absolute -left-1 sm:-left-2 md:-left-6 top-1/2 -translate-y-1/2 z-30 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 md:p-4 hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl"
            aria-label="Previous feature"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute -right-1 sm:-right-2 md:-right-6 top-1/2 -translate-y-1/2 z-30 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 md:p-4 hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl"
            aria-label="Next feature"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-border/50">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <div 
                    className="relative h-[600px] md:h-[500px] bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden"
                    style={feature.backgroundImage ? {
                      backgroundImage: `url(${feature.backgroundImage})`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'right center',
                      backgroundRepeat: 'no-repeat'
                    } : {}}
                  >
                    {/* Clean overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70"></div>
                    
                    {/* Content Container */}
                    <div className="relative z-10 h-full flex items-center">
                      <div className="max-w-xl px-8 md:px-12 py-16">
                        <div className="space-y-6">
                          {/* Title */}
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
                            {feature.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed max-w-lg">
                            {feature.description}
                          </p>
                          
                          {/* Feature Badge */}
                          {feature.backgroundImage && (
                            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                              Live App Feature
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* App Screenshot Overlay for Mobile */}
                    {feature.backgroundImage && (
                      <div className="absolute bottom-4 right-4 md:hidden">
                        <div className="w-16 h-32 bg-gradient-to-t from-primary/20 to-transparent rounded-lg border border-primary/20"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
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
                    ? 'w-8 h-3 bg-blue-600 rounded-full shadow-sm' 
                    : 'w-3 h-3 bg-gray-400 hover:bg-blue-400 rounded-full hover:scale-110'
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
