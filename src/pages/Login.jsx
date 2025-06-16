import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import LoginForm from "../components/LoginForm";
import { MoonLoader } from "react-spinners";

const Login = () => {
  const { theme, loading } = useContext(GlobalContext);

  return (
    <div
      className={`${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"
      } px-6 py-24 flex items-center justify-center`}
    >
      <div className="container mx-auto px-4 transition-all duration-300">
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <MoonLoader color={theme === "light" ? "#060606" : "#ffffff"} />
          </div>
        ) : (
          <div>
            <LoginForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;