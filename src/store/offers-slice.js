import { createSlice } from "@reduxjs/toolkit";
import { fetchOffers } from "../thunks/offers.thunks";

const initialState = {
  offers: [],
  totalPrice: 0,
  loading: false,
};

export const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    toggleOffersSelection: (state, action) => {
      const { id, selected } = action.payload;
      // TODO: store Offer's selected state, calculate the total price
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        // TODO: show loader
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        // TODO: hide loader, save offers into the Redux store
      });
  },
});

export const { toggleOffersSelection } = offersSlice.actions;

export default offersSlice.reducer;
