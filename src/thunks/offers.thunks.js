import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOffers = createAsyncThunk(
  "offers/fetchOffers",
  async (params, { dispatch }) => {
    // TODO: fetch Offers from API here (install axios manually if needed)
    const response = await fetch("http://localhost:3001/offers");
    const offers = await response.json();
    console.log(offers);
    return offers;
  }
);
