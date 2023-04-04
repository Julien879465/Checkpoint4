/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useExercicesContext } from "../contexts/ExercicesContext";
import expressAPI from "../services/expressAPI";
import Modal from "react-modal";
import edit from "../assets/edit.svg";
import trash from "../assets/trash-2.svg";
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
  const [idWorkout, setIdWorkout] = useState("");
  const [newName, setNewName] = useState("");
  const [newSerie1, setNewSerie1] = useState("");
  const [newSerie2, setNewSerie2] = useState("");
  const [newSerie3, setNewSerie3] = useState("");
  const [newWeight, setNewWeight] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = (workout) => {
    setIdWorkout(workout.idworkout);
    setNewName(workout.name);
    setNewSerie1(workout.serie1);
    setNewSerie2(workout.serie2);
    setNewSerie3(workout.serie3);
    setNewWeight(workout.weight);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    expressAPI.get("/workouts").then((res) => setWorkouts(res.data));
  }, [workouts]);
  const handleDestroy = (id) => {
    expressAPI
      .delete(`/workouts/${id}`)
      .then(() => console.info("Successfully deleted workout"))
      .catch((error) => console.error(error));
  };
  const handleUpdate = () => {
    const data = {
      idworkout: idWorkout,
      name: newName,
      serie1: newSerie1,
      serie2: newSerie2,
      serie3: newSerie3,
      weight: newWeight,
    };
    expressAPI
      .put(`/workouts/${idWorkout}`, data)
      .then(() => console.info("Successfully updated workout"))
      .catch((error) => console.error(error));
    closeModal();
  };

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };
  const handleChangeSerie1 = (e) => {
    setNewSerie1(e.target.value);
  };
  const handleChangeSerie2 = (e) => {
    setNewSerie2(e.target.value);
  };
  const handleChangeSerie3 = (e) => {
    setNewSerie3(e.target.value);
  };
  const handleChangeWeight = (e) => {
    setNewWeight(e.target.value);
  };
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
    <div className="flex flex-col items-center text-white h-full w-full m-4 justify-evenly">
      <h1 className="mb-4 text-3xl lg:text-5xl">Entrainement</h1>
      <div className="flex flex-col justify-center items-center lg:flex-row lg:scale-110">
        <div className="flex flex-col justify-between lg:items-center mb-8 lg:mb-0 ">
          <div className="flex flex-col items-center lg:mr-20">
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
        <div className="flex flex-col">
          {workouts.map((workout) => (
            <div
              key={workout.name}
              className="flex flex-col lg:flex-row lg:mb-2"
            >
              <p className="text-xl mr-4  ">
                {" "}
                {workout.name} {workout.serie1}-{workout.serie2}-
                {workout.serie3} @{workout.weight}Kg{" "}
              </p>
              <div className="flex justify-center">
                <button
                  className="flex self-center"
                  type="button"
                  onClick={() => {
                    openModal(workout);
                  }}
                >
                  <img
                    className="flex hover:scale-105 mr-2 lg:mr-3"
                    src={edit}
                    alt="edit-icon"
                  />
                </button>
                <button
                  className="flex self-center"
                  type="button"
                  onClick={() => {
                    handleDestroy(workout.idworkout);
                  }}
                >
                  <img
                    className="flex hover:scale-105"
                    src={trash}
                    alt="edit-icon"
                  />
                </button>

                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Example Modal"
                  className=" h-full text-white"
                  workout={workout}
                >
                  <div className="bg-second h-full w-full flex flex-col items-center justify-center">
                    <p>Exercice :</p>
                    <input
                      className="w-[10rem] rounded-lg px-1 mb-6 text-black"
                      onChange={handleChangeName}
                      type="text"
                      value={newName}
                    />
                    <p>Série 1 :</p>
                    <input
                      className="w-[10rem] rounded-lg px-1 mb-6 text-black"
                      onChange={handleChangeSerie1}
                      type="text"
                      value={newSerie1}
                    />
                    <p>Série 2 :</p>
                    <input
                      className="w-[10rem] rounded-lg px-1 mb-6 text-black"
                      onChange={handleChangeSerie2}
                      type="text"
                      value={newSerie2}
                    />
                    <p>Série 3 :</p>
                    <input
                      className="w-[10rem] rounded-lg px-1 mb-6 text-black"
                      onChange={handleChangeSerie3}
                      type="text"
                      value={newSerie3}
                    />
                    <p>Poids :</p>
                    <input
                      className="w-[10rem] rounded-lg px-1 mb-6 text-black"
                      onChange={handleChangeWeight}
                      type="text"
                      value={newWeight}
                    />
                    <button
                      className="border-2 mb-4 rounded-lg w-[10rem] py-1 hover:scale-105 lg:scale-105"
                      type="button"
                      onClick={() => handleUpdate()}
                    >
                      Enregistrer
                    </button>
                    <button
                      className="border-2 mb-4 rounded-lg w-[10rem] py-1 hover:scale-105 lg:scale-105"
                      type="button"
                      onClick={closeModal}
                    >
                      Fermer
                    </button>
                  </div>
                </Modal>
              </div>
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
