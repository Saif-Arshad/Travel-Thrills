import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from './feature/Blog.slice'
import FormSlice from "./feature/Api.Slice"
export const store = configureStore({
    reducer: {
            blogData:BlogReducer,
            formData:FormSlice,
    }
})