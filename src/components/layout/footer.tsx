import Link from "next/link"
import { Linkedin, Twitter, Instagram } from "lucide-react"
import { Logo } from "@/components/logo"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/">
              <Logo />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Innovating the Future, One Entity at a Time.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="#solutions" className="text-muted-foreground hover:text-primary">Solutions</Link></li>
              <li><Link href="#industries" className="text-muted-foreground hover:text-primary">Industries</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Case Studies</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Whitepapers</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold">Contact Info</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-center">info@theeentity.com</li>
              <li className="flex items-center">+254 XXX XXX XXX</li>
              <li className="flex items-center">Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 Thee Entity. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}