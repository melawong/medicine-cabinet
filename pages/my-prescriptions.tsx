import PrescriptionCard from "@/components/PrescriptionCard";
import { Inter } from "next/font/google";
import { Prescription } from "@/models/prescription";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
  }, [prescriptionsToShow]);

  return (
    <div
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="flex flex-col justify-center items-center mt-6">
          <h2 className="text-2xl mb-4 font-bold text-indigo-800">
            My Prescriptions
          </h2>
          {prescriptionsToShow.length > 0 ? (
            prescriptionsToShow.map((prescription: Prescription) => {
              return (
                <PrescriptionCard
                  key={prescription.name}
                  prescription={prescription}
                />
              );
            })
          ) : (
            <p className="text-lg italic text-indigo-500">
              Go save some prescriptions!
            </p>
          )}
          <Footer />
        </div>
      )}
    </div>
  );
}
