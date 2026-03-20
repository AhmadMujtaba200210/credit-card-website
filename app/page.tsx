import { FeatureShowcase } from "@/components/home/feature-showcase";
import { IntroHero } from "@/components/home/intro-hero";
import { Testimonials } from "@/components/home/testimonials";

export default function IntroPage() {
  return (
    <>
      <IntroHero />
      <FeatureShowcase />
      <Testimonials />
    </>
  );
}
