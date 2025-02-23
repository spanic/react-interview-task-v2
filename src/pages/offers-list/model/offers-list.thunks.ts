import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '@shared/config/axios-instance.ts'
import Offer from '@entities/offer/model/offer.model.ts'

export const fetchOffers = createAsyncThunk(
  'offersList/fetchOffers',
  async () => {
    return await axiosInstance
      .get<Offer[]>('/shopping/offers')
      .then((res) => res.data)
  },
)
