const { film, jadwal, kategori, penghubung } = require("../models");

class detailController {
  static async detailFilm(req, res) {
    try {
      let filmId = +req.params.id;
      let tempPenghubung = await penghubung.findOne({
        include: [
          {
            model: film,
            include: [jadwal],
          },
          {
            model: kategori,
          },
        ],
        where: {
          filmId,
        },
      });

      res.render("detail.ejs", { tempPenghubung });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = detailController;
