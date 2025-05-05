import { ArrowRight } from "lucide-react";
import { ComponentProps } from "react";

interface LinkButton extends ComponentProps<"button"> {}

export function LinkButton({ children,...props }: LinkButton) {
  return (
    <button
      {...props}
      className="text-blue flex gap-3 font-semibold text-[16px] lg:text-[20px] items-center cursor-pointer hover:text-blue/80 transition-all duration-300 ease-in-out"
    >
      {children}
      <ArrowRight />
    </button>
  );
}
