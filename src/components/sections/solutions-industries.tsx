import { Briefcase, School, Building, Factory, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const industries = [
  { icon: Briefcase, name: "SMEs", description: "Sales automation, AI chat support." },
  { icon: School, name: "Schools", description: "Digital attendance, grading automation." },
  { icon: Building, name: "Institutions", description: "Student/employee management systems." },
  { icon: Factory, name: "Enterprises", description: "Predictive analytics & dashboards." },
];

export default function SolutionsIndustries() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Solutions Built for Your Industry
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From schools to SMEs, we create industry-specific solutions that deliver real results.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Card key={industry.name} className="text-center bg-background/70">
                <CardHeader className="items-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/#industries">
              See All Industries <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
