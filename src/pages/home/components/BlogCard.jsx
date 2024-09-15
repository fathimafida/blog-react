import { useSelector } from "react-redux";

const BlogCard = ({ blog }) => {
  const authState = useSelector((state) => state.auth.user);
  return (
    <div className="max-w-md  bg-white rounded-xl shadow-sm overflow-hidden relative">
      <div className="absolute top-3 left-3 bg-black opacity-40 px-3 py-1 rounded-2xl text-white">
        Destination
      </div>
      <img
        className="h-30  w-full object-cover rounded-xl"
        src={blog.image_url}
        alt="image"
      />
      <div className="font-bold text-xl mb-2 p-2 gap-2">
        <div className="flex gap-3 items-center mb-2">
          <h2 className="text-gray-500 text-[16px] font-normal">30 jan 2024</h2>
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
          <h2 className="text-gray-500 text-[16px] font-normal">
            10 mins read
          </h2>
        </div>
        <h2 className="text-gray-800 text-2xl">{blog.title}</h2>
        <h2 className="text-gray-500 text-[18px] font-normal break-words mb-4 line-clamp-2">
          {blog.description}
        </h2>
        <div className="flex gap-2 items-center">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={blog.image_url}
            alt="Author"
          />
          <h2 className="text-gray-800 text-lg">{authState?.user.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
