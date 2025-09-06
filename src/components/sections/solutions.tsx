import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Code2, BrainCircuit, Cog, Lightbulb } from "lucide-react"

const solutions = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom applications tailored to your business needs, scalable and secure.",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description: "From chatbots to predictive analytics – intelligent solutions that give you a competitive edge.",
  },
  {
    icon: Cog,
    title: "Automation",
    description: "Automating repetitive workflows to save time and reduce operational costs.",
  },
  {
    icon: Lightbulb,
    title: "Consulting & Strategy",
    description: "Guidance and strategy to align your business with cutting-edge technology.",
  },
]

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Our Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We provide a suite of services designed to propel your business into the future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Card key={index} className="text-center p-6 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="font-headline text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardDescription className="text-base">
                  {solution.description}
                </CardDescription>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
