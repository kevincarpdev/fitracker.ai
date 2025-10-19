"use client"

import { memo } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const MostPopularBadge = memo(() => (
  <svg 
    width="129" 
    height="127" 
    viewBox="0 0 129 127" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="absolute -top-12 -right-12"
  >
    <path 
      d="M54.3154 5.40335C59.0934 -1.80131 69.672 -1.80131 74.45 5.40336L81.4767 15.9987C83.9232 19.6877 88.1914 21.7431 92.6009 21.3558L105.266 20.2434C113.878 19.487 120.473 27.7577 117.819 35.9853L113.917 48.0851C112.558 52.2979 113.612 56.9165 116.664 60.1225L125.43 69.3307C131.391 75.5921 129.037 85.9054 120.95 88.9605L109.057 93.4533C104.916 95.0175 101.962 98.7214 101.358 103.107L99.6248 115.701C98.4459 124.266 88.915 128.855 81.4841 124.437L70.5562 117.94C66.7514 115.678 62.014 115.678 58.2092 117.94L47.2812 124.437C39.8504 128.856 30.3195 124.266 29.1406 115.701L27.4069 103.107C26.8033 98.7214 23.8496 95.0176 19.7087 93.4533L7.81543 88.9605C-0.271815 85.9054 -2.62576 75.5921 3.33506 69.3307L12.1011 60.1225C15.1533 56.9164 16.2074 52.2979 14.8486 48.085L10.9459 35.9853C8.29214 27.7577 14.8878 19.487 23.4996 20.2434L36.1645 21.3558C40.574 21.7431 44.8422 19.6877 47.2887 15.9987L54.3154 5.40335Z" 
      fill="#1F005C"
    />
    <text 
      x="50%" 
      y="50%" 
      dominantBaseline="middle" 
      textAnchor="middle" 
      fill="white" 
      fontSize="14" 
      fontWeight="600"
      fontFamily="system-ui, -apple-system, sans-serif"
    >
      <tspan x="50%" dy="-0.3em">Most</tspan>
      <tspan x="50%" dy="1.2em">popular</tspan>
    </text>
  </svg>
))

MostPopularBadge.displayName = "MostPopularBadge"

const Pricing = memo(() => {
  const handleStartFree = () => {
    // In a real app, this would redirect to sign-up or app download
    window.open('https://apps.apple.com/app/fitracker', '_blank')
  }

  const handleStartPremium = () => {
    // In a real app, this would redirect to premium sign-up
    window.open('https://apps.apple.com/app/fitracker', '_blank')
  }

  const plans = [
    {
      name: "Get Started Free",
      price: "$0",
      period: "/Month",
      features: [
        "Basic AI food recognition",
        "Manual nutrition tracking", 
        "Community access",
        "Progress photo storage"
      ],
      cta: "Start Free Today",
      popular: false
    },
    {
      name: "Unlock Full Potential",
      price: "$9.99",
      period: "/Month",
      features: [
        "Unlimited AI food scans",
        "Advanced nutrition analytics",
        "Priority location recommendations",
        "Enhanced community features",
        "Export data capabilities",
        "Priority customer support"
      ],
      cta: "Start Premium Trial",
      popular: true
    }
  ]

  return (
    <section id="pricing" className="py-20" style={{ background: 'rgba(238, 230, 255, 0.6)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-medium mb-8 text-foreground">
            Choose Your Plan
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="rounded-xl p-8 relative"
              style={
                plan.popular
                  ? {
                      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 47.27%), linear-gradient(296.36deg, rgba(231, 136, 180, 0.64) 44.98%, rgba(119, 85, 232, 0.4) 84%), #FFFFFF',
                      boxShadow: '0px 26px 32px rgba(0, 0, 0, 0.04)',
                      minHeight: '528px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }
                  : {
                      background: 'white',
                      boxShadow: '0px 26px 32px rgba(0, 0, 0, 0.04)',
                      minHeight: '528px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }
              }
            >
              {plan.popular && <MostPopularBadge />}
              
              <div>
                <h3 className="text-3xl font-heading font-semibold mb-8 text-gray-900">{plan.name}</h3>
                <div className="text-4xl font-heading font-bold mb-10 text-gray-900">
                  {plan.price}<span className="text-base font-normal text-gray-600 ml-3">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8 border-t border-gray-200 pt-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className="text-gray-900 mt-1">✓</span>
                      <span className="font-body text-gray-900">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                onClick={plan.name === "Get Started Free" ? handleStartFree : handleStartPremium}
                className={`w-full rounded-lg py-6 font-heading font-semibold text-base ${
                  plan.popular
                    ? "bg-[#1F005C] text-white hover:bg-[#1F005C]/90"
                    : "bg-white text-[#1F005C] border-2 border-[#1F005C] hover:bg-gray-50"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/pricing">
            <Button 
              className="h-auto rounded-lg px-8 py-3 font-medium bg-[#1F005C] text-white hover:bg-[#1F005C]/90 text-base"
            >
              View Full Pricing & Features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
})

Pricing.displayName = "Pricing"

export default Pricing
 