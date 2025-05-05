import vector from "@/app/assets/images/Vector-14.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import picture01 from "@/app/assets/images/Picture01.png";
import picture02 from "@/app/assets/images/Picture02.png";
import picture03 from "@/app/assets/images/Picture03.png";
import blobImage from "@/app/assets/images/Blob.png";
import icons from "@/app/assets/icons/Icons.png";
import { CardComponent } from "../CardComponent";

export function Features() {
  return (
    <div className="lg:p-20 lg:gap-20 gap-16 flex max-h-[639px] px-4 py-12 justify-center lg:flex-row flex-col">
      <div className="flex flex-col lg:w-[600px] lg:gap-8 gap-6">
        <h1 className="lg:text-[56px] text-2xl text-grayBlue font-bold leading-[110%]">
          All the cool{" "}
          <span className="relative inline-block">
            features
            <Image
              src={vector}
              alt="vector"
              className="absolute bottom-0 -z-10 translate-y-[40%]"
            />
          </span>
        </h1>

        <p className="lg:text-[20px] lg:leading-[180%] text-grayBlue leading-[140%] text-[16px]">
          Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac.
          In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
          quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non
          viverra a, neque orci.
        </p>

        <Link href={"#"}>
          <h3 className="text-blue flex gap-8 font-semibold text-[16px] lg:text-[20px] items-center cursor-pointer hover:text-blue/80 transition-all duration-300 ease-in-out">
            Explore teachers and students
            <ArrowRight />
          </h3>
        </Link>
      </div>

      <div className="lg:w-[600px] w-[361px] lg:h-[479px] lg:mt-0 mt-16">
        <div className="relative w-full">
          <div className="absolute z-30 -bottom-40 lg:left-10 left-13 w-[70%] lg:w-[60%]">
            <CardComponent
              badge="Popular"
              subtitle="Aliquam ut euismod condimentum elementum ultricies volutpat sit non. "
              title="Design for how people think"
            />
          </div>
          <Image
            src={blobImage}
            alt="blob Image"
            className="lg:w-[534px] lg:h-[522px] w-[455px] h-[455px] absolute -z-20 -bottom-110 -rotate-12 blur-3xl"
          />
          <Image
            src={icons}
            alt="icons"
            className="absolute -z-10 lg:transalte-y-[50%] translate-y-[3%] -bottom-110 max-w-[256px] max-h-[553px] lg:left-80 -rotate-180"
          />
          <Image
            src={picture01}
            alt="picture one"
            className="lg:absolute left-70 z-40 hidden lg:block"
          />
          <Image
            src={picture02}
            alt="picture two"
            className="absolute -bottom-100 -z-10"
          />
          <Image
            src={picture03}
            alt="picture three"
            className="lg:absolute -bottom-100 left-80 -z-10 hidden lg:block "
          />
        </div>
      </div>
    </div>
  );
}
