import { CheckCircle2, ShieldCheck, TrendingUp, Infinity } from "lucide-react";

const advantages = [
  { icon: TrendingUp, title: "Scalable", description: "Our solutions grow as your business grows." },
  { icon: ShieldCheck, title: "Secure", description: "Built with robust cybersecurity measures in mind." },
  { icon: Infinity, title: "Future-Proof", description: "Designed to evolve with technology trends." },
  { icon: CheckCircle2, title: "Affordable", description: "Tailored pricing for SMEs, schools, and institutions." },
];

export default function SolutionsWhyChoose() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            The Thee Entity Advantage
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage) => {
            const Icon = advantage.icon;
            return (
              <div key={advantage.title} className="text-center p-6">
                <div className="mx-auto w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
