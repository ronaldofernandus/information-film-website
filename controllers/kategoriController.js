const { kategori } = require("../models");

class kategoriController {
  static async getKategori(req, res) {
    try {
      let getKategori = await kategori.findAll({
        order:[
          ['id','Asc']
        ]
      });
      res.json(getKategori);
    } catch (err) {
      res.json(err);
    }
  }
  static async tambahKategori(req, res) {
    try {
      const { namaKategori } = req.body;
      let tambahKategori = await kategori.create({
        namaKategori,
      });
      res.json(tambahKategori);
    } catch (err) {
      res.json(err);
    }
  }
  static async editKategori(req, res) {
    try {
      const id = Number(req.params.id);
      const { namaKategori } = req.body;
      let editKategori = await kategori.update(
        {
          namaKategori
        },
        {
          where: { id },
        }
      );
      editKategori[0] === 1 ?
      res.json({
        message:`Kategori dengan id ${id} berhasil di update`
      }):
      res.json({
        message:`Kategori dengan id ${id} gagal di update`
      })
     
    } catch (err) {
      res.json(err);
    }
  }
  static async deleteKategori(req, res) {
    try {
      const id = +req.params.id;
      let deleteKategori = await kategori.destroy({
        where: { id },
      });
      deleteKategori ===1 ?
      res.json({
        message:`Kategori dengan id ${id} berhasil di hapus`
      }):
      res.json({
        message:`Kategori dengan id ${id} tidak bisa di hapus`
      })
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = kategoriController;
