import { Button } from "@nextui-org/button";
import { FaHiking } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full  h-16 flex  items-center justify-between  p-6 bg-transparent">
      <div className="flex items-center gap-2">
        <FaHiking className="text-2xl  text-black" />
        <h2 className="text-2xl font-bold  text-black" >Traveler</h2>
      </div>
      <div className="justify-center">
        <ul className="flex   space-x-6 ml-8 text-black ">
          <li>Hotel</li>
          <li>Flight</li>
          <li>Train</li>
          <li>Travel</li>
          <li>Car Rental</li>
        </ul>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search destination..."
          className="px-4 py-2 bg-black bg-opacity-20 text-white rounded-md placeholder-white"
        />
      </div>
      <div>
        <Button className="bg-transparent text-white">Login</Button>
        <Button className="">Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
