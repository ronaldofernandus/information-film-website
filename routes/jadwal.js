const jadwalRoute = require("express").Router();
const { jadwalController } = require("../controllers");

jadwalRoute.get("/", jadwalController.lihatJadwal);
jadwalRoute.post("/add", jadwalController.tambahJadwal);
jadwalRoute.get("/add", jadwalController.tambahJadwalPage);
jadwalRoute.post("/edit/:id", jadwalController.updateJadwal);
jadwalRoute.get("/edit/:id", jadwalController.editJadwalPage);
jadwalRoute.get("/delete/:id", jadwalController.deleteJadwal);
module.exports = jadwalRoute;
