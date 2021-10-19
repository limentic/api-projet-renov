
'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Users extends Model {
		/* eslint-disable no-unused-vars */
		static associate (models) {
		}
	}
	Users.init({
		first_name: DataTypes.STRING,
		last_name: DataTypes.STRING,
		email: DataTypes.STRING,
		customerId: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Users'
	})
	return Users
}
