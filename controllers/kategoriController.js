const { kategori } = require("../models");

class kategoriController {
  static async getKategori(req, res) {
    try {
      let getKategori = await kategori.findAll({
          
      });
      res.json(getKategori);
    } catch (err) {
      res.json(err);
    }
  }
  static async tambahKategori(req, res) {
    try {
      const { namaKategori } = req.body;
      let tambahKategori = await kategori.create({
        namaKategori,
      });
      res.json(tambahKategori);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = kategoriController;
