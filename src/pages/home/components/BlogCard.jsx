import { Button } from "@nextui-org/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { HiDotsVertical,  } from "react-icons/hi";
import { MdDelete, MdEdit } from "react-icons/md";

import { useNavigate } from "react-router-dom";



const BlogCard = ({ blog }) => {

  const navigate = useNavigate();

  return (
    <div onClick={()=>{
    navigate(`/blog/${blog.id}`);
    }} className="max-w-md  bg-white rounded-xl shadow-sm overflow-hidden relative">

      <div className="absolute top-3 left-3 bg-black opacity-40 px-3 py-1 rounded-2xl text-white">
        Destination

    
      </div>
      <img
        className="h-52  w-full object-cover rounded-xl"
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
      <div className="flex gap-3 items-center justify-between">
      <h2 className="text-gray-800 text-2xl">{blog.title}</h2>

     <Dropdown>
      <DropdownTrigger>
        <Button 
        className="bg-transparent"
        >
       <HiDotsVertical size={20} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">

  
        <DropdownItem key="edit"><div className="flex items-center gap-2" onClick={()=>{
          navigate(`/update-blogs/${blog.id}`);
        }}>
        <MdEdit />
          <p> Edit</p>
          </div></DropdownItem>

        <DropdownItem key="delete" className="text-danger" color="danger">
         <div className="flex items-center gap-2">
         <MdDelete />
          <p> Delete </p>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>

      </div>
        <h2 className="text-gray-500 text-[18px] font-normal break-words mb-4 line-clamp-2">
          {blog.description}
        </h2>
        <div className="flex gap-2 items-center">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={blog.image_url}
            alt="Author"
          />
          <h2 className="text-gray-800 text-lg">{blog.author}</h2>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
