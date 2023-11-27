import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import Meta from "../../components/Meta";
import MenuItem from "./MenuItem";

const Menu = () => {
  // useLoaderData in React Router 6 is a powerful tool that allows you to fetch data for your routes and make it available to your components before they are rendered. It's called RENDER AS FETCH
  const menu = useLoaderData();

  return (
    <ul className="m-10 grid grid-cols-3 gap-6">
      <Meta title="Fast React Pizza - Menu" />
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
};

// As we exporting this loader to router in App.jsx, as soon as start rendering Menu page, this loader fetches data from api and we will be accessible to the data (watch above in the Menu function).
export const loader = async () => {
  const menu = await getMenu();
  return menu;
};

export default Menu;
