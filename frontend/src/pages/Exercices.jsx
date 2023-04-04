import React from "react";
import { Link } from "react-router-dom";
import { useExercicesContext } from "../contexts/ExercicesContext";

import Card from "../components/Card";

function Exercices() {
  const { exercices } = useExercicesContext();

  return (
    <div className="flex flex-col gap-10 text-white">
      <h1 className="text-5xl text-center">Exercices</h1>
      {exercices.map((exercice) => (
        <Link
          key={exercice.idexercice}
          to={`/exercices/${exercice.idexercice}`}
        >
          <Card
            id={exercice.idexercice}
            name={exercice.name}
            description={exercice.description}
            url={exercice.url}
          />
        </Link>
      ))}
    </div>
  );
}

export default Exercices;
