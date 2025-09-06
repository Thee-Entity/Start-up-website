import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const founders = [
  {
    name: "Collins Lagat",
    role: "Founder & CEO",
    philosophy: "Building tech that works for everyone, not just big enterprises.",
    imageUrl: "https://picsum.photos/400/400?random=1",
    aiHint: "male founder"
  },
  {
    name: "Kiare",
    role: "Co-Founder",
    philosophy: "Ensuring trust and security in a digital-first world.",
    imageUrl: "https://picsum.photos/400/400?random=2",
    aiHint: "male founder tech"
  },
  {
    name: "Pachema",
    role: "Co-Founder",
    philosophy: "Designing the future by building technology that grows with businesses.",
    imageUrl: "https://picsum.photos/400/400?random=3",
    aiHint: "male engineer"
  }
];

export default function TeamSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Faces Behind The Entity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {founders.map((founder) => (
            <Card key={founder.name} className="text-center border-border/50 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="p-0">
                <Image
                  src={founder.imageUrl}
                  alt={founder.name}
                  width={400}
                  height={400}
                  data-ai-hint={founder.aiHint}
                  className="rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl">{founder.name}</CardTitle>
                <p className="text-primary font-medium">{founder.role}</p>
                <p className="text-muted-foreground mt-2 text-sm italic">"{founder.philosophy}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
