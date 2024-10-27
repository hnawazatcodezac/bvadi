const express = require("express");
const cors = require("cors");
require("dotenv").config();
const serverless = require("serverless-http");

const app = express();
const version = process.env.API_VERSION;

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);
app.use(express.json());

const contactRoutes = require("./src/routes/contact");

app.use(`/api/${version}/ping`, (req, res) => {
  return res.send("Welcome to App!");
});

app.use(`/api/${version}/contact-us`, contactRoutes);

module.exports = app;
module.exports.handler = serverless(app);
