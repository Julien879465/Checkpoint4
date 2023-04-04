/* eslint-disable react/prop-types */
import React from "react";

function Username({ username, handleNameChange }) {
  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <label className="lg:text-xl lg:mb-2" htmlFor="username">
        Nom d'utilisateur
      </label>
      <input
        className="rounded-lg text-black px-1"
        type="text"
        id="username"
        value={username}
        onChange={handleNameChange}
      />
    </div>
  );
}

export default Username;
