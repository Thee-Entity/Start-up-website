import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const founders = [
  {
    name: "Collins Kipkirui Lagat",
    role: "Co-founder & CEO",
    profileText: "Collins is the driving force and leader of Thee Entity. A visionary idealist with a strong background in backend development and DevOps, he brings both technical expertise and strategic leadership to the team. As a co-founder, he is passionate about creating practical, scalable solutions that bridge the gap between technology and real business needs, empowering enterprises to become globally competitive.",
    quote: "I believe that innovation should be accessible to everyone, not just large enterprises. Our mission at Thee Entity is to level the playing field.",
    imageUrl: "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/Collins.jpeg",
    aiHint: "male founder"
  },
  {
    name: "Brian Kareithi",
    role: "Co-Founder | Backend Engineer & Cybersecurity Specialist",
    profileText: "Brian combines his expertise in cybersecurity and backend engineering with a strategic mindset, ensuring that Thee Entity’s solutions are not only secure but also market-ready. His deep understanding of digital threats helps build systems that are both safe and resilient. As a communicator, he bridges the gap between our technology and the businesses we serve, helping organizations understand how AI and automation can transform their operations.",
    quote: "In a digital-first world, trust is everything. My goal is to make Thee Entity a brand that businesses can rely on for both security and growth.",
    imageUrl: "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/kareithi.jpg",
    aiHint: "male founder tech"
  },
  {
    name: "Fatime Hashim Machira",
    role: "Co-Founder | Frontend Developer, UI/UX Designer & Cybersecurity Enthusiast",
    profileText: "As a frontend developer and UI/UX designer, Fatime is the creative force behind Thee Entity's user interfaces, ensuring they are not only beautiful but also intuitive and user-friendly. With her added passion for cybersecurity, she helps architect systems that are both engaging and secure. Her vision is to create digital experiences that don't just work, but delight and protect the users who depend on them.",
    quote: "I believe in building technology that is both beautiful and secure. We are not just solving problems — we are designing trustworthy digital experiences.",
    imageUrl: "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/Fatime.jpg",
    aiHint: "female engineer"
  },
  {
    name: "Zeituna Hussein Kura",
    role: "Marketing & Social Media Manager",
    profileText: "Zeituna leads the charge in telling Thee Entity's story to the world. As the manager of marketing and all social media platforms, she crafts compelling narratives that connect with our audience and showcase the transformative power of our solutions. Her strategic approach ensures that our message reaches the right people, building a strong community around our brand.",
    quote: "Great technology deserves a great story. My mission is to share how Thee Entity is changing the game, one business at a time.",
    imageUrl: "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/Zeituna%20Kurr.jpg",
    aiHint: "female marketer"
  }
];

export default function FoundersHighlight() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            The Visionaries Behind Thee Entity
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            At the heart of Thee Entity is a team of innovators who believe that technology should not only solve today’s problems but also shape tomorrow’s opportunities. As young Kenyan technologists, we came together with a shared passion for AI, automation, and building software that empowers businesses of all sizes to thrive in a competitive world.
          </p>
        </div>

        <div className="space-y-16">
          {founders.map((founder, index) => (
            <Card key={founder.name} className="overflow-hidden border-none shadow-none bg-transparent">
              <div className={`grid md:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-row-dense" : ""}`}>
                <div className={`relative h-96 w-full rounded-lg overflow-hidden shadow-xl md:col-span-5 ${index % 2 === 1 ? "md:col-start-8" : ""}`}>
                  <Image 
                    src={founder.imageUrl} 
                    alt={founder.name}
                    width={400}
                    height={400}
                    data-ai-hint={founder.aiHint}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-headline text-2xl font-bold">{founder.name}</h3>
                  <p className="text-primary font-semibold mb-4">{founder.role}</p>
                  <p className="text-muted-foreground mb-6">{founder.profileText}</p>
                  <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
                    {founder.quote}
                  </blockquote>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground">
            Their diverse skills, shared vision, and relentless drive position the company as more than just a startup — it’s a movement to redefine how businesses in Kenya and beyond embrace technology.
          </p>
        </div>
      </div>
    </section>
  );
}
