import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { GlobalContext } from "../context/GlobalProvider"; 
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { setIsAuthenticated } = useContext(AuthContext);
  const { theme } = useContext(GlobalContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Login Successfully');
    localStorage.setItem("token", "dummy-token");
    setIsAuthenticated(true);
    navigate('/');
  };

  return (
    <div
      className={`max-w-md mx-auto p-8 rounded-lg shadow-lg transition-all duration-300 ${
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      <h2 className="text-2xl text-center font-semibold mb-6">
        Login
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="username"
            value={formData.email}
            onChange={handleChange}
            className={`border rounded-lg p-3 placeholder:text-gray-500 placeholder:text-sm focus:outline-none focus:ring-2 w-full ${
              theme === "light" ? "border-gray-300 focus:ring-blue-500" : "border-gray-600 focus:ring-blue-400"
            }`}
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            className={`border rounded-lg p-3 placeholder:text-gray-500 placeholder:text-sm focus:outline-none focus:ring-2 w-full ${
              theme === "light" ? "border-gray-300 focus:ring-blue-500" : "border-gray-600 focus:ring-blue-400"
            }`}
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;