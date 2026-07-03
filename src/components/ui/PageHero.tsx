import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  title: string;
  subtitle: string;
  image: string;
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/65 to-black/35" />
      </div>
      <div className="relative mx-auto flex min-h-[48vh] max-w-7xl flex-col justify-end px-4 py-16 pt-28 sm:px-6 lg:px-8">
        <p className="label-caps-on-dark">Building Tomorrow&apos;s Skyline</p>
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
