import { useCurrentUserContext } from "../contexts/CurrentUserContext";

export default function Home() {
  const { user } = useCurrentUserContext();

  return (
    <div>
      <p className="text-3xl">hello {user.username}</p>
    </div>
  );
}
