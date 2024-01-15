import PrescriptionCard from "@/components/PrescriptionCard";
import { Prescription } from "@/models/prescription";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingScreen from "@/components/LoadingScreen";

export default function SavedPrescriptions() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [prescriptionsToShow, setPrescriptionsToShow] = useState<
    Prescription[]
  >([]);

  useEffect(() => {
    async function setSavedPrescriptions() {
      const userPrescriptionsResponse = await axios.get(
        "/api/userPrescriptions"
      );

      setPrescriptionsToShow(userPrescriptionsResponse.data.data);
      setIsLoading(false);
    }
    setSavedPrescriptions();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : prescriptionsToShow.length > 0 ? (
        prescriptionsToShow.map((prescription: Prescription) => {
          return (
            <PrescriptionCard
              key={prescription.name}
              prescription={prescription}
              handleSavePrescription={() => {}}
            />
          );
        })
      ) : (
        <div>
          <p>Go save some prescriptions!</p>
        </div>
      )}
    </>
  );
}
