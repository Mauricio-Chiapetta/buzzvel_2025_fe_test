import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AllInOneApp } from "@/components/AllInOneApp";
import { Slider } from "@/components/Slider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AllInOneApp />
      <Slider />
    </>
  );
}
