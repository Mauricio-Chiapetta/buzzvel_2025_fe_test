import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "orange" | "blue";
}

export function Button({
  variant = "orange",
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    orange: "bg-orange hover:bg-orange/80",
    blue: "bg-grayBlue hover:bg-grayBlue/90",
  };
  return (
    <button
      {...props}
      className={cn(
        "font-semibold rounded-lg transition-all duration-300 ease-in-out w-[153px] lg:w-[239px] h-[64px] flex items-center justify-center text-lg lg:text-2xl  text-white cursor-pointer",
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
