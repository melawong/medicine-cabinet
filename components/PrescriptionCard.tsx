import { Prescription } from "@/models/prescription";
import Image from "next/image";
import React, { useState } from "react";
import { SMALL_HEART, SMALL_HEART_FILLED } from "@/models/icon";

interface PrescriptionCardProps {
  prescription: Prescription;
}

export default function PrescriptionCard({
  prescription,
}: PrescriptionCardProps) {
  const [savedFavorite, setSavedFavorite] = useState<boolean>(false);
  return (
    <div className="border-2 border-solid rounded-md p-3 m-2 min-w-[350px]">
      <div className="flex flex-row justify-between">
        <p className="text-lg font-bold text-indigo-700">
          {prescription.name}{" "}
          <span className="text-sm italic font-normal text-indigo-300">
            {prescription.dosage}
          </span>
        </p>
        <div
          onClick={() => {
            setSavedFavorite(!savedFavorite);
          }}
        >
          {savedFavorite ? (
            <Image
              src={SMALL_HEART_FILLED.path}
              alt={SMALL_HEART_FILLED.description}
              width={24}
              height={24}
            />
          ) : (
            <Image
              src={SMALL_HEART.path}
              alt={SMALL_HEART.description}
              width={24}
              height={24}
            />
          )}
        </div>
      </div>
      <hr className="size-0.25 bg-indigo-500 w-full mt-3 mb-3" />
      <div>
        <p>{prescription.frequency}</p>
        <p>{prescription.duration}</p>
      </div>
    </div>
  );
}
