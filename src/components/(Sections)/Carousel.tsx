"use client";
// import Image from "next/image";
// import Picture from "@/assets/images/CompletePicture.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SliderContainer } from "../CarouselContainer";
export function Slider() {
  return (
    <div className="bg-yellow sm:px-[80px] px-[16px] lg:py-0 py-12 relative">
      <div className="absolute left-5 top-1/2 z-10 -translate-y-1/2 cursor-pointer swiper-button-prev-custom hidden lg:block">
        <ChevronLeft size={48} className="text-white hover:text-grayBlue" />
      </div>
      <div className="absolute right-5 top-1/2 z-10 -translate-y-1/2 cursor-pointer swiper-button-next-custom hidden lg:block">
        <ChevronRight size={48} className="text-white hover:text-grayBlue" />
      </div>
      <section className="flex items-center justify-center lg:h-[500px]  max-h-[684px]">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          loop={true}
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
              company="Microsoft"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}
