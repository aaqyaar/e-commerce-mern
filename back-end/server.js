const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { connectMongoDB } = require("./config/Database");
const { readdirSync } = require("fs");
require("dotenv").config();

connectMongoDB();

const server = express();

server.use(express.json({ extended: true }));
server.use(morgan("dev"));
server.use(cors());

readdirSync("./routes").map((file) => {
  const route = require(`./routes/${file}`);
  server.use("/api", route);
});
