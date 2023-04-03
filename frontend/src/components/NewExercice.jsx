/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useExercicesContext } from "../contexts/ExercicesContext";

function NewExercice() {
  const { exercices, setSelectedExercice } = useExercicesContext();

  const handleSelect = (e) => {
    setSelectedExercice(e.target.value);
  };
  const handleSubmit = () => {};
  return (
    <div className="flex flex-col w-10/12 rounded-lg">
      <p>Série 1</p>
      <form>
        <label htmlFor="exercices-select">
          <select onClick={handleSelect}>
            <option value="">Exercices</option>
            {exercices.map((exercice) => (
              <option key={exercice.id} value={exercice.name}>
                {exercice.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <input className="w-1/6" placeholder="réps" type="text" />
      <input className="w-1/6" placeholder="poids" type="text" />
      <button onClick={handleSubmit}>Enregistrer</button>
    </div>
  );
}

export default NewExercice;
