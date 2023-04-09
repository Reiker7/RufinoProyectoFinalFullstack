require("express-async-errors");

const errors = require("../middleware/errors");
const favorites = require("../routes/favorites");

const users = require("../routes/users");
const auths = require("../routes/auths");

const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const express = require("express");

module.exports = function (app) {
  app.use(helmet());
  app.use(compression());

  app.use(express.json());

  app.use(cors());


  app.get('/', (req, res) => {
    res.send('online /api/ ')
  })
  app.get('/api', (req, res) => {
    res.send('online')
  })
  app.use("/api/favorites", favorites);

  app.use("/api/users", users);
  app.use("/api/auths", auths);

  app.get("/ping", (req, res) => {
    res.send("pong");
  });

  app.use(errors);
};
