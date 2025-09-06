import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"

const caseStudies = [
  {
    client: "Creative Designs Inc.",
    problem: "Manual invoicing was time-consuming and prone to errors, delaying payments.",
    solution: "Developed a custom automated billing system that generates and sends invoices instantly.",
    result: "Reduced invoicing time by 95% and improved cash flow by 40%.",
    tags: ["Automation", "SME"],
  },
  {
    client: "FutureLearn Academy",
    problem: "Struggled with student engagement and tracking progress across multiple digital platforms.",
    solution: "Built a unified e-learning platform with AI-powered personalized learning paths and progress analytics.",
    result: "Increased student engagement by 60% and improved course completion rates.",
    tags: ["AI Solutions", "Schools"],
  },
  {
    client: "Market Movers Co.",
    problem: "Lack of real-time market insights made it difficult to react to competitor strategies.",
    solution: "Implemented an AI-driven predictive analytics dashboard to monitor market trends.",
    result: "Enabled proactive decision-making, leading to a 15% increase in market share.",
    tags: ["Consulting", "Enterprises"],
  },
]

export default function ShowcaseSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Our Impact in Action
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            See how our solutions have helped businesses automate, grow, and lead in their industries.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {caseStudies.map((study, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="font-headline">{study.client}</CardTitle>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {study.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-grow">
                      <div>
                        <h4 className="font-semibold text-primary">Problem</h4>
                        <p className="text-sm text-muted-foreground">{study.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-accent">Solution</h4>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-600">Result</h4>
                        <p className="text-sm text-muted-foreground">{study.result}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </div>
    </section>
  )
}
