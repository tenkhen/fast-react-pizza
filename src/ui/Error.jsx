import { useNavigate, useRouteError } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  // We get this error from App.jsx errorElement where we are using Error component
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      {/* navigate(-1) will take us to the previous page */}
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
