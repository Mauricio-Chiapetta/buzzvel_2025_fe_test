"use client";
import { Navbar } from "./components/(Sections)/Navbar";
import { Hero } from "./components/(Sections)/Hero";
import { AllInOneApp } from "@/app/components/(Sections)/AllInOneApp";
import { Slider } from "@/app/components/(Sections)/Carousel";
import { MeetStudents } from "@/app/components/(Sections)/MeetStudents";
import { StatisticsSection } from "@/app/components/(Sections)/StatisticsSection";
import { Depoiments } from "./components/(Sections)/Depoiments";
import { Features } from "./components/(Sections)/Features";
import { Join } from "./components/(Sections)/Join";
import { CTA } from "./components/(Sections)/CTA";
import { Footer } from "./components/(Sections)/Footer";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollSmoother);
export default function Home() {
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Navbar />
        <Hero />
        <AllInOneApp />
        <Slider />
        <MeetStudents />
        <StatisticsSection />
        <Depoiments />
        <Features />
        <Join />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
