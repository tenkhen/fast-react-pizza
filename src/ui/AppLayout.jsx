import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

// Parent route of all other routes
const AppLayout = () => {
  // useNavigation hook will give us state of page. E.g. loading or idle
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {/* Outlet in the parent route will render it's children routes in parent route */}
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
