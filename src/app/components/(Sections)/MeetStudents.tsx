import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MeetStudentsPicture from "@/app/assets/images/internationalStudentsCollum.png";
import { PlaneTakeoff } from "lucide-react";
export function MeetStudents() {
  return (
    <div className="sm:px-[80px] lg:px-[16px] px-4 py-12">
      <section className="flex gap-20 items-center">
        <div className=" w-full lg:h-[811px] h-auto flex items-center justify-center">
          <div className="flex gap-10 lg:flex-row flex-col-reverse">
            {/* its better to use grid layout and use the pictures */}
            <Image
              src={MeetStudentsPicture}
              alt="Students collum"
              width={600}
              className="mx-auto lg:mx-0"
            />

            <div className="lg:w-[600px] lg:h-[388px] w-auto h-auto flex flex-col gap-8">
              <div className="relative w-full h-auto">
                <h1 className="text-grayBlue text-[24px] md:text-[36px] lg:text-[56px]/[110%] font-bold">
                  Meet international students & teachers
                  <PlaneTakeoff className="text-yellow absolute lg:top-[-40px] lg:right-31 top-[-12%] right-40 w-[24px] h-[24px] lg:w-[64px] lg:h-[64px]" />
                </h1>
              </div>

              <p className="font-normal text-grayBlue text-[16px] md:text-[16px] lg:text-[20px]/[160%] flex items-center">
                Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
                senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
                facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
                urna, faucibus aenean lorem faucibus integer.
              </p>

              <Link href={"#"}>
                <h3 className="text-blue flex gap-3 font-semibold text-[16px] lg:text-[20px] items-center cursor-pointer hover:text-blue/80 transition-all duration-300 ease-in-out">
                  Explore teachers and students
                  <ArrowRight />
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
