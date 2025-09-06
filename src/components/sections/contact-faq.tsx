import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "How can I book a consultation?",
        answer: "You can book a free consultation by clicking on any 'Book a Consultation' button on our website or by sending us an email at info@theeentity.com. We'll get back to you to schedule a time that works for you."
    },
    {
        question: "Do you only work with Kenyan businesses?",
        answer: "While we are proudly Kenyan-born, we work with businesses across Africa and beyond. Our operations are fully virtual, allowing us to partner with clients no matter where they are located."
    },
    {
        question: "How long does it take to deliver a project?",
        answer: "Project timelines vary depending on the scope and complexity. A simple automation task might take a few weeks, while a custom software build could take several months. We provide a detailed project plan and timeline after our initial consultation."
    }
]

export default function ContactFaq() {
  return (
    <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">
                    Frequently Asked Questions
                </h2>
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index + 1}`} key={index}>
                            <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                            {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    </section>
  )
}
