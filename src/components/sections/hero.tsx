import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary/40 to-slate-900 opacity-60"></div>
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Abstract background"
        fill
        data-ai-hint="abstract AI automation"
        className="object-cover opacity-10"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold !leading-tight">
            Empowering Businesses with Intelligent Automation & Next-Gen Tech Solutions.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80">
            We help small and medium businesses, schools, and institutions gain market advantage through AI-driven solutions and software innovation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-accent to-primary text-primary-foreground hover:opacity-90 transition-opacity" asChild>
              <Link href="#contact">Start Your Journey</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white/50 hover:bg-white/10 hover:text-white" asChild>
              <Link href="#solutions">Explore Our Solutions</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
