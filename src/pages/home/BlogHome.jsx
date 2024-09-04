import { FaHiking } from "react-icons/fa";
import Hiking from "../../assets/hiking2.jpeg";

import HeroSection from "./HeroSection";
import { Button } from "@nextui-org/button";

const BlogHome = () => {
  return (
    <div className="relative h-screen bg-cover bg-center">
      <div className="w-full  h-16 flex  items-center justify-between  p-6 bg-transparent">
        <div className="flex items-center gap-2">
          <FaHiking className="text-2xl  text-black" />
          <h2 className="text-2xl font-bold  text-black">Traveler</h2>
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
            className="px-4 py-2 bg-black bg-opacity-25 text-white rounded-md placeholder-white"
          />
        </div>
        <div>
          <Button className="bg-transparent text-white">Login</Button>
          <Button className="">Sign Up</Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-60">
        <img className="w-full h-full object-cover" src={Hiking} alt="Hiking" />
      </div>
      <div className="relative  mx-auto flex flex-col justify-end h-full px-6 py-20 text-white">
        <div className="flex justify-between items-center">
          <div className=" max-w-xl">
            <div className="bg-gray-900 bg-opacity-75 py-1 px-3 rounded-full text-sm font-semibold inline-block mb-4">
              Destination
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Exploring the Wonders of Hiking
            </h1>
            <p className="text-lg md:text-xl">
              {`An iconic landmark, this post unveils the secrets that make this destination a traveler's paradise.`}
            </p>
          </div>
          <div className="mt-6 flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={Hiking}
              alt="Author"
            />
            <div>
              <p className="font-bold text-lg">Theodore Reginald</p>
              <p className="text-sm text-white">24 Jan 2024 • 10 mins read</p>
            </div>
          </div>
        </div>
      </div>
      <HeroSection />
    </div>
  );
};

export default BlogHome;
