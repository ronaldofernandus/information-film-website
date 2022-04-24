const { penghubung } = require("../models");

class penghubungController {
    static async lihatPenghubung(req, res){
        try{
            let lihatPenghubung = await penghubung.findAll({

            })

            res.json(lihatPenghubung)

        }catch(err){
            res.json(err)
        }
    }
}

module.exports = penghubungController;
