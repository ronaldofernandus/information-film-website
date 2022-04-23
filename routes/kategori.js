const kategoriRoute = require("express").Router();
const { kategoriController } = require("../controllers");

kategoriRoute.get("/", kategoriController.getKategori);
kategoriRoute.post('/add',kategoriController.tambahKategori)
kategoriRoute.post('/edit/:id',kategoriController.editKategori)
kategoriRoute.get('/delete/:id',kategoriController.deleteKategori)

module.exports = kategoriRoute;
