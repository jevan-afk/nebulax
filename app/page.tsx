import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ProcessSection } from "@/components/ProcessSection";
import { UpdatesList } from "@/components/UpdatesList";
import { InfoGrid } from "@/components/InfoGrid";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StorySection />
      <FeatureGrid />
      <ProcessSection />
      <InfoGrid />
      <UpdatesList />
      <CTASection />
    </>
  );
}
