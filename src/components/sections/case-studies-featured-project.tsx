import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlayCircle } from "lucide-react";

export default function CaseStudiesFeaturedProject() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="relative rounded-lg overflow-hidden p-12 flex flex-col md:flex-row items-center gap-8 bg-background shadow-2xl">
          <div className="relative w-full md:w-1/2 h-64 md:h-80 rounded-lg overflow-hidden group">
            <Image
              src="https://picsum.photos/800/600"
              alt="AI-Powered Sales Automation"
              fill
              data-ai-hint="sales automation"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="h-16 w-16 text-white/80 transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="font-headline text-2xl md:text-3xl font-bold">
              How Thee Entity Helped an SME Scale With AI-Powered Sales Automation
            </h3>
            <p className="text-muted-foreground">
              Discover the full story of how our tailored automation solution transformed a client's sales process, leading to a 40% increase in qualified leads and a significant reduction in manual data entry.
            </p>
            <Button variant="outline">
              Watch the Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
