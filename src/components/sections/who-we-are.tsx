import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-sm font-bold uppercase text-primary tracking-widest mb-4">Who We Are</h2>
            <p className="text-lg text-muted-foreground">
              Thee Entity is a technology startup founded in Kenya with a bold vision: to empower small and medium businesses, institutions, and schools with the same advanced tools used by global enterprises. We believe AI and automation should not be a privilege, but a necessity accessible to all organizations looking to grow, innovate, and lead.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image 
              src="https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/Thee%20Entity%20Logo.png"
              alt="Thee Entity Logo"
              width={600}
              height={500}
              data-ai-hint="company logo"
              className="rounded-lg shadow-xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
