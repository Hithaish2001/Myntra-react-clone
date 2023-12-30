import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./ItemSlice";

const MyntraStore = configureStore({
    reducer:{
        items: itemSlice.reducer
    }
})

export default MyntraStore;