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
        // console.log(tempPenghubungs[0].film);
        // console.log(tempPenghubungs[0].film.jadwals);
        console.log(tempPenghubungs[0].kategori.namaKategori);

      res.render("index.ejs", { tempPenghubungs });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = indexController;

//
