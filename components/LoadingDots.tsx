import React from "react";

export default function LoadingDots() {
  return (
    <div className="flex justify-center gap-x-5 h-10">
      <div className="size-3 rounded-full bg-indigo-500 dot1"></div>
      <div className="size-3 rounded-full bg-indigo-500 dot2"></div>
      <div className="size-3 rounded-full bg-indigo-500 dot3"></div>
    </div>
  );
}
