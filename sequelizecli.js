const vars = require('./env.json')

let config = ''

try {
	config = JSON.parse(process.env.NODE_ENV_RENOV)
} catch {
	config = vars
}
/*
I know it's not an elegent solution, but it's the best way to configure sequelize-cli.
Anyway this file and .sequelizerc should NOT be included in production.
*/

module.exports = {
	development: {
		username: config.username,
		password: config.password,
		database: config.database,
		host: config.host,
		dialect: config.dialect,
	},
	test: {
		username: config.username,
		password: config.password,
		database: config.database,
		host: config.host,
		dialect: config.dialect,
	},
	production: {
		username: config.username,
		password: config.password,
		database: config.database,
		host: config.host,
		dialect: config.dialect,
	},
}
