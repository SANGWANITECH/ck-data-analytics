import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type PageHeroProps = {
  label: string;
  title: string;
  description?: string;
  variant?: "navy" | "paper";
};

export function PageHero({
  label,
  title,
  description,
  variant = "paper",
}: PageHeroProps) {
  const navy = variant === "navy";
  return (
    <section
      className={cn(
        "section-pad",
        navy ? "bg-navy text-white" : "bg-paper text-navy"
      )}
    >
      <div className="container-page">
        <Reveal className="flex max-w-[720px] flex-col gap-5">
          <span className={navy ? "label-light" : "label"}>{label}</span>
          <h1
            className={cn(
              "h1 text-balance",
              navy && "text-white"
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "body-text max-w-[560px]",
                navy ? "text-white/70" : "text-warmgray"
              )}
            >
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}