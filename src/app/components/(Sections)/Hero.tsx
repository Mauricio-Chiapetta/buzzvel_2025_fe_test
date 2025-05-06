"use client";
import vector from "@/app/assets/images/Vector-14.png";
import Image from "next/image";
import Link from "next/link";
import { CirclePlay } from "lucide-react";
import icon01 from "@/app/assets/icons/heroIcon01.png";
import icon02 from "@/app/assets/icons/heroIcon02.png";
import icon03 from "@/app/assets/icons/heroIcon03.png";
import icon04 from "@/app/assets/icons/heroIcon04.png";
import icon05 from "@/app/assets/icons/heroIcon05.png";
import teacherAndStudent from "@/app/assets/images/theacherAndStudent.png";
import { Button } from "../Button";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";

export function Hero() {
  useLayoutEffect(() => {
    gsap.to(".title", {
      x: 0,
      opacity: 1,
    });
    return () => {
      gsap.killTweensOf(".title");
    };
  }, []);

  return (
    <div className="sm:px-[80px] px-[16px]">
      <section className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center">
        <div className="w-full  h-auto lg:h-[704.53px] py-10 lg:py-20">
          <div className="h-auto lg:h-[524px] w-full lg:w-[575.39px] relative">
            <h1 className="text-grayBlue text-[40px] md:text-[36px] lg:text-[72px]/[110%] font-bold relative mb-6 lg:mb-8 title opacity-0 -translate-x-[100px]">
              <span className="relative inline-block">
                Teach
                <Image
                  src={vector}
                  alt="Vector"
                  className="absolute lg:bottom-0 bottom-2  left-0 translate-y-[30%] -z-10"
                />
              </span>{" "}
              students worldwide
            </h1>

            <p className="font-normal text-grayBlue text-[16px] md:text-[16px] lg:text-[24px]/[160%] mb-6 lg:mb-8 mr-8 lg:mr-0 title opacity-0 -translate-x-[100px]">
              Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin
              massa tincidunt viverra lectus pulvinar. Nunc ipsum est
              pellentesque turpis ultricies.
            </p>
            <div className="flex items-center gap-4 lg:gap-8 mb-6 lg:mb-8">
              <Button variant="orange">Sign Up Now</Button>
              <Link href={"#"}>
                <h3 className="text-blue flex gap-3 font-semibold text-[16px] lg:text-[20px] items-center cursor-pointer hover:text-blue/80 transition-all duration-300 ease-in-out">
                  <CirclePlay />
                  View Demo
                </h3>
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row items-center text-gray gap-6 lg:gap-12">
              <p className="text-[14px] lg:text-[16px] w-full lg:w-[135px] leading-[140%]">
                Trusted by <br className="hidden lg:inline-block" />
                leading companies
              </p>
              <div className="flex gap-6 lg:gap-12 flex-wrap lg:justify-center justify-start w-full lg:w-[400px]">
                <Image src={icon01} alt="icon01" />
                <Image src={icon02} alt="icon02" />
                <Image src={icon03} alt="icon03" />
                <Image src={icon04} alt="icon04" />
                <Image src={icon05} alt="icon05" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-full lg:w-[45%]">
          <Image
            src={teacherAndStudent}
            alt="Teacher and Student"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
}
