import vector from "@/app/assets/images/Vector-14.png";
import Image from "next/image";
import picture01 from "@/app/assets/images/Picture01.png";
import picture02 from "@/app/assets/images/Picture02.png";
import picture03 from "@/app/assets/images/Picture03.png";
import picture04 from "@/app/assets/images/Picture04.png";
import blobImage from "@/app/assets/images/Blob.png";
import icons from "@/app/assets/icons/Icons.png";
import { CardComponent } from "../CardComponent";
import { LinkButton } from "../Link-Button";

export function Features() {
  return (
    <section className="lg:p-20 gap-20 flex h-[639px] px-4 justify-center lg:flex-row flex-col">
      <div className="flex flex-col lg:w-[600px] lg:gap-8 gap-6 w-[361px]">
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

        <LinkButton>View all the features</LinkButton>
      </div>

      <div className="lg:w-[534px] w-[361px] lg:h-[522px] h-[421px]">
        <div className="relative w-full">
          <div className="absolute z-30 lg:-bottom-40 lg:left-10 left-13 w-[70%] lg:w-[60%] -bottom-45">
            <CardComponent
              badge="Popular"
              subtitle="Aliquam ut euismod condimentum elementum ultricies volutpat sit non. "
              title="Design for how people think"
            />
          </div>
          <Image
            src={blobImage}
            alt="blob Image"
            className="lg:w-[534px] lg:h-[522px] w-[80%] h-[80%px] absolute -z-20 lg:-bottom-110 -rotate-12 lg:blur-3xl blur-md"
          />
          <Image
            src={icons}
            alt="icons"
            className="absolute -z-10 lg:transalte-y-[50%] translate-y-[3%] lg:-bottom-110 lg:max-w-[256px] lg:max-h-[553px] lg:left-80 -rotate-180 "
          />
          <Image
            src={picture01}
            alt="picture one"
            className="lg:absolute left-70 z-40 hidden lg:block"
          />
          <Image
            src={picture04}
            alt="picture one"
            className="lg:absolute left-110 z-40 hidden lg:block -bottom-50"
          />
          <Image
            src={picture02}
            alt="picture two"
            className="absolute -bottom-100 -z-10 p-10 lg:p-0"
          />
          <Image
            src={picture03}
            alt="picture three"
            className="lg:absolute -bottom-100 left-80 -z-10 hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}
