"use client"
import { IoHeartCircle, IoDiamond } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";
import CountUp from "react-countup";
export function StatisticsSection() {
  return (
    <section className="bg-grayBlue flex justify-center items-center p-20 ">
      <div className="flex items-center gap-20 lg:flex-row flex-col">
        <div className="flex flex-col items-center text-yellow gap-4 justify-center">
          <IoHeartCircle size={64} className="text-yellow" />
          <h1 className="text-7xl font-bold">
           <CountUp duration={10} end={195} start={938}/>
            
          </h1>
          <p className="text-2xl ">user countries</p>
        </div>

        <div className="flex flex-col items-center text-yellow gap-4">
          <IoDiamond size={64} className="text-yellow" />
          <h1 className="text-7xl font-bold text-orange">
            <span className="text-yellow"><CountUp end={1} start={123} duration={10}/></span>M
          </h1>
          <p className="text-2xl">valued teachers</p>
        </div>

        <div className="flex flex-col items-center text-yellow gap-4">
          <RiGraduationCapFill size={64} className="text-yellow" />
          <h1 className="text-7xl font-bold text-orange">
            <span className="text-yellow"><CountUp duration={10} end={17} start={437}/></span>M
          </h1>
          <p className="text-2xl">happy students</p>
        </div>
      </div>
    </section>
  );
}
