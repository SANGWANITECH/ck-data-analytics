import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-8 w-8 shrink-0", className)}
      aria-hidden="true"
    >
      {/* Outer diamond - navy background */}
      <rect x="4" y="4" width="32" height="32" rx="6" fill="#0f172a" />
      {/* Middle diamond - emerald */}
      <path d="M20 8 L32 20 L20 32 L8 20 Z" fill="#059669" />
      {/* Inner diamond - white paper */}
      <path d="M20 13 L27 20 L20 27 L13 20 Z" fill="#fafaf9" />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function Logo({ className, variant = "dark" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[15px] font-bold tracking-tight",
            isLight ? "text-white" : "text-navy"
          )}
        >
          CK DATA
        </span>
        <span
          className={cn(
            "text-[11px] font-semibold tracking-[0.08em]",
            isLight ? "text-white/50" : "text-warmgray"
          )}
        >
          & ANALYTICS
        </span>
      </span>
    </span>
  );
}