import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image 
        src="https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/The%20Entity%20Icon.png" 
        alt="Thee Entity Icon"
        width={48}
        height={48}
        className="h-12 w-12"
      />
      <span className="font-headline text-2xl font-bold bg-gradient-to-r from-primary to-accent gradient-text">
        Thee Entity
      </span>
    </div>
  );
}
