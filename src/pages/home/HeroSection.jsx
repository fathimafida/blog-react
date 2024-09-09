import { useDispatch, useSelector } from "react-redux";
import BlogCard from "./components/BlogCard";
import { useEffect } from "react";
import { getBlogList } from "../../redux/slice/BlogSlice";
import Hiking from "../../assets/hiking2.jpeg";
const HeroSection = () => {
  const blogState = useSelector((state) => state.blog);
  const accessToken = useSelector((state) => state.auth.user?.token);
  const dispatch = useDispatch();
  // const userState = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (accessToken) {
      dispatch(getBlogList(accessToken));
    }
  }, [accessToken, dispatch]); 

  if (blogState.isLoading) {
    return (
      <div className="flex justify-center items-center">
        Loading....
      </div>
    );
  }

  return (
    <div className="h-screen bg-cover bg-center">
      <div className="flex flex-col px-6 ">
     <div className="flex justify-between items-center">
     <h2 className="text-3xl text-gray-800 font-medium mb-2">Blog</h2>
        <div className="mt-6 flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={Hiking}
              alt="Author"
            />
            <div>
              {/* <p className="font-bold text-lg">{userState?.name}</p> */}
              <p className="text-sm text-black">24 Jan 2024 • 10 mins read</p>
            </div>
          </div>
     </div>
        <h2 className="text-xl font-normal text-gray-500 mb-4">
          Here, we share travel tips, destination guides, and stories that inspire your next adventure.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogState.blog.map((blogs) => (
            <BlogCard key={blogs.id} blog={blogs} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
