import { configureStore } from '@reduxjs/toolkit';
import boltOnsReducer from './bolt-ons-slice.js';

/**
 * DO NOT MODIFY this
 */

export const store = configureStore({
  reducer: {
    boltOns: boltOnsReducer,
  },
});
