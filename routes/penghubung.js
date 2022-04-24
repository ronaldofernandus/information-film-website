const penghubungRoute = require("express").Router();
const { penghubungController } = require("../controllers");

penghubungRoute.get("/", penghubungController.lihatPenghubung);

module.exports = penghubungRoute;
