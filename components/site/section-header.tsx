import { Reveal } from "./reveal";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  className = "",
  centered = true,
}: SectionHeaderProps) {
  return (
    <Reveal className={`${centered ? "text-center" : ""} max-w-[640px] ${centered ? "mx-auto" : ""} mb-14 ${className}`}>
      {label && <span className="label block mb-4">{label}</span>}
      <h2 className="h2 text-balance mb-4">{title}</h2>
      {description && (
        <p className="body-text text-warmgray">{description}</p>
      )}
    </Reveal>
  );
}