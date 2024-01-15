import React, { useMemo, useState, useEffect } from "react";
import { Inter } from "next/font/google";
import SearchBar from "@/components/SearchBar";
import prescriptions from "../prescriptions.json";
import { Prescription } from "@/models/prescription";
import PrescriptionCard from "@/components/PrescriptionCard";
import LoadingDots from "@/components/LoadingDots";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [prescriptionsToShow, setPrescriptionsToShow] = useState<
    Prescription[]
  >([]);
  const handleSearch = (searchTerm: string) => {
    // display cards
  };

  useEffect(() => {
    async function getInitialPrescriptions() {
      const shuffledPrescriptions = prescriptions.sort(
        () => 0.5 - Math.random()
      );
      setPrescriptionsToShow(shuffledPrescriptions.slice(0, 6));
      setTimeout(() => setIsLoading(false), 2000);
    }

    getInitialPrescriptions();
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {isLoading ? (
        <LoadingDots />
      ) : (
        <>
          <SearchBar handleSearch={handleSearch} />
          {prescriptionsToShow.map((prescription: Prescription) => {
            return (
              <PrescriptionCard
                key={prescription.name}
                prescription={prescription}
              />
            );
          })}
        </>
      )}
    </main>
  );
}
