import { configureStore } from '@reduxjs/toolkit'
import offersListReducer from '../../pages/offers-list/model/offers-list.slice'

const store = configureStore({
  reducer: {
    offers: offersListReducer,
  },
})

export default store
