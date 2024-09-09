import Hiking from "../../assets/hiking2.jpeg";

import Navbar from "../../components/NavBar";

const BlogHome = () => {
  return (
    <div className="relative h-screen bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-60 z-8">
        <img className="w-full h-full object-cover" src={Hiking} alt="Hiking" />
      </div>
      <Navbar />
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
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
