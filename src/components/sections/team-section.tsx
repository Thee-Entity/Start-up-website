import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const founders = [
  {
    name: "Collins Kipkirui Lagat",
    role: "Founder & CEO",
    philosophy: "Building technology that works for everyone, not just large enterprises.",
    imageUrl: "/assets/collins.jpg",
    aiHint: "male founder"
  },
  {
    name: "Fatime Machira Hashim",
    role: "Co-Founder | Cybersecurity & Mobile Engineer",
    philosophy: "Trust and security are the foundation of meaningful digital solutions.",
    imageUrl: "/assets/fatime.jpeg",
    aiHint: "female co-founder tech"
  },
  {
    name: "Brian Kareithi",
    role: "Co-Founder | Backend & Fullstack Engineer",
    philosophy: "Technology should grow with businesses and empower them to do more.",
    imageUrl: "/assets/kareithi.jpg",
    aiHint: "male backend engineer"
  }
];

export default function TeamSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Faces Behind Thee Entity
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Meet the leaders of Thee Entity. Collins, Fatime, and Brian form the backbone of the company. Their shared vision, motivation, and diverse skills make them a dependable team driving innovation in Kenya and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {founders.map((founder) => (
            <Card
              key={founder.name}
              className="text-center border border-border/40 rounded-2xl overflow-hidden transform transition duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:shadow-2xl"
            >
              <CardHeader className="p-0">
                <Image
                  src={founder.imageUrl}
                  alt={founder.name}
                  width={400}
                  height={400}
                  data-ai-hint={founder.aiHint}
                  className="object-cover w-full h-64"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl">{founder.name}</CardTitle>
                <p className="text-primary font-medium mb-3">{founder.role}</p>
                <p className="text-muted-foreground text-sm italic">
                  "{founder.philosophy}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
