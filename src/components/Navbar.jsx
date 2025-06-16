import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { CiUser, CiLogout } from "react-icons/ci";
import { AuthContext } from "../context/AuthProvider";
import { CartContext } from "../context/CartProvider";
import SearchBar from "./SearchBar";


const Navbar = () => {
  const { theme } = useContext(GlobalContext);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const { totalQuantity } = useContext(CartContext);

  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate('/');
  }

  return (
    <nav
      className={`z-20 fixed w-full py-2 px-4 md:px-10 shadow-md transition-all duration-300 text-white ${theme === "light" ? "bg-[#1E3A8A]" : "bg-gray-900 "}`}
    >
      <div className="flex items-center w-full justify-between container mx-auto gap-3">
        <NavLink to="/" className="flex items-center space-x-2 w-14 md:w-24">
          <img src="logo.png" alt="logo" />
        </NavLink>

        <div className="hidden md:block w-80 lg:w-xl">
          <SearchBar />
        </div>

        <div className="flex items-center space-x-4">

          <NavLink
            to="/cart"
            className="px-3 py-1 font-semibold rounded-md border-gray-400 hover:bg-gray-300 flex gap-1 items-center transition-all duration-300 hover:text-black hover:border-gray-500"
          >
            {isAuthenticated && totalQuantity}
            <FaCartShopping />
            <span className="hidden sm:block">Cart</span>
          </NavLink>

          {isAuthenticated ? (
            <button onClick={Logout} className="flex gap-2 items-center px-3 py-1 font-semibold rounded-md border border-gray-400 hover:bg-gray-300  transition-all duration-300">
              <CiLogout />
              <span className="hidden md:block">Logout</span>
            </button>
          ) : (

            <NavLink
              to="/login"
              className="px-3 py-1 font-semibold rounded-md border border-gray-400 hover:bg-gray-300 hover:text-black flex gap-2 items-center transition-all duration-300"
            >
              <CiUser />
              <span className="hidden md:block">Login</span>
            </NavLink>
          )}


        </div>

      </div>
    </nav>
  );
};

export default Navbar;