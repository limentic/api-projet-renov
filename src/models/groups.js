'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Groups extends Model {
		/* eslint-disable no-unused-vars */
		static associate (models) {
		}
	}
	Groups.init({
		label: DataTypes.STRING,
	}, {
		sequelize,
		modelName: 'Groups'
	})
	return Groups
}
