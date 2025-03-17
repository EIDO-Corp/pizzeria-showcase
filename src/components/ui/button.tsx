import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isDecorative?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "primary", size = "md", isDecorative = false, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600": variant === "primary",
            "bg-amber-500 text-white hover:bg-amber-600 focus-visible:ring-amber-500": variant === "secondary",
            "border border-gray-300 bg-transparent hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 focus-visible:ring-gray-400": variant === "outline",
            "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:ring-gray-400": variant === "ghost",
          },
          {
            "h-9 px-3 rounded-md text-sm": size === "sm",
            "h-10 px-4 py-2 rounded-md": size === "md",
            "h-11 px-6 rounded-md text-base": size === "lg",
          },
          isDecorative ? "cursor-not-allowed" : "",
          className
        )}
        ref={ref}
        title={isDecorative ? "Non disponible dans l'aperçu" : props.title}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button }; 