"use client"

import { useState, memo } from "react"
import { ChevronDown } from "lucide-react"

const FAQ = memo(() => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqItems = [
    {
      question: "What is Fitracker?",
      answer: "Fitracker is your complete AI health companion that combines fitness tracking, nutrition guidance, community support, and personalized AI coaching in one beautifully simple app. Whether you're a complete beginner or fitness enthusiast, Fitracker supports every aspect of your health journey with cutting-edge AI technology, three flexible tracking options (photo, voice, or manual), daily personalized recommendations, and a vibrant community of health-minded individuals."
    },
    {
      question: "How does Fitracker help me through my entire health journey?",
      answer: "Fitracker acts as your complete AI health companion by providing daily personalized recommendations, tracking all aspects of your health (fitness, nutrition, progress photos), offering flexible logging options that adapt to your lifestyle, connecting you with a supportive community, and providing 24/7 AI coaching support. From setting initial goals to celebrating major milestones, Fitracker guides and supports you through every phase of your health transformation, making sustainable healthy living achievable and enjoyable."
    },
    {
      question: "What are the three ways to track my meals and workouts?",
      answer: "Fitracker offers maximum flexibility with three tracking options: 1) Take photos for instant AI recognition of foods and exercises, 2) Speak naturally to our AI voice technology, or 3) Type manually using our extensive database. You can mix and match these methods based on your situation - use voice when rushing, photos when convenient, or manual input when you want precise control."
    },
    {
      question: "How does the AI voice feature work?",
      answer: "Simply speak naturally to Fitracker about what you've eaten or your workout, and our advanced AI voice technology will understand and automatically log everything for you. You can say things like 'I just had a grilled chicken salad with avocado' or 'I did 30 minutes of running' and Fitracker will process your speech, recognize the foods or exercises, and add them to your daily log with nutritional information and workout data."
    },
    {
      question: "How do the daily AI recommendations work?",
      answer: "Every day, your personal AI health coach analyzes your progress, goals, preferences, and patterns to provide customized fitness routines and nutrition suggestions. These recommendations adapt to your lifestyle, fitness level, dietary restrictions, and goals. Whether you need a quick 15-minute workout or meal ideas for your busy schedule, your AI coach delivers personalized guidance that evolves with your journey."
    },
    {
      question: "Can I track both my fitness and nutrition in one app?",
      answer: "Absolutely! Fitracker is your complete health companion that seamlessly tracks both fitness and nutrition. Log workouts with photos, voice, or manual input, track meals the same way, monitor progress photos, set comprehensive health goals, and get daily recommendations for both fitness routines and nutrition plans. Everything syncs together to give you a complete picture of your health journey."
    },
    {
      question: "Is my personal health data secure and private?",
      answer: "Your privacy and data security are our highest priorities. All your personal health information, voice recordings, photos, and workout data are encrypted and securely stored. We never share your individual data with third parties without your explicit consent. You have complete control over what information you choose to share with the community, and all AI processing happens with full privacy protection."
    },
    {
      question: "Can I use Fitracker without the social features?",
      answer: "Yes, definitely! While Fitracker includes vibrant community features for social support and engagement, you can use all core features - AI voice tracking, photo recognition, manual logging, daily AI recommendations, workout tracking, and progress monitoring - in completely private mode. The choice to engage with the community is entirely up to you."
    },
    {
      question: "What happens if the AI can't understand my voice or recognize my photo?",
      answer: "If our AI voice technology can't understand what you said or our photo recognition can't identify a food or exercise, you always have backup options. You can try speaking again more clearly, take a different photo, manually search our extensive database, or type in the information yourself. Our AI continuously learns and improves, so items not recognized today may be identified automatically in future updates."
    },
    {
      question: "Do I need a premium subscription to use all tracking features?",
      answer: "You can start using all three tracking methods (photo, voice, and manual) immediately with our free version, which includes basic AI recognition, daily recommendations, and community access. Premium subscriptions unlock unlimited daily usage, advanced analytics, personalized meal planning, priority AI coaching support, and enhanced features. Many users find great success with the free version alone."
    }
  ]

  return (
    <section className="py-20 bg-background" id="faqs">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12">FAQs</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const open = expandedFaq === index
            return (
              <div key={index} className="border-b border-border">
                <button
                  onClick={() => setExpandedFaq(open ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:opacity-70 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-[hsl(var(--ring))]"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="text-lg font-heading font-medium pr-4">{item.question}</span>
                  <ChevronDown className={`w-6 h-6 transition-transform ${open ? "rotate-180" : ""}`} />
                </button>
                {open && (
                  <div id={`faq-panel-${index}`} className="pb-6">
                    <p className="text-muted-foreground leading-relaxed font-body">{item.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
})

FAQ.displayName = "FAQ"

export default FAQ
