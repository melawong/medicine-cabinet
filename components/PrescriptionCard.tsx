import { Prescription } from "@/models/prescription";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SMALL_HEART, SMALL_HEART_FILLED } from "@/models/icon";
import axios from "axios";
import { capitalize } from "@/utils/helpers";

interface PrescriptionCardProps {
  prescription: Prescription;
}

export default function PrescriptionCard({
  prescription,
}: PrescriptionCardProps) {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const handleSavePrescription = async (
    prescriptionToAddOrRemove: Prescription
  ): Promise<void> => {
    await axios.post("/api/userPrescriptions", {
      prescriptionToAddOrRemove,
    });
    setIsSaved(!isSaved);
  };

  useEffect(() => {
    async function setSavedPrescription() {
      const userPrescriptionsResponse = await axios.get(
        "/api/userPrescriptions"
      );

      const userSavedPrescriptions = userPrescriptionsResponse.data.data;
      const savedPrescriptionIds = userSavedPrescriptions.map(
        (prescription: Prescription) => prescription.id
      );

      setIsSaved(savedPrescriptionIds.includes(prescription.id));
    }
    setSavedPrescription();
  }, []);

  return (
    <div className="border-2 border-solid border-indigo-800 rounded-md p-3 m-2 w-[350px] bg-slate-100">
      <div className="flex flex-row justify-between">
        <p className="text-lg font-bold text-indigo-700">
          {prescription.name}{" "}
          <span className="text-sm italic font-normal text-indigo-300">
            {prescription.dosage}
          </span>
        </p>
        <div
          onClick={() => {
            handleSavePrescription(prescription);
          }}
        >
          {isSaved ? (
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
        <p className="text-indigo-800">{capitalize(prescription.frequency)}</p>
        <p className="text-indigo-800"> {capitalize(prescription.duration)}</p>
      </div>
    </div>
  );
}
