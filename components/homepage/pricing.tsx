"use client"

import { memo } from "react"
import { Button } from "@/components/ui/button"

const Pricing = memo(() => {
  const plans = [
    {
      name: "Get Started Free",
      price: "$0",
      period: "/month",
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
      period: "/month",
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
    <section id="pricing" className="py-20 bg-gradient-to-b from-muted/50 to-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-foreground">
            Choose Your Plan
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 shadow-lg relative ${
                plan.popular
                  ? "bg-primary text-primary-foreground shadow-xl"
                  : "bg-card/70 backdrop-blur-sm border border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-foreground text-primary px-4 py-2 rounded-full text-sm font-heading font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-3xl font-heading font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-heading font-bold mb-8">
                {plan.price}<span className="text-lg opacity-80">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <span className={plan.popular ? "" : "text-primary"}>✓</span>
                    <span className="font-body">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full rounded-full py-3 font-heading font-semibold ${
                  plan.popular
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Pricing.displayName = "Pricing"

export default Pricing
 