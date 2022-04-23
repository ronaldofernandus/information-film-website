const kategoriRoute = require("express").Router();
const { kategoriController } = require("../controllers");

kategoriRoute.get("/", kategoriController.getKategori);
kategoriRoute.post('/add',kategoriController.tambahKategori)
kategoriRoute.post('/edit',kategoriController.editKategori)

module.exports = kategoriRoute;
