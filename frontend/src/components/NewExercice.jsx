/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    expressAPI.get("/workouts").then((res) => setWorkouts(res.data));
  }, [workouts]);

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
    setSerie1("");
    setSerie2("");
    setSerie3("");
    setWeight("");
  };

  return (
    <div className="flex flex-col  items-center text-white h-full w-full m-4 justify-evenly">
      <h1 className="mb-4 text-3xl lg:text-5xl">Entrainement</h1>
      <div className="flex flex-col w-full  justify-center items-center lg:flex-row lg:scale-125">
        <div className="flex flex-col justify-between lg:items-center mb-8 lg:mb-0">
          <div
            className="flex flex-col justify-evenly lg:mr-40
          "
          >
            <form>
              <label htmlFor="exercices-select">
                <select
                  className="w-[10rem] rounded-lg px-1 text-black mb-2"
                  onChange={handleSelectedExercice}
                >
                  <option value="">Exercices</option>
                  {exercices.map((exercice) => (
                    <option key={exercice.id} value={exercice.name}>
                      {exercice.name}
                    </option>
                  ))}
                </select>
              </label>
            </form>
            <p>Série 1 :</p>
            <input
              onChange={handleSerie1}
              className="w-[10rem] rounded-lg px-1 text-black mb-2"
              placeholder="Série 1"
              type="text"
              value={serie1.value}
            />
            <p>Série 2 :</p>
            <input
              onChange={handleSerie2}
              className="w-[10rem] rounded-lg px-1 text-black mb-2"
              placeholder="Série 2"
              type="text"
              value={serie2.value}
            />
            <p>Série 3 :</p>
            <input
              onChange={handleSerie3}
              className="w-[10rem] rounded-lg px-1 text-black mb-2"
              placeholder="Série 3"
              type="text"
              value={serie3.value}
            />
            <p>Poids:</p>
            <input
              onChange={handleWeight}
              className="w-[10rem] rounded-lg px-1 mb-6 text-black"
              placeholder="Poids"
              type="text"
              value={weight.value}
            />
            <button
              className="border-2 rounded-lg px-2 py-1 hover:scale-105 "
              type="button"
              onClick={handleSubmit}
            >
              Enregistrer
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          {workouts.map((workout) => (
            <div>
              {workout.name} {workout.serie1}-{workout.serie2}-{workout.serie3}{" "}
              @{workout.weight}Kg
            </div>
          ))}
        </div>
      </div>
      <button
        className="border-2 rounded-lg p-4 py-1 hover:scale-105 lg:scale-125 lg:hover:scale-150"
        type="button"
        onClick={() => navigate("/home")}
      >
        Terminer
      </button>
    </div>
  );
}

export default NewExercice;
