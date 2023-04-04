/* eslint-disable react/prop-types */
import React from "react";

function Username({ username, handleNameChange }) {
  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <label htmlFor="username">Nom d'utilisateur</label>
      <input
        className="border-2 bg-slate-100"
        type="text"
        id="username"
        value={username}
        onChange={handleNameChange}
      />
    </div>
  );
}

export default Username;
