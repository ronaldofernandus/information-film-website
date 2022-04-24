const { film, jadwal } = require("../models");

class jadwalController {
  static async lihatJadwal(req, res) {
    try {
      let tempJadwals = await jadwal.findAll({
        include: [film],
        order: [["id", "Asc"]],
      });
      res.render('jadwal.ejs',{tempJadwals})
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
      res.json(tambahJadwal);
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
      updateJadwal[0] === 1
        ? res.json({
            message: `Jadwal dengan id ${id} sudah di update`,
          })
        : res.json({
            message: `Jadwal dengan id ${id} tidak bisa di update`,
          });
    } catch (err) {
      re.json(err);
    }
  }
  static async deleteJadwal(req, res) {
    try {
      const id = +req.params.id;
      let deleteJadwal = await jadwal.destroy({
        where: { id },
      });
      
      deleteJadwal === 1
        ? res.json({
            message: `Jadwal dengan id ${id} sudah di hapus`,
          })
        : res.json({
            message: `Jadwal dengan id ${id} tidak bisa di hapus`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = jadwalController;
