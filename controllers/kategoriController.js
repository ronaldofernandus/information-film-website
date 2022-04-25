const { kategori } = require("../models");

class kategoriController {
  static async getKategori(req, res) {
    try {
      let getKategoris = await kategori.findAll({
        order: [["id", "Asc"]],
      });
      res.render("Kategori/kategori.ejs", { getKategoris });
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
      res.redirect("/kategori");
    } catch (err) {
      res.json(err);
    }
  }
  static async tambahKategoriPage(req, res) {
    try {
      res.render("Kategori/tambahKategori.ejs");
    } catch (err) {
      res.json(err);
    }
  }
  static async editKategori(req, res) {
    try {
      const id = Number(req.params.id);
      const { namaKategori } = req.body;
      let editKategori = await kategori.update(
        {
          namaKategori,
        },
        {
          where: { id },
        }
      );
     res.redirect('/kategori')
    } catch (err) {
      res.json(err);
    }
  }
  static async editKategoriPage(req, res) {
    try {
      const id = +req.params.id;
      let getKategoris = await kategori.findByPk(id);
      res.render("Kategori/editKategori.ejs", { getKategoris });
    } catch (err) {
      res.json(err);
    }
  }
  static async deleteKategori(req, res) {
    try {
      const id = +req.params.id;
      let deleteKategori = await kategori.destroy({
        where: { id },
      });
      res.redirect("/kategori");
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = kategoriController;
