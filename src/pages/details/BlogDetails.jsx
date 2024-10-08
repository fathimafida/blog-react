import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBlogDetails } from "../../redux/slice/BlogSlice";

const BlogDetailPage = () => {
const {id  }= useParams();
const dispatch =useDispatch();
const selectedBlog = useSelector((state) => state.blog.selectedBlog);
const accessToken = useSelector((state) => state.auth.user?.token);
    useEffect(() => {
        dispatch(getBlogDetails({
            id,
     token: accessToken
        }));
    }, [dispatch, id]);
  
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-6">
      {/* <img
        className="w-full h-64 object-cover rounded-xl"
        src={blog.image_url}
      
      /> */}
      <div className="mt-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-800">{selectedBlog?.title}</h1>
         
          
        </div>

        <div className="flex gap-2 items-center text-gray-500">

          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
          <span> mins read</span>
        </div>

        <div className="my-4">
          <p className="text-lg text-gray-700">{selectedBlog?.description}</p>
        </div>

        

       
      </div>
    </div>
  );
};

export default BlogDetailPage;
