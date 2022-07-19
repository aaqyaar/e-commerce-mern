const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { connectMongoDB } = require("./config/Database");
const { readdirSync } = require("fs");
require("dotenv").config();

connectMongoDB();

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

// check is not production
if (process.env.NODE_ENV === "development") {
  server.use(morgan("dev"));
}

readdirSync("./routes").map((file) => {
  const route = require(`./routes/${file}`);
  server.use("/api", route);
});

module.exports = server;
