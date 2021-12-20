const { Sequelize, DataTypes, Model } = require("sequelize");
const options = require("../src/options");


const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: options.dbPath,
});

class Abonent extends Model {}

Abonent.init(
  {
    phone: {
      type: DataTypes.STRING,
    },
    adress: {
      type: DataTypes.STRING,
    },
    owner: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.INTEGER,
    },
    bill: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Abonent",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Abonent;