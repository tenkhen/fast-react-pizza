import CreateUser from "../features/user/CreateUser";
import Meta from "../components/Meta";
import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="mx-5 my-10 rounded-xl bg-gradient-to-br from-orange-100/70 to-orange-300/70 px-4 py-6 text-center sm:my-16">
      <Meta />
      <h1 className="mb-8 text-6xl font-semibold capitalize">
        The best pizza.
        <br />
        <span className="text-green-800 md:text-3xl">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {!username ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
