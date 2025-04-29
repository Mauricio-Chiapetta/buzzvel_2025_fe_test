import { Button, Card } from "@mui/material";
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
    <Card
      className="shadow-sm py-6 px-4 lg:w-[200px] flex flex-col items-start bg-white space-y-2"
      variant="elevation"
    >
      <span
        className={`text-sm font-semibold px-3 py-1 rounded-sm ${badgeColors[badge]}`}
      >
        {badge}
      </span>
      <h3 className="text-lg font-bold text-gray-800 leading-[110%]">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-[140%]">{subtitle}</p>
      <div className="flex flex-col gap-2 w-full">
        <Button variant="outlined">Take Lesson</Button>
      </div>
    </Card>
  );
};
