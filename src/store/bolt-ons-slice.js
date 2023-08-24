import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boltOns: [],
  totalPrice: 0,
};

export const boltOnsSlice = createSlice({
  name: 'boltOns',
  initialState,
  reducers: {
    storeBoltOns: (state, action) => {
      const boltOns = action.payload;
      state.boltOns = boltOns;
    },

    toggleBoltOnSelection: (state, action) => {
      const { id, selected } = action.payload;
      // state.totalPrice = ?
    },
  },
});

export const { storeBoltOns, toggleBoltOnSelection } = boltOnsSlice.actions;

export default boltOnsSlice.reducer;
