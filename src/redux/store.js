import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from './feature/Blog.slice'
export const store = configureStore({
    reducer: {
            blogData:BlogReducer,
    }
})