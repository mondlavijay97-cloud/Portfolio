import React from "react";
import { cn } from "@/lib/utils";
import "./ShinyButton.css";

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "lg" | "xl";
  asChild?: boolean;
  children: React.ReactNode;
}

const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
    const sizeClasses = {
      default: "h-10 px-5 text-sm",
      lg: "h-12 px-8 text-base",
      xl: "h-14 px-10 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "shiny-cta font-heading font-semibold",
          variant === "secondary" && "shiny-cta--secondary",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <span className="shiny-cta__content">{children}</span>
      </button>
    );
  }
);

ShinyButton.displayName = "ShinyButton";

export default ShinyButton;
