'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jadwal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jadwal.init({
    tanggal: DataTypes.DATE,
    mulai: DataTypes.TIME,
    selesai: DataTypes.TIME,
    pesanId: DataTypes.INTEGER,
    filmId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'jadwal',
  });
  return jadwal;
};