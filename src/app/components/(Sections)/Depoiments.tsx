"use client";
import { useRef } from "react";
import { CircleArrowRight, CircleArrowLeft } from "lucide-react";
import { DepoimentCard } from "../DepoimentCard";
import { depoimentData } from "../data";

export function Depoiments() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 420; // Tamanho de um card + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="lg:px-20 lg:py-20 py-12 px-4 lg:max-h-[614px] flex flex-col lg:gap-20">
      <div className="flex gap-12 items-center">
        <h1 className="text-grayBlue lg:text-[56px] text-2xl font-bold w-[1112px]">
          What everyone says
        </h1>
        <div className="lg:flex gap-6 hidden">
          <CircleArrowLeft
            size={48}
            className="text-orange cursor-pointer hover:text-orange/90 duration-300 transition-all"
            onClick={() => scroll("left")}
          />
          <CircleArrowRight
            size={48}
            className="text-orange cursor-pointer hover:text-orange/90 durantion-300 transition-all"
            onClick={() => scroll("right")}
          />
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-6 lg:overflow-x-hidden overflow-x-auto px-4 py-12 lg:px-0 lg:py-3">
        {depoimentData.map((item) => (
          <DepoimentCard
            id={item.id}
            key={item.id}
            Role={item.Role}
            title={item.title}
            name={item.name}
            avatar={item.Avatar}
          />
        ))}
      </div>
    </section>
  );
}
