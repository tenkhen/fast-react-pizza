import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";
import Meta from "../components/Meta";

function Error() {
  const navigate = useNavigate();

  // We get this error from App.jsx errorElement where we are using Error component
  const error = useRouteError();

  return (
    <div>
      <Meta title="Fast React Pizza - Error" />
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      {/* navigate(-1) will take us to the previous page */}
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
