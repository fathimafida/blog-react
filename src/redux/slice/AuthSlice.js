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
      throw error;
    }
  }
);

export const registerWithEmailAndPassword = createAsyncThunk(
  "auth/registerWithEmailAndPassword",
  async ({ name, email, password  }) => {
    try {
      const response = await axios.post("http://blog_livewire.test/api/register", {
        name,
        email,
        password,
        
      });
      return response.data;
    } catch (error) {
      toast.error("Error during registration: " + error.response?.data?.message || error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },

    loadUser: (state) => {
      const user = localStorage.getItem("user");
      if (user) {
        state.user = JSON.parse(user);
      }
      state.status = "success";
    },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(loginWithEmailAndPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginWithEmailAndPassword.fulfilled, (state, action) => {
        // after a successful login, the isLoading flag is set to false
        // the user details are stored in the state
        // the user details are also stored in the local storage
        // so that the user remains logged in even after a refresh
        state.isLoading = false;
        state.user = action.payload;
    
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(loginWithEmailAndPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        toast.error("Login failed: " + action.payload);
      });

    builder
      .addCase(registerWithEmailAndPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerWithEmailAndPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;

        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(registerWithEmailAndPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        toast.error("Registration failed: " + action.payload);
      });
  },
});

export default authSlice.reducer;

export const { logOut, loadUser } = authSlice.actions;
