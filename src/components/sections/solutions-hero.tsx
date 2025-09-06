import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SolutionsHero() {
  return (
    <section className="relative bg-gray-900 text-white py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#00B5AD]/40 to-[#0F172A] opacity-80"></div>
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Abstract AI visuals"
        fill
        data-ai-hint="abstract AI"
        className="object-cover opacity-10 animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]"
      />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold !leading-tight">
          Innovative Tech Solutions for the Future of Business.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
          We provide intelligent software, AI-powered automation, and consulting services designed to help businesses of all sizes grow, optimize, and lead.
        </p>
        <div className="mt-10">
          <Button size="lg" className="bg-gradient-to-r from-accent to-primary text-primary-foreground hover:opacity-90 transition-opacity" asChild>
            <Link href="/#contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
