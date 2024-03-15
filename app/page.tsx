import Banner from "@/components/banner";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Hotdeals from "@/components/hotdeals";
import Populer from "@/components/populer";
import PopulerProducts from "@/components/populerProducts";

export default function Home() {
  return (
    <section>
      <Hero />
      <Populer />
      <PopulerProducts />
      <Features />
      <Hotdeals />
      <Banner />
    </section>
  );
}
