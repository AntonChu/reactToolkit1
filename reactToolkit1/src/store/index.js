import { configureStore } from "@reduxjs/toolkit";

import serviceShowReducer from "../slices/showFacts";

const store = configureStore({
  reducer: {
    serviceShow: serviceShowReducer,
  }
});

export default store;