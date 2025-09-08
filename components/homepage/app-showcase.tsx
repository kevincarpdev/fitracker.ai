"use client"

import { memo } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Brain, TrendingUp, MessageCircle, Calendar } from "lucide-react"
import { useAppShowcaseEffects } from "@/hooks/use-app-showcase-effects"

const AppShowcase = memo(() => {
  const {
    leftScreenRotation,
    rightScreenRotation,
    centerScreenScale,
    screenshotsOpacity,
    contentOpacity,
    section1Opacity,
    section2Opacity,
    section3Opacity,
    section4Opacity,
    section5Opacity
  } = useAppShowcaseEffects()
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* App Screenshots Fan Section */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Experience Fitracker
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our comprehensive fitness app transforms your health journey with intelligent tracking and personalized guidance.
          </p>
        </div>

        {/* Three App Screenshots Fanning Out */}
        <div 
          className="relative flex justify-center items-center gap-8 md:gap-12 lg:gap-16"
          style={{ opacity: screenshotsOpacity }}
        >
          {/* Left Screen - Weight Tracking */}
          <div 
            className="relative transform transition-all duration-1000 ease-out hover:rotate-0 hover:scale-105"
            style={{ transform: `rotate(${leftScreenRotation}deg)` }}
          >
            <div className="w-64 h-[500px] bg-white rounded-[2rem] shadow-2xl border-8 border-gray-900 overflow-hidden hover:shadow-3xl transition-shadow duration-500">
              <div className="bg-gray-900 h-8 flex items-center justify-center">
                <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
              </div>
              <div className="p-6 bg-gray-50 h-full">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-800">WEIGHT</h3>
                  <div className="text-3xl font-bold text-gray-900">85KG</div>
                  <div className="text-sm text-green-600">20% vs last week</div>
                </div>
                
                <div className="flex justify-center gap-2 mb-4">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">1W</button>
                  <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">1M</button>
                  <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">6M</button>
                </div>
                
                {/* Simple weight chart */}
                <div className="h-32 bg-white rounded-lg p-2 mb-4">
                  <div className="h-full flex items-end justify-between">
                    <div className="w-1 bg-blue-500 h-16"></div>
                    <div className="w-1 bg-blue-500 h-20"></div>
                    <div className="w-1 bg-blue-500 h-12"></div>
                    <div className="w-1 bg-blue-500 h-24"></div>
                    <div className="w-1 bg-blue-500 h-18"></div>
                    <div className="w-1 bg-blue-500 h-14"></div>
                    <div className="w-1 bg-blue-500 h-22"></div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">DAILY CHANGE</div>
                  <div className="text-lg font-bold text-green-600">+2</div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Screen - Workout Detail */}
          <div 
            className="relative z-10 transform transition-all duration-1000 ease-out hover:scale-110"
            style={{ transform: `scale(${centerScreenScale})` }}
          >
            <div className="w-64 h-[500px] bg-gray-900 rounded-[2rem] shadow-2xl border-8 border-gray-900 overflow-hidden hover:shadow-3xl transition-shadow duration-500">
              <div className="bg-gray-900 h-8 flex items-center justify-center">
                <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
              </div>
              <div className="p-6 bg-gray-900 h-full text-white relative">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">ROPE PULLS</h3>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">85KG</div>
                    <div className="text-sm text-gray-300">Weight</div>
                    <div className="text-2xl font-bold">10</div>
                    <div className="text-sm text-gray-300">Reps</div>
                  </div>
                </div>
                
                {/* Exercise image placeholder */}
                <div className="absolute bottom-6 right-6 w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Screen - Daily Overview */}
          <div 
            className="relative transform hover:rotate-0 transition-all duration-700 ease-out hover:scale-105"
            style={{ transform: `rotate(${rightScreenRotation}deg)` }}
          >
            <div className="w-64 h-[500px] bg-white rounded-[2rem] shadow-2xl border-8 border-gray-900 overflow-hidden hover:shadow-3xl transition-shadow duration-500">
              <div className="bg-gray-900 h-8 flex items-center justify-center">
                <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
              </div>
              <div className="p-6 bg-white h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-600">9:41</div>
                  <div className="flex items-center gap-1 text-orange-500 text-sm">
                    <span className="text-lg">🔥</span>
                    <span>12 day streak!</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
                
                {/* Date selector */}
                <div className="flex justify-between mb-4 text-xs">
                  <span className="text-gray-500">MAR 1</span>
                  <span className="text-gray-500">MAR 2</span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full">TODAY</span>
                  <span className="text-gray-500">MAR 4</span>
                  <span className="text-gray-500">MAR 5</span>
                </div>
                
                {/* Workout card */}
                <div className="bg-gray-800 text-white p-4 rounded-xl mb-4 relative">
                  <div className="text-sm mb-2">Today's Workout</div>
                  <div className="text-2xl font-bold mb-2">STRENGTH TRAINING</div>
                  <div className="text-xs text-gray-300 mb-3">Full Body • Advanced • 20 min</div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                    Go to workout →
                  </button>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Today's Steps</div>
                    <div className="text-xs text-green-600 mb-1">↗ 25% vs last week</div>
                    <div className="text-lg font-bold">5,137</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Current Weight</div>
                    <div className="text-xs text-red-600 mb-1">↘ 25% vs last week</div>
                    <div className="text-lg font-bold">80KG</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alternating Content Sections */}
              <div 
          className="max-w-6xl mx-auto px-6 space-y-32"
          style={{ opacity: contentOpacity }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Powerful Features for Your Health Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the comprehensive tools and features that make Fitracker the ultimate health companion.
            </p>
          </div>
        {/* Section 1: Community */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          style={{ opacity: section1Opacity }}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Community</h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Connect, compete and thrive.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join a vibrant community of fitness enthusiasts. Share your progress, 
              participate in challenges, and find motivation from like-minded individuals 
              on similar health journeys.
            </p>
            <Button className="h-auto px-8 py-3 text-lg font-semibold">
              Join Community <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <div className="relative group">
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
            </div>
            {/* Small profile circles around */}
            <div className="absolute top-8 left-8 w-8 h-8 bg-gray-300 rounded-full transition-all duration-500 group-hover:scale-110"></div>
            <div className="absolute top-16 right-12 w-6 h-6 bg-gray-400 rounded-full transition-all duration-500 group-hover:scale-110"></div>
            <div className="absolute bottom-12 left-12 w-7 h-7 bg-gray-500 rounded-full transition-all duration-500 group-hover:scale-110"></div>
            <div className="absolute bottom-8 right-8 w-5 h-5 bg-gray-600 rounded-full transition-all duration-500 group-hover:scale-110"></div>
          </div>
        </div>

        {/* Section 2: CloudFit Intelligence */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          style={{ opacity: section2Opacity }}
        >
          <div className="relative order-2 lg:order-1 group">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-teal-400/30 to-silver-500/20 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110">
              <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-silver-500 rounded-full opacity-80 transition-all duration-500 group-hover:scale-125"></div>
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-teal-500/10 rounded-xl">
                <Brain className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold">CloudFit Intelligence</h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Interactive coaching with personalised support.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our AI-powered coaching system provides personalized recommendations 
              based on your progress, goals, and preferences. Get intelligent insights 
              that adapt to your unique fitness journey.
            </p>
            <Button className="h-auto px-8 py-3 text-lg font-semibold bg-teal-600 hover:bg-teal-700">
              Learn More <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Section 3: Track Trends */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          style={{ opacity: section3Opacity }}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Track Trends</h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Measure progress and make informed decisions for total wellbeing.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Visualize your health journey with comprehensive analytics and trend tracking. 
              Understand patterns, celebrate milestones, and make data-driven decisions 
              to optimize your fitness and nutrition.
            </p>
            <Button className="h-auto px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700">
              View Analytics <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <div className="relative group">
            <div className="bg-white p-6 rounded-xl shadow-lg border transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl">
              <div className="text-center mb-4">
                <h4 className="font-bold text-gray-800">WEIGHT</h4>
              </div>
              <div className="h-32 flex items-end justify-between gap-1">
                <div className="w-3 bg-blue-500 h-16 rounded-t transition-all duration-300 group-hover:h-20"></div>
                <div className="w-3 bg-blue-500 h-20 rounded-t transition-all duration-300 group-hover:h-24"></div>
                <div className="w-3 bg-blue-500 h-12 rounded-t transition-all duration-300 group-hover:h-16"></div>
                <div className="w-3 bg-blue-500 h-24 rounded-t transition-all duration-300 group-hover:h-28"></div>
                <div className="w-3 bg-blue-500 h-18 rounded-t transition-all duration-300 group-hover:h-22"></div>
                <div className="w-3 bg-blue-500 h-14 rounded-t transition-all duration-300 group-hover:h-18"></div>
                <div className="w-3 bg-blue-500 h-22 rounded-t transition-all duration-300 group-hover:h-26"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>4/5</span>
                <span>4/7</span>
                <span>4/9</span>
                <span>4/11</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Message Your Coach */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          style={{ opacity: section4Opacity }}
        >
          <div className="relative order-2 lg:order-1 group">
            <div className="bg-white p-6 rounded-xl shadow-lg border max-w-sm transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <p className="text-sm text-gray-800">We can train according to your schedule and discuss the diet. 😊</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-blue-500 p-3 rounded-lg max-w-xs">
                  <p className="text-sm text-white">Thanks a lot! and yes I have a few diet questions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-500/10 rounded-xl">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Message Your Coach</h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Get instant personalised advice to optimise your health and performance.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Connect directly with certified fitness coaches and nutritionists. 
              Get personalized advice, ask questions, and receive guidance tailored 
              to your specific goals and challenges.
            </p>
            <Button className="h-auto px-8 py-3 text-lg font-semibold bg-green-600 hover:bg-green-700">
              Start Chatting <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Section 5: Personalised Wellbeing Plans */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          style={{ opacity: section5Opacity }}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Personalised Wellbeing Plans</h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Intelligent programs that evolve with your progress and goals.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Receive customized workout and nutrition plans that adapt to your progress, 
              preferences, and lifestyle. Our intelligent system continuously optimizes 
              your program for maximum results.
            </p>
            <Button className="h-auto px-8 py-3 text-lg font-semibold bg-purple-600 hover:bg-purple-700">
              Get Your Plan <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <div className="relative group">
            <div className="bg-white p-6 rounded-xl shadow-lg border transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl">
              <div className="space-y-4">
                <div className="border-b pb-2">
                  <div className="font-semibold text-gray-800">Mon</div>
                  <div className="text-sm text-gray-600">Functional Training</div>
                  <div className="text-xs text-gray-500">12:00 pm - 1:00 pm</div>
                </div>
                <div className="border-b pb-2">
                  <div className="font-semibold text-gray-800">Tue</div>
                  <div className="text-sm text-gray-600">Weight Lifting</div>
                  <div className="text-xs text-gray-500">1:00 pm - 2:00 pm</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Wed</div>
                  <div className="text-sm text-gray-600">Rest Day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

AppShowcase.displayName = "AppShowcase"

export default AppShowcase
