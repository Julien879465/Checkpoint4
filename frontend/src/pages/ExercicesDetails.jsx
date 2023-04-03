import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import expressAPI from "../services/expressAPI";

function CardDetails() {
  const [exercice, setExercice] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    expressAPI(`/exercices/${id}`).then((res) => setExercice(res.data));
  }, []);

  return (
    <div className=" gap-2 text-3xl">
      <h1>{exercice.name}</h1>
      <p>{exercice.description}</p>
      <img
        className="w-full h-[240px]"
        src={exercice.url}
        alt={exercice.name}
      />
    </div>
  );
}

export default CardDetails;
