'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class penghubung extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      penghubung.belongsTo(models.film)
      penghubung.belongsTo(models.kategori)
    }
  }
  penghubung.init({
    filmId: DataTypes.INTEGER,
    kategoriId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'penghubung',
  });
  return penghubung;
};
// 