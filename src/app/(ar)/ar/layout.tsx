import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/metadata";
import { RootDocument } from "@/lib/RootDocument";

export { viewport } from "@/lib/metadata";
export const metadata = buildMetadata("ar");

export default function ArabicLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="ar">{children}</RootDocument>;
}
