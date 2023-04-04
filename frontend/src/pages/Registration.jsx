import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import expressAPI from "../services/expressAPI";
import Username from "../components/Username";
import Password from "../components/Password";
import Email from "../components/Email";

function Registration() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();

    if ((email, password, username)) {
      expressAPI
        .post("/users", { email, password, username })
        .then(() => navigate("/connexion"))
        .catch((err) => console.error(err));
    } else {
      console.info("Veuillez renseigner votre email et votre statut");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-full text-white lg:scale-125">
      <div className="flex flex-col justify-center items-center mb-4">
        <div className="flex flex-col justify-center items-center mb-4">
          <div className="flex flex-col justify-center items-center mb-4">
            <h1 className="mb-4 text-3xl lg:text-5xl">Bienvenue !</h1>

            <form
              className="flex flex-col justify-center items-center mb-4 "
              onSubmit={handleForm}
            >
              <Username
                username={username}
                handleNameChange={handleNameChange}
              />
              <Email email={email} handleEmailChange={handleEmailChange} />
              <Password
                password={password}
                handlePasswordChange={handlePasswordChange}
              />
              <button
                className="border-2 rounded-lg px-2 py-1 hover:scale-105 "
                type="submit"
              >
                Créer votre compte
              </button>
            </form>
            <div className="flex flex-col justify-center items-center mb-4 ">
              <p>J'ai déjà un compte ?</p>
              <Link
                className="underline  hover:scale-105"
                to="/Connexion"
                type="button"
              >
                Me connecter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
