import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const founders = [
  {
    name: "Collins Lagat",
    role: "Founder & CEO",
    philosophy: "Building tech that works for everyone, not just big enterprises.",
    imageUrl: "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/Collins.jpeg",
    aiHint: "male founder"
  },
  {
    name: "Brian Kareithi",
    role: "Co-Founder",
    philosophy: "Ensuring trust and security in a digital-first world.",
    imageUrl: "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/kareithi.jpg",
    aiHint: "male founder tech"
  },
  {
    name: "Fatime Machira Hashim",
    role: "Co-Founder",
    philosophy: "Designing the future by building technology that grows with businesses.",
    imageUrl: "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/Fatime.jpg",
    aiHint: "female engineer"
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
                  className="rounded-t-lg object-cover w-full h-[400px]"
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
