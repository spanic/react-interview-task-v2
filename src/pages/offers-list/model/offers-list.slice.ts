import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OffersListState } from './offers-list-state.model'
import { fetchOffers } from './offers-list.thunks'
import Offer from '@entities/offer/model/offer.model.ts'

const initialState: OffersListState = {
  offers: [],
}

const offersListSlice = createSlice({
  name: 'offersList',
  initialState,
  reducers: {
    changeOfferQty: (
      state,
      action: PayloadAction<{ id: Offer['id']; newQty: number }>,
    ) => {
      if (!state.selectedOffers) {
        state.selectedOffers = {}
      }
      const { id, newQty } = action.payload
      state.selectedOffers[id] = newQty
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload
    })
  },
})

export const { changeOfferQty } = offersListSlice.actions

export default offersListSlice.reducer
