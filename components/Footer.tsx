import React from "react";
import IconCircleBorder from "./IconCircleBorder";
import { HOME_ICON, SMALL_HEART } from "@/models/icon";

export default function Footer() {
  return (
    <div className="fixed inset-x-0 bottom-0 flex flex-row justify-center p-3 gap-32 bg-slate-200 w-screen h-130">
      <div className="flex flex-col items-center">
        <a href={"/"}>
          <IconCircleBorder icon={HOME_ICON} backgroundColor="bg-indigo-200" />{" "}
        </a>
        <div className="font-bold mt-1 text-indigo-800">Home</div>
      </div>

      <div className="flex flex-col items-center">
        <a href={"/my-prescriptions"}>
          <IconCircleBorder
            icon={SMALL_HEART}
            backgroundColor="bg-indigo-200"
          />
        </a>
        <div className="font-bold mt-1 text-indigo-800">Saved</div>
      </div>
    </div>
  );
}
