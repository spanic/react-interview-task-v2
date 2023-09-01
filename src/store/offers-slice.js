import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offers: [],
  selectedMap: {},
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
      state.selectedMap = {
        ...state.selectedMap,
        [id]: selected,
      };
      const offer = state.offers.find((offer) => offer.id === id);
      state.totalPrice = +(
        state.totalPrice +
        offer.price * (selected ? 1 : -1)
      ).toFixed(2);
    },
  },
});

export const { storeOffers, toggleOffersSelection } = offersSlice.actions;

export default offersSlice.reducer;
