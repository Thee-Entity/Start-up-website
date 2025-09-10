import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const founders = [
  {
    name: "Collins Kipkirui Lagat",
    role: "Founder & CEO",
    profileText: "Collins is the driving force and leader of Thee Entity. With a strong background in frontend mobile app development and AI, he brings both technical expertise and visionary leadership to the team. As the founder, he believes in creating practical, scalable solutions that bridge the gap between technology and real business needs.",
    skills: ["Frontend Development", "Mobile App Development", "Artificial Intelligence"],
    quote: "I believe that innovation should be accessible to everyone. Our mission at Thee Entity is to level the playing field.",
    imageUrl: "/assets/founders/collins.jpg",
    aiHint: "male founder"
  },
  {
    name: "Fatime Machira Hashim",
    role: "Co-Founder | Cybersecurity Specialist & Mobile Engineer",
    profileText: "Fatime combines her expertise in mobile development, Flutter, and cybersecurity with a sharp problem-solving mindset. She ensures Thee Entity’s solutions are secure, scalable, and business-ready. Her skills strengthen the company’s commitment to resilience and trust in technology.",
    skills: ["Mobile Development", "Cybersecurity", "Flutter"],
    quote: "Trust and security are the foundation of technology. My focus is on building systems businesses can depend on.",
    imageUrl: "/assets/fatime.jpg",
    aiHint: "female co-founder tech"
  },
  {
    name: "Brian Kareithi",
    role: "Co-Founder | Backend & Fullstack Engineer",
    profileText: "Brian is the backbone of Thee Entity’s backend and fullstack systems. With experience in backend mobile development, fullstack engineering, and graphic design, he ensures that our software is not only functional but also visually compelling. His diverse skillset helps the team deliver dependable and complete solutions.",
    skills: ["Backend Mobile Development", "Fullstack Development", "Graphic Design"],
    quote: "Technology should empower businesses to do more with less. My goal is to build systems that work seamlessly end to end.",
    imageUrl: "/assets/kareithi.jpg",
    aiHint: "male backend engineer"
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
            At the heart of Thee Entity is a team of innovators who believe technology should solve today’s problems and shape tomorrow’s opportunities. As young Kenyan technologists, we came together with a shared passion for AI, automation, and building dependable software that helps businesses thrive in a competitive world.
          </p>
        </div>

        <div className="space-y-16">
          {founders.map((founder, index) => (
            <Card
              key={founder.name}
              className="overflow-hidden border-none shadow-none bg-transparent"
            >
              <div
                className={`grid md:grid-cols-12 gap-8 items-center ${
                  index % 2 === 1 ? "md:grid-flow-row-dense" : ""
                }`}
              >
                <div
                  className={`relative h-96 w-full rounded-lg overflow-hidden shadow-xl md:col-span-5 ${
                    index % 2 === 1 ? "md:col-start-8" : ""
                  }`}
                >
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
                  <p className="text-primary font-semibold mb-2">{founder.role}</p>
                  <p className="text-muted-foreground mb-4">{founder.profileText}</p>
                  <ul className="mb-6 list-disc list-inside text-muted-foreground">
                    {founder.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
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
            Together, Collins, Fatime, and Brian form the backbone of Thee Entity. Their diverse skills, shared vision,
             and relentless drive position the company as more than just a startup,it’s a movement to redefine how businesses
              in Kenya and beyond embrace technology. With expertise in AI, mobile development, backend systems, and cybersecurity, 
              this dependable and motivated team delivers technology that works, grows, and inspires confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
