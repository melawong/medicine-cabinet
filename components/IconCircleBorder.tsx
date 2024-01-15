import React from "react";
import Image from "next/image";
import { Icon } from "@/models/icon";

interface IconCircleBorderProps {
  backgroundColor: string;
  icon: Icon;
  size: string;
}

export default function IconCircleBorder({
  backgroundColor,
  icon,
  size,
}: IconCircleBorderProps) {
  return (
    <>
      <div
        className={`flex flex-auto rounded-full justify-center ${
          size === "small" ? "size-5" : "size-10"
        } ${backgroundColor} 
        `}
      >
        <Image src={icon.path} alt={icon.description} height={30} width={30} />
      </div>
    </>
  );
}
