import Banner from "@/components/banner";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Populer from "@/components/populer";
import PopulerProducts from "@/components/populerProducts";

export default function Home() {
  return (
    <section>
      <Hero />
      <Populer />
      <PopulerProducts />
      <Features />
      <Banner />
    </section>
  );
}
