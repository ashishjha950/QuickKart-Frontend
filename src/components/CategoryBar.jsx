import  { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";

const CategoryBar = () => {
  const { theme } = useContext(GlobalContext);
  const [dropDown,setDropDown] = useState(false);

  const categoryData = [
      { title: "Mens", to: "/mens" },
      { title: "Womens", to: "/womens" },
      { title: "Beauty", to: "/beauty" },
      { title: "Accessories", to: "/accessories" },
      { title: "Electronics", to: "/electronics" },
    ];

  return (
    <nav className={`transition-all duration-300 ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-700 text-white"}`}>
    <div 
      className={`container z-10 py-2 px-4 md:px-10 pt-16 md:pt-18 mx-auto w-full justify-between `}
    >
      <div className="block md:hidden">
      <div className="flex justify-between items-center gap-3 w-full">
        <button className={`cursor-pointer text-xl font-bold`} onClick={()=>setDropDown(!dropDown)}>
          {dropDown?<FaPlus className="rotate-45"/>:<GiHamburgerMenu/>}
        </button>

        <div className=" border rounded-2xl w-full">
        <SearchBar/>
        </div>
      </div>
      </div>

        <div className="block md:hidden">
        <ul className="flex flex-col container items-center justify-between gap-2 my-2 mx-auto font-medium text-lg">
          {dropDown && categoryData.map((category,index)=>{
            return (
          <li key={index}>
            <NavLink className={({ isActive }) => `${isActive ? "text-red-600" : theme === "light" ? "text-black" : "text-white"}`} to={category.to}>{category.title}</NavLink>
          </li>
            )
          })}
        </ul>
        </div>

        <div className="hidden md:block">
        <ul className="flex flex-row container items-center justify-between gap-2 my-2 mx-auto font-medium text-lg">
          {categoryData.map((category,index)=>{
            return (
          <li key={index}>
            <NavLink className={({ isActive }) => `${isActive ? "text-red-600" : theme === "light" ? "text-black" : "text-white"}`} to={category.to}>{category.title}</NavLink>
          </li>
            )
          })}
        </ul>

        </div>
        
    </div>
    </nav>
  );
};

export default CategoryBar;