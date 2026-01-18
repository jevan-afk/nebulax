import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { UpdatesList } from "@/components/UpdatesList";
import { InfoGrid } from "@/components/InfoGrid";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <UpdatesList />
      <InfoGrid />
      <CTASection />
    </>
  );
}
