import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function AboutSnapshot() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-full w-full rounded-lg overflow-hidden flex items-center justify-center bg-secondary/20 p-8">
             <Image 
                src="https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/Thee%20Entity%20Logo.png" 
                alt="Thee Entity Company Logo"
                width={400}
                height={400}
                className="object-contain w-full h-full"
             />
          </div>
          <div className="space-y-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground">
              Thee Entity is a Kenyan-born tech startup dedicated to building unique AI-powered solutions and software that help businesses grow. Our mission is to bridge the automation gap for SMEs and institutions by offering tools that boost efficiency, cut costs, and open new opportunities.
            </p>
            <Button variant="link" asChild className="p-0 text-lg">
              <Link href="/about">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
