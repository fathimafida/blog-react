import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";

const initialState = {
  user: null,
  isError: false,
  isLoading: false,
};

export const loginWithEmailAndPassword = createAsyncThunk(
  "auth/loginWithEmailAndPassword",
  async ({ email, password }) => {
    try {
      const response = await axios.post("http://blog_livewire.test/api/login", {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      toast.error("Error during login: " + error.response?.data?.message || error.message);

    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginWithEmailAndPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginWithEmailAndPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginWithEmailAndPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        toast.error("Login failed: " + action.payload);
      });
  },
});

export default authSlice.reducer;
