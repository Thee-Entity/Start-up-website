import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { supabase } from "@/supabase-client"

// The component is now async to fetch data
export default async function BlogPreview() {
  
  // Fetch the 3 latest posts from the 'posts' table
  const { data: blogPosts, error } = await supabase
    .from('posts')
    .select('*')
    .order('published_at', { ascending: false })
    .limit(3);

  if (error) {
    console.error('Error fetching blog posts:', error);
    // You can return a message or a fallback UI here
    return (
       <section id="blog" className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
           <div className="text-center">
             <h2 className="font-headline text-3xl md:text-4xl font-bold">Error Loading Posts</h2>
             <p className="mt-4 text-muted-foreground">Could not fetch the latest insights at this moment.</p>
           </div>
        </div>
      </section>
    )
  }

  // If there are no posts, you can show a message
  if (!blogPosts || blogPosts.length === 0) {
    return (
      <section id="blog" className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
           <div className="text-center">
             <h2 className="font-headline text-3xl md:text-4xl font-bold">Insights & Resources</h2>
             <p className="mt-4 text-muted-foreground">No articles published yet. Check back soon!</p>
           </div>
        </div>
      </section>
    );
  }

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
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
              <CardHeader className="p-0">
                <Image 
                  src={post.image_url || "https://picsum.photos/600/400?random=1"} 
                  alt={post.title} 
                  width={600} 
                  height={400} 
                  data-ai-hint={post.ai_hint || "abstract"}
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
