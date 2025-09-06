import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Thee Entity transformed how we manage customer support — we’re faster, more efficient, and our clients are happier than ever.",
    client: "SME Owner",
    rating: 5,
  },
  {
    quote: "The automation system for our school records is flawless. It has saved our administration countless hours.",
    client: "School Principal",
    rating: 5,
  },
  {
    quote: "A truly professional and innovative team. They delivered beyond our expectations.",
    client: "Institution Director",
    rating: 5,
  },
];

export default function CaseStudiesTestimonials() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary/30 border-border/30">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="italic text-foreground mb-6">
                  “{testimonial.quote}”
                </blockquote>
                <p className="font-semibold text-right text-muted-foreground">- {testimonial.client}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
