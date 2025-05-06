"use client"
import { Form } from "../Form";

export function CTA() {
  return (
    <div className="bg-orange lg:px-20 lg:py-[87px] px-4 py-12 flex justify-center">
      <div className="lg:w-7xl lg:h-[507px] flex flex-col items-center gap-8 w-[361px]">
        <h1 className="text-white font-bold lg:text-[56px] text-[32px] text-center">
          Ready for your next project?
        </h1>
        <p className="text-white lg:text-[32px] tracking-wide font-light text-lg text-center">
          Sit elit feugiat turpis sed integer integer accumsan turpis.
        </p>
        <Form />
      </div>
    </div>
  );
}
