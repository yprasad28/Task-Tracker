import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";



export const store = configureStore({
    reducer: {
        // Add your task slice here. For example:
        tasks: taskSlice
        // Add other slice reducers here.
    }
})