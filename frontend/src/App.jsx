import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Connexion from "./pages/Connexion";
import Home from "./pages/Home";
import Exercices from "./pages/Exercices";
import ExercicesDetails from "./pages/ExercicesDetails";
import NewWorkout from "./pages/NewWorkout";
import Workouts from "./pages/Workouts";

function App() {
  return (
    <div className="flex flex-col h-full">
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/home" element={<Home />} />
        <Route path="/exercices" element={<Exercices />} />
        <Route path="/exercices/:id" element={<ExercicesDetails />} />
        <Route path="/workout" element={<NewWorkout />} />
        <Route path="/historique" element={<Workouts />} />
      </Routes>
    </div>
  );
}

export default App;
