const { penghubung, film, kategori, jadwal } = require("../models");

class penghubungController {
  static async lihatPenghubung(req, res) {
    try {
      let lihatPenghubung = await penghubung.findAll({
        include: [
          {
            model: film,
            include: [jadwal],
          },
          {
            model: kategori,
          },
        ],
      });

      res.json(lihatPenghubung);
    } catch (err) {
      res.json(err);
    }
  }
  static async createPenghubung(req, res) {
    try {
      const { filmId, kategoriId } = req.body;
      const { hariTayang, jamTayang } = req.body;

      let createPenghubung = await penghubung.create({
        filmId,
        kategoriId,
      });

      let createJadwal = await jadwal.create({
        hariTayang,
        jamTayang,
        filmId,
      });

      res.redirect("/");
    } catch (err) {
      res.json(err);
    }
  }

  static async createPenghubungPage(req, res) {
    try {
      let jadwalData = await jadwal.findAll({});
      let dataFilm = await film.findAll({});
      let dataKategories = await kategori.findAll({});
      res.render("tambahPenghubung.ejs", { jadwalData,dataFilm,dataKategories });
    } catch (err) {
      res.json(err);
    }
  }

  static async deletePenghubung(req, res) {
    try {
      const id = +req.params.id;
      let deletePenghubung = await penghubung.destory({
        where: {
          filmId: id,
          kategoriId: id,
        },
      });
      res.json(deletePenghubung);

      res.json();
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = penghubungController;
