import React from "react";

export const ProductCard = ({ title, description, image }) => {
  console.log(title);
  console.log(description);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src= {image}
          alt={title}
          
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center" >{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
