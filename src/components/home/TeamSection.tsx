import Image from "next/image";
// import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teamMembers } from "@/lib/data/team";

export function TeamSection() {
  const list = teamMembers;
  return (
    <section className="section-pattern bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership"
          title="The People Behind Confidence Solution LTD."
          subtitle="Strategic vision and operational excellence guiding every project we deliver."
          align="center"
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {list.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-md"
            >
              <div className="relative">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={480}
                  height={420}
                  className="h-72 w-full object-cover object-top"
                />
                <div className="absolute inset-0 flex items-end bg-foreground/70 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="text-sm text-background">{member.bio}</p>
                </div>
              </div>
              <div className="space-y-2 p-4">
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm font-medium text-accent">{member.role}</p>
                {/* Social links — enable when profiles are ready
                <div className="flex gap-2">
                  <a href={member.social.linkedin} aria-label={`${member.name} LinkedIn`} className="grid h-8 w-8 place-items-center rounded-md border border-border">
                    <FaLinkedinIn className="h-4 w-4" />
                  </a>
                  <a href={member.social.twitter} aria-label={`${member.name} Twitter`} className="grid h-8 w-8 place-items-center rounded-md border border-border">
                    <FaXTwitter className="h-4 w-4" />
                  </a>
                </div>
                */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
