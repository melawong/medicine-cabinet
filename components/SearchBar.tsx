import React, { useState } from "react";
import Image from "next/image";
import { SEARCH_ICON } from "@/models/icon";

interface SearchBarProps {
  handleSearch: (searchTerm: string) => void;
}

const SearchBar = ({ handleSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <div className="flex flex-row rounded-lg border-2 border-slate-200 mb-2 mt-6 w-[350px] h-12">
      <form
        onSubmit={handleSubmit}
        className="flex justify-between items-center w-full"
      >
        <input
          type="text"
          placeholder="Search prescriptions..."
          value={searchTerm}
          onChange={handleInputChange}
          className="w-4/5 text-lg my-6 mx-2 text-indigo-500 focus:outline-none placeholder:text-slate-300 placeholder:italic"
        />

        <button
          type="submit"
          className="flex items-center justify-center rounded-r-lg my-6 ml-2 w-1/5 h-12 bg-indigo-300"
        >
          <Image
            src={SEARCH_ICON.path}
            alt={SEARCH_ICON.description}
            height={24}
            width={24}
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
