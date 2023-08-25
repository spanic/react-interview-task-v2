import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offers: [],
  totalPrice: 0,
};

export const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    storeOffers: (state, action) => {
      const offers = action.payload;
      state.offers = offers;
    },

    toggleOffersSelection: (state, action) => {
      const { id, selected } = action.payload;
      // state.totalPrice = ?
    },
  },
});

export const { storeOffers, toggleOffersSelection } = offersSlice.actions;

export default offersSlice.reducer;
