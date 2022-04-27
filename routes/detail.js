const express = require("express");
const route = express.Router();
const { detailController } = require("../controllers");

// route.get("/", detailController.detailFilm);
route.get('/:id',detailController.detailFilm);

module.exports = route;
