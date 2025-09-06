import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Briefcase, School } from "lucide-react";

const caseStudies = [
  {
    icon: Briefcase,
    text: "A Nairobi-based SME improved customer support response time by 60% with our AI chatbot.",
    industry: "SME",
  },
  {
    icon: School,
    text: "A local school digitized attendance and reduced manual work by 70%.",
    industry: "Education",
  },
   {
    icon: Briefcase,
    text: "An e-commerce startup increased sales by 25% after implementing our automated sales workflow.",
    industry: "SME",
  },
  {
    icon: School,
    text: "A private college enhanced student engagement with a custom learning management system.",
    industry: "Education",
  },
]

export default function IndustriesCaseStudies() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return(
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="bg-background/70 border-border/50">
                      <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <blockquote className="italic text-lg md:text-xl text-foreground max-w-2xl">
                          “{study.text}”
                        </blockquote>
                        <p className="font-semibold text-muted-foreground">- {study.industry} Success Story</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
            )})}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </div>
    </section>
  )
}
