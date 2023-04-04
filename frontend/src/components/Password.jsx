/* eslint-disable react/prop-types */
import React from "react";

function Password({ password, handlePasswordChange }) {
  return (
    <div className="flex flex-col justify-center items-center mb-8">
      <label htmlFor="password">Mot de passe</label>
      <input
        className="border-2 bg-slate-100"
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
    </div>
  );
}

export default Password;
