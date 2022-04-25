const { film, jadwal, kategori, penghubung } = require("../models");

class indexController {
  static async indexFilm(req, res) {
    try {
      let tempPenghubungs = await penghubung.findAll({
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
     
      res.render("index.ejs", { tempPenghubungs });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = indexController;

//
