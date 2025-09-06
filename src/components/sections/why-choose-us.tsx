import { CheckCircle2 } from "lucide-react"

const pillars = [
  {
    title: "Futuristic Approach",
    description: "We bring tomorrow’s solutions to your business today, ensuring you're always ahead of the curve."
  },
  {
    title: "Tailored for Growth",
    description: "Affordable, practical, and effective tech designed specifically for SMEs and growing institutions."
  },
  {
    title: "End-to-End Support",
    description: "From the initial idea to execution and continuous improvement, we're your dedicated tech partner."
  },
  {
    title: "Local Expertise, Global Vision",
    description: "As a proud Kenyan startup, we understand the local market while applying a global perspective to our solutions."
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Why Thee Entity?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're more than just a service provider; we're your partner in innovation and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-headline text-xl font-semibold">{pillar.title}</h3>
                <p className="text-muted-foreground mt-1">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
