import { ArrowRight } from "lucide-react";
import { ComponentProps } from "react";



export function LinkButton({ children,...props }: ComponentProps<"button">) {
  return (
    <button
      {...props}
      className="text-blue flex gap-1 font-semibold text-[16px] lg:text-[20px] items-center cursor-pointer hover:text-blue/80 transition-all duration-300 ease-in-out hover:gap-3"
    >
      {children}
      <ArrowRight/>
    </button>
  );
}
