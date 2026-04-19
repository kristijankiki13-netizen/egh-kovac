import { Snowflake } from "lucide-react";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <span
      className={`inline-flex items-center gap-2.5 transition-colors ${className}`}
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-lg shadow-soft ring-1 transition-all duration-300 md:h-10 md:w-10 ${
          isLight
            ? "bg-white text-navy-900 ring-white/40 group-hover:bg-ice-100"
            : "bg-navy-900 text-white ring-navy-900/10 group-hover:bg-navy-800"
        }`}
      >
        <Snowflake className="h-5 w-5" strokeWidth={2.4} />
      </span>
      <span
        className={`text-lg font-bold tracking-tight md:text-xl ${
          isLight ? "text-white" : "text-navy-900"
        }`}
      >
        EGH <span className={isLight ? "text-sky-300" : "text-sky-500"}>Kovač</span>
      </span>
    </span>
  );
}
