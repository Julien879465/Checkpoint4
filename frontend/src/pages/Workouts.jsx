import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from "react-modal";
import expressAPI from "../services/expressAPI";

function Workouts() {
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

  return (
    <div>
      <p>workouts</p>
      {workouts.map((workout) => (
        <div key={workout.idworkout}>
          <div>
            {workout.name} {workout.serie1}-{workout.serie2}-{workout.serie3} @
            {workout.weight}Kg
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                openModal(workout);
              }}
            >
              Modifier
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              workout={workout}
            >
              <input onChange={handleChangeName} type="text" value={newName} />
              <input
                onChange={handleChangeSerie1}
                type="text"
                value={newSerie1}
              />
              <input
                onChange={handleChangeSerie2}
                type="text"
                value={newSerie2}
              />
              <input
                onChange={handleChangeSerie3}
                type="text"
                value={newSerie3}
              />
              <input
                onChange={handleChangeWeight}
                type="text"
                value={newWeight}
              />
              <button type="button" onClick={() => handleUpdate()}>
                update
              </button>
              <button type="button" onClick={closeModal}>
                Fermer
              </button>
            </Modal>
          </div>
          <button
            type="button"
            onClick={() => handleDestroy(workout.idworkout)}
          >
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
}

export default Workouts;
