import PropTypes from "prop-types";
import { createContext, useContext, useState, useEffect, useMemo } from "react";
import expressAPI from "../services/expressAPI";

const ExercicesContext = createContext();

export const useExercicesContext = () => useContext(ExercicesContext);

function ExercicesContextProvider({ children }) {
  const [exercices, setExercices] = useState([]);

  const [selectedExercice, setSelectedExercice] = useState(
    JSON.parse(localStorage.getItem("workout"))
  );
  const [serie1, setSerie1] = useState(
    JSON.parse(localStorage.getItem("workout"))
  );
  const [serie2, setSerie2] = useState(
    JSON.parse(localStorage.getItem("workout"))
  );
  const [serie3, setSerie3] = useState(
    JSON.parse(localStorage.getItem("workout"))
  );
  const [weight, setWeight] = useState(
    JSON.parse(localStorage.getItem("workout"))
  );
  useEffect(() => {
    expressAPI.get("/exercices").then((res) => setExercices(res.data));
  }, []);

  const userMemo = useMemo(
    () => ({
      exercices,
      setExercices,
      selectedExercice,
      setSelectedExercice,
      serie1,
      setSerie1,
      serie2,
      setSerie2,
      serie3,
      setSerie3,
      weight,
      setWeight,
    }),
    [
      exercices,
      setExercices,
      selectedExercice,
      setSelectedExercice,
      serie1,
      setSerie1,
      serie2,
      setSerie2,
      serie3,
      setSerie3,
      weight,
      setWeight,
    ]
  );
  return (
    <ExercicesContext.Provider value={userMemo}>
      {children}
    </ExercicesContext.Provider>
  );
}

ExercicesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ExercicesContextProvider;
