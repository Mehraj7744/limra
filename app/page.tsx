import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import WhyLimra from "@/components/home/WhyLimra";
import Applications from "@/components/home/Applications";
import AboutPreview from "@/components/home/AboutPreview";
import CatalogueCTA from "@/components/home/CatalogueCTA";
import IndustryShowcase from "@/components/home/IndustryShowcase";

export default function Home() {
  return (
    <main>
      <Hero />

      <Categories />
      <IndustryShowcase />

      <WhyLimra />

      <Applications />

      <AboutPreview />

      <CatalogueCTA />
    </main>
  );
}