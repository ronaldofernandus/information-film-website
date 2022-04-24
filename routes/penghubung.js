const penghubungRoute = require("express").Router();
const { penghubungController } = require("../controllers");

penghubungRoute.get("/", penghubungController.lihatPenghubung);
penghubungRoute.post("/create", penghubungController.createPenghubung);

module.exports = penghubungRoute;
