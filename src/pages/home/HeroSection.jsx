import { useDispatch, useSelector } from "react-redux";
import BlogCard from "./components/BlogCard";
import { useEffect, useState } from "react";
import { addBlogs, getBlogList } from "../../redux/slice/BlogSlice";
import Hiking from "../../assets/hiking2.jpeg";
import { Button } from "@nextui-org/button";


import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/modal";
import { logOut } from "../../redux/slice/AuthSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
const HeroSection = () => {
  const blogState = useSelector((state) => state.blog);
  const accessToken = useSelector((state) => state.auth.user?.token);
  const [isOpen,onOpenChange]=useState(false)
  const [blogData, setBlogData] = useState(false);
  const dispatch = useDispatch();
  // const userState = useSelector((state) => state.auth.user);
const navigate = useNavigate ();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const author = e.target.author.value;
    const image_url = e.target.image_url.value;
   
    try {
     await dispatch(addBlogs({
        title:title,
        description:description,
        author:author,
        image_url:image_url
      })).unwrap();
    toast("Blog added successfully")
    navigate("/hero")
    } catch (error) {
      toast(error.message)
    }


   
  };
  return (
    <div className="h-screen bg-cover bg-center">
      <div className="flex flex-col px-6 ">
     <div className="flex justify-between items-center">
     <h2 className="text-3xl text-gray-800 font-medium mb-2">Blog</h2>
        <div className="mt-6 flex items-center">
          <Button onClick={()=>{
            setBlogData(true)
          }} className="mr-2 bg-blue-400 text-white">
           Add blog
           
          </Button>
            <img
            onClick={
              ()=>{
            onOpenChange(true)
              }
            }
              className="w-12 h-12 rounded-full mr-4"
              src={Hiking}
              alt="Author"
            />
            <div>

              <p className="text-sm text-black"></p>
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
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
  <ModalContent>
    {(onClose) => (
      <>
        <ModalHeader className="flex flex-col gap-1">Confirm Logout</ModalHeader>
        <ModalBody>
          <p>Are you sure you want to log out?</p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Cancel
          </Button>
          <Button
            color="primary"
            onPress={() => {
      dispatch(logOut())
      toast("Logged out successfully", { type: "success" });
      navigate("/")
            }}
          >
            Logout
          </Button>
        </ModalFooter>
      </>
    )}
  </ModalContent>
</Modal>

<Modal isOpen={blogData} onOpenChange={setBlogData}>
  <ModalContent>
    {(onClose) => (
      <>
        <ModalHeader className="flex flex-col gap-1">Add New Blog</ModalHeader>
        <ModalBody>
          <form 
          onClick={
         
          ()=>{
            handleSubmit
          }

          
          }
          
          id="add-blog-form" className="space-y-6" method="POST">
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter blog title"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter author name"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter blog description"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-white hover:file:bg-gray-50"

                  required
                />
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Cancel
          </Button>
          <Button form="add-blog-form" type="submit"  color="primary">
            Add Blog
          </Button>
        </ModalFooter>
      </>
    )}
  </ModalContent>
</Modal>

    </div>
  );
};

export default HeroSection;
