import Image from "next/image";

export default function ResourcesHero() {
  return (
    <section className="relative bg-secondary/30 py-24 md:py-32 lg:py-40 overflow-hidden">
       <Image
        src="https://picsum.photos/1920/1080"
        alt="Abstract circuit patterns"
        fill
        data-ai-hint="futuristic circuit"
        className="object-cover opacity-5"
      />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold !leading-tight">
          Stay Ahead with Knowledge.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          At Thee Entity, we don’t just build solutions — we share insights, trends, and strategies to help businesses embrace AI and automation.
        </p>
      </div>
    </section>
  );
}
