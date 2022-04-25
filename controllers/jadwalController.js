const { film, jadwal } = require("../models");

class jadwalController {
  static async lihatJadwal(req, res) {
    try {
      let tempJadwals = await jadwal.findAll({
        include: [film],
        order: [["id", "Asc"]],
      });
      res.render("Jadwal/jadwal.ejs", { tempJadwals });
    } catch (err) {
      res.json(err);
    }
  }
  static async tambahJadwal(req, res) {
    try {
      const { hariTayang, jamTayang, filmId } = req.body;
      let tambahJadwal = await jadwal.create({
        hariTayang,
        jamTayang,
        filmId,
      });
      res.redirect("/Jadwal");
    } catch (err) {
      res.json(err);
    }
  }
  static async tambahJadwalPage(req, res) {
    try {
      res.render("Jadwal/tambahJadwal.ejs");
    } catch (err) {
      res.json(err);
    }
  }
  static async updateJadwal(req, res) {
    try {
      const id = Number(req.params.id);
      const { hariTayang, jamTayang, filmId } = req.body;
      let updateJadwal = await jadwal.update(
        {
          hariTayang,
          jamTayang,
          filmId,
        },
        {
          where: { id },
        },
        {
          where: { filmId },
        }
      );
     res.redirect('/Jadwal')
    } catch (err) {
      res.json(err);
    }
  }
  static async editJadwalPage(req, res) {
    try {
      const id = +req.params.id;
      let tempJadwals = await jadwal.findByPk(id);
      res.render("Jadwal/editJadwal.ejs", { tempJadwals });
    } catch (err) {
      res.json(err);
    }
  }
  static async deleteJadwal(req, res) {
    try {
      const id = +req.params.id;
      let deleteJadwal = await jadwal.destroy({
        where: { id },
      });

     res.redirect('/Jadwal')
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = jadwalController;
