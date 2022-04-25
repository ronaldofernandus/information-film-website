const kategoriRoute = require("express").Router();
const { kategoriController } = require("../controllers");

kategoriRoute.get("/", kategoriController.getKategori);
kategoriRoute.post("/add", kategoriController.tambahKategori);
kategoriRoute.get("/add", kategoriController.tambahKategoriPage);
kategoriRoute.post("/edit/:id", kategoriController.editKategori);
kategoriRoute.get("/edit/:id", kategoriController.editKategoriPage)
kategoriRoute.get("/delete/:id", kategoriController.deleteKategori);

module.exports = kategoriRoute;
