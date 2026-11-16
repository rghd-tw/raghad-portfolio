import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/metadata";
import { RootDocument } from "@/lib/RootDocument";

export { viewport } from "@/lib/metadata";
export const metadata = buildMetadata("en");

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
