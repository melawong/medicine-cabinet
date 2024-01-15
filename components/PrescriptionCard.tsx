import { Prescription } from "@/models/prescription";
import Image from "next/image";
import React from "react";
import { SMALL_HEART } from "@/models/icon";

interface PrescriptionCardProps {
  prescription: Prescription;
}

export default function PrescriptionCard({
  prescription,
}: PrescriptionCardProps) {
  return (
    <div className="border-2 border-solid rounded-md p-3 m-2 min-w-[350px]">
      <div className="flex flex-row justify-between">
        <p className="text-lg font-bold text-indigo-700">
          {prescription.name}{" "}
          <span className="text-sm italic font-normal text-indigo-300">
            {prescription.dosage}
          </span>
        </p>
        <Image
          src={SMALL_HEART.path}
          alt={SMALL_HEART.description}
          width={16}
          height={16}
        />
      </div>
      <hr className="size-0.25 bg-indigo-500 w-full mt-3 mb-3" />
      <div>
        <p>{prescription.frequency}</p>
        <p>{prescription.duration}</p>
      </div>
    </div>
  );
}
