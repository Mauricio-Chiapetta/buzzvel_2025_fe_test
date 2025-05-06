"use client";
import Image from "next/image";
import MeetStudentsPicture from "@/app/assets/images/internationalStudentsCollum.png";
import { PlaneTakeoff } from "lucide-react";
import { LinkButton } from "../Link-Button";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MeetStudents() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".meetTextReveal", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".meetItemsReveal",
        start: "top 350px",
        end: "bottom bottom",
      },
    });
    return () => {
      gsap.killTweensOf(".meetTextReveal");
    };
  }, []);

  return (
    <div className="sm:px-[80px] lg:px-[16px] px-4 py-12">
      <section className="flex gap-20 items-center">
        <div className=" w-full lg:h-[811px] h-auto flex items-center justify-center">
          <div className="flex gap-10 lg:flex-row flex-col-reverse">
            {/* its better to use grid layout and use the pictures */}
            <Image
              src={MeetStudentsPicture}
              alt="Students collum"
              width={600}
              className="mx-auto lg:mx-0"
            />

            <div className="lg:w-[600px] lg:h-[388px] w-auto h-auto flex flex-col gap-8">
              <div className="relative w-full h-auto meetItemsReveal">
                <h1 className="text-grayBlue text-[24px] md:text-[36px] lg:text-[56px]/[110%] font-bold meetTextReveal opacity-0 translate-x-[40px]">
                  Meet international students & teachers
                  <PlaneTakeoff className="text-yellow absolute lg:top-[-40px] lg:right-31 top-[-12%] right-40 w-[24px] h-[24px] lg:w-[64px] lg:h-[64px]" />
                </h1>
              </div>

              <p className="font-normal text-grayBlue text-[16px] md:text-[16px] lg:text-[20px]/[160%] flex items-center meetTextReveal opacity-0 translate-x-[20px]">
                Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
                senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
                facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
                urna, faucibus aenean lorem faucibus integer.
              </p>

              <LinkButton>Explore teachers and students</LinkButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
