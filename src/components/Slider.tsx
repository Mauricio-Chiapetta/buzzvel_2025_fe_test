"use client";
// import Image from "next/image";
// import Picture from "@/assets/images/CompletePicture.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SliderContainer } from "./SliderContainer";
// REPONSIVE DESIGN !!
export function Slider() {
  return (
    <div className="bg-yellow px-20 relative w-full ">
      <div className="absolute left-5 top-1/2 z-10 -translate-y-1/2 cursor-pointer swiper-button-prev-custom ">
        <ChevronLeft size={48} className="text-white hover:text-grayBlue" />
      </div>
      <div className="absolute right-5 top-1/2 z-10 -translate-y-1/2 cursor-pointer swiper-button-next-custom">
        <ChevronRight size={48} className="text-white hover:text-grayBlue" />
      </div>
      <section className=" flex items-center justify-center max-w-[1440px] h-[500px]">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          className="w-full max-w-[1280px]"
        >
          <SwiperSlide>
            <SliderContainer
              paragraph="Id urna, nisl, ut quam. Diam suspendisse fringilla quam
                      arcu mattis est velit in. Nibh in purus sit convallis
                      phasellus ut. At vel erat ultricies commodo. Neque
                      suspendisse a habitasse commodo."
              name="Marie Poirot,"
              company="Buzzvel"
            />
          </SwiperSlide>

          <SwiperSlide>
            {/* example of other slide, can use a .map() to load data and create a component for this div */}
            <SliderContainer
              paragraph="Id urna, nisl, ut quam. Diam suspendisse fringilla quam
                      arcu mattis est velit in. Nibh in purus sit convallis
                      phasellus ut. At vel erat ultricies commodo. Neque
                      suspendisse a habitasse commodo."
              name="Marie Poirot,"
              company="Bigapp"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SliderContainer
              paragraph="Id urna, nisl, ut quam. Diam suspendisse fringilla quam
                      arcu mattis est velit in. Nibh in purus sit convallis
                      phasellus ut. At vel erat ultricies commodo. Neque
                      suspendisse a habitasse commodo."
              name="Marie Poirot,"
              company="Bigapp"
            />
          </SwiperSlide>
        </Swiper>
      </section>

    </div>
  );
}
