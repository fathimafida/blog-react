import { Button } from '@nextui-org/button'
import { useDispatch, useSelector } from 'react-redux'
import { editBlog } from '../../redux/slice/BlogSlice';
import { toast } from 'sonner';





const EditBlog = ({blog}) => {
const dispatch = useDispatch();
const accessToken = useSelector((state) => state.auth.user?.token);
  return (
<div>
 
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const title = e.target.title.value
          const description = e.target.description.value
          const author = e.target.author.value
          const image_url = e.target.image.files[0]
           const formData = new FormData();
          formData.append("title", title);
          formData.append("description", description);
          formData.append("author", author);
          formData.append("image", image_url);
          formData.append("id", blog.id);
          formData.append("token", accessToken);
          try {
            dispatch(editBlog({formData}))
          } catch (error) {
            toast(error.message)
          }

        }}
        className="space-y-6 p-6 justify-center items-center"
        method="POST"
        id='edit-blog'
      >
        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter blog title"
              required
              defaultValue={blog?.title}
            />
          </div>

          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter author name"
              required
              defaultValue={blog?.author}
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="mt-1 block w-full p-2  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter blog description"
              required
              defaultValue={blog?.description}
            ></textarea>
          </div>
<div className='flex gap-2'>Nothing</div>
          <div className="flex justify-center">
            <Button type="submit" form='edit-blog' color="primary">
              Update Blog
            </Button>
          </div>
        </div>
      </form>
</div>
  )
}

export default EditBlog