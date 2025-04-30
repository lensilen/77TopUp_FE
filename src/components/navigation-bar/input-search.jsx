import React, { useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router";

export const InputSearch = ({className}) => {
  const ref = useRef();
  const navigation = useNavigate();

  const handleSearch = (event) => {
    const keyword = ref.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      navigation(`/search/${keyword}`);
      ref.current.value = "";
    }
  };

  return (
    
    <div className="relative max-w-lg">
      <input
        placeholder="Cari game favoritmu di sini..."
        className="input w-full rounded-lg pr-14 placeholder:italic focus:outline-none focus:border-gray-300 transition-colors du"
        ref={ref}
        onKeyDown={handleSearch}
      />
      <button
        onClick={handleSearch}
        // className="absolute btn inset-y-0 right-0 z-30"
        className="absolute inset-y-0 right-0 z-30 px-3 btn shadow-none rounded-lg rounded-l-none border-[#D0D1D0] active:drop-shadow-sm"
      >
        <FaMagnifyingGlass size={20} className="text-gray-500 " />
      </button>
    </div>
  );
};
