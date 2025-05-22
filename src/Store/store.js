import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from '../Features/navbar/navbarSlice'

export const store = configureStore({
    reducer: {
        navbar: navbarReducer
    }
})