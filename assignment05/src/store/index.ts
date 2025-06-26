import { configureStore } from "@reduxjs/toolkit";
import sliceStore from "./sliceStore";

const store = configureStore({
    reducer: {slice: sliceStore.reducer}
});

export default store;