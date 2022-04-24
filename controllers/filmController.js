const { film,jadwal,kategori } = require("../models");

class filmController {
  static async lihatFilm(req, res) {
    try {
      let lihatFilm = await film.findAll({
        include:[jadwal,kategori],
        order: [["id", "Asc"]],
      });
      res.json(lihatFilm);
    } catch (err) {
      res.json(err);
    }
  }
  static async tambahFilm(req, res) {
    try {
      const { image, namaFilm, sinopsis,kategoriId } = req.body;
      let tambahFilm = await film.create({
        image,
        namaFilm,
        sinopsis,
        kategoriId
      });
      res.json(tambahFilm);
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
      editFilm[0] === 1
        ? res.json({
            message: `Film dengan id ${id} sudah di update`,
          })
        : res.json({
            message: `Film dengan id ${id} tidak bisa di update`,
          });
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
      hapusFilm === 1
        ? res.json({
            message: `Film dengan id ${id} sudah di hapus`,
          })
        : res.json({
            message: `Film dengan id ${id} tidak bisa di hapus`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = filmController;

//
