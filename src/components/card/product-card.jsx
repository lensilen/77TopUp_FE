import React from "react";

export const ProductCard = ({ title, description }) => {
  console.log(title);
  console.log(description);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title bg-red-200 " >{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
