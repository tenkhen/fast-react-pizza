import { useSelector } from "react-redux";

const Username = () => {
  // Following user is coming from store.js because we connected userReducer from userSlice.js in store.js
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div className="ml-6 hidden text-sm font-semibold md:block">{username}</div>
  );
};

export default Username;
