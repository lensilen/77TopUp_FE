import React from "react";
import { ProductCard } from "../components/card/product-card";
import { Navbar } from "../components/navigation-bar/navigation-container";
import { useParams } from "react-router";
export const Search = () => {
  const { keyword } = useParams();

  return (
    <>
      <h1 className="text-2xl p-5">Hasil Pencarian Untuk {keyword}...</h1>
      <div className="grid grid-cols-3 place-items-center gap-y-5 mt-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};
