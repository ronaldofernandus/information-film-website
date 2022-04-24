const filmRoute = require("express").Router();
const { filmController } = require("../controllers");

filmRoute.get("/", filmController.lihatFilm);
filmRoute.post("/add", filmController.tambahFilm);
filmRoute.post("/edit/:id", filmController.editFilm);
filmRoute.get("/delete/:id", filmController.hapusFilm);

module.exports = filmRoute;
