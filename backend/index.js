const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;
const appName = process.env.APP;
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

app.listen(port, () => {
  console.log(`${appName} App is Running at port ${port}`);
});
