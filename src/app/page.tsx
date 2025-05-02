import { Navbar } from "../components/(Sections)/Navbar";
import { Hero } from "../components/(Sections)/Hero";
import { AllInOneApp } from "@/components/(Sections)/AllInOneApp";
import { Slider } from "@/components/(Sections)/Carousel";
import { MeetStudents } from "@/components/(Sections)/MeetStudents";
import { StatisticsSection } from "@/components/(Sections)/StatisticsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AllInOneApp />
      <Slider />
      <MeetStudents/>
      <StatisticsSection/>
    </>
  );
}
