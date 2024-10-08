import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blog: [],
  isLoading: false,
  isError: false,
  selectedBlog: null,
};

export const getBlogList = createAsyncThunk("blog/getBlogList", async (token) => {
  try {
    const response = await axios.get("http://blog_livewire.test/api/blogs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.blogs; 
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const addBlogs = createAsyncThunk("blog/addBlogs", async (data) => {

  try {
    const response = await axios.post("http://blog_livewire.test/api/add-blogs", data,{
      headers: {
        Authorization: `Bearer ${data.get("token")}`,
        "Content-Type": "multipart/form-data",
      }
      
    }
   
  );
    return response.data;

  } catch (error) {
    console.log(error);
    throw error;
  }}

);
export const editBlog = createAsyncThunk("blog/editBlog", async (data) => {
  try {
    const response = await axios.put(`http://blog_livewire.test/api/blogs/${data.get("id")}`, data,{
      headers: {
        Authorization: `Bearer ${data.get("token")}`,
        "Content-Type": "multipart/form-data",
      }
      
    }
   
  );
    return response.data;

  } catch (error) {
    console.log(error);
    throw error;
  }
})

export const getBlogDetails = createAsyncThunk("blog/getBlogDetails", async ({id, token}) => {
  try {
    const response = await axios.get(`http://blog_livewire.test/api/blogs/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBlogList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blog = action.payload;
    });
    builder.addCase(getBlogList.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(addBlogs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addBlogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blog = action.payload;
    });
    builder.addCase(addBlogs.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(getBlogDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBlogDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedBlog = action.payload;
    });
    builder.addCase(getBlogDetails.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    }); 
    builder.addCase(editBlog.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editBlog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedBlog = action.payload;
    });
    builder.addCase(editBlog.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default blogSlice.reducer;
