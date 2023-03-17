const { DataTypes, Model } = require('sequelize');
const db = require('../db');

class Library extends Model {}

Library.init({

    owner: {

        type: DataTypes.STRING
    }
}, {

    sequelize: db,
    modelName: "library"
});

module.exports = Library;