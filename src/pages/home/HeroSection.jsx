import Hiking1 from "../../assets/hiking.jpg";
const HeroSection = () => {
  return (
    <div className="h-screen bg-cover bg-center">
      <div className="flex flex-col px-6 ">
        <h2 className="text-3xl  text-gray-800 font-medium mb-2">Blog</h2>
        <h2 className="text-xl font-normal text-gray-500 mb-4">Here,we share travel tips,destination guides,and stories that inspire your next adventure.</h2>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="max-w-md  bg-white rounded-xl shadow-sm overflow-hidden relative">
            <div className="absolute top-3 left-3 bg-black opacity-40 px-3 py-1 rounded-2xl text-white">
              Destination
            </div>
            <img className="h-30  w-full object-cover rounded-xl" src={Hiking1} alt="{{ $product->name }}"/>
              <div className="font-bold text-xl mb-2 p-2 gap-2">
                  <div className="flex gap-3 items-center mb-2">
                    <h2 className="text-gray-500 text-[16px] font-normal">
                      30 jan 2024
                      </h2>
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                      <h2 className="text-gray-500 text-[16px] font-normal">
                      10 mins read
                      </h2>
                  </div>
                <h2 className="text-gray-800 text-2xl">
                Trail Tales: Adventures in Hiking
                </h2>
                <h2 className="text-gray-500 text-[18px] font-normal break-words mb-4 line-clamp-2">
                   {`Explore the beauty of nature one step at a time with "Trail Tales." Join me on breathtaking hikes, uncover hidden trails, and discover the joys of outdoor adventure.`}
                </h2>
                <div className="flex gap-2 items-center">
                <img
              className="w-12 h-12 rounded-full mr-4"
              src={Hiking1}
              alt="Author"
            />
                <h2 className="text-gray-800 text-lg">
                    Fathima fida k
                </h2>
                </div>
                
                
                
                </div>
              

            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

