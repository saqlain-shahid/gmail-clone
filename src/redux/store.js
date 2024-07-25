import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        appSlice:appReducer
    }
})
export default store