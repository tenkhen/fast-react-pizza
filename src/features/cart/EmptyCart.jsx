import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="mt-10 rounded-xl bg-gradient-to-br from-orange-100/70 to-orange-300/70 px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 font-semibold text-stone-700">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
