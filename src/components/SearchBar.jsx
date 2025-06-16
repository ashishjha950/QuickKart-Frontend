import { FiSearch } from "react-icons/fi";
import  { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    const { setSearchTerm } = useContext(GlobalContext);

  const navigate = useNavigate();

    const SearchItems = (e)=>{
    e.preventDefault();
    navigate('/');
  }

  return (
    <div>
      <form className="flex justify-between bg-white rounded-2xl" onSubmit={SearchItems}>
        <input
          type="text"
          name="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="px-2 sm:px-8 placeholder:text-gray-400 placeholder:text-sm text-black focus:outline-none transition-all duration-300"
        />
        <button
          type="submit"
          className=" px-3 py-1 cursor-pointer bg-white rounded-2xl text-bg-blue-700 transition-all duration-300"
        >
          <FiSearch color="#1E3A8A" size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
