import Image from "next/image";
import Picture from "@/app/assets/images/CompletePicture.png";
interface SliderContainerProps {
  paragraph: string;
  name: string;
  company: string;
}
export function CarouselContainer (props: SliderContainerProps) {
  return (
    <div className="flex items-center w-full h-full flex-col lg:flex-row justify-between cursor-grab">
      <div className="lg:w-[528px] lg:max-h-[325px] w-[361px] max-h-[262px] ">
        <div className="text-grayBlue lg:text-2xl text-lg">
          <p className="leading-[160%] mb-4">{props.paragraph}</p>
          <div className="flex flex-col">
            <p>{props.name}</p>
            <p className="font-bold">{props.company}</p>
          </div>
        
        </div>
      </div>
      <div className="lg:w-[528px] w-[361px]">
        <Image width={528} src={Picture} alt="Picture" className="carousel-image"/>
      </div>
    </div>
  );
}
