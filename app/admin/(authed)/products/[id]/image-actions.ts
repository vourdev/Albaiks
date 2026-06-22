"use server";

import { writeFile, unlink, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { randomBytes } from "node:crypto";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

const UPLOAD_DIR = join(process.cwd(), "public", "uploads", "products");
const PUBLIC_PREFIX = "/uploads/products/";

const ALLOWED_MIME: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/avif": "avif",
};
const MAX_SIZE = 5 * 1024 * 1024; // 5MB per file
const MAX_FILES_PER_UPLOAD = 10;

export type UploadResult = {
  ok: boolean;
  uploaded: number;
  error: string | null;
};

async function ensureDir() {
  await mkdir(UPLOAD_DIR, { recursive: true });
}

function revalidateProduct(slug: string) {
  revalidatePath("/", "layout");
  revalidatePath(`/produk/${slug}`);
  revalidatePath("/produk");
}

export async function uploadProductImagesAction(
  productId: string,
  prevState: UploadResult,
  formData: FormData,
): Promise<UploadResult> {
  const product = await prisma.product.findUnique({
    where: { id: productId },
    select: { id: true, slug: true, images: { select: { position: true } } },
  });
  if (!product) return { ok: false, uploaded: 0, error: "Produk tidak ditemukan." };

  const files = formData.getAll("images").filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length === 0)
    return { ok: false, uploaded: 0, error: "Tidak ada file yang dipilih." };
  if (files.length > MAX_FILES_PER_UPLOAD)
    return {
      ok: false,
      uploaded: 0,
      error: `Maksimal ${MAX_FILES_PER_UPLOAD} file per upload.`,
    };

  for (const file of files) {
    if (!ALLOWED_MIME[file.type]) {
      return {
        ok: false,
        uploaded: 0,
        error: `Format ${file.type || "tidak dikenal"} tidak didukung. Gunakan JPG, PNG, WEBP, GIF, atau AVIF.`,
      };
    }
    if (file.size > MAX_SIZE) {
      return {
        ok: false,
        uploaded: 0,
        error: `File "${file.name}" melebihi batas 5MB.`,
      };
    }
  }

  await ensureDir();

  const startPosition =
    product.images.length === 0
      ? 0
      : Math.max(...product.images.map((i) => i.position)) + 1;

  let uploaded = 0;
  try {
    for (const [i, file] of files.entries()) {
      const ext = ALLOWED_MIME[file.type];
      const name = `${randomBytes(12).toString("hex")}.${ext}`;
      const bytes = Buffer.from(await file.arrayBuffer());
      await writeFile(join(UPLOAD_DIR, name), bytes);
      await prisma.productImage.create({
        data: {
          productId,
          url: `${PUBLIC_PREFIX}${name}`,
          alt: "",
          position: startPosition + i,
        },
      });
      uploaded++;
    }
  } catch (err) {
    return {
      ok: false,
      uploaded,
      error: err instanceof Error ? err.message : "Gagal menyimpan file.",
    };
  }

  revalidateProduct(product.slug);
  return { ok: true, uploaded, error: null };
}

export async function deleteProductImageAction(imageId: string) {
  const image = await prisma.productImage.findUnique({
    where: { id: imageId },
    include: { product: { select: { slug: true } } },
  });
  if (!image) return;

  if (image.url.startsWith(PUBLIC_PREFIX)) {
    const filename = image.url.slice(PUBLIC_PREFIX.length);
    // protect against path traversal
    if (filename && !filename.includes("/") && !filename.includes("..")) {
      try {
        await unlink(join(UPLOAD_DIR, filename));
      } catch {
        // file may already be missing — that's fine, still clean up the DB row
      }
    }
  }

  await prisma.productImage.delete({ where: { id: imageId } });
  revalidateProduct(image.product.slug);
}

export async function moveProductImageAction(
  imageId: string,
  direction: "up" | "down",
) {
  const image = await prisma.productImage.findUnique({
    where: { id: imageId },
    include: { product: { select: { slug: true } } },
  });
  if (!image) return;

  const siblings = await prisma.productImage.findMany({
    where: { productId: image.productId },
    orderBy: { position: "asc" },
  });
  const idx = siblings.findIndex((s) => s.id === image.id);
  const swapIdx = direction === "up" ? idx - 1 : idx + 1;
  if (swapIdx < 0 || swapIdx >= siblings.length) return;

  const other = siblings[swapIdx];
  await prisma.$transaction([
    prisma.productImage.update({
      where: { id: image.id },
      data: { position: other.position },
    }),
    prisma.productImage.update({
      where: { id: other.id },
      data: { position: image.position },
    }),
  ]);

  revalidateProduct(image.product.slug);
}

export async function updateProductImageAltAction(
  imageId: string,
  formData: FormData,
) {
  const alt = String(formData.get("alt") ?? "").trim().slice(0, 200);
  const image = await prisma.productImage.update({
    where: { id: imageId },
    data: { alt },
    include: { product: { select: { slug: true } } },
  });
  revalidateProduct(image.product.slug);
}
