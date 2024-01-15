import { Prescription } from "@/models/prescription";
import Image from "next/image";
import React from "react";
import { SMALL_HEART } from "@/models/icons";

interface PrescriptionCardProps {
  prescription: Prescription;
}

export default function PrescriptionCard({
  prescription,
}: PrescriptionCardProps) {
  return (
    <div>
      <p>{prescription.name}</p>
      <Image
        src={SMALL_HEART.path}
        alt={SMALL_HEART.description}
        width={16}
        height={16}
      />
    </div>
  );
}
