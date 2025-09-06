import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CaseStudiesHero() {
  return (
    <section className="relative bg-gray-900 text-white py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#E5E7EB]/10 to-[#0F172A] opacity-90"></div>
       <Image
        src="https://picsum.photos/1920/1080"
        alt="Abstract data visualization"
        fill
        data-ai-hint="futuristic data"
        className="object-cover opacity-10 animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]"
      />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold !leading-tight">
          Proven Impact. Real Stories.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
          Our solutions are not just ideas — they’re transforming businesses, schools, and institutions. Explore how we’ve helped organizations unlock growth and efficiency.
        </p>
        <div className="mt-10">
           <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <Link href="/#contact">Work With Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
