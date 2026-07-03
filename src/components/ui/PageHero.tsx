import Image from "next/image";
import Link from "next/link";
import type { ProjectImage } from "@/lib/types";

type PageHeroProps = {
  title: string;
  subtitle: string;
  image: ProjectImage;
};

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/62 to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(255,255,255,0.13),transparent_38%)]" />
      </div>
      <div className="relative mx-auto flex min-h-[52vh] max-w-7xl flex-col justify-end px-4 py-14 pt-32 sm:px-6 sm:py-16 sm:pt-36 lg:px-8">
        <p className="label-caps-on-dark">Building Tomorrow&apos;s Skyline</p>
        <div className="mt-3 h-px w-24 bg-white/35" />
        <h1 className="font-display mt-4 max-w-4xl text-[clamp(2.5rem,7vw,4.5rem)] font-medium leading-[1.02] text-white">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
          {subtitle}
        </p>
        <div className="mt-5 text-sm text-white/60">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>{" "}
          / <span className="text-white/80">{title}</span>
        </div>
      </div>
    </section>
  );
}
