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
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AllInOneApp />
      <Slider />
      <MeetStudents/>
      <StatisticsSection/>
      <Depoiments/>
      <Features/>
      <Join/>
      <CTA/>
    </>
  );
}
