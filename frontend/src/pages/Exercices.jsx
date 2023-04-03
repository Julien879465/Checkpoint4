import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import expressAPI from "../services/expressAPI";
import Card from "../components/Card";

function Exercices() {
  const [exercices, setExercices] = useState([]);
  useEffect(() => {
    expressAPI.get("/exercices").then((res) => setExercices(res.data));
  }, []);
  return (
    <div className="flex flex-col gap-10">
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
