import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Connexion from "./pages/Connexion";
import Home from "./pages/Home";
import Exercices from "./pages/Exercices";
import ExercicesDetails from "./pages/ExercicesDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/home" element={<Home />} />
        <Route path="/exercices" element={<Exercices />} />
        <Route path="/exercices/:id" element={<ExercicesDetails />} />
      </Routes>
    </div>
  );
}

export default App;
