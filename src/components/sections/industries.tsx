import { IndustrySolutions } from "@/components/industry-solutions"

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Transforming Businesses Across Industries
          </h2>
        </div>
        <IndustrySolutions />
      </div>
    </section>
  )
}
