import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";
import { formatCurrency } from "../../utils/helpers";

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();

  console.log(order);

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">
        Make this order priority for{" "}
        {formatCurrency(
          order.cart.reduce((acc, cur) => acc + cur.totalPrice, 0) * 0.2,
        )}
      </Button>
    </fetcher.Form>
  );
};

export default UpdateOrder;

export const action = async ({ request, params }) => {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
};
