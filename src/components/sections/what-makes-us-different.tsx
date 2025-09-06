import { Zap, Target, SlidersHorizontal, Globe } from "lucide-react";

const differentiators = [
  {
    icon: Zap,
    title: "Futuristic Innovation",
    description: "We focus on AI-driven solutions, not just traditional IT, to keep you ahead of the curve."
  },
  {
    icon: Target,
    title: "Tailored for SMEs",
    description: "Our solutions are practical, effective, and priced for small to medium-sized businesses."
  },
  {
    icon: SlidersHorizontal,
    title: "End-to-End Expertise",
    description: "We are your partners from initial consultation and strategy to deployment and ongoing support."
  },
  {
    icon: Globe,
    title: "African Roots, Global Vision",
    description: "We leverage our local market understanding to build world-class, globally competitive solutions."
  }
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Why Partner with Thee Entity?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="text-center p-6">
                <div className="mx-auto w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
