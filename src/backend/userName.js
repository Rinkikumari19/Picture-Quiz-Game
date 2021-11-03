var express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
var app = express();
app.use(express.json());
var data = require("./Database.js");
app.use(cors());
console.log(data,"geving data")
app.use("/user", data);

//for post the data from database
app.post("/data", async (req, res) => {
  const info = {
    username: req.body.username,
    date: req.body.date,
  };
  try {
    const createData = await data.create(info);
    res.send(createData, "create data");
  } catch (err) {
    res.send(err);
  }
});

app.listen(3001);
