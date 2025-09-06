import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DownloadCloud } from "lucide-react"

const downloads = [
  {
    title: "Beginner’s Guide to AI for Small Businesses",
    description: "A free eBook covering the basics of AI and how you can implement it in your SME.",
    type: "eBook"
  },
  {
    title: "The State of Automation in East Africa – 2025 Report",
    description: "Our comprehensive whitepaper on the trends and future of automation in the region.",
    type: "Whitepaper"
  },
  {
    title: "SME Digital Transformation Checklist",
    description: "A practical checklist to guide your business through its digital transformation journey.",
    type: "Checklist"
  }
]

export default function ResourcesDownloads() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Downloadable Resources
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Get access to our exclusive guides, reports, and checklists to accelerate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {downloads.map((item, index) => (
            <Card key={index} className="flex flex-col text-center items-center bg-background/50">
              <CardHeader>
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <DownloadCloud className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                <CardDescription>{item.type}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link href="#">Download Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
