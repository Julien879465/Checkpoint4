/* eslint-disable react/prop-types */
import React from "react";
import { useExercicesContext } from "../contexts/ExercicesContext";
import expressAPI from "../services/expressAPI";

function NewExercice() {
  const {
    exercices,
    setSelectedExercice,
    serie1,
    setSerie1,
    serie2,
    setSerie2,
    serie3,
    setSerie3,
    weight,
    setWeight,
  } = useExercicesContext();

  const handleSelectedExercice = (e) => {
    const currentSelected = e.target.value;
    setSelectedExercice(currentSelected);
    const workout = JSON.parse(localStorage.getItem("workout")) || {};
    workout.name = currentSelected;
    localStorage.setItem("workout", JSON.stringify(workout));
  };

  const handleSerie1 = (e) => {
    const currentSerie1 = e.target.value;
    setSerie1(currentSerie1);
    const workout = JSON.parse(localStorage.getItem("workout")) || {};
    workout.serie1 = currentSerie1;
    localStorage.setItem("workout", JSON.stringify(workout));
  };

  const handleSerie2 = (e) => {
    const currentSerie2 = e.target.value;
    setSerie2(currentSerie2);
    const workout = JSON.parse(localStorage.getItem("workout")) || {};
    workout.serie2 = currentSerie2;
    localStorage.setItem("workout", JSON.stringify(workout));
  };

  const handleSerie3 = (e) => {
    const currentSerie3 = e.target.value;
    setSerie3(currentSerie3);
    const workout = JSON.parse(localStorage.getItem("workout")) || {};
    workout.serie3 = currentSerie3;
    localStorage.setItem("workout", JSON.stringify(workout));
  };

  const handleWeight = (e) => {
    const currentWeight = e.target.value;
    setWeight(currentWeight);
    const workout = JSON.parse(localStorage.getItem("workout")) || {};
    workout.weight = currentWeight;
    localStorage.setItem("workout", JSON.stringify(workout));
  };
  const handleSubmit = () => {
    const workout = JSON.parse(localStorage.getItem("workout"));
    const user = JSON.parse(localStorage.getItem("user"));
    const data = {
      name: workout.name,
      serie1: workout.serie1,
      serie2: workout.serie2,
      serie3: workout.serie3,
      weight: workout.weight,
      id: user.id,
    };
    expressAPI
      .post("/workouts", data)
      .then((res) => {
        res.send(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="flex flex-col w-30/12 rounded-lg">
      <form>
        <label htmlFor="exercices-select">
          <select onChange={handleSelectedExercice}>
            <option value="">Exercices</option>
            {exercices.map((exercice) => (
              <option key={exercice.id} value={exercice.name}>
                {exercice.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <input
        onChange={handleSerie1}
        className="w-1/6"
        placeholder="Série 1"
        type="text"
        value={serie1.value}
      />
      <input
        onChange={handleSerie2}
        className="w-1/6"
        placeholder="Série 2"
        type="text"
        value={serie2.value}
      />
      <input
        onChange={handleSerie3}
        className="w-1/6"
        placeholder="Série 3"
        type="text"
        value={serie3.value}
      />
      <input
        onChange={handleWeight}
        className="w-1/6"
        placeholder="Poids"
        type="text"
        value={weight.value}
      />
      <button type="button" onClick={handleSubmit}>
        Enregistrer
      </button>
    </div>
  );
}

export default NewExercice;
