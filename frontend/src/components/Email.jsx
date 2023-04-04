/* eslint-disable react/prop-types */
import React from "react";

function Email({ email, handleEmailChange }) {
  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <label htmlFor="email">Adresse mail</label>
      <input
        className="border-2 bg-slate-100"
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
    </div>
  );
}

export default Email;
