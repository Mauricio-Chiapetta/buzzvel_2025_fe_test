"use client";
import { Check} from "lucide-react";
import Image from "next/image";
import vector from "@/app/assets/images/Vector-14.png";
import icons from "@/app/assets/icons/Icons.png";
import blobImage from "@/app/assets/images/Blob.png";
import desktopImage from "@/app/assets/images/Desktop.png";
import { CardComponent } from "../CardComponent";
import { LinkButton } from "../Link-Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

export function AllInOneApp() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".textReveal", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".itemsReveal",
        start: "top 350px",
        end: "bottom bottom",
      },
    });
    gsap.to(".desktopImage", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".itemsReveal",
        start: "top 350px",
        end: "bottom bottom",
      },
    });
    gsap.to(".cards", {
      y: 0,
      opacity: 1,
      ease:"bounce",
      scrollTrigger: {
        trigger: ".itemsReveal",
        start: "top 350px",
        end: "bottom bottom",
        
      },
    });
    return () => {
      gsap.killTweensOf(".textReveal");
      gsap.killTweensOf(".desktopImage");
      gsap.killTweensOf(".cards");
    };
  }, []);

  return (
    <div className="sm:px-[80px] px-[16px]">
      <section className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-between">
        <div className="w-full lg:w-[1440px] h-auto lg:h-[704.53px] py-10 lg:py-20 ">
          <div className="h-auto lg:h-[524px] w-full lg:w-[533px] relative itemsReveal">
            <h1 className="text-grayBlue text-[24px] md:text-[36px] lg:text-[56px]/[110%] font-bold relative mb-6 lg:mb-8 opacity-0 -translate-x-[100px] textReveal">
              <span className="relative inline-block">
                An{" "}
                <span>
                  all-in-one app
                  <Image
                    src={vector}
                    alt="Vector"
                    className="absolute bottom-0 lg:left-22 lg:translate-y-[45%] -z-10 translate-y-[10%] left-10 lg:w-[260px] w-[100px]"
                    width={260}
                  />
                </span>
              </span>{" "}
              that makes it easier
            </h1>

            <div className="flex flex-col gap-2">
              <p className="font-normal text-grayBlue text-[16px] md:text-[16px] lg:text-[20px]/[160%] flex items-center gap-2 textReveal opacity-0 lg:-translate-x-[100px] -translate-x-[10px]">
                <Check size={24} />
                Est et in pharetra magna adipiscing ornare aliquam.
              </p>

              <p className="font-normal text-grayBlue text-[16px] md:text-[16px] lg:text-[20px]/[160%] flex items-center gap-2 textReveal opacity-0 lg:-translate-x-[120px] -translate-x-[10px]">
                <Check size={24} />
                Tellus arcu sed consequat ac velit ut eu blandit.
              </p>

              <p className="font-normal text-grayBlue text-[16px] md:text-[16px] lg:text-[20px]/[160%]  lg:mb-8 mr-8 lg:mr-0 flex items-center gap-2 mb-10 textReveal opacity-0 lg:-translate-x-[130px] -translate-x-[10px]">
                <Check size={24} />
                Ullamcorper ornare in et egestas dolor orci.
              </p>
            </div>

            <LinkButton>Find more about the app</LinkButton>
          </div>
        </div>

        <div className="relative w-full">
          <Image
            src={blobImage}
            alt="Blob background"
            className="absolute lg:max-w-[506px] lg:h-[448px] -z-10 lg:right-40 right-20 bottom-120 lg:-bottom-35 blur-3xl"
          />
          <Image
            src={icons}
            alt="Icons"
            className="absolute max-w-[506px] h-[448px] z-10 right-129 -bottom-30"
          />

          <Image
            src={desktopImage}
            alt="App preview"
            className="lg:z-10 z-0 -bottom-1 block lg:absolute lg:translate-x-[80px] opacity-0 desktopImage"
          />
          <Image
            src={icons}
            alt="Icons"
            className="absolute  max-w-[506px] h-[448px] z-10 right-129 -bottom-30"
          />

          <div className="flex flex-col gap-4 sm:flex-row justify-center items-center lg:absolute bottom-10 top-10 right-0 lg:z-10 z-0 mb-8 cards -translate-y-100 opacity-0">
            <CardComponent
              title="The map of mathematics"
              subtitle="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
              badge="Featured"
            />
            <CardComponent
              title="Design for how people think"
              subtitle="Aliquam ut euismod condimentum elementum ultricies volutpat sit non. "
              badge="Popular"
            />
            <CardComponent
              title="International & commercial law"
              subtitle="Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui. "
              badge="New"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
