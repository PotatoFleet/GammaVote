const mongoose = require("mongoose");
const express = require("express");
const User = require("./models/User");
const Poll = require("./models/Poll");
const app = express();

mongoose.connect("mongodb://localhost/gammavotedb");

const PORT = 3000;

app.get("/polls", async (req, res) => {
  const polls = await Poll.findMany({});
  res.send({
    polls: polls,
  });
});

app.listen(PORT);
