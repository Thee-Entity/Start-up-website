import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "The Future of AI in Small Business",
    summary: "Discover how AI is revolutionizing operations for SMEs and what you can do to stay ahead.",
    imageUrl: "https://picsum.photos/600/400?random=1",
    aiHint: "AI business",
  },
  {
    title: "Automating Your Workflow: A Beginner's Guide",
    summary: "Learn the first steps to identifying and automating repetitive tasks in your business.",
    imageUrl: "https://picsum.photos/600/400?random=2",
    aiHint: "automation workflow",
  },
  {
    title: "Why Custom Software is a Game-Changer",
    summary: "Off-the-shelf solutions have their limits. Here’s why tailored software provides a superior ROI.",
    imageUrl: "https://picsum.photos/600/400?random=3",
    aiHint: "custom software",
  },
]

export default function BlogPreview() {
  return (
    <section id="blog" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Insights & Resources
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Stay informed with our latest articles, case studies, and industry analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
              <CardHeader className="p-0">
                <Image 
                  src={post.imageUrl} 
                  alt={post.title} 
                  width={600} 
                  height={400} 
                  data-ai-hint={post.aiHint}
                  className="w-full h-48 object-cover" 
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="font-headline text-xl mb-3">{post.title}</CardTitle>
                <p className="text-muted-foreground">{post.summary}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="link" asChild className="p-0">
                  <Link href="/resources">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href="/resources">View All Articles <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
