import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import expressAPI from "../services/expressAPI";
import Password from "../components/Password";
import Email from "../components/Email";

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
            id: res.data.user.idUser,
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
    <div className="flex flex-col justify-center items-center min-h-full bg-slate-400">
      <div className="flex flex-col justify-center items-center mb-4">
        <div className="flex flex-col justify-center items-center mb-4">
          <div className="flex flex-col justify-center items-center mb-4">
            <h1 className="text-center mb-4 text-3xl">
              Connectez vous sur votre espace !
            </h1>
            <form
              className="flex flex-col justify-center items-center mb-4"
              onSubmit={handleSubmit}
            >
              <Email email={email} handleEmailChange={handleEmailChange} />
              <Password
                password={password}
                handlePasswordChange={handlePasswordChange}
              />
              <button
                className="border-2 bg-slate-200 px-2 py-1 "
                type="submit"
              >
                Me connecter
              </button>
            </form>
            <div className="flex flex-col justify-center items-center mb-4">
              <p>Je n'ai pas de compte ?</p>
              <Link className="underline" to="/registration">
                M'inscrire
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
