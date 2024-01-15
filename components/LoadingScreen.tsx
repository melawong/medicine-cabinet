import React from "react";

export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center bg-slate-100 rounded-full mt-96 p-6 w-[300px]">
      <h2 className="text-lg text-bold italic mt-6 mb-4 text-indigo-700">
        Gathering prescriptions...
      </h2>
      <div className="flex justify-center gap-x-5 h-10">
        <div className="size-3 rounded-full bg-indigo-500 dot1"></div>
        <div className="size-3 rounded-full bg-indigo-500 dot2"></div>
        <div className="size-3 rounded-full bg-indigo-500 dot3"></div>
      </div>
    </div>
  );
}
