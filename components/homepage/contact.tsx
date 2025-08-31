"use client"

import { memo } from "react"
import Image from "next/image"

const Contact = memo(() => {
  return (
    <section className="py-20 bg-background" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Image src="/contact1.jpg" alt="Fitracker App" width={500} height={500} className="rounded-3xl aspect-[2/3] object-cover" />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Get in touch</h2>
            <p className="text-xl mb-8 text-muted-foreground">Want to reach out? Contact us at:</p>

            <div className="space-y-4 text-lg">
              <p>hello@fitracker.ai</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

Contact.displayName = "Contact"

export default Contact
