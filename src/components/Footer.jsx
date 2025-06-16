import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import { FaMoon, FaSun, FaLock, FaTruck, FaHeadset, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const { theme, toggleTheme } = useContext(GlobalContext);

  return (
    <footer
      className={`px-6 md:px-10 py-8 transition-colors duration-300 text-white ${theme === "light" ? "bg-[#1E3A8A]" : "bg-gray-900"
        }`}
    >
      <div className="container mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 my-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaLock className="text-xl" />
              <h3 className="text-lg font-semibold">Secure Payments</h3>
            </div>
            <p className="text-sm">
              We use industry-standard encryption to keep your payments safe.
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaTruck className="text-xl" />
              <h3 className="text-lg font-semibold">Fast Delivery</h3>
            </div>
            <p className="text-sm">
              Fast & reliable delivery across all locations.
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaHeadset className="text-xl" />
              <h3 className="text-lg font-semibold">24/7 Support</h3>
            </div>
            <p className="text-sm">
              Our team is always here to help you anytime, anywhere.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-400 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col w-full gap-2 items-baseline">
            <p className="text-sm">
              © 2025 QuickKart. All rights reserved.
            </p>

            <div className="flex items-center justify-between w-full gap-4 pt-2">
              <div className="flex gap-2 text-xl">
                <a href="https://www.linkedin.com/in/ashish-kumar-jha-b47955288" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="hover:text-blue-400 transition duration-300" />
                </a>
                <a href="https://github.com/ashishjha950" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="hover:text-gray-400 transition duration-300" />
                </a>
              </div>

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${theme === "light"
                    ? "bg-gray-200 hover:bg-gray-400 text-black"
                    : "bg-gray-700 hover:bg-gray-500 text-white"
                  }`}
                aria-label="Toggle theme"
              >
                {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
