/* eslint-disable react/prop-types */
import React from "react";

function Card({ name, url }) {
  return (
    <div className=" gap-2 text-3xl">
      <h1>{name}</h1>
      <img className="w-full h-[240px]" src={url} alt={name} />
    </div>
  );
}

export default Card;
