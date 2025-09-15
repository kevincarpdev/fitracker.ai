"use client"

import { memo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowLeft, Star, Zap, Heart, Users, Camera, MessageCircle, BarChart3, Utensils, Dumbbell, MapPin } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"

const PricingPage = memo(() => {
  const plans = [
    {
      name: "Free Plan",
      description: "Perfect for getting started with your health journey",
      price: "$0",
      period: "/month",
      features: [
        { text: "3 daily food entries", icon: Utensils },
        { text: "2 weekly workouts", icon: Dumbbell },
        { text: "2 AI questions/day", icon: MessageCircle },
        { text: "1 daily recommendation", icon: Star },
        { text: "Basic progress tracking", icon: BarChart3 },
        { text: "Full community access", icon: Users },
        { text: "Location recommendations", icon: MapPin }
      ],
      limitations: [
        "Limited AI coach interactions (2/day)",
        "Limited voice features (2/day, 30s max)",
        "Photo recognition (5/day, 100/month)",
        "Progress photos (10 max, 2/week)",
        "Analytics (last 7 days only)",
        "Basic meal suggestions (1/day)",
        "Basic workout templates (2 only)"
      ],
      cta: "Start Free Today",
      popular: false,
      icon: Heart,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Premium",
      description: "Unlock unlimited access to all features",
      price: "$9.99",
      period: "/month",
      features: [
        { text: "20 daily food entries", icon: Utensils },
        { text: "10 weekly workouts", icon: Dumbbell },
        { text: "20 AI questions/day", icon: MessageCircle },
        { text: "3 daily recommendations", icon: Star },
        { text: "2 weekly challenges", icon: Star },
        { text: "Advanced analytics & export", icon: BarChart3 },
        { text: "Unlimited progress photos", icon: Camera },
        { text: "Custom goals (5)", icon: Star },
        { text: "Premium recipes & meal plans", icon: Utensils },
        { text: "Unlimited personalized workouts", icon: Dumbbell },
        { text: "Unlimited photo recognition", icon: Camera },
        { text: "Unlimited voice interactions", icon: MessageCircle }
      ],
      cta: "Start Premium Trial",
      popular: true,
      icon: Zap,
      color: "from-purple-600 to-pink-600"
    }
  ]

  const handleStartFree = () => {
    window.open('https://apps.apple.com/app/fitracker', '_blank')
  }

  const handleStartPremium = () => {
    window.open('https://apps.apple.com/app/fitracker', '_blank')
  }

  const getButtonHandler = (planName: string) => {
    return planName === "Free Plan" ? handleStartFree : handleStartPremium
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back</span>
              </Link>
            </div>
            <Logo size="md" showText />
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex flex-row items-center justify-center gap-4 mb-8">
            <Star className="w-12 h-12 text-primary" />
            <h1 className="text-4xl font-bold">
              Choose Your Plan
            </h1>
          </div>
          <p className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
            Transform Your Health Journey
          </p>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Start free and upgrade anytime to unlock unlimited AI coaching, advanced analytics, and premium features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon

            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
                  plan.popular
                    ? "border-primary shadow-xl ring-2 ring-primary/20 bg-gradient-to-b from-primary/5 to-primary/10"
                    : "border-border hover:border-primary/50 bg-card hover:bg-gradient-to-b hover:from-muted/30 hover:to-muted/10"
                }`}
              >
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 mx-auto mb-2 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground text-lg">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-center pb-4">
                  <div className="mb-8">
                    <div className="text-5xl font-bold mb-2">
                      {plan.price}
                      <span className="text-xl font-normal text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                  
                    <div className="text-left space-y-6">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                        What's Included
                      </h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, featureIndex) => {
                          const FeatureIcon = feature.icon
                          return (
                            <li key={featureIndex} className="flex items-center gap-3">
                              <FeatureIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm">{feature.text}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>

                    {plan.limitations && (
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                          Limitations
                        </h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, limitIndex) => (
                            <li key={limitIndex} className="flex items-start gap-3">
                              <div className="w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <div className="w-2 h-2 rounded-full bg-orange-500" />
                              </div>
                              <span className="text-sm text-muted-foreground">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    onClick={getButtonHandler(plan.name)}
                    size="lg"
                    className={`h-auto w-full py-4 px-8 text-lg font-semibold transition-all hover:scale-105 cursor-pointer ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-105  text-white transition-all shadow-lg"
                        : "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-md"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Key Features Overview */}
        <div className="bg-gradient-to-br from-card to-muted/20 rounded-3xl p-12 mb-16 border">
          <h2 className="text-4xl font-bold text-center mb-12">Core Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Utensils, title: "Calorie & Macro Tracking", desc: "Track nutrition with AI-powered food recognition" },
              { icon: Dumbbell, title: "Exercise Logging", desc: "Log workouts and track your fitness progress" },
              { icon: MessageCircle, title: "AI-Powered Coaching", desc: "Get personalized guidance from our AI coach" },
              { icon: Users, title: "Social Community", desc: "Connect with others on their health journey" },
              { icon: Camera, title: "Progress Photos", desc: "Visual tracking of your transformation" },
              { icon: BarChart3, title: "Water Tracking", desc: "Stay hydrated with smart reminders" },
              { icon: Star, title: "Real-time Sync", desc: "Access your data anywhere, anytime" },
              { icon: MapPin, title: "Location Features", desc: "Find gyms, restaurants, and healthy options nearby" }
            ].map((feature, index) => {
              const FeatureIcon = feature.icon
              return (
                <div key={index} className="text-center p-6 rounded-2xl bg-background/50 hover:bg-background/80 transition-all">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center">
                    <FeatureIcon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3 text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-3xl p-12 mb-16 border">
          <h2 className="text-3xl font-bold text-center mb-8">Support & Resources</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-background/30">
              <h3 className="font-semibold mb-3 text-lg">Email Support</h3>
              <p className="text-muted-foreground">support@fitracker.ai</p>
            </div>
            <div className="p-6 rounded-2xl bg-background/30">
              <h3 className="font-semibold mb-3 text-lg">Documentation</h3>
              <p className="text-muted-foreground">docs.fitracker.ai</p>
            </div>
            <div className="p-6 rounded-2xl bg-background/30">
              <h3 className="font-semibold mb-3 text-lg">Community</h3>
              <p className="text-muted-foreground">community.fitracker.ai</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            {[
              {
                question: "Can I upgrade from Free to Premium anytime?",
                answer: "Yes! You can upgrade to Premium at any time. Your free plan data will be preserved and you'll immediately get access to all Premium features."
              },
              {
                question: "What happens when I reach my daily limits on the Free plan?",
                answer: "When you reach daily limits (like AI questions or photo scans), you'll see a friendly upgrade prompt. Limits reset daily or monthly depending on the feature."
              },
              {
                question: "Is there a free trial for Premium?",
                answer: "Yes! Premium comes with a free trial so you can experience unlimited features before committing to the subscription."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and Apple Pay through the App Store. All payments are processed securely."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their health with FiTracker's AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleStartFree} 
              size="lg" 
              variant="outline"
              className="h-auto py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 text-lg cursor-pointer"
            >
              Start Free Today
            </Button>
            <Button 
              onClick={handleStartPremium} 
              size="lg"
              className="h-auto py-3 bg-green-500 hover:bg-green-600 hover:scale-105 transition-all shadow-lg text-white font-semibold text-lg cursor-pointer"
            >
              Try Premium Free
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
})

PricingPage.displayName = "PricingPage"

export default PricingPage