"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronLeft, ChevronRight, ChevronDown, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import Image from "next/image"

export default function FitrackerApp() {
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
      question: "What is FitTracker?",
      answer:
        "FitTracker is an AI-powered fitness and nutrition app that revolutionizes how you track your health journey. Simply take photos of your meals and our advanced AI technology automatically identifies foods and calculates nutrition information. Beyond food tracking, FitTracker includes water intake monitoring, progress photos, goal setting, and a supportive community where you can connect with like-minded individuals on similar wellness journeys.",
    },
    {
      question: "How does the AI food recognition work?",
      answer:
        "Our cutting-edge AI uses advanced computer vision technology to analyze photos of your meals. Simply snap a picture of your food, and our system identifies the items, estimates portion sizes, and automatically calculates calories, macros (protein, carbs, fats), and other nutritional information. The AI learns from a vast database of foods and gets more accurate over time. For best results, take clear, well-lit photos with food items clearly visible.",
    },
    {
      question: "Do I need to manually count calories and macros?",
      answer:
        "No! That's the beauty of FitTracker. Our AI does the heavy lifting for you. Just take photos of your meals and the app automatically calculates and logs your calories, protein, carbohydrates, fats, and other nutrients. You can review and adjust the estimates if needed, but manual counting is no longer necessary. This saves you time and makes nutrition tracking effortless.",
    },
    {
      question: "What if I have dietary restrictions or food allergies?",
      answer:
        "FitTracker supports all dietary preferences and restrictions. During setup, you can specify allergies, intolerances, and dietary preferences (vegetarian, vegan, keto, gluten-free, etc.). The app will flag potential allergens in your scanned foods and our location-based recommendations will prioritize restaurants and stores that cater to your specific dietary needs.",
    },
    {
      question: "Is my personal health data secure and private?",
      answer:
        "Absolutely. Your privacy and data security are our top priorities. All your personal health information is encrypted and securely stored. We never share your individual data with third parties without your explicit consent. You have complete control over what information you choose to share with the community features, and you can use the app entirely privately if you prefer.",
    },
    {
      question: "Can I use FitTracker without connecting with other users?",
      answer:
        "Yes, definitely! While FitTracker includes optional social features like sharing progress and connecting with friends, you can use the app in completely private mode. All core features - AI food recognition, nutrition tracking, goal setting, and progress monitoring - work perfectly without any social interaction. The choice to engage with the community is entirely up to you.",
    },
    {
      question: "What happens if the app can't identify my food photo?",
      answer:
        "If our AI can't identify a food item, you have several options: you can manually search our extensive food database, scan the product barcode if available, or add custom foods with nutritional information. Our AI continuously learns, so foods that aren't recognized initially may be identified automatically in future updates. We also provide an easy manual entry option as a backup.",
    },
    {
      question: "Do I need a premium subscription to track my meals?",
      answer:
        "You can start tracking meals immediately with our free version, which includes basic AI food recognition and nutrition tracking. Premium subscriptions unlock advanced features like unlimited photo uploads, detailed nutritional analytics, personalized meal recommendations, priority customer support, and enhanced community features. Many users find great success with the free version alone.",
    },
    {
      question: "How does the location-based store recommendation feature work?",
      answer:
        "FitTracker uses your location (with your permission) to recommend nearby grocery stores, restaurants, and cafes that align with your dietary goals and restrictions. Based on your nutrition targets and food preferences, we suggest places where you can find healthy options. This feature helps you make better food choices when you're out and about, whether you're grocery shopping or dining out.",
    },
    {
      question: "How do I cancel my FitTracker subscription?",
      answer:
        "You can easily cancel your subscription anytime through your device's app store settings (iOS App Store or Google Play Store) or within the app's account settings. There are no cancellation fees or complicated processes. If you cancel, you'll retain access to premium features until the end of your current billing period, after which your account will automatically revert to the free version.",
    },
  ]

  // Calculate phone scale and position based on scroll
  const heroHeight = 800
  const phoneScale = Math.min(1 + scrollY / 500, 3)
  const phoneOpacity = Math.max(1 - scrollY / 1000, 0)

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40">
        <div className="bg-background/90 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Logo size="md" showText={true} />
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="hover:text-muted-foreground transition-colors">
                About
              </a>
              <a href="#features" className="hover:text-muted-foreground transition-colors">
                Features
              </a>
              <a href="#pricing" className="hover:text-muted-foreground transition-colors">
                Pricing
              </a>
              <a href="#community" className="hover:text-muted-foreground transition-colors">
                Community
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Button className="bg-primary-950 text-white hover:bg-primary-900 rounded-full px-6">
                Start Your Journey Free →
              </Button>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 z-50 bg-primary-950 text-white transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <Logo size="md" showText={false} />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
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
            <div className="mx-auto mb-8 flex items-center justify-center">
              <Logo size="lg" showText={true} />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Complete AI Fitness Companion
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
            From beginner to pro - AI-powered fitness and nutrition tracking that makes getting healthy effortlessly simple
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button className="bg-primary-950 text-white hover:bg-primary-900 rounded-full px-8 py-4 text-lg">
              Start Your Journey Free
            </Button>
            <Button variant="outline" className="border-primary-950 text-primary-950 hover:bg-primary-950 hover:text-white rounded-full px-8 py-4 text-lg">
              Watch Demo
            </Button>
          </div>

          <p className="text-lg max-w-4xl mx-auto leading-relaxed text-muted-foreground">
            Whether you've never stepped in a gym, don't know what to eat or you are a fitness enthusiast, FitTracker's cutting-edge AI technology guides you every step of the way. Snap photos of meals and workouts, get personalized coaching, and discover the best places to eat, train, and shop - all through our beautifully simple, modern interface.
          </p>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">The Complete AI-Powered Fitness Revolution</h2>
            <p className="text-xl max-w-4xl mx-auto text-muted-foreground leading-relaxed">
              FitTracker is the world's first complete AI fitness companion designed for everyone - especially beginners who feel overwhelmed by traditional fitness apps. Our cutting-edge technology combines advanced computer vision, personalized AI coaching, and intelligent location recommendations to make fitness and nutrition effortlessly simple. Whether you've never cooked a healthy meal, stepped foot in a gym or need a companion on your fitness journey, our beautifully modern interface guides you through every aspect of your health journey with unprecedented ease and accuracy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-950 mb-2">95%</div>
              <div className="text-lg text-muted-foreground">accuracy in food & exercise recognition</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-950 mb-2">Thousands</div>
              <div className="text-lg text-muted-foreground">of exercises and foods in our AI database</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-950 mb-2">24/7</div>
              <div className="text-lg text-muted-foreground">personalized AI coaching</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-950 mb-2">Beautiful</div>
              <div className="text-lg text-muted-foreground">intuitive design loved by beginners and professionals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Insights Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Optimise Your Health
                <br />
                with Data Driven Insights
              </h2>
              <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
                Your health, decoded—Track your activities and gain valuable insights, driving a more effective
                WholeHuman wellbeing program.
              </p>
              <a href="#" className="text-lg underline hover:no-underline transition-all text-primary-950 hover:text-primary-800">
                Book a demo
              </a>
            </div>

            <div className="bg-card/80 rounded-3xl p-8 backdrop-blur-sm border border-border shadow-lg">
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">Calories burned</div>
                  <div className="text-4xl font-bold">832</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">KGs lifted</div>
                  <div className="text-4xl font-bold">94KG</div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">WEIGHT</span>
                  <span className="text-sm">85KG</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Avatars Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="relative mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              FitTracker empowers individuals and
              <br />
              businesses to THRIVE
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            

            <div className="text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">FitTracker Intelligence</h3>
              <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
                A two-way interactive coaching experience, delivering personalised strategies that optimise physical,
                mental and nutritional health, seamlessly integrated into daily life.
              </p>
              <a href="#" className="text-lg underline hover:no-underline transition-all text-primary-950 hover:text-primary-800">
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Coaching Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Unlock Your
                <br />
                WholeHuman Potential
              </h2>
              <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
                Enhance your productivity and achieve peak performance with personalised, AI driven wellbeing solutions.
              </p>
              <a href="#" className="text-lg underline hover:no-underline transition-all text-primary-950 hover:text-primary-800">
                Book a demo
              </a>
            </div>

            <div className="relative">

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 text-center border border-border shadow-lg">
                  <div className="text-sm text-muted-foreground mb-2">Hi there! How can I help you today?</div>
                  <div className="bg-primary-950 text-white rounded-xl p-4 mt-4">
                    <div className="text-sm">
                      How much should my protein intake be? My weight is 75kg.
                    </div>
                  </div>
                  <div className="bg-muted rounded-xl p-4 mt-2 border border-border">
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
      <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg">
                <div className="text-sm text-muted-foreground mb-4">How much should my protein intake be? My weight is 75kg.</div>
                <div className="bg-primary-950 text-white rounded-xl p-4">
                  <div className="text-sm">
                    So it can be different for different people, but as a 75 kg male, it is advisable to have at least
                    75 grams of protein.
                  </div>
                </div>
              </div>

            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Expert Coaching
                <br />
                Anytime, Anywhere
              </h2>
              <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
                FitTracker intelligence adapts in real-time, delivering 24/7 personalised support to help you perform,
                recover and thrive.
              </p>
              <a href="#" className="text-lg underline hover:no-underline transition-all text-primary-950 hover:text-primary-800">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Community Card */}
            <div className="bg-card/70 rounded-3xl p-8 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-shadow">

              <h3 className="text-2xl font-bold mb-4">Community</h3>
              <p className="text-muted-foreground">Connect, compete and thrive.</p>
            </div>

            {/* FitTracker Intelligence Card */}
            <div className="bg-card/70 rounded-3xl p-8 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="flex justify-center">
                  <Logo size="lg" showText={false} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">FitTracker Intelligence</h3>
              <p className="text-muted-foreground">Interactive coaching with personalised support.</p>
              <div className="mt-4">
                <ChevronRight className="w-6 h-6 ml-auto text-primary-950" />
              </div>
            </div>

            {/* Track Trends Card */}
            <div className="bg-card/70 rounded-3xl p-8 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="bg-muted rounded-2xl p-4 border border-border">
                  <div className="text-sm font-semibold mb-2">WEIGHT</div>
                  <div className="h-16 relative">
                    <svg className="w-full h-full" viewBox="0 0 200 60">
                      <polyline
                        fill="none"
                        stroke="#160B61"
                        strokeWidth="2"
                        points="0,40 40,35 80,30 120,35 160,30 200,25"
                      />
                      <circle cx="200" cy="25" r="3" fill="#160B61" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Track Trends</h3>
              <p className="text-muted-foreground">Measure progress and make informed decisions for total wellbeing.</p>
            </div>

            {/* Message Your Coach Card */}
            <div className="bg-card/70 rounded-3xl p-8 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="bg-muted rounded-2xl p-4 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-primary-950 overflow-hidden">
                      <img src="/motivational-coach.png" alt="Coach" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-sm">We can train according to your schedule and discuss the diet 🍎</div>
                  </div>
                  <div className="text-xs text-muted-foreground">Thanks a lot and yes I have a few diet questions</div>
                  <div className="bg-primary-950 text-white rounded-lg px-3 py-2 text-sm mt-2 ml-auto w-fit">You</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Message Your Coach</h3>
              <p className="text-muted-foreground">Get instant personalised advice to optimise your health and performance.</p>
            </div>

            {/* Personalised Wellbeing Plans Card */}
            <div className="bg-card/70 rounded-3xl p-8 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="bg-muted rounded-2xl p-4 border border-border">
                  <div className="text-xs mb-2">Mon</div>
                  <div className="space-y-2">
                    <div className="bg-gray-100 rounded-lg p-2 text-xs border border-border">Functional Training</div>
                    <div className="bg-primary-950 text-white rounded-lg p-2 text-xs">Weight Lifting ⚡</div>
                  </div>
                  <div className="text-xs mt-2">10min - 200 pts</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Personalised Wellbeing Plans</h3>
              <p className="text-muted-foreground">Intelligent programs that evolve with your progress and goals.</p>
            </div>

            {/* Mobile App Interface Card */}
            <div className="bg-card/70 rounded-3xl p-8 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="bg-muted rounded-2xl p-4 relative border border-border">
                  <div className="text-center">
                    <div className="text-xs mb-2">Today's Workout</div>
                    <div className="text-lg font-bold mb-2">STRENGTH TRAINING</div>
                    <div className="text-xs">Go to workout →</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="bg-gray-100 rounded-lg p-2 text-center border border-border">
                      <div className="text-lg font-bold">5,137</div>
                      <div className="text-xs">Steps</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2 text-center border border-border">
                      <div className="text-lg font-bold">80KG</div>
                      <div className="text-xs">Weight</div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Mobile Experience</h3>
              <p className="text-muted-foreground">Native mobile app with seamless tracking and coaching integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-b from-gray-200 to-gray-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">What people are saying</h2>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-full bg-card/50 flex items-center justify-center hover:bg-card/70 transition-colors border border-border">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="w-12 h-12 rounded-full bg-card/50 flex items-center justify-center hover:bg-card/70 transition-colors border border-border">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="bg-primary-950 text-white rounded-3xl p-12">
            <div className="text-center mb-8">
              <div className="text-sm font-medium mb-4 tracking-wider">RIZE</div>
            </div>

            <blockquote className="text-xl md:text-2xl leading-relaxed text-center mb-8">
              "FitTracker has transformed my approach to personal health. What stands out most about FitTracker is the
              support and accountability provided by the AI health coach. For anyone eager to take charge of their
              health and fitness journey with dedicated support, I highly recommend FitTracker."
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
      <section className="py-20 bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Get Started</h2>
          <p className="text-xl mb-4 opacity-80">Book a call to learn if FitTracker is right for you,</p>
          <p className="text-xl mb-16 opacity-80">or download it from the App Store.</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Book a call card */}
            <div className="bg-background text-foreground rounded-3xl p-8 relative">
              <div className="mb-6">
                <ChevronDown className="w-8 h-8 mb-4" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Book a call</h3>
              <p className="text-lg mb-8 text-muted-foreground">Get a demo of FitTracker and see how it can work for you.</p>
              <Button className="bg-primary-950 text-white hover:bg-primary-900 rounded-full px-6 py-3">
                Book a demo →
              </Button>
            </div>

            {/* Download FitTracker card */}
            <div className="bg-background text-foreground rounded-3xl p-8">
              <div className="mb-6">
                <ChevronDown className="w-8 h-8 mb-4" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Download FitTracker</h3>
              <p className="text-lg mb-8 text-muted-foreground">Get started today by downloading FitTracker on the app store.</p>
              <Button className="bg-primary-950 text-white hover:bg-primary-900 rounded-full px-6 py-3">
                Early access →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">FAQs</h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-border">
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
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in touch section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden">
              <Image src="/testimonial-author.png" alt="FitTracker App" width={500} height={500} />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Get in touch</h2>
              <p className="text-xl mb-8 text-muted-foreground">Want to reach out? Contact us at:</p>

              <div className="space-y-4 text-lg">
                <p>info@fitracker.ai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <section className="py-20 bg-primary-950 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-primary-800 rounded-3xl p-12 text-center">
            <div className="flex justify-center mb-6">
              <Logo size="lg" showText={false} />
            </div>
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
                  className="flex-1 px-4 py-3 rounded-full bg-background text-foreground placeholder:text-muted-foreground"
                />
                <Button className="bg-primary-950 text-white hover:bg-primary-900 rounded-full px-6 py-3">
                  Join newsletter →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Logo size="md" showText={true} />
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
                  About FitTracker
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

