import { Button } from "@nextui-org/button";
import { FaHiking } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-16 flex items-center justify-between p-6 bg-transparent z-50 relative">
      <div className="flex items-center gap-2">
        <FaHiking className="text-2xl text-black" />
        <h2 className="text-2xl font-bold text-black">Traveler</h2>
      </div>
      <div className="justify-center">
        <ul className="flex space-x-6 ml-8 text-black">
          <li onClick={() => navigate("/login")}>Hotel</li>
          <li onClick={() => navigate("/login")}>Flight</li>
          <li onClick={() => navigate("/login")}>Train</li>
          <li onClick={() => navigate("/login")}>Travel</li>
          <li onClick={() => navigate("/login")}>Car Rental</li>
        </ul>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search destination..."
          className="px-4 py-2 bg-black bg-opacity-25 text-white rounded-md placeholder-white"
          onClick={() => navigate("/login")}
        />
      </div>
      <div>
        <Button
          onClick={() => navigate("/login")}
          className="bg-transparent text-black text-lg"
        >
          Login
        </Button>
        <Button onClick={() => navigate("/register")} className="text-lg">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
