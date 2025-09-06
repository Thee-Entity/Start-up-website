import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SolutionsCaseStudyHighlight() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
              Proof of Value
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our solutions deliver tangible results. Here's a glimpse of how we've helped businesses like yours.
            </p>
            <Button variant="outline" asChild>
              <Link href="/#">
                View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
            <CardContent className="p-8">
              <blockquote className="border-l-4 border-accent pl-6 italic text-lg text-foreground">
                A local SME automated their sales process and saved 30% more time on customer support using our custom chatbot solution. This allowed them to focus on product innovation and scale their operations faster than ever before.
              </blockquote>
              <p className="font-semibold text-right mt-6">- Creative Designs Inc.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
