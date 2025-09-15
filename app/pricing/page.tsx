"use client"

import { memo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowLeft, Star, Zap, Shield, Users, BarChart3, Heart } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"

const PricingPage = memo(() => {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Free Starter",
      description: "Perfect for getting started with your health journey",
      price: "$0",
      period: "/month",
      yearlyPrice: "$0",
      features: [
        "Basic AI food recognition",
        "Manual nutrition tracking",
        "Community access",
        "Progress photo storage",
        "Basic workout logging",
        "Weekly progress reports"
      ],
      cta: "Start Free Today",
      popular: false,
      icon: Heart,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Premium Pro",
      description: "Unlock your full potential with advanced AI coaching",
      price: "$9.99",
      period: "/month",
      yearlyPrice: "$99.99",
      yearlyDiscount: "Save 17%",
      features: [
        "Unlimited AI food scans",
        "Advanced nutrition analytics",
        "Personalized AI coaching",
        "Priority location recommendations",
        "Enhanced community features",
        "Export data capabilities",
        "Priority customer support",
        "Advanced workout plans",
        "Detailed progress analytics",
        "Custom meal planning",
        "Integration with wearables",
        "Offline mode access"
      ],
      cta: "Start Premium Trial",
      popular: true,
      icon: Zap,
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "Team & Family",
      description: "Perfect for families and small groups",
      price: "$19.99",
      period: "/month",
      yearlyPrice: "$199.99",
      yearlyDiscount: "Save 17%",
      features: [
        "Everything in Premium Pro",
        "Up to 5 family members",
        "Shared family goals",
        "Family progress dashboard",
        "Bulk meal planning",
        "Family challenges",
        "Priority support for all members",
        "Admin controls",
        "Usage analytics",
        "Custom family recipes"
      ],
      cta: "Start Family Plan",
      popular: false,
      icon: Users,
      color: "from-blue-600 to-cyan-600"
    }
  ]

  const handleStartFree = () => {
    // In a real app, this would redirect to sign-up or app download
    window.open('https://apps.apple.com/app/fitracker', '_blank')
  }

  const handleStartPremium = () => {
    // In a real app, this would redirect to premium sign-up
    window.open('https://apps.apple.com/app/fitracker', '_blank')
  }

  const handleStartFamily = () => {
    // In a real app, this would redirect to family plan sign-up
    window.open('https://apps.apple.com/app/fitracker', '_blank')
  }

  const getButtonHandler = (planName: string) => {
    switch (planName) {
      case "Free Starter":
        return handleStartFree
      case "Premium Pro":
        return handleStartPremium
      case "Team & Family":
        return handleStartFamily
      default:
        return handleStartFree
    }
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
            <div className="w-20" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Star className="w-4 h-4 mr-2" />
            Choose Your Plan
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Transform Your Health Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan to unlock your health potential with AI-powered coaching, comprehensive tracking, and community support.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`font-medium ${!isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                isAnnual ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-transform ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
              Annual
            </span>
            {isAnnual && (
              <Badge variant="secondary" className="ml-2">
                Save 17%
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            const currentPrice = isAnnual ? plan.yearlyPrice : plan.price
            const displayPrice = isAnnual ? plan.yearlyPrice : plan.price
            const displayPeriod = isAnnual ? "/year" : plan.period

            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  plan.popular
                    ? "border-primary shadow-xl ring-2 ring-primary/20"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-0 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-2">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-center pb-2">
                  <div className="mb-6">
                    <div className="text-4xl font-bold mb-1">
                      {displayPrice}
                      <span className="text-lg font-normal text-muted-foreground">
                        {displayPeriod}
                      </span>
                    </div>
                    {isAnnual && plan.yearlyDiscount && (
                      <div className="text-sm text-green-600 font-medium">
                        {plan.yearlyDiscount}
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    onClick={getButtonHandler(plan.name)}
                    className={`w-full py-3 font-semibold transition-all ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Features Comparison */}
        <div className="bg-card rounded-3xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Compare All Features</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 font-semibold">Features</th>
                  <th className="text-center py-4 font-semibold">Free</th>
                  <th className="text-center py-4 font-semibold">Premium</th>
                  <th className="text-center py-4 font-semibold">Family</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  { feature: "AI Food Recognition", free: "Basic", premium: "Unlimited", family: "Unlimited" },
                  { feature: "Nutrition Tracking", free: "✓", premium: "✓", family: "✓" },
                  { feature: "Workout Logging", free: "Basic", premium: "Advanced", family: "Advanced" },
                  { feature: "Community Access", free: "✓", premium: "Enhanced", family: "Enhanced" },
                  { feature: "AI Coaching", free: "✗", premium: "✓", family: "✓" },
                  { feature: "Data Export", free: "✗", premium: "✓", family: "✓" },
                  { feature: "Priority Support", free: "✗", premium: "✓", family: "✓" },
                  { feature: "Family Dashboard", free: "✗", premium: "✗", family: "✓" },
                  { feature: "Multiple Users", free: "1", premium: "1", family: "Up to 5" }
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="py-4 font-medium">{row.feature}</td>
                    <td className="text-center py-4">{row.free}</td>
                    <td className="text-center py-4">{row.premium}</td>
                    <td className="text-center py-4">{row.family}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            {[
              {
                question: "Can I change my plan anytime?",
                answer: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at your next billing cycle."
              },
              {
                question: "Is there a free trial for Premium?",
                answer: "Yes! We offer a 14-day free trial for Premium Pro so you can experience all the advanced features risk-free."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely."
              },
              {
                question: "Can I use the family plan for my team?",
                answer: "Absolutely! The Family plan works great for small teams, workout groups, or any group of up to 5 people."
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
            Join thousands of users who have transformed their health with Fitracker's AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleStartFree} size="lg" variant="outline">
              Start Free Today
            </Button>
            <Button onClick={handleStartPremium} size="lg">
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
