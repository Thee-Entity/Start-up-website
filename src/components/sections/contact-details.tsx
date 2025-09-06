import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Share2 } from "lucide-react";
import Link from "next/link";
import { Linkedin, Twitter, Instagram } from "lucide-react"

const contactMethods = [
    {
        icon: Mail,
        title: "Email",
        content: "info@theeentity.com",
        href: "mailto:info@theeentity.com",
    },
    {
        icon: Phone,
        title: "Phone",
        content: "+254 08889016",
        href: "tel:+25408889016",
    },
    {
        icon: MapPin,
        title: "Location",
        content: "Nairobi, Kenya",
        href: "#",
    }
]

export default function ContactDetails() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return(
              <Card key={method.title} className="text-center bg-secondary/30">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href={method.href} className="text-lg text-muted-foreground hover:text-primary transition-colors">
                    {method.content}
                  </Link>
                </CardContent>
              </Card>
            )
          })}
           <Card className="text-center bg-secondary/30">
                <CardHeader>
                    <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Share2 className="w-8 h-8" />
                    </div>
                    <CardTitle className="font-headline text-2xl">Social Media</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-center space-x-6">
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Linkedin size={24} />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Twitter size={24} />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Instagram size={24} />
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
