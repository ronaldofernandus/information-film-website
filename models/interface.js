'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class interface extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  interface.init({
    filmId: DataTypes.INTEGER,
    kategoriId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'interface',
  });
  return interface;
};