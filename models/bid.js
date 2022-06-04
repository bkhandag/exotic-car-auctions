const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bid extends Model {}

Bid.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    car_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'car',
        key: 'id',
      },
    },
    bidder_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'bidder',
          key: 'id',
        },
      },
    timestamp: {
      type: DataTypes.TIME, //TODO: Look at model that has timestamp.
    },
  },
  {
    sequelize,
    timestamps: false, //TODO: Change this to true?
    freezeTableName: true,
    underscored: true,
    modelName: 'bidder',
  }
);

module.exports = Bid;