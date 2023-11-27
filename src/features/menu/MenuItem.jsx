import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import DeleteItemButton from "../../ui/DeleteItemButton";
import { addItem, getCurrentQtyById } from "../cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import UpdateItemQty from "../cart/UpdateItemQty";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQty = useSelector(getCurrentQtyById(id));
  const isInCart = currentQty > 0;

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  };

  return (
    <li>
      <div className="overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={name}
          className={`${
            soldOut && "brightness-50 grayscale"
          } h-[9rem] w-[100%] object-cover`}
        />
        <div className="flex h-[5rem] flex-col bg-orange-200 p-2">
          <div className="h-50">
            <p className="font-medium">{name}</p>
            <p className="text-sm capitalize italic text-stone-500">
              {ingredients.join(", ")}
            </p>
          </div>
        </div>
        <div className="flex h-[3rem] items-center bg-orange-300 px-2">
          {soldOut ? (
            <p className="flex-grow text-center text-sm font-semibold uppercase">
              Sold out
            </p>
          ) : (
            <div className="flex flex-grow items-center justify-between">
              <p className="text-sm font-semibold">
                {formatCurrency(unitPrice)}
              </p>
              {isInCart ? (
                <div className="flex items-center gap-3 sm:gap-8">
                  <UpdateItemQty pizzaId={id} quantity={currentQty} />
                </div>
              ) : (
                !soldOut && (
                  <Button type="small" onClick={handleAddToCart}>
                    Add to cart
                  </Button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
