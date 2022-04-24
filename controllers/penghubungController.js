const { penghubung,film,kategori } = require("../models");

class penghubungController {
  static async lihatPenghubung(req, res) {
    try {
      let lihatPenghubung = await penghubung.findAll({
        include:[film,kategori]
      });

      res.json(lihatPenghubung);
    } catch (err) {
      res.json(err);
    }
  }
  static async createPenghubung(req, res) {
      try{
          const{filmId,kategoriId}=req.body
          let createPenghubung=await penghubung.create({
              filmId,kategoriId
          })
          res.json(createPenghubung)

      }catch(err){
          res.json(err);
      }
  }
}

module.exports = penghubungController;
