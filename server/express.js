const express = require("express");
const app = express();
const port = 3001;

app.get("/bolt-ons", (req, res) => {
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Express.js server listening on port ${port}`);
});
