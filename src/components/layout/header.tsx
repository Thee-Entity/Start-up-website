"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Code2, BrainCircuit, Cog, Lightbulb, Briefcase, Building, School, Factory, ChevronDown, FileText, BookOpen, Newspaper } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/logo"

const solutions = [
  { name: "Software Development", icon: Code2, href: "/#solutions" },
  { name: "AI Solutions", icon: BrainCircuit, href: "/#solutions" },
  { name: "Automation", icon: Cog, href: "/#solutions" },
  { name: "Consulting", icon: Lightbulb, href: "/#solutions" },
];

const industries = [
  { name: "SMEs", icon: Briefcase, href: "/#industries" },
  { name: "Institutions", icon: Building, href: "/#industries" },
  { name: "Schools", icon: School, href: "/#industries" },
  { name: "Enterprises", icon: Factory, href: "/#industries" },
];

const resources = [
  { name: "Blog", icon: Newspaper, href: "/#blog" },
  { name: "Case Studies", icon: BookOpen, href: "#" },
  { name: "Whitepapers", icon: FileText, href: "#" },
];

function NavMenu() {
  return (
    <>
      <Button variant="ghost" asChild>
          <Link href="/">Home</Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="/about">About Us</Link>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-1">
            Solutions <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {solutions.map((item) => (
            <DropdownMenuItem key={item.name} asChild>
              <Link href={item.href} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-primary" />
                {item.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-1">
            Industries <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {industries.map((item) => (
            <DropdownMenuItem key={item.name} asChild>
              <Link href={item.href} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-primary" />
                {item.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

       <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-1">
            Resources <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {resources.map((item) => (
            <DropdownMenuItem key={item.name} asChild>
              <Link href={item.href} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-primary" />
                {item.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="ghost" asChild>
        <Link href="/#contact">Contact</Link>
      </Button>
    </>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            <NavMenu />
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button className="hidden sm:inline-flex bg-gradient-to-r from-accent to-primary text-primary-foreground hover:opacity-90 transition-opacity" asChild>
            <Link href="/#contact">Book a Consultation</Link>
          </Button>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-xs">
              <div className="flex justify-between items-center py-2">
                 <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <Logo />
                 </Link>
                 <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="mt-8 flex flex-col gap-4">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-lg">Home</Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg">About Us</Link>
                <Link href="/#solutions" onClick={() => setMobileMenuOpen(false)} className="text-lg">Solutions</Link>
                <Link href="/#industries" onClick={() => setMobileMenuOpen(false)} className="text-lg">Industries</Link>
                <Link href="/#blog" onClick={() => setMobileMenuOpen(false)} className="text-lg">Resources</Link>
                <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg">Contact</Link>
              </nav>
              <Button className="w-full mt-8 bg-gradient-to-r from-accent to-primary text-primary-foreground" asChild>
                <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>Book a Consultation</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
