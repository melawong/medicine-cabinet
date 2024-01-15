import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Start typing to find a prescription..."
        value={searchTerm}
        onChange={handleInputChange}
        className="rounded-full border-2 border-blue-500 px-4 py-2 w-96"
      />
      <div>
        <button
          type="submit"
          className="rounded-full border-2 text-black-500 w-24 mt-4"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
