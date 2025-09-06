import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, School, Building, Globe, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Briefcase,
    title: "Small & Medium Enterprises (SMEs)",
    description: "SMEs drive the economy, but often lack access to enterprise-level tools. We provide affordable automation and AI solutions to streamline sales, customer support, and operations.",
    solutions: ["AI chatbots for customer support", "Automated sales workflows", "Business intelligence dashboards"],
  },
  {
    icon: School,
    title: "Schools & Education",
    description: "We empower schools with digital platforms that simplify learning, administration, and communication.",
    solutions: ["AI-powered student attendance & grading", "Learning management systems (LMS)", "Online portals for teachers, students, and parents"],
  },
  {
    icon: Building,
    title: "Institutions & Organizations",
    description: "For large institutions, efficiency and transparency are key. Our systems bring automation, security, and scalability to everyday operations.",
    solutions: ["Employee & student management systems", "Automated reporting tools", "Secure cloud-based workflows"],
  },
  {
    icon: Globe,
    title: "Enterprises & Corporates",
    description: "Enterprises need to stay competitive with data-driven insights and scalable systems. We provide AI-driven analytics and automation tools to fuel growth and innovation.",
    solutions: ["Predictive analytics for market insights", "Scalable enterprise dashboards", "Advanced workflow automation"],
  },
];

export default function IndustriesGrid() {
  return (
    <section className="pb-20 lg:pb-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Card key={industry.title} className="flex flex-col bg-secondary/30 border-border/30 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl mt-2">{industry.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-6">{industry.description}</CardDescription>
                  <p className="font-semibold mb-2 text-primary">Example Solutions:</p>
                  <ul className="space-y-2 text-muted-foreground flex-grow">
                    {industry.solutions.map((solution) => (
                      <li key={solution} className="flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-accent" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
