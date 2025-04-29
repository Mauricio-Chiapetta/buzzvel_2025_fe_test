import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AllInOneApp } from "@/components/AllInOneApp";
import { CardComponent } from "@/components/CardComponent";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero/>
    <AllInOneApp/>
    </>
  );
}
