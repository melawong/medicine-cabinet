import React, { useMemo, useState, useEffect } from "react";
import { Inter } from "next/font/google";
import SearchBar from "@/components/SearchBar";
import prescriptions from "../prescriptions.json";
import { Prescription } from "@/models/prescription";
import PrescriptionCard from "@/components/PrescriptionCard";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [prescriptionsToShow, setPrescriptionsToShow] = useState<
    Prescription[]
  >([]);
  const handleSearch = (searchTerm: string) => {};

  useEffect(() => {
    async function setInitialPrescriptions() {
      const shuffledPrescriptions = prescriptions.sort(
        () => 0.5 - Math.random()
      );
      setPrescriptionsToShow(shuffledPrescriptions.slice(0, 6));
      setTimeout(() => setIsLoading(false), 2000);
    }

    setInitialPrescriptions();
  }, []);

  const allPrescriptions = useMemo(() => {
    return prescriptions;
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-4 justify-between ${inter.className}`}
    >
      {isLoading ? (
        <LoadingScreen />
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
          <Footer />
        </>
      )}
    </main>
  );
}
