import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Stay Connected with Thee Entity
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a project in mind or want to join our newsletter? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-4">
            <h3 className="font-headline text-2xl font-semibold">Send us a message</h3>
            <ContactForm />
          </div>
          <div className="space-y-4">
            <h3 className="font-headline text-2xl font-semibold">Join our newsletter</h3>
            <p className="text-muted-foreground">Get the latest on AI, automation, and tech innovation directly in your inbox.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-grow" />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
