'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     film.hasMany(models.jadwal)
     film.belongsToMany(models.kategori,{through:models.penghubung})
     
    }
  }
  film.init({
    image: DataTypes.STRING,
    namaFilm: DataTypes.STRING,
    sinopsis: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'film',
  });
  return film;
};
// 