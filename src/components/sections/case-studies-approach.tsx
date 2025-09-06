import { Search, Cog, Rocket } from "lucide-react";

const approachSteps = [
  {
    icon: Search,
    title: "Understand",
    description: "We dive deep into your challenges, workflows, and goals to identify the most impactful opportunities for innovation."
  },
  {
    icon: Cog,
    title: "Build",
    description: "We design and develop solutions tailored for your specific industry needs, ensuring they are scalable, secure, and user-friendly."
  },
  {
    icon: Rocket,
    title: "Deliver",
    description: "We deploy the solution and provide ongoing support to ensure it delivers measurable results and drives long-term growth."
  }
];

export default function CaseStudiesApproach() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            From Problem to Solution to Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {approachSteps.map((item) => {
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
