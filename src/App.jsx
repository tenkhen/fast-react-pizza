import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import { action as updateOrderAction } from "./features/order/UpdateOrder";
import Error from "./ui/Error";

// New way to create routes. We pass array of objects and each object is a route
const router = createBrowserRouter([
  {
    // AppLayout is parent route and all other routes are children routes
    element: <AppLayout />,
    // As we are using Error component as errorElement, all errors are accessible in the Error component
    errorElement: <Error />,

    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        // React Router Loaders are to read data
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        // React Router Actions are to write/mutate data
        // Here we connect '/order/new' url to the action
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
