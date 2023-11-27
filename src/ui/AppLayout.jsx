import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import { useSelector } from "react-redux";

// Parent route of all other routes
const AppLayout = () => {
  const cart = useSelector((state) => state.cart.cart);

  // useNavigation hook will give us state of page. E.g. loading or idle
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-4xl">
          {/* Outlet in the parent route will render it's children routes in parent route */}
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
