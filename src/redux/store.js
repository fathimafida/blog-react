import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "./slice/BlogSlice";
import AuthSlice from "./slice/AuthSlice";



const store = configureStore({
    reducer: {
        blog: BlogSlice,
        auth:AuthSlice
    },
});
export default store