import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const caseStudies = [
  {
    clientType: "SME",
    problem: "A small retail business was overwhelmed by customer inquiries on WhatsApp and email.",
    solution: "We built an AI-powered chatbot integrated with their website and WhatsApp.",
    result: "Response times improved by 60%, and the business handled 3x more inquiries without hiring extra staff.",
    imageUrl: "https://picsum.photos/600/400?random=4",
    aiHint: "chatbot interface",
  },
  {
    clientType: "School",
    problem: "Manual student attendance and grading were time-consuming and prone to errors.",
    solution: "Implemented an AI-enabled system that automated attendance and grading reports.",
    result: "Reduced manual work by 70% and improved record accuracy.",
    imageUrl: "https://picsum.photos/600/400?random=5",
    aiHint: "digital attendance",
  },
  {
    clientType: "Institution",
    problem: "The institution struggled with monthly reporting that took weeks to compile.",
    solution: "Built a cloud-based reporting dashboard with real-time analytics.",
    result: "Reports generated instantly, freeing up admin hours for other tasks.",
    imageUrl: "https://picsum.photos/600/400?random=6",
    aiHint: "analytics dashboard",
  }
];

export default function CaseStudiesGrid() {
  return (
    <section className="pb-20 lg:pb-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="flex flex-col bg-secondary/30 border-border/30 overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20">
              <CardHeader className="p-0">
                <Image 
                  src={study.imageUrl}
                  alt={study.aiHint}
                  width={600}
                  height={400}
                  data-ai-hint={study.aiHint}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <Badge variant="secondary" className="w-fit mb-4">{study.clientType}</Badge>
                <div className="space-y-4 flex-grow">
                  <div>
                    <h4 className="font-semibold text-primary">Problem</h4>
                    <p className="text-sm text-muted-foreground">{study.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent">Solution</h4>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Result</h4>
                    <p className="text-sm text-muted-foreground">{study.result}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
