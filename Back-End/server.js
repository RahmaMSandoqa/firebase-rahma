const express = require("express");
const cors = require("cors");
const DB = require("./database");
const app = express();
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());




const PORT = 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
