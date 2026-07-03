import type { StaticImageData } from "next/image";
import type { ProjectImage } from "@/lib/types";

export function projectImageSrc(image: ProjectImage): string {
  return typeof image === "string" ? image : image.src;
}

export function projectImageKey(image: ProjectImage, index: number): string {
  return typeof image === "string" ? image : `${image.src}-${index}`;
}

export function allProjectImages(project: {
  thumbnail: ProjectImage;
  gallery: ProjectImage[];
}): ProjectImage[] {
  return [project.thumbnail, ...project.gallery];
}

export function isStaticImage(image: ProjectImage): image is StaticImageData {
  return typeof image !== "string";
}
