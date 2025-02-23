import { createSelector } from '@reduxjs/toolkit'

const selectOffersState = (state: RootState) => state.offers

export const selectOffers = createSelector(
  [selectOffersState],
  (offersState) => offersState.offers,
)

export const selectSelectedOffers = createSelector(
  [selectOffersState],
  (offersState) => offersState.selectedOffers,
)

export const selectTotalPrice = createSelector(
  [selectOffers, selectSelectedOffers],
  (offers, selectedOffers) => {
    return Number(
      offers
        ?.reduce((sum, offer) => {
          return sum + offer.price * (selectedOffers?.[offer.id] ?? 0)
        }, 0)
        .toFixed(2),
    )
  },
)
