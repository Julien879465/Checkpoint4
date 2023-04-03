import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import expressAPI from "../services/expressAPI";

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
    <div>
      <div>
        <div>
          <div>
            <h1>Bienvenue !</h1>
            <div>
              <p>J'ai déjà un compte ?</p>
              <Link to="/Connexion" type="button">
                Me connecter
              </Link>
            </div>
            <form onSubmit={handleForm}>
              <div className="mb-5 flex flex-col">
                <label htmlFor="username">Nom d'utilisateur</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleNameChange}
                />
              </div>
              <div>
                <label htmlFor="email">Adresse mail</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div>
                <label htmlFor="password">Mot de passe</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button type="submit">Créer votre compte</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
