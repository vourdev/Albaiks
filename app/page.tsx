import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { OrderSteps } from "@/components/home/OrderSteps";
import { About } from "@/components/home/About";
import { Testimonials } from "@/components/home/Testimonials";
import { BlogPreview } from "@/components/home/BlogPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedProducts />
      <OrderSteps />
      <About />
      <Testimonials />
      <BlogPreview />
    </>
  );
}
