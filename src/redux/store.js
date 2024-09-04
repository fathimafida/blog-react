import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "./slice/BlogSlice";



const store = configureStore({
    reducer: {
        blog: BlogSlice
    },
});
export default store