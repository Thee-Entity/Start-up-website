import { ContactForm } from "@/components/contact-form"

export default function ContactFormSection() {
  return (
    <section className="pb-20 lg:pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">
                    Send Us a Message
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                </p>
            </div>
            <ContactForm />
        </div>
      </div>
    </section>
  )
}
