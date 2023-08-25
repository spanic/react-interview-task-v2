import { configureStore } from "@reduxjs/toolkit";
import offersReducer from "./offers-slice.js";

/**
 * DO NOT MODIFY this
 */

export const store = configureStore({
  reducer: {
    offers: offersReducer,
  },
});
