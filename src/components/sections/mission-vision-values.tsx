import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Rocket, Gem } from "lucide-react";

const pillars = [
  {
    icon: Rocket,
    title: "Our Mission",
    description: "To revolutionize how businesses operate by delivering affordable, intelligent, and scalable tech solutions."
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be the leading African-born AI and automation partner that transforms local businesses into global leaders."
  },
  {
    icon: Gem,
    title: "Core Values",
    description: "Innovation, Integrity, Collaboration, Impact. We think beyond today, build trust, grow with our clients, and measure success by the change we create."
  }
];

export default function MissionVisionValues() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card key={pillar.title} className="bg-background/70 backdrop-blur-sm border-border/50 text-center">
                <CardHeader className="items-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
