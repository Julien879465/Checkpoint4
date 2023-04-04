import { Link } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

export default function Home() {
  const { user } = useCurrentUserContext();

  return (
    <div className="flex flex-col items-center min-h-full text-white justify-evenly m-4">
      <h1 className="mb-4 text-3xl lg:text-5xl">Hello {user.username}</h1>
      <div className="flex flex-col h-full w-full lg:flex-row">
        <div className="flex flex-col h-full w-full lg:items-center lg:justify-center">
          <p className="text-center text-2xl ">Commencer un entrainement</p>
          <Link
            className="h-[80%] w-[80%] flex flex-col self-center border-solid border-2 rounded-lg bg-haltere bg-cover bg-no-repeat lg:bg-center lg:h-[60%] lg:w-[60%] "
            to="/newworkout"
          />
        </div>
        <div className="flex flex-col h-full w-full lg:items-center lg:justify-center">
          <p className="text-center text-2xl"> Historique</p>
          <Link
            className="h-[80%] w-[80%] flex flex-col self-center border-solid border-2 rounded-lg bg-note bg-cover bg-no-repeat lg:bg-center lg:h-[60%] lg:w-[60%]"
            to="/workouts"
          />
        </div>
      </div>
    </div>
  );
}
