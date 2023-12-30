import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./ItemSlice";
import fetchStatusSlice from "./fetchStatusSlice";

const MyntraStore = configureStore({
    reducer:{
        items: itemSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer
    }
})

export default MyntraStore;