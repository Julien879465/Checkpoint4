import React from "react";

function Card({ id, name, description, url }) {
  return (
    <div className=" gap-2 text-3xl">
      <h1>{name}</h1>
      <img className="w-full h-[240px]" src={url} alt={name} />
    </div>
  );
}

export default Card;
