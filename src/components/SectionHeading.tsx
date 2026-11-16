import { Reveal } from "./Reveal";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({ id, eyebrow, title, tone = "light", className = "" }: Props) {
  const dark = tone === "dark";
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      <p className={`eyebrow ${dark ? "text-teal" : "text-teal-700"}`}>{eyebrow}</p>
      <h2
        id={`${id}-title`}
        className={`mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </Reveal>
  );
}
