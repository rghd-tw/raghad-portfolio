import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Raghad Altuwayjiri — Software Developer, Full-Stack Development & AI Integration";
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage();
}
