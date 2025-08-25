"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronLeft, ChevronRight, ChevronDown, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CloudfitClone() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(1)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const faqItems = [
    {
      question: "What is CloudFit?",
      answer:
        "CloudFit is a personalised, AI-powered wellbeing platform designed for the whole person — body, mind and performance.",
    },
    {
      question: "What if I have an injury or special needs?",
      answer:
        "If you have an injury or special needs, CloudFit can still support your wellness journey. Our AI coach will tailor your health programmes to accommodate your specific requirements. For further assistance, please reach out to us at info@cloudfit.io.",
    },
    {
      question: "What if I don't have a gym membership or home gym?",
      answer:
        "CloudFit offers flexible workout options that can be adapted to any environment, whether you have access to a gym or prefer to exercise at home.",
    },
    {
      question: "Do I need a smartwatch to use CloudFit?",
      answer:
        "While a smartwatch can enhance your CloudFit experience, it's not required to get started with our platform.",
    },
    {
      question: "Can my employer see my data?",
      answer:
        "Your privacy is important to us. CloudFit maintains strict data privacy standards and your personal health information remains confidential.",
    },
    {
      question: "How does CloudFit work when I'm travelling?",
      answer:
        "CloudFit adapts to your lifestyle, including travel. Our AI coach can adjust your wellness plan based on your location and available resources.",
    },
    {
      question: "How do I cancel my CloudFit membership?",
      answer:
        "You can cancel your CloudFit membership at any time through your account settings or by contacting our support team.",
    },
    {
      question: "How do I communicate with my coach?",
      answer:
        "You can communicate with your AI coach directly through the CloudFit app, available 24/7 for personalised guidance and support.",
    },
    {
      question: "Who are CloudFit Coaches?",
      answer:
        "CloudFit Coaches are AI-powered wellness experts trained to provide personalised guidance for your physical, mental, and nutritional health.",
    },
    {
      question: "What if I have more questions?",
      answer:
        "If you have additional questions, please don't hesitate to reach out to us at info@cloudfit.io or through our contact form.",
    },
  ]

  // Calculate phone scale and position based on scroll
  const heroHeight = 800
  const phoneScale = Math.min(1 + scrollY / 500, 3)
  const phoneOpacity = Math.max(1 - scrollY / 1000, 0)

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#2d3e2f] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40">
        <div className="bg-[#f5f4f0]/90 backdrop-blur-sm border-b border-[#2d3e2f]/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#2d3e2f] rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-[#f5f4f0] rounded-full"></div>
              </div>
              <span className="text-xl font-bold">Cloudfit</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="hover:text-[#2d3e2f]/70 transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-[#2d3e2f]/70 transition-colors">
                About
              </a>
              <a href="#" className="hover:text-[#2d3e2f]/70 transition-colors">
                AI Coach
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Button className="bg-[#2d3e2f] text-[#f5f4f0] hover:bg-[#2d3e2f]/90 rounded-full px-6">
                Early access →
              </Button>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 hover:bg-[#2d3e2f]/10 rounded-lg transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#2d3e2f] text-[#f5f4f0] transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col items-end justify-center h-full pr-20 gap-8 text-right">
          <div className="space-y-4">
            <h2 className="text-sm font-medium opacity-70">Resources</h2>
            <div className="space-y-2">
              <a href="#" className="block text-lg hover:opacity-70 transition-opacity">
                FAQs
              </a>
              <a href="#" className="block text-lg hover:opacity-70 transition-opacity">
                Contact
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <a href="#" className="block text-lg hover:opacity-70 transition-opacity">
                Privacy Policy
              </a>
              <a href="#" className="block text-lg hover:opacity-70 transition-opacity">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center z-10">
          <div className="mb-8">
            <div className="w-16 h-16 bg-[#2d3e2f] rounded-full mx-auto mb-8 flex items-center justify-center">
              <div className="w-8 h-8 bg-[#f5f4f0] rounded-full"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Redefine WholeHuman Wellbeing
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-80">
            A personalised, AI-powered wellbeing platform designed for the whole person — body, mind and performance.
          </p>

          <Button className="bg-[#2d3e2f] text-[#f5f4f0] hover:bg-[#2d3e2f]/90 rounded-full px-8 py-4 text-lg">
            Start Your Journey →
          </Button>
        </div>

        {/* Animated Phone */}
        <div 
          className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-0 transition-all duration-300 ease-out"
          style={{
            transform: `translateX(-50%) scale(${phoneScale})`,
            opacity: phoneOpacity,
          }}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-25%20at%2015.42.10.png-nAF1P5zzQWR6hsP3SOL8czZKO2ZjoP.jpeg"
            alt="Cloudfit App Preview"
            className="w-80 h-auto rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* See it in action Section */}
      <section className="py-20 bg-gradient-to-b from-[#f5f4f0] to-[#e8e6e0]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">See it in action</h2>
          <p className="text-xl mb-12 opacity-80">Watch a demo of how Cloudfit can work for you.</p>

          <Button className="bg-[#2d3e2f] text-[#f5f4f0] hover:bg-[#2d3e2f]/90 rounded-full px-8 py-4 text-lg mb-16">
            Start You Journey →
          </Button>

          <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="aspect-video bg-[#2d3e2f]/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <button className="w-20 h-20 bg-[#2d3e2f] rounded-full flex items-center justify-center hover:scale-105 transition-transform z-10">
                <Play className="w-8 h-8 text-[#f5f4f0] ml-1" />
              </button>

              <div className="absolute top-4 left-4 bg-[#2d3e2f] text-[#f5f4f0] rounded-full px-4 py-2 text-sm flex items-center gap-2">
                <div className="w-6 h-6 bg-[#f5f4f0] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#2d3e2f] rounded-full"></div>
                </div>
                CloudFit Explainer Video
                <div className="text-xs opacity-70">Indi Lekshmi</div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 rounded-lg p-2 text-[#f5f4f0] text-sm">
                  In the race to attract and secure top talent
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#2d3e2f]/10 rounded-full"></div>
              <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-teal-200/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Insights Section */}
      <section className="py-20 bg-[#e8e6e0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Optimise Your Health
                <br />
                with Data Driven Insights
              </h2>
              <p className="text-xl mb-8 opacity-80 leading-relaxed">
                Your health, decoded—Track your activities and gain valuable insights, driving a more effective
                WholeHuman wellbeing program.
              </p>
              <a href="#" className="text-lg underline hover:no-underline transition-all">
                Book a demo
              </a>
            </div>

            <div className="bg-white/50 rounded-3xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-sm opacity-70 mb-2">Calories burned</div>
                  <div className="text-4xl font-bold">832</div>
                </div>
                <div className="text-center">
                  <div className="text-sm opacity-70 mb-2">KGs lifted</div>
                  <div className="text-4xl font-bold">94KG</div>
                </div>
              </div>

              <div className="bg-white/70 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">WEIGHT</span>
                  <span className="text-sm">85KG</span>
                </div>
                <div className="h-32 relative">
                  <svg className="w-full h-full" viewBox="0 0 300 100">
                    <polyline
                      fill="none"
                      stroke="#2d3e2f"
                      strokeWidth="2"
                      points="0,60 50,50 100,45 150,40 200,50 250,45 300,35"
                    />
                    <circle cx="300" cy="35" r="4" fill="#2d3e2f" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Avatars Section */}
      <section className="py-20 bg-gradient-to-b from-[#e8e6e0] to-[#d6d3cb]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="relative mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              CloudFit empowers individuals and
              <br />
              businesses to THRIVE
            </h2>

            {/* Floating avatars */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-16 h-16 rounded-full bg-white/30 overflow-hidden animate-float"
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                >
                  <img
                    src={`/floating-avatar-.png?height=64&width=64&query=floating-avatar-${i + 1}`}
                    alt={`Avatar ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="w-16 h-16 rounded-full bg-white/40 overflow-hidden mx-auto">
                      <img
                        src={`/team-.png?height=64&width=64&query=team-${i + 1}`}
                        alt={`Team ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-teal-200 to-teal-400 rounded-full mx-auto opacity-60"></div>
              </div>
            </div>

            <div className="text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">CloudFit Intelligence</h3>
              <p className="text-xl mb-8 opacity-80 leading-relaxed">
                A two-way interactive coaching experience, delivering personalised strategies that optimise physical,
                mental and nutritional health, seamlessly integrated into daily life.
              </p>
              <a href="#" className="text-lg underline hover:no-underline transition-all">
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Coaching Section */}
      <section className="py-20 bg-[#d6d3cb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Unlock Your
                <br />
                WholeHuman Potential
              </h2>
              <p className="text-xl mb-8 opacity-80 leading-relaxed">
                Enhance your productivity and achieve peak performance with personalised, AI driven wellbeing solutions.
              </p>
              <a href="#" className="text-lg underline hover:no-underline transition-all">
                Book a demo
              </a>
            </div>

            <div className="relative">
              <div className="grid grid-cols-3 gap-4 mb-8">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-16 h-16 rounded-full bg-white/30 overflow-hidden">
                    <img
                      src={`/diverse-group-portrait.png?height=64&width=64&query=person-${i + 1}`}
                      alt={`Person ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-sm opacity-70 mb-2">Hi there! How can I help you today?</div>
                  <div className="bg-[#2d3e2f] text-[#f5f4f0] rounded-xl p-4 mt-4">
                    <div className="text-sm">
                      How much should my protein intake be? My weight is 75kg.
                    </div>
                  </div>
                  <div className="bg-white/30 rounded-xl p-4 mt-2">
                    <div className="text-sm">
                      So it can be different for different people, but as a 75 kg male, it is advisable to have at least
                      75 grams of protein.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Coaching Anytime Section */}
      <section className="py-20 bg-gradient-to-b from-[#d6d3cb] to-[#c4c0b6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-3 gap-4 mb-8">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-16 h-16 rounded-full bg-white/30 overflow-hidden">
                    <img
                      src={`/coach-.png?height=64&width=64&query=coach-${i + 1}`}
                      alt={`Coach ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-sm opacity-70 mb-4">How much should my protein intake be? My weight is 75kg.</div>
                <div className="bg-[#2d3e2f] text-[#f5f4f0] rounded-xl p-4">
                  <div className="text-sm">
                    So it can be different for different people, but as a 75 kg male, it is advisable to have at least
                    75 grams of protein.
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-32 h-32">
                <div className="w-full h-full bg-gradient-to-br from-teal-200 to-teal-400 rounded-full opacity-60"></div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Expert Coaching
                <br />
                Anytime, Anywhere
              </h2>
              <p className="text-xl mb-8 opacity-80 leading-relaxed">
                CloudFit intelligence adapts in real-time, delivering 24/7 personalised support to help you perform,
                recover and thrive.
              </p>
              <a href="#" className="text-lg underline hover:no-underline transition-all">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#c4c0b6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Community Card */}
            <div className="bg-white/30 rounded-3xl p-8 backdrop-blur-sm">
              <div className="relative mb-6">
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-white/40 overflow-hidden">
                      <img
                        src={`/community-.png?height=48&width=48&query=community-${i + 1}`}
                        alt={`Community ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Community</h3>
              <p className="opacity-80">Connect, compete and thrive.</p>
            </div>

            {/* CloudFit Intelligence Card */}
            <div className="bg-white/30 rounded-3xl p-8 backdrop-blur-sm">
              <div className="mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-200 to-teal-400 rounded-full mx-auto opacity-80"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">CloudFit Intelligence</h3>
              <p className="opacity-80">Interactive coaching with personalised support.</p>
              <div className="mt-4">
                <ChevronRight className="w-6 h-6 ml-auto" />
              </div>
            </div>

            {/* Track Trends Card */}
            <div className="bg-white/30 rounded-3xl p-8 backdrop-blur-sm">
              <div className="mb-6">
                <div className="bg-white/40 rounded-2xl p-4">
                  <div className="text-sm font-semibold mb-2">WEIGHT</div>
                  <div className="h-16 relative">
                    <svg className="w-full h-full" viewBox="0 0 200 60">
                      <polyline
                        fill="none"
                        stroke="#2d3e2f"
                        strokeWidth="2"
                        points="0,40 40,35 80,30 120,35 160,30 200,25"
                      />
                      <circle cx="200" cy="25" r="3" fill="#2d3e2f" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Track Trends</h3>
              <p className="opacity-80">Measure progress and make informed decisions for total wellbeing.</p>
            </div>

            {/* Message Your Coach Card */}
            <div className="bg-white/30 rounded-3xl p-8 backdrop-blur-sm">
              <div className="mb-6">
                <div className="bg-white/40 rounded-2xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#2d3e2f] overflow-hidden">
                      <img src="/motivational-coach.png" alt="Coach" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-sm">We can train according to your schedule and discuss the diet 🍎</div>
                  </div>
                  <div className="text-xs opacity-60">Thanks a lot and yes I have a few diet questions</div>
                  <div className="bg-[#2d3e2f] text-[#f5f4f0] rounded-lg px-3 py-2 text-sm mt-2 ml-auto w-fit">You</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Message Your Coach</h3>
              <p className="opacity-80">Get instant personalised advice to optimise your health and performance.</p>
            </div>

            {/* Personalised Wellbeing Plans Card */}
            <div className="bg-white/30 rounded-3xl p-8 backdrop-blur-sm">
              <div className="mb-6">
                <div className="bg-white/40 rounded-2xl p-4">
                  <div className="text-xs mb-2">Mon</div>
                  <div className="space-y-2">
                    <div className="bg-white/60 rounded-lg p-2 text-xs">Functional Training</div>
                    <div className="bg-[#2d3e2f] text-[#f5f4f0] rounded-lg p-2 text-xs">Weight Lifting ⚡</div>
                  </div>
                  <div className="text-xs mt-2">10min - 200 pts</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Personalised Wellbeing Plans</h3>
              <p className="opacity-80">Intelligent programs that evolve with your progress and goals.</p>
            </div>

            {/* Mobile App Interface Card */}
            <div className="bg-white/30 rounded-3xl p-8 backdrop-blur-sm">
              <div className="mb-6">
                <div className="bg-white/40 rounded-2xl p-4 relative">
                  <div className="text-center">
                    <div className="text-xs mb-2">Today's Workout</div>
                    <div className="text-lg font-bold mb-2">STRENGTH TRAINING</div>
                    <div className="text-xs">Go to workout →</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="bg-white/60 rounded-lg p-2 text-center">
                      <div className="text-lg font-bold">5,137</div>
                      <div className="text-xs">Steps</div>
                    </div>
                    <div className="bg-white/60 rounded-lg p-2 text-center">
                      <div className="text-lg font-bold">80KG</div>
                      <div className="text-xs">Weight</div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Mobile Experience</h3>
              <p className="opacity-80">Native mobile app with seamless tracking and coaching integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-b from-[#c4c0b6] to-[#b2ada1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">What people are saying</h2>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/40 transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/40 transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="bg-[#2d3e2f] text-[#f5f4f0] rounded-3xl p-12">
            <div className="text-center mb-8">
              <div className="text-sm font-medium mb-4 tracking-wider">RIZE</div>
            </div>

            <blockquote className="text-xl md:text-2xl leading-relaxed text-center mb-8">
              "CloudFit has transformed my approach to personal health. What stands out most about CloudFit is the
              support and accountability provided by the AI health coach. For anyone eager to take charge of their
              health and fitness journey with dedicated support, I highly recommend CloudFit."
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 overflow-hidden">
                <img src="/testimonial-author.png" alt="Macgill Davis" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-semibold">Macgill Davis</div>
                <div className="text-sm opacity-70">Co-Founder, Rize</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started section */}
      <section className="py-20 bg-[#2d3e2f] text-[#f5f4f0]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Get Started</h2>
          <p className="text-xl mb-4 opacity-80">Book a call to learn if Cloudfit is right for you,</p>
          <p className="text-xl mb-16 opacity-80">or download it from the App Store.</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Book a call card */}
            <div className="bg-[#f5f4f0] text-[#2d3e2f] rounded-3xl p-8 relative">
              <div className="mb-6">
                <ChevronDown className="w-8 h-8 mb-4" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Book a call</h3>
              <p className="text-lg mb-8 opacity-80">Get a demo of Cloudfit and see how it can work for you.</p>
              <Button className="bg-[#2d3e2f] text-[#f5f4f0] hover:bg-[#2d3e2f]/90 rounded-full px-6 py-3">
                Book a demo →
              </Button>

              {/* Phone mockup positioned on the right */}
              <div className="absolute -right-4 -top-4 hidden md:block">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-25%20at%2015.42.10.png-nAF1P5zzQWR6hsP3SOL8czZKO2ZjoP.jpeg"
                  alt="Cloudfit App"
                  className="w-32 h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Download Cloudfit card */}
            <div className="bg-[#f5f4f0] text-[#2d3e2f] rounded-3xl p-8">
              <div className="mb-6">
                <ChevronDown className="w-8 h-8 mb-4" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Download Cloudfit</h3>
              <p className="text-lg mb-8 opacity-80">Get started today by downloading Cloudfit on the app store.</p>
              <Button className="bg-[#2d3e2f] text-[#f5f4f0] hover:bg-[#2d3e2f]/90 rounded-full px-6 py-3">
                Early access →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs section */}
      <section className="py-20 bg-[#f5f4f0]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">FAQs</h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-[#2d3e2f]/20">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
                >
                  <span className="text-lg font-medium pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform ${expandedFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="pb-6">
                    <p className="text-[#2d3e2f]/80 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in touch section */}
      <section className="py-20 bg-[#f5f4f0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-25%20at%2015.43.30-omiNpSQVcPaLbmHct5WD6pXF1T9Ku9.png"
                alt="Person doing yoga in modern living room"
                className="w-full h-auto"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Get in touch</h2>
              <p className="text-xl mb-8 opacity-80">Want to reach out? Contact us at:</p>

              <div className="space-y-4 text-lg">
                <p>info@cloudfit.io</p>
                <p>591 London Road,</p>
                <p>England,</p>
                <p>SM3 9AG</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <section className="py-20 bg-[#2d3e2f] text-[#f5f4f0]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#4a5a4c] rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay up to date with
              <br />
              everything we are working on
            </h2>
            <p className="text-xl mb-8 opacity-80">
              Our weekly newsletter outlines what we are building, new features, and fun behind the scenes with the
              company.
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-3 rounded-full bg-[#f5f4f0] text-[#2d3e2f] placeholder:text-[#2d3e2f]/60"
                />
                <Button className="bg-[#2d3e2f] text-[#f5f4f0] hover:bg-[#2d3e2f]/90 rounded-full px-6 py-3">
                  Join newsletter →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2a1c] text-[#f5f4f0] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#f5f4f0] rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#1a2a1c] rounded-full"></div>
                </div>
                <span className="text-xl font-bold">Cloudfit</span>
              </div>
              <p className="text-lg opacity-80">
                Shaping a healthier world,
                <br />
                in body and business.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Product</h3>
              <div className="space-y-3">
                <a href="#" className="block opacity-80 hover:opacity-100 transition-opacity">
                  AI Coach
                </a>
                <a href="#" className="block opacity-80 hover:opacity-100 transition-opacity">
                  FAQs
                </a>
                <a href="#" className="block opacity-80 hover:opacity-100 transition-opacity">
                  Book a demo
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <div className="space-y-3">
                <a href="#" className="block opacity-80 hover:opacity-100 transition-opacity">
                  About Cloudfit
                </a>
                <a href="#" className="block opacity-80 hover:opacity-100 transition-opacity">
                  Resources
                </a>
                <a href="#" className="block opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <div className="space-y-3">
                <a href="#" className="block opacity-80 hover:opacity-100 transition-opacity">
                  Terms of Use
                </a>
                <a href="#" className="block opacity-80 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
