import { Button } from "../Button";
import Image from "next/image";
import roundImage from "@/app/assets/images/CardsRound.png";
import roundImage02 from "@/app/assets/images/CardsRound02.png";

export function Join() {
  return (
    <section className="bg-yellow flex justify-center lg:px-20 lg:py-64 relative lg:flex-row flex-col items-center">
      {/* left icons */}
      <div className="lg:absolute lg:left-0 lg:top-[10%] lg:z-0 ">
        {/* its better use individual images for this part but to economize time i made it in this form */}
        <Image
          src={roundImage}
          alt="round icons left"
          className="lg:w-full lg:h-full h-[360px] object-cover pointer-events-none"
        />
      </div>

      <div className="lg:w-7xl w-[361px] flex flex-col items-center justify-center gap-8">
        <h1 className="text-grayBlue font-bold leading-[110%] lg:text-[56px] text-2xl text-center">
          Join a world of learning
        </h1>
        <p className="text-grayBlue lg:text-[20px] leading-[180%] text-center text-[16px]">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
          <br />
          Risus elit et fringilla habitant ut facilisi.
        </p>
        <Button variant="orange">Sign Up Now</Button>
      </div>
      {/* right icons */}
      <div className="lg:absolute lg:right-0 lg:top-[10%] lg:z-1">
        <Image
          src={roundImage02}
          alt="round icons right"
          className="lg:w-full lg:h-full h-[360px] object-cover pointer-events-none"
        />
      </div>
    </section>
  );
}
