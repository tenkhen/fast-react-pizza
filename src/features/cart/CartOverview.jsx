import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalQty, getTotalPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalItemQty = useSelector(getTotalQty);
  const totalPrice = useSelector(getTotalPrice);

  if (totalItemQty === 0) return null;

  return (
    <div className="flex items-center justify-between bg-green-900 p-4 text-sm uppercase text-green-200 sm:px-6 md:text-base">
      <p className="text space-x-4 font-semibold sm:space-x-6">
        <span>{totalItemQty} Pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
