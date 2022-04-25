const { film, jadwal, kategori } = require("../models");

class filmController {
  static async lihatFilm(req, res) {
    try {
      let tempFilms = await film.findAll({
        order: [["id", "Asc"]],
      });
      res.render("Film/film.ejs", { tempFilms });
    } catch (err) {
      res.json(err);
    }
  }

  static async tambahFilm(req, res) {
    try {
      const { image, namaFilm, sinopsis, kategoriId } = req.body;
      let tambahFilm = await film.create({
        image,
        namaFilm,
        sinopsis,
        kategoriId,
      });
      res.redirect("/film");
    } catch (err) {
      res.json(err);
    }
  }
  static async tambahFilmPage(req, res) {
    try {
      res.render("Film/tambahFilm.ejs");
    } catch (err) {
      res.json(err);
    }
  }
  static async editFilm(req, res) {
    try {
      const id = Number(req.params.id);
      const { image, namaFilm, sinopsis } = req.body;
      let editFilm = await film.update(
        {
          image,
          namaFilm,
          sinopsis,
        },
        {
          where: { id },
        }
      );
      res.redirect("/Film");
    } catch (err) {
      res.json(err);
    }
  }
  static async editFilmPage(req, res) {
    try {
      const id = +req.params.id;
      let tempFilms = await film.findByPk(id);

      res.render("Film/editFilm.ejs", { tempFilms });
    } catch (err) {
      res.json(err);
    }
  }
  static async hapusFilm(req, res) {
    try {
      const id = +req.params.id;
      let hapusFilm = await film.destroy({
        where: { id },
      });
      let hapusPenghubung=await penghubung.destroy({
          where: { 

            filmId:id,
            kategoriId:id,
            jadwalId:id

            },
      })
     res.redirect('/')
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = filmController;

//
