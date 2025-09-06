import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code2, BrainCircuit, Cog, Lightbulb, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom applications and platforms tailored to your business needs. We build scalable, secure, and user-friendly software — from mobile apps to enterprise systems.",
    subPoints: ["Web & Mobile Applications", "Cloud Solutions", "Enterprise Systems"],
    link: "#"
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description: "Harness the power of AI to gain insights, automate decisions, and enhance customer experiences. We bring cutting-edge AI to your business.",
    subPoints: ["Chatbots & Virtual Assistants", "Predictive Analytics", "AI-powered Business Intelligence"],
    link: "#"
  },
  {
    icon: Cog,
    title: "Automation Services",
    description: "We eliminate inefficiencies by automating repetitive tasks, freeing your team to focus on what matters most.",
    subPoints: ["Workflow Automation", "Sales & Marketing Automation", "Operations & Admin Automation"],
    link: "#"
  },
  {
    icon: Lightbulb,
    title: "Consulting & Strategy",
    description: "We guide organizations on how to adopt, integrate, and maximize technology to achieve sustainable growth.",
    subPoints: ["Digital Transformation Consulting", "IT & AI Strategy Planning", "Cybersecurity Advisory"],
    link: "#"
  }
];

export default function SolutionsGrid() {
  return (
    <section className="pb-20 lg:pb-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="flex flex-col bg-secondary/30 border-border/30 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-6">{service.description}</CardDescription>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    {service.subPoints.map((point) => (
                      <li key={point} className="flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button variant="link" asChild className="p-0 text-base">
                      <Link href={service.link}>
                        Discover More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
