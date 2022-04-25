const filmRoute = require("express").Router();
const { filmController } = require("../controllers");

filmRoute.get("/", filmController.lihatFilm);
filmRoute.post("/add", filmController.tambahFilm);
filmRoute.get("/add", filmController.tambahFilmPage)
filmRoute.post("/edit/:id", filmController.editFilm);
filmRoute.get("/edit/:id", filmController.editFilmPage);
filmRoute.get("/delete/:id", filmController.hapusFilm);

module.exports = filmRoute;
