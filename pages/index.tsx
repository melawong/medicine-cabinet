import React, { useMemo, useState, useEffect } from "react";
import { Inter } from "next/font/google";
import SearchBar from "@/components/SearchBar";
import { Prescription } from "@/models/prescription";
import PrescriptionCard from "@/components/PrescriptionCard";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";
import prescriptions from "../mockDatabase/prescriptions.json";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [prescriptionsToShow, setPrescriptionsToShow] = useState<
    Prescription[]
  >([]);

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setPrescriptionsToShow(allPrescriptions);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();

    const filteredPrescriptions = prescriptions.filter((prescription) =>
      prescription.name.toLowerCase().includes(searchTermLower)
    );

    filteredPrescriptions.sort((a, b) => {
      const aStartsWith = a.name.toLowerCase().startsWith(searchTermLower);
      const bStartsWith = b.name.toLowerCase().startsWith(searchTermLower);

      if (aStartsWith && !bStartsWith) {
        return -1;
      } else if (!aStartsWith && bStartsWith) {
        return 1;
      } else {
        return a.name.localeCompare(b.name);
      }
    });

    setPrescriptionsToShow(filteredPrescriptions);
  };

  const handleSavePrescription = async (
    prescriptionToAddOrRemove: Prescription
  ): Promise<void> => {
    await axios.post("/api/userPrescriptions", {
      prescriptionToAddOrRemove,
    });
  };

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
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
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
                handleSavePrescription={handleSavePrescription}
              />
            );
          })}
          <Footer />
        </>
      )}
    </main>
  );
}
