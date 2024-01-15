import Image from "next/image";
import { Inter } from "next/font/google";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleSearch = (searchTerm: string) => {
    // display cards
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <SearchBar handleSearch={handleSearch} />
    </main>
  );
}
