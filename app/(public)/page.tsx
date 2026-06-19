import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { OrderSteps } from "@/components/home/OrderSteps";
import { About } from "@/components/home/About";
import { Testimonials } from "@/components/home/Testimonials";
import { BlogPreview } from "@/components/home/BlogPreview";
import { getPublishedProducts } from "@/lib/products";
import { getPublishedArticles } from "@/lib/articles";
import { getFeaturedTestimonials } from "@/lib/testimonials";
import { getSiteSettings } from "@/lib/settings";

export default async function HomePage() {
  const [products, articles, testimonials, settings] = await Promise.all([
    getPublishedProducts(),
    getPublishedArticles(),
    getFeaturedTestimonials(),
    getSiteSettings(),
  ]);

  return (
    <>
      <Hero waNumber={settings.whatsappCSNumber} tagline={settings.tagline} />
      <Features />
      <FeaturedProducts products={products} />
      <OrderSteps waNumber={settings.whatsappCSNumber} />
      <About />
      <Testimonials testimonials={testimonials} />
      <BlogPreview articles={articles} />
    </>
  );
}
