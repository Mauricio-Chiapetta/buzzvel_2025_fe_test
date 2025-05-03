import Image, { StaticImageData } from "next/image";
interface DepoimentCardProps {
  key: string;
  id: string;
  title: string;
  avatar: StaticImageData;
  name: string;
  Role: string;
}
export function DepoimentCard(props: DepoimentCardProps) {
  return (
    <div className="drop-shadow-lg rounded-3xl bg-white lg:w-[412px] w-[309px] lg:p-8 p-4">
      <div key={props.id} className="flex flex-col gap-4">
        <p className="text-lg leading-[160%] lg:w-[348px] lg:h-[145px] w-[277px] h-auto">
          {props.title}
        </p>
        <div className="flex gap-4">
          <Image src={props.avatar} alt="user avatar" width={64} height={64} />
          <div className="flex flex-col">
            <h3 className="text-lg text-black font-medium">{props.name}</h3>
            <h6 className="text-gray text-[16px]">{props.Role}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
