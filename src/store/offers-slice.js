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

      const offer = state.offers.find((i) => i.id === id);

      if (selected) {
        state.totalPrice += offer.price;
      } else {
        state.totalPrice -= offer.price;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.offers = action.payload;
        } else {
          console.warn("Something wrong!");
        }

        state.loading = false;
      });
  },
});

export const { toggleOffersSelection } = offersSlice.actions;

export default offersSlice.reducer;
