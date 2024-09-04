import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    blog: [],
    isError: false,
    isLoading: false,
};

  
export const getBlogList = createAsyncThunk("blog/getBlogList", async () => {
  const response = await axios.get(" http://blog_livewire.test/api/blogs");
  const data = await response.json();
  return data;
});

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
   
  },

  extraReducers:(builder)=>{
    builder.addCase(getBlogList.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(getBlogList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      }),
      builder.addCase(getBlogList.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
    }
});

export default blogSlice.reducer