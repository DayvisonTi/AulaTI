'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Compra.belongsTo(models.Cliente);
      Compra.belongsToMany(models.Produto,{through:'ItemCompra'});
    }
  };
  Compra.init({
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Compra',
  });
  return Compra;
};