const express = require("express");
const route = express.Router();
const{indexController}=require("../controllers")

route.get("/", indexController.indexFilm);

const filmRoute = require("./film");
route.use("/film", filmRoute);

const jadwalRoute = require("./jadwal");
route.use("/jadwal", jadwalRoute);

const kategoriRoute = require("./kategori");
route.use("/kategori", kategoriRoute);
const penghubungRoute = require("./penghubung");
route.use("/penghubung", penghubungRoute);

const detailRoute = require("./detail");
route.use("/detail", detailRoute);


module.exports = route;
