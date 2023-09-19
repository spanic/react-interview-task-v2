import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOffers = createAsyncThunk("offers/fetchOffers", async (a) => {
  const response = await fetch("http://localhost:3001/offers");

  const data = response.json();

  return data;
});
