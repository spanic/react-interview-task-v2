import { createSlice } from "@reduxjs/toolkit";
import { fetchOffers } from "../thunks/offers.thunks";

const initialState = {
  offers: [],
  totalPrice: 0,
  loading: false,
  offerMap: {},
};

export const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    changeSelectedQty: (state, action) => {
      const { id, selected, price } = action.payload;
      state.offerMap = {
        ...state.offerMap,
        [id]: { selected, price },
      };

      // const totalPrice = state.offers.reduce((acc, item) => {
      //   const price = item.price;
      //   const selected = state.offerMap[item.id] || 0;
      //   acc = acc + selected * price;
      //   return acc;
      // }, 0);

      const totalPrice = Object.values(state.offerMap).reduce((acc, item) => {
        const { price, selected } = item;
        acc = acc + selected * price;
        return acc;
      }, 0);

      state.totalPrice = Number(totalPrice.toFixed(2));
      return state;
      // TODO: save chosen Offer selected state to the store
    },
  },
  extraReducers: (builder) => {
    // TODO: handle asyncThunk state changes here: display/hide loader, add Offers to the store
    builder.addCase(fetchOffers.pending, (state, action) => {
      state.loading = true;
      return state;
    });
    builder.addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.loading = false;
      return state;
    });
  },
});

export const { changeSelectedQty } = offersSlice.actions;

export default offersSlice.reducer;
