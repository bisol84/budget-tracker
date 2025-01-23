const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
