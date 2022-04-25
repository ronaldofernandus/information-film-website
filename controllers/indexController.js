const { film, jadwal, kategori } = require("../models");

class indexController {
  static async indexFilm(req, res) {
    try {
      let tempFilms = await film.findAll({
        include: [jadwal, kategori],
        order: [["id", "Asc"]],
      });
      res.render("index.ejs", { tempFilms });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = indexController;

//
