import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="flex flex-col items-center gap-y-2 border-b border-stone-300 bg-gradient-to-r from-orange-200 to-orange-300 px-4 py-3 uppercase sm:flex-row sm:justify-between sm:px-6">
      <Link to="/" className="inline tracking-widest">
        <img
          src="../src/img/pizza-logo.png"
          alt="pizza-logo"
          className="w-[14rem]"
        />
      </Link>
      <div className="flex items-center">
        <SearchOrder />
        <Username />
      </div>
    </header>
  );
};

export default Header;
