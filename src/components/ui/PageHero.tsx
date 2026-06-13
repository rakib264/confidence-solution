import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

type PageHeroProps = {
  title: string;
  subtitle: string;
  image: string;
};

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 to-foreground/45" />
      </div>
      <div className="relative mx-auto flex min-h-[40vh] max-w-7xl flex-col justify-end px-4 py-16 sm:px-6 lg:px-8">
        <Badge>Confidence Solution LTD.</Badge>
        <h1 className="mt-4 max-w-3xl text-4xl font-black text-background md:text-5xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-sm text-background/85 md:text-base">{subtitle}</p>
        <div className="mt-4 text-sm text-background/80">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>{" "}
          / <span>{title}</span>
        </div>
      </div>
    </section>
  );
}
