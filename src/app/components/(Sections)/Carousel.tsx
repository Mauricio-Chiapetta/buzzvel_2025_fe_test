"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CarouselContainer } from "../CarouselContainer";
import { gsap } from "gsap";
export function Slider() {
  const handleSlideChange = () => {
    const images = document.querySelectorAll(".carousel-image");
    gsap.fromTo(
      images,
      { rotate: 180, opacity: 0,  },
      { rotate: 0, opacity: 1, duration: 0.9, ease: "elastic.out",  }
    );
  };
  return (
    <div className="bg-yellow sm:px-[80px] px-[16px] lg:py-0 py-12 relative">
      <div className="absolute left-5 top-1/2 z-10 -translate-y-1/2 cursor-pointer swiper-button-prev-custom hidden lg:block">
        <ChevronLeft size={48} className="text-white hover:text-grayBlue" />
      </div>
      <div className="absolute right-5 top-1/2 z-10 -translate-y-1/2 cursor-pointer swiper-button-next-custom hidden lg:block">
        <ChevronRight size={48} className="text-white hover:text-grayBlue" />
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        onSlideChange={handleSlideChange}
        spaceBetween={200}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
          bulletClass: "swiper-pagination-bullet-custom",
          bulletActiveClass: "swiper-pagination-bullet-custom-active",
        }}
        className="w-full"
      >
        {/* custom pagination bullet */}
        <span className="swiper-pagination-custom flex gap-1 justify-center lg:mt-0 mt-4" />
        <section className="flex items-center justify-center lg:h-[500px] max-h-[684px]">
          <SwiperSlide>
            <CarouselContainer
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
            <CarouselContainer
              paragraph="Id urna, nisl, ut quam. Diam suspendisse fringilla quam
                      arcu mattis est velit in. Nibh in purus sit convallis
                      phasellus ut. At vel erat ultricies commodo. Neque
                      suspendisse a habitasse commodo."
              name="Marie Poirot,"
              company="Bigapp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselContainer
              paragraph="Id urna, nisl, ut quam. Diam suspendisse fringilla quam
                      arcu mattis est velit in. Nibh in purus sit convallis
                      phasellus ut. At vel erat ultricies commodo. Neque
                      suspendisse a habitasse commodo."
              name="Marie Poirot,"
              company="Microsoft"
            />
          </SwiperSlide>

          <SwiperSlide>
            <CarouselContainer
              paragraph="Id urna, nisl, ut quam. Diam suspendisse fringilla quam
                      arcu mattis est velit in. Nibh in purus sit convallis
                      phasellus ut. At vel erat ultricies commodo. Neque
                      suspendisse a habitasse commodo."
              name="Marie Poirot,"
              company="Microsoft"
            />
          </SwiperSlide>

          <SwiperSlide>
            <CarouselContainer
              paragraph="Id urna, nisl, ut quam. Diam suspendisse fringilla quam
                      arcu mattis est velit in. Nibh in purus sit convallis
                      phasellus ut. At vel erat ultricies commodo. Neque
                      suspendisse a habitasse commodo."
              name="Marie Poirot,"
              company="Microsoft"
            />
          </SwiperSlide>
        </section>
      </Swiper>
      <div className="flex justify-center mt-8">
        <div className="swiper-pagination-custom flex gap-1" />
      </div>
    </div>
  );
}
