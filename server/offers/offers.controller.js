import offers from "./offers.data.js";

function getOffers(req, res) {
  res.status(200).json(offers);
}

export { getOffers };
