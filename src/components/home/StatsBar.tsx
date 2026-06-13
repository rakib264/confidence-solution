import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function StatsBar() {
  return (
    <section className="bg-primary py-12 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <AnimatedCounter end={1400} suffix="+" label="Landmark Projects Delivered" />
        <AnimatedCounter end={30} suffix=" Years" label="Engineering Excellence" />
        <AnimatedCounter end={420} suffix="+" label="Regional Delivery Experts" />
        <AnimatedCounter end={99} suffix="%" label="Investor Confidence Score" />
      </div>
    </section>
  );
}
