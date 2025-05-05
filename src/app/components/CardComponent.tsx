import Link from "next/link";
import React from "react";

interface CardComponentProps {
  title: string;
  subtitle: string;
  badge: string;
}

export const CardComponent: React.FC<CardComponentProps> = ({
  title,
  subtitle,
  badge,
}) => {
  const badgeColors: Record<string, string> = {
    Featured: "bg-purple-100 text-purple",
    Popular: "bg-blue-100 text-blue",
    New: "bg-green-100 text-green",
  };

  return (
    <div className="shadow-xl py-6 px-4 lg:w-[200px] lg:h-[232px] flex flex-col items-start bg-white space-y-2 rounded-xl w-full">
      <span
        className={`text-sm font-semibold px-3 py-1 rounded-sm ${badgeColors[badge]}`}
      >
        {badge}
      </span>
      <h3 className="text-lg font-bold text-gray-800 leading-[110%]">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-[140%]">{subtitle}</p>

      

        <Link href={"/#"} className="flex flex-col gap-2 w-full items-center">
          <span className="border-blue rounded-lg text-blue border-2 py-2 px-3 w-full text-center font-semibold hover:bg-blue/20 duration-300 transition-all">Take Lesson</span>
        </Link>
      
      
    </div>
  );
};
