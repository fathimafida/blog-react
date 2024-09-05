import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState ={
    user: null,
    isError: false,
    isLoading: false,
}

export const getUser = createAsyncThunk("auth/getUser", async () => {
    const response = await axios.get("http://blog_livewire.test/api/login")
    const data = await response.json();
    return data;
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},

    extraReducers:(builder)=>{
        builder.addCase(getUser.pending, (state) => {
            state.isLoading = true;
          }),
          builder.addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
          }),
          builder.addCase(getUser.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        })  

    }
})
export default authSlice.reducer