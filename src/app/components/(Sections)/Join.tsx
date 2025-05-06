"use client";
import { Button } from "../Button";
import Image from "next/image";
import roundImage from "@/app/assets/images/CardsRound.png";
import roundImage02 from "@/app/assets/images/CardsRound02.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
export function Join() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".joinTextReveal", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".joinItemsReveal",
        start: "top 350px",
        end: "bottom bottom",
      },
    });
    gsap.to(".joinParagraphReveal", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".joinItemsReveal",
        start: "top 350px",
        end: "bottom bottom",
      },
    });
    gsap.to(".buttonEffect", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".joinItemsReveal",
        start: "top 350px",
        end: "bottom bottom",
      },
    });
    gsap.to(".parallax-left", {
      y: -100, // sobe 100px conforme rola
      ease: "none",
      scrollTrigger: {
        trigger: ".joinItemsReveal",
        start: "top bottom",
        end: "bottom top",
        scrub: true, // faz o movimento seguir o scroll
      },
    });
    gsap.to(".parallax-right", {
      y: -100, // sobe 100px conforme rola
      ease: "none",
      scrollTrigger: {
        trigger: ".joinItemsReveal",
        start: "top bottom",
        end: "bottom top",
        scrub: true, // faz o movimento seguir o scroll
      },
    });
    return () => {
      gsap.killTweensOf(".joinTexReveal");
      gsap.killTweensOf(".joinParagraphReveal");
      gsap.killTweensOf(".buttonEffect");
    };
  }, []);

  return (
    <section className="bg-yellow flex justify-center lg:px-20 lg:py-64 relative lg:flex-row flex-col items-center">
      {/* left icons */}
      <div className="lg:absolute lg:left-0 lg:top-[20%] lg:z-0 parallax-left pointer-events-none">
        {/* its better use individual images for this part but to economize time i made it in this form */}
        <Image
          src={roundImage}
          alt="round icons left"
          className="lg:w-full lg:h-full h-[360px] object-cover pointer-events-none"
        />
      </div>

      <div className="lg:w-7xl w-[361px] flex flex-col items-center justify-center gap-8 joinItemsReveal">
        <h1 className="text-grayBlue font-bold leading-[110%] lg:text-[56px] text-2xl text-center joinTextReveal opacity-0 -translate-y-[100px]">
          Join a world of learning
        </h1>
        <p className="text-grayBlue lg:text-[20px] leading-[180%] text-center text-[16px] joinParagraphReveal opacity-0 -translate-y-[90px]">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
          <br />
          Risus elit et fringilla habitant ut facilisi.
        </p>
        <Button variant="orange" className="buttonEffect opacity-0">
          Sign Up Now
        </Button>
      </div>
      {/* right icons */}
      <div className="lg:absolute lg:right-0 lg:top-[20%] lg:z-1 parallax-right  pointer-events-none">
        <Image
          src={roundImage02}
          alt="round icons right"
          className="lg:w-full lg:h-full h-[360px] object-cover pointer-events-none mt-30 lg:mt-0"
        />
      </div>
    </section>
  );
}
