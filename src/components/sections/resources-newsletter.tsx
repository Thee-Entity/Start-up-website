import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ResourcesNewsletter() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
                Join Our Community of Innovators
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Subscribe to receive insights, case studies, and AI trends directly in your inbox.
            </p>
            <form className="mt-8 flex max-w-md mx-auto gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-grow" />
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
            </form>
        </div>
      </div>
    </section>
  )
}
