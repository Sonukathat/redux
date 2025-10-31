import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Header() {

    const selecter = useSelector((state)=>state.cart)
    console.log(selecter);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      {/* Logo / Brand */}
      <h1 className="text-2xl font-bold cursor-pointer">ShopZone</h1>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-6">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">Products</a>
        <a href="#" className="hover:text-gray-300">About</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </nav>

      {/* Cart Icon */}
      <div className="relative cursor-pointer">
        <FaShoppingCart className="text-2xl" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white px-1.5 py-0.5 rounded-full">
          3
        </span>
      </div>
    </header>
  );
}

export default Header;
