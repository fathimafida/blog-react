import { useDispatch, useSelector } from "react-redux";

import BlogCard from "./components/BlogCard";
import { useEffect } from "react";
import { getBlogList } from "../../redux/slice/BlogSlice";
const HeroSection = () => {
  const blogState = useSelector((state) => state.blog);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogList());
  },[])

  if(blogState.isLoading){
    return (
      <div className="flex justify-center items-center">
Loading....
      </div>
    )
  }

  return (
    <div className="h-screen bg-cover bg-center">
      <div className="flex flex-col px-6 ">
        <h2 className="text-3xl  text-gray-800 font-medium mb-2">Blog</h2>
        <h2 className="text-xl font-normal text-gray-500 mb-4">Here,we share travel tips,destination guides,and stories that inspire your next adventure.</h2>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {
            blogState.blog.map((blogs)=>{
              return(
                <BlogCard
                key={blogs.id}
                blog={blogs}
                />
              )
            })
           }
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

