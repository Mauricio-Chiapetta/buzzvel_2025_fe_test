"use client"
import { Form } from "../Form";

export function CTA() {
  return (
    <div className="bg-orange px-20 py-[86px] flex justify-center">
      <div className="w-7xl h-[507px] flex flex-col items-center gap-8">
        <h1 className="text-white font-bold text-[56px]">
          Ready for your next project?
        </h1>
        <p className="text-white text-[32px] tracking-wide font-light">
          Sit elit feugiat turpis sed integer integer accumsan turpis.
        </p>
        <Form />
      </div>
    </div>
  );
}
