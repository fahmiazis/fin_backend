'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class clossing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  clossing.init({
    type: DataTypes.STRING,
    time: DataTypes.DATE,
    day: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'clossing'
  })
  return clossing
}
