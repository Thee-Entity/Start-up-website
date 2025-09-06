import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const featuredPosts = [
  {
    title: "How SMEs in Kenya Can Leverage AI to Compete with Big Enterprises",
    summary: "A deep dive into affordable AI tools and strategies that can level the playing field for small and medium-sized businesses.",
    imageUrl: "https://picsum.photos/800/400?random=10",
    aiHint: "small business AI"
  },
  {
    title: "The Future of Education: How AI is Transforming Schools",
    summary: "Exploring the impact of automation on administration, personalized learning, and the future of educational institutions.",
    imageUrl: "https://picsum.photos/800/400?random=11",
    aiHint: "education technology"
  },
];

const allPosts = [
  {
    category: "Business",
    title: "Top 5 Automation Tools That Can Save Your Business Time & Money",
    summary: "Discover our top picks for automation software that can streamline your daily operations.",
    imageUrl: "https://picsum.photos/600/400?random=12",
    aiHint: "automation tools"
  },
  {
    category: "Cybersecurity",
    title: "The Importance of Data Protection for SMEs",
    summary: "A guide to understanding and implementing essential cybersecurity measures.",
    imageUrl: "https://picsum.photos/600/400?random=13",
    aiHint: "data protection"
  },
  {
    category: "AI",
    title: "Getting Started with AI: A Simple Guide for Non-Techies",
    summary: "AI isn't just for developers. Learn the basics and how you can apply them.",
    imageUrl: "https://picsum.photos/600/400?random=14",
    aiHint: "AI basics"
  },
   {
    category: "Education",
    title: "Digitizing the Classroom: Beyond the Whiteboard",
    summary: "How modern LMS and digital tools are creating more engaging learning environments.",
    imageUrl: "https://picsum.photos/600/400?random=15",
    aiHint: "digital classroom"
  },
   {
    category: "News",
    title: "Thee Entity Announces New Partnership to Empower Local Schools",
    summary: "We're excited to partner with local organizations to bring technology to more schools.",
    imageUrl: "https://picsum.photos/600/400?random=16",
    aiHint: "partnership announcement"
  },
   {
    category: "Business",
    title: "Analytics Dashboards: Turning Data into Decisions",
    summary: "Learn how to build and use dashboards to make smarter business choices.",
    imageUrl: "https://picsum.photos/600/400?random=17",
    aiHint: "analytics dashboard"
  },
]

function PostGrid({ posts }: { posts: typeof allPosts }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {posts.map((post, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20 bg-secondary/30">
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
                        <Link href="#">
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
            ))}
        </div>
    )
}

export default function ResourcesContent() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        
        {/* Featured Insights */}
        <div className="mb-20">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Featured Insights</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="flex flex-col md:flex-row items-center gap-6 p-6 bg-secondary/30 border-border/30 overflow-hidden shadow-lg hover:shadow-primary/20">
                <div className="md:w-1/3">
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title} 
                    width={800} 
                    height={400}
                    data-ai-hint={post.aiHint}
                    className="rounded-lg object-cover w-full h-48 md:h-full" 
                  />
                </div>
                <div className="md:w-2/3">
                  <CardTitle className="font-headline text-2xl mb-3">{post.title}</CardTitle>
                  <p className="text-muted-foreground mb-4">{post.summary}</p>
                  <Button variant="link" asChild className="p-0">
                    <Link href="#">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All Posts with Filters */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 h-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
            <TabsTrigger value="cybersecurity">Cybersecurity</TabsTrigger>
            <TabsTrigger value="ai">AI</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <PostGrid posts={allPosts} />
          </TabsContent>
          <TabsContent value="business">
             <PostGrid posts={allPosts.filter(p => p.category === 'Business')} />
          </TabsContent>
           <TabsContent value="cybersecurity">
             <PostGrid posts={allPosts.filter(p => p.category === 'Cybersecurity')} />
          </TabsContent>
          <TabsContent value="ai">
             <PostGrid posts={allPosts.filter(p => p.category === 'AI')} />
          </TabsContent>
          <TabsContent value="education">
             <PostGrid posts={allPosts.filter(p => p.category === 'Education')} />
          </TabsContent>
           <TabsContent value="news">
             <PostGrid posts={allPosts.filter(p => p.category === 'News')} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
