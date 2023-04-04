/* eslint-disable react/prop-types */
import React from "react";

function Email({ email, handleEmailChange }) {
  return (
    <div className="flex flex-col justify-center items-center mb-4 ">
      <label className="lg:text-xl lg:mb-2" htmlFor="email">
        Adresse mail
      </label>
      <input
        className="rounded-lg text-black px-1 "
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
    </div>
  );
}

export default Email;
