/* eslint-disable react/prop-types */
import React from "react";

function Password({ password, handlePasswordChange }) {
  return (
    <div className="flex flex-col justify-center items-center mb-8 ">
      <label className="lg:text-xl lg:mb-2" htmlFor="password">
        Mot de passe
      </label>
      <input
        className="rounded-lg text-black px-1"
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
    </div>
  );
}

export default Password;
