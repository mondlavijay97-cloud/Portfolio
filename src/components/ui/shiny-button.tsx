import type React from "react";
import { cn } from "@/lib/utils";

interface ShinyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  asChild?: boolean;
}

export function ShinyButton({ children, onClick, className = "" }: ShinyButtonProps) {
  return (
    <button className={cn("shiny-cta", className)} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}

export function ShinyButtonLink({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a href={href} className={cn("shiny-cta", className)}>
      <span>{children}</span>
    </a>
  );
}
