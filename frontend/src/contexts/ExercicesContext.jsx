import PropTypes from "prop-types";
import { createContext, useContext, useState, useEffect, useMemo } from "react";
import expressAPI from "../services/expressAPI";

const ExercicesContext = createContext();

export const useExercicesContext = () => useContext(ExercicesContext);

function ExercicesContextProvider({ children }) {
  const [exercices, setExercices] = useState([]);
  const [selectedExercice, setSelectedExercice] = useState("");
  useEffect(() => {
    expressAPI.get("/exercices").then((res) => setExercices(res.data));
  }, []);

  const userMemo = useMemo(
    () => ({ exercices, setExercices, selectedExercice, setSelectedExercice }),
    [exercices, setExercices, selectedExercice, setSelectedExercice]
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
