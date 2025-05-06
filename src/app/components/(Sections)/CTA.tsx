"use client";
import { useLayoutEffect } from "react";
import { Form } from "../Form";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function CTA() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".CTATextReveal", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".CTAItemsReveal",
        start: "top 350px",
        end: "bottom bottom",
      },
    });
    gsap.to(".CTAParagraphReveal", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".CTAItemsReveal",
        start: "top 350px",
        end: "bottom bottom",
      },
    });
    return () => {
      gsap.killTweensOf(".CTATexReveal");
      gsap.killTweensOf(".CTAParagraphReveal");
    };
  }, []);
  return (
    <div className="bg-orange lg:px-20 lg:py-[87px] px-4 py-12 flex justify-center">
      <div className="lg:w-7xl lg:h-[507px] flex flex-col items-center gap-8 w-[361px] CTAItemsReveal">
        <h1 className="text-white font-bold lg:text-[56px] text-[32px] text-center CTATextReveal opacity-0 -translate-y-[100px]">
          Ready for your next project?
        </h1>
        <p className="text-white lg:text-[32px] tracking-wide font-light text-lg text-center CTAParagraphReveal opacity-0 -translate-y-[90px]">
          Sit elit feugiat turpis sed integer integer accumsan turpis.
        </p>
        <Form />
      </div>
    </div>
  );
}
