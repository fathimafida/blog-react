import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blog: [],
  isLoading: false,
  isError: false,
};

export const getBlogList = createAsyncThunk("blog/getBlogList", async (token) => {
  try {
    const response = await axios.get("http://blog_livewire.test/api/blogs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.blogs; // Adjust according to API response
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
  },
});

export default blogSlice.reducer;
