import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import expressAPI from "../services/expressAPI";

import { useCurrentUserContext } from "../contexts/CurrentUserContext";

function Connexion() {
  const navigate = useNavigate();

  const { setUser } = useCurrentUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      expressAPI
        .post("/login", { email, password })
        .then((res) => {
          const user = {
            username: res.data.user.username,
            email: res.data.user.email,
            role: res.data.user.role,
          };
          setUser(res.data.user);
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/home");
        })
        .catch(() => console.info("Le mot de passe ou l'email est incorrect"));
    } else {
      console.info("Veuillez renseigner un email et un mot de passe");
    }
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <h1>Connectez vous sur votre espace !</h1>
            <div>
              <p>Je n'ai pas de compte ?</p>
              <Link to="/">M'inscrire</Link>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-5 flex flex-col">
                <label htmlFor="email">Adresse mail</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Mot de passe</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button type="submit">Me connecter</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
