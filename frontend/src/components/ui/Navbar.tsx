import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import { HiMenu, HiX } from "react-icons/hi"; 
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/CounterProvider";

function Navbar() {
  const { setAuth} = useContext(AuthContext)
  const navigation = useNavigate()
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navBarItems = [
    { name: "Dashboard", path: "/" },
    { name: "Profile", path: "/profile" },
  ];

  async function logout() {
  try {
    const responce = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/logout`,
      { withCredentials: true }
    );
    toast.success(responce.data.message)
  //@ts-ignore
    setAuth(false)
    navigation("/signin");
  } catch (error) {
    console.log("Logout error:", error);
  }
}


  return (
    <nav className="w-full bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-blue-500 hover:text-blue-400 transition-colors">
            <Link to="/">Paytm</Link>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {navBarItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                className={`px-5 py-2 rounded-lg font-medium text-gray-100 transition-transform transform hover:scale-105 ${
                  location.pathname === item.path
                    ? "bg-blue-600 shadow-md"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {item.name}
              </Button>
            </Link>
          ))}
          <Button onClick={logout} className="ml-4 px-5 py-2 rounded-lg font-medium text-gray-100 bg-red-700 hover:bg-red-600 transition-colors">
            Log-out
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-100 text-3xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 pb-4 flex flex-col gap-3">
          {navBarItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
              <Button
                className={`w-full text-left px-5 py-2 rounded-lg font-medium text-gray-100 transition-transform transform hover:scale-105 ${
                  location.pathname === item.path
                    ? "bg-blue-600 shadow-md"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {item.name}
              </Button>
            </Link>
          ))}
          <Button
            onClick={()=>{logout()}}
            className="w-full px-5 py-2 rounded-lg font-medium text-gray-100 bg-red-700 hover:bg-red-600 transition-colors"
          >
            Log-out
          </Button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
