import Image from "next/image";
import Picture from "@/assets/images/CompletePicture.png";

interface SliderContainerProps {
  paragraph: string;
  name: string;
  company: string;
//   imageUrl: string;
}
export function SliderContainer(props: SliderContainerProps) {
  return (
    <div className="flex items-center max-w-[1280px] h-[575px] gap-6  ">
      <div className="flex items-center max-w-[1280px] h-[575px] gap-6">
        <div className="w-[528px] h-[325px]">
          <div className="text-grayBlue text-2xl">
            <p className="leading-[160%] mb-4">{props.paragraph}</p>
            <div className="flex flex-col">
              <p>{props.name}</p>
              <p className="font-bold">{props.company}</p>
            </div>
            <div className="custom-pagination mt-4 flex justify-start" />
          </div>
        </div>
        <div>
          <Image width={528} src={Picture} alt="Picture" />
        </div>
      </div>
    </div>
  );
}
