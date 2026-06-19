import { prisma } from "./prisma";
import { cache } from "react";

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  product: string;
  rating: number;
  quote: string;
  initial: string;
};

export const getFeaturedTestimonials = cache(async (): Promise<Testimonial[]> => {
  const rows = await prisma.testimonial.findMany({
    where: { featured: true },
    orderBy: [{ position: "asc" }, { createdAt: "asc" }],
    take: 6,
  });
  return rows;
});
