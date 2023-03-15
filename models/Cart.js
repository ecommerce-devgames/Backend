const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Cart extends Model {}

Cart.init({
	
	owner: {

		type: DataTypes.STRING
	}
}, {

	sequelize: db,
	modelName: "cart",
});

module.exports = Cart;