import cors from "cors";
import express from "express";
import { getOffers } from "./offers/offers.controller.js";

const app = express();
const port = 3001;

app.use(cors());

app.get("/offers", getOffers);

app.listen(port, () => {
  console.log(`Express.js server listening on port ${port}`);
});
