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
    changeSelectedQty: (state, action) => {
      const { id, selected } = action.payload;
      // TODO: save chosen Offer selected state to the store
    },
  },
  extraReducers: (builder) => {
    // TODO: handle asyncThunk state changes here: display/hide loader, add Offers to the store
  },
});

export const { changeSelectedQty } = offersSlice.actions;

export default offersSlice.reducer;
